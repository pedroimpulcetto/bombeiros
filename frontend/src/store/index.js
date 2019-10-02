import { createStore } from 'redux';

const INITIAL_STATE = {
	filter: []
};

// reducer
function filter(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'ADD_FILTER':
			return { filter: [ action.filter ] };
		default:
			return state;
	}
}

const store = createStore(filter);

export default store;
