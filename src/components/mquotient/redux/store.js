import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer/indexReducer'



const store = createStore(rootReducer, composeWithDevTools())

export default store;