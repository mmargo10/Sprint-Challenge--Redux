import 
 { FETCHING_SMURFS,
  SUCCESS,
  ERROR,
} 
   from '../actions';


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 };

 export default (state = initialState, action ) => {
   switch (action.type) {
   case FETCHING_SMURFS:
   return Object.assign({}, state, { fetchingSmurfs: true });
   case SUCCESS:
   return Object.assign({}, state, {
     smurfs: action.payload,
     fetchingSmurfs: false,
     addingSmurf: false,
     updatingSmurf: false,
     deletingSmurf: false,
     error: null
    });
   case ERROR:
   return Object.assign({}, state, {error: action.payload });
   default:
   return state;
   }

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
    };
   
