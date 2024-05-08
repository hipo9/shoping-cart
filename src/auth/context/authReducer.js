export const AUTH_ACTION_TYPES = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  CHECKING: 'CHECKING',
};

export const authReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTION_TYPES.LOGIN:
      return {
        ...state,
        status: 'authenticated',
        uid: payload.uid,
        email: payload.email,
        displayName: payload.displayName,
        image: payload.photoURL,
        loading: false,
      };
    case AUTH_ACTION_TYPES.LOGOUT:
      return {
        ...state,
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayname: null,
        image: null,
        loading: true,
        // errorMessage: payload.errorMessage,
      };
    case AUTH_ACTION_TYPES.CHECKING:
      return {
        status: 'checking',
        loading: true,
      };
    default:
      return state;
  }
};
