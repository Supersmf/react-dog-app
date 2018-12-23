const initialState = [];

export default function dogImage(state = initialState, action) {
	if (action.type === 'FETCH_DOGS_IMAGE') {
		return action.payload;
	} 
	return state;
}