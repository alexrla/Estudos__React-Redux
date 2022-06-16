import { NUMERO_MINIMO_ALTERADO, NUMERO_MAXIMO_ALTERADO } from "../actions/actionTypes";

const estadoInicial = {
    minimo: 1,
    maximo: 10
}

export default function reducer(state = estadoInicial, action){
    switch(action.type) {
        case NUMERO_MINIMO_ALTERADO:
            return {
                ...state,
                minimo: action.payload
            };
        case NUMERO_MAXIMO_ALTERADO:
            return {
                ...state,
                maximo: action.payload
            };
        default:
            return state;
    }
}