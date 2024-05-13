export const AUTH_ACTION_TYPES = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  CHECKING: 'CHECKING',
  SUCCESFUL_REGISTER: 'SUCCESFUL_REGISTER',
};

export const authReducer = (state, action) => {
  const { type, payload } = action;
  console.log(type);

  switch (type) {
    case AUTH_ACTION_TYPES.LOGIN:
      return {
        ...state,
        status: 'authenticated',
        uid: payload.uid,
        email: payload.email,
        displayName: payload.displayName,
        image: payload.photoURL,
      };
    case AUTH_ACTION_TYPES.LOGOUT:
      return {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayname: null,
        image: null,
        errorMessage: payload,
      };
    case AUTH_ACTION_TYPES.CHECKING:
      return {
        ...state,
        status: 'checking',
        loading: true,
      };
    case AUTH_ACTION_TYPES.SUCCESFUL_REGISTER:
      return {
        status: 'not-authenticated',
        ok: payload.ok,
        errorMessage: payload.errorMessage,
      };
    default:
      return state;
  }
};
