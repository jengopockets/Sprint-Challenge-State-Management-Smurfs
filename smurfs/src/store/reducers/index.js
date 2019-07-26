import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE,ADD_SMURF,DELETE_SMURF} from '../actions';

export const initialState = {
    smurfs:[],
    fetching: false,
    addingSmurf: false,
    deletingSmurf:false,
    error:null
}

export const reducer =(state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return{...state, fetching:true};
        case ADD_SMURF:
            return{...state, fetching:true};
        case DELETE_SMURF:
            return{smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload)};
        case FETCH_SUCCESS:
            return{...state, smurfs:action.payload, fetching:false};
        case FETCH_FAILURE:
            return{...state, error:action.payload, fetching:false};

    }
}