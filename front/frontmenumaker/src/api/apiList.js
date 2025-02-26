const baseApi = "http://localhost:5000/api/";

const USER_API = {
    REGISTER_API: `${baseApi}auth/register`,
    LOGIN_API: `${baseApi}auth/login`,
};

const MENU_API = {
    MAIN_MENU_API: `${baseApi}menu/getMainMenu`,
    BASIC_MENU_API: `${baseApi}menu/getBasicMenu`,
};

export { MENU_API, USER_API };
