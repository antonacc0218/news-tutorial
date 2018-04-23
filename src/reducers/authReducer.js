import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../types/auth';

const userReducer = (state = {}, { type, data }) => {
  // Не уверен, что это должно быть здесь.
  state = JSON.parse(localStorage.getItem('auth')) || state;

  switch (type) {
    case USER_LOGGED_IN:
      return data;
    case USER_LOGGED_OUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;