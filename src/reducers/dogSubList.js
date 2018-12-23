const initialState = [];

export default function dogSubList(state = initialState, action) {
	if (action.type === 'FETCH_SUB_BREED_LIST') {
		return action.payload;
	} 
	return state;
}