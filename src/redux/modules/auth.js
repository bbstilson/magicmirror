import { auth, unauth, saveUser } from 'constants/firebase';

/**
 * CONSTANTS
 */

const AUTH_USER = 'AUTH_USER';
const UNAUTH_USER = 'UNAUTH_USER';
const AUTHENTICATING = 'AUTHENTICATING';
const AUTH_FAILED = 'AUTH_FAILED';
const AUTH_SUCCESS = 'AUTH_SUCCESS';


/**
 * ACTIONS
 */

export function login () {
  return dispatch => {
    dispatch(authenticating());
    return auth()
      .then(({ user }) => {
        // const userData = user.providerData[0];
        // const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid);
        console.log('user = ', user);
        return dispatch(authSuccess(user.uid, user, Date.now()))
      })
      // .then(({ user }) => {
      //   saveUser(user);
      // })
      // .then(({ uid }) => {
      //   dispatch(authSuccess(uid))
      // })
      .catch(err => {
        console.error(err)
        // dispatch(authFailed(err));
      });
  }
}

function authenticating () {
  return {
    type: AUTHENTICATING
  };
}

function authSuccess (uid, user, timestamp) {
  return {
    uid,
    type: AUTH_SUCCESS,
  };
}

function authFailed (error) {
  return {
    error,
    type: AUTH_FAILED
  };
}

export function logout () {
  return dispatch => {
    dispatch(unauthUser())
    unauth()
  }  
}

function unauthUser () {
  return {
    type: UNAUTH_USER
  };
}

// function unauthUserSuccess () {
//   return {
//     type: UNAUTH_USER
//   };
// }

// function unauthUserFailed () {
//   return {
//     type: UNAUTH_USER
//   };
// }

/**
 * REDUCERS
 */

const initialState = {
  isFetching: true,
  error: '',
  isAuthed: false,
  authedId: ''
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthed: true,
        authedId: action.uid
      };
    case UNAUTH_USER:
      return {
        ...state,
        isAuthed: false,
        authedId: ''
      };
    case AUTHENTICATING:
      return {
        ...state,
        isFetching: true
      };
    case AUTH_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case AUTH_SUCCESS:
      return {

      };
    default:
      return state;
  }
}
