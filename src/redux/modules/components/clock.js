import Clock from 'constants/components/Clock';

const TOGGLE_CLOCK_TYPE = 'TOGGLE_CLOCK_TYPE';
const SET_DISPLAY = 'SET_DISPLAY';

export function toggleClockType (displayType) {
  return {
    type: TOGGLE_CLOCK_TYPE
  };
}

export function setDisplay (display) {
  return {
    display,
    type: SET_DISPLAY
  };
}

const initialState = {
  isDigital: true,
  display: Clock.Display.HMM
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case TOGGLE_CLOCK_TYPE:
      return {
        ...state,
        isDigital: !state.isDigital
      };
    case SET_DISPLAY:
      return {
        ...state,
        display: action.display
      };
    default:
      return state;
  }
}
