import { type } from "os";
import { URI } from "../enum/uri";
import Cadastrador from "./cadastrador";

export default class CadastradorEstacao implements Cadastrador{
    cadastrar(objeto: Object): void{
        fetch(URI.INSERT_ESTACOES, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objeto)
        })
    }
}