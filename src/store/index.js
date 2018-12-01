import {createStore} from 'redux';
const store=createStore(function reducer(state,action){
    return state;
},{
    city:'北京'
});


export default store;