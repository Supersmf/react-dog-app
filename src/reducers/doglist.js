const initialState = [];

export default function dogList(state = initialState, action) {
	if (action.type === 'FETCH_BREED_LIST') {
		const data = action.payload;
		let dogs = Object.keys(data);

		dogs = dogs.map((dog, i) => ({
			id: i + dog,
			breed: dog,
			subBreed: data[dog]
		}));
		return dogs;
	} 
	return state;
}