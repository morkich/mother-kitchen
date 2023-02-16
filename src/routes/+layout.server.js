export const load = async (params) => {
    const headerData = {
        logoData: getLogoData(),
        mainMenuOptions: getMenuData(),
        userData: getUserData()
    }
    return { headerData }
}

const getMenuData = () => {
    return [
        {
            url: '/',
            title: 'Главная'
        },
        {
            url: '/recipes',
            title: 'Рецепты'
        },
        {
            url: '/authors',
            title: 'Авторы'
        },
        {
            url: '/contacts',
            title: 'Контакты'
        }
    ]
}

const getLogoData = () => {
    return {
        logoTitle: 'Мамины рецепты'
    }
}

const getUserData = () => {
    return {
        userAvatar: '/images/users/coverAvatar.svg',
        userName: 'Войти'
    }
}