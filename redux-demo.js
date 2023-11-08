
//First We have to import redux;
const redux=require('redux');
//this is the syntax for importing redux 
// this redux is the object now we have to create central store 

const counterReducer=(state={counter:0},action)=>{
    if(action.type === 'inc'){
        return {
            counter:state.counter + 1
        }
    }
    if(action.type === 'dec'){
        return {
            counter:state.counter-1
        }
    }
    if(action.type ==='INCREMENTBY2 '){
        return {
            counter:state.counter+2
        }
    }
    if(action.type === 'DECREMENTBY2 '){
        return {
            counter:state.counter-2
        }
    }
    return state
   
}
const store=redux.createStore(counterReducer);

console.log(store.getState())

const CounterSubscriber=()=>{
    const latestState=store.getState();
    console.log(latestState)
}

store.subscribe(CounterSubscriber)

// store.dispatch({type:'inc'})
// store.dispatch({type:'inc'})
// store.dispatch({type:'inc'})
// store.dispatch({type:'inc'})
// node 
// store.dispatch({type:'inc'})
// store.dispatch({type:'dec'})
store.dispatch({type:'DECREMENTBY2'})
store.dispatch({
    type:'INCREMENTBY2 '
})
store.dispatch({
    type:'INCREMENTBY2 '
})


