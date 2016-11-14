/**
 * CONSTANTS
 */

const ROTATE_ORIENTATION = 'ROTATE_ORIENTATION';

/**
 * ACTIONS
 */

export function rotateOrientation () {
  return {
    type: ROTATE_ORIENTATION
  };
}

/**
 * REDUCERS
 */

const initialState = {
  portrait: true
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ROTATE_ORIENTATION:
      return {
        portrait: !state.portrait
      };
    default:
      return state;
  }
}
