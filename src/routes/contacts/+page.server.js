export const load = async (params) => {
	const pageData = {
		meta: {
			title: 'Контакты',
			description:
				'На странице контактов сайта рецептов Вы можете найти наши контактные данные, адрес, телефоны и адрес электронной почты. Отправьте нам сообщение и мы быстро ответим на Ваши вопросы.'
		},
		mainMenuOptions: 2,
		userData: 3
	};
	return { pageData };
};
