import modules from 'modules/models';

/**
 * CONSTANTS
 */

const ADD_MODULE = 'ADD_MODULE';
const REMOVE_MODULE = 'REMOVE_MODULE';
const UPDATE_MODULE_POSITION = 'UPDATE_MODULE_POSITION';

/**
 * ACTIONS
 */

export function addModule (module) {
  return {
    module,
    type: ADD_MODULE,
  };
}

export function removeModule (module) {
  return {
    module,
    type: REMOVE_MODULE
  };
}

export function updateModulePosition (module, position) {
  return {
    module,
    position,
    type: UPDATE_MODULE_POSITION
  };
}

/**
 * REDUCERS
 */

const module = (state, action) => {
  switch(action.type) {
    case UPDATE_MODULE_POSITION:
      if (state.name === action.module.module.name) {
        return state.updatePosition(action.position);
      }
      return state;
    default:
      return state;
  }
}

const initialState = {
  activeMap: {},
  activeModules: [],
  available: modules
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case ADD_MODULE:
      return {
        ...state,
        activeMap: {
          ...state.activeMap,
          [action.module.name]: true
        },
        activeModules: [
          ...state.activeModules,
          action.module
        ]
      };
    case REMOVE_MODULE:
      return {
        ...state,
        activeMap: {
          ...state.activeMap,
          [action.module.name]: false
        },
        activeModules: state.activeModules.filter(m => m.name !== action.module.name)
      };
    case UPDATE_MODULE_POSITION:
      return {
        ...state,
        activeModules: state.activeModules.map(m => module(m, action))
      };
    default:
      return state;
  }
}
