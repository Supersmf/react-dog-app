const initialState = [];

export default function currentDogImage(state = initialState, action) {
	if (action.type === 'FETCH_DOGS_CURRENT_IMAGE') {
		return action.payload;
	} 
	return state;
}