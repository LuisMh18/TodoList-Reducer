

export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if(todo.id === action.payload){
                    return { //si es el mismo todo le cambiamos el done
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo; //si no es regresamos el mismo todo
            });
    
        default:
            return initialState;
    }

}