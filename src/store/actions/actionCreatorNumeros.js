import { NUMERO_MINIMO_ALTERADO, NUMERO_MAXIMO_ALTERADO } from "./actionTypes"

// Action creator
export function alterarNumeroMinimo(novoNumero)  {
    return {
        type: NUMERO_MINIMO_ALTERADO,
        payload: novoNumero
    }
}

// Action creator
export function alterarNumeroMaximo(novoNumero)  {
    return {
        type: NUMERO_MAXIMO_ALTERADO,
        payload: novoNumero
    }
}