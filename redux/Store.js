export const initialState= {
    counter : 0
};

export const Reducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
             state.counter += 1 
             return {...state}

        case "DECREASE":
             state.counter -= 1 
             return {...state}
        case "RESET":
             state.counter = 0 
             return {...state}
            
        default:
            return {...state}
           
    }
 }
 

