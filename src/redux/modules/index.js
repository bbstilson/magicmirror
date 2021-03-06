import modules from './modules';
import layout from './layout';
import auth from './auth';
import clock from './components/clock';

import { combineReducers } from 'redux';

export default combineReducers({ modules, layout, auth, clock });
