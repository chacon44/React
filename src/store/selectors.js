export const getCourses = (state) => state.courses;
export const getUserName = (state) => state.user.user.name;
export const getUserRole = (state) => state.user.role;
export const getUserIsAuth = (state) => state.user.isAuth;
export const getAuthors = (state) => state.authors;
export const getAuthorsName = (author) => author.name;
export const getToken = (state) => state.user.user.token;
