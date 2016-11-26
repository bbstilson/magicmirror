/**
 * CONSTANTS
 */

const ROTATE_ORIENTATION = 'ROTATE_ORIENTATION';
const TOGGLE_MODULE_BORDERS = 'TOGGLE_MODULE_BORDERS';

/**
 * ACTIONS
 */

export function rotateOrientation () {
  return {
    type: ROTATE_ORIENTATION
  };
}

export function toggleModuleBorders () {
  return {
    type: TOGGLE_MODULE_BORDERS
  };
}

/**
 * REDUCERS
 */

const initialState = {
  portrait: false,
  displayModuleBorders: true
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ROTATE_ORIENTATION:
      return {
        ...state,
        portrait: !state.portrait
      };
    case TOGGLE_MODULE_BORDERS:
      return {
        ...state,
        displayModuleBorders: !state.displayModuleBorders
      }
    default:
      return state;
  }
}
