import { combineReducers } from 'redux';

import doglist from './doglist';
import dogSubList from './dogSubList';
import dogImage from './dogImage';
import currentDogImage from './currentDogImage';

export default combineReducers({
	doglist,
	dogSubList,
	dogImage,
	currentDogImage
})