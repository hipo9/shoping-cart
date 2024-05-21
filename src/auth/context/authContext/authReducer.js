export const AUTH_ACTION_TYPES = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  CHECKING: 'CHECKING',
  USER_CREATED: 'USER_CREATED',
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
      };
    case AUTH_ACTION_TYPES.LOGOUT:
      return {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        image: null,
        errorMessage: payload,
        ok: false,
      };
    case AUTH_ACTION_TYPES.CHECKING:
      return {
        ...state,
        status: 'checking',
      };
    case AUTH_ACTION_TYPES.USER_CREATED:
      return {
        ...state,
        succesMessage: payload,
      };
    default:
      return state;
  }
};
