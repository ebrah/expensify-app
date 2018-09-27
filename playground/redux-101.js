import {createStore } from 'redux';
const store = createStore((state = {count: 0}, action) => {
   switch(action.type){
       case 'INCREMENT' :
         return {
             count: state.count + 1
         }

        case 'DENCREMENT' :
          return{
            count: state.count -1
        } 

        default:
          return state;
   }
});

//dispatch state.. into store..
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'DENCREMENT'
})

