import { 
    createAsyncAction,
    createAction
} 
from "../functions";

import { 
    randomQouetsUrl 
} 
from "../urls";

const setQoutes = createAction({
    name: "SET_QOUTES",
    payload: [
        "qoutes"
    ]
});

const selectRandomQoute = createAction({
    name: "SELECT_RANDOM_QOUTE",
    payload: [
        "qoutesAmount",
        "qoutes"
    ]
});

const initQoutes = createAsyncAction({
    qoutes: setQoutes,
    selectRandom: selectRandomQoute
},
({dispatch, actions, prevState}) => {
    fetch(randomQouetsUrl)
        .then(response => 
            response.json()
        )
        .then(data =>  (
            data.quotes
        ))
        .then(transFormedData => {
            dispatch(
                actions.qoutes({
                    qoutes: transFormedData
                })
            );
            
            dispatch(
                actions.selectRandom({
                    qoutesAmount: prevState().setQoutes.qoutesAmount,
                    qoutes: prevState().setQoutes.qoutes
                })
            );
        })
});



export {setQoutes, initQoutes, selectRandomQoute};