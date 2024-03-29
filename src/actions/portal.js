import { tick } from 'svelte';

const portal_map = new Map();
const createPortal = (type) => (node, id) => {
	const key = `$$portal.${id}`;
	if (portal_map.has(key)) {
		throw `duplicate portal key "${id}"`;
	} else {
		portal_map.set(key, node);
	}
	return {
		destroy: portal_map.delete.bind(portal_map, key)
	};
};

const mount = (node, key) => {
	if (!portal_map.has(key)) throw `unknown portal ${key}`;
	const host = portal_map.get(key);
	host.insertBefore(node, null);
	return () => host.contains(node) && host.removeChild(node);
};
const portal = (type) => (node, id) => {
	let destroy;
	const key = `$$portal.${id}`;
	if (!portal_map.has(key))
		tick().then(() => {
			destroy = mount(node, key);
		});
	else destroy = mount(node, key);
	return { destroy: () => destroy?.() };
};

export const createPortalAction = createPortal('create');
export const portalAction = portal('create');
