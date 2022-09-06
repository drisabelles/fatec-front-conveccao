import { Component, useEffect, useState } from 'react';
import CadastradorEstacao from '../../cadastradores/cadastradorEstacao';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../components/Button/button';

import './style.scss';

export function CadastroEstacao(){

    const navigate = useNavigate()

    const [nomeEstacao, setNomeEstacao] = useState(String)
    const [tipo, setTipo] = useState(String)
    const [referencia, setReferencia] = useState(String)
    const [cidade, setCidade] = useState(String)
    const [observacao, setObservacao] = useState(String)

    let estacao = {
        nomeEstacao: nomeEstacao,
        tipo: tipo,
        referencia: referencia,
        cidade: cidade,
        observacao: observacao,
    }

    return (
        <div id="new-station-content">
            <main>
                <div id="main-station-content">
                    <form>
                        <div className="form-group-textarea">
                            <span>Nome da Estação:</span>
                            <input onChange={(e) => setNomeEstacao(e.target.value)} id="nome" type="text" placeholder="Insira o nome da estação" required/>
                            <div className="form-collection">
                                <span>Tipo:</span>
                                <select onChange={(e) => setTipo(e.target.value)} id="tipo" required>
                                    <option>Selecione o tipo da estação</option>
                                    <option>Automática</option>
                                    <option>Convencional</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-input">
                            <div className="form-collection"> 
                                <span>Referência:</span>
                                <input onChange={(e) => setReferencia(e.target.value)} id="referencia" type='text' placeholder="Insira o local de referência" className="mr" required/>
                            </div>

                            <div className="form-collection">
                                <span>Cidade:</span>
                                <input onChange={(e) => setCidade(e.target.value)} id="cidade" type="text" placeholder="Insira a cidade da estação"  className="mr" required/>
                            </div>

                            <div className="form-collection">
                                <span>Observações:</span>
                                <input onChange={(e) => setObservacao(e.target.value)} id="observacao" type="text" placeholder="Se houver, insira observações" required/>
                            </div>
                        </div>
                        <div id="select-options">
                          <Button type='submit' name='action'>Criar chamado</Button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
    
}