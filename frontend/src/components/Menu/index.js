import React from 'react'
import principal from '../_imagens/principal.png'
import add from '../_imagens/add.png'
import search from '../_imagens/search.png'
import medical from '../_imagens/medical.png'
import efetivo from '../_imagens/efetivo.png'
import viatura from '../_imagens/viatura.png'
const Navigation =()=>(
  
<div className="container">
            <div className="text-center">
                <br/>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" href="index.html">
                            <button type="button" className="btn btn-outline-dark">Principal
                                <br/>
                                <img src={principal}/>
                            </button>
                        </a>
                        </li>
                    <li className="nav-item btn-group" data-toggle="buttons">
                        <a className="nav-link" href="#">
                            <button type="button" className="btn btn-outline-primary" data-toggle="modal"
                                data-target=".talao-modal">Talão
                                <br/>
                                <img src={add}/>
                            </button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="relatorio.html">
                            <button type="button" className="btn btn-outline-secondary">Relatório
                                <br/>
                                <img src={search}/>
                            </button>
                        </a>
                        
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="crm.html">
                            <button type="button" className="btn btn-outline-success">CRM
                                <br/>
                                <img src={medical} alt=""/>
                            </button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="efetivo.html">
                            <button type="button" className="btn btn-outline-danger">Efetivo
                                <br/>
                                <img src={efetivo} alt=""/>
                            </button>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="viatura.html">
                            <button type="button" className="btn btn-outline-info">Viaturas
                                <br/>
                                <img src={viatura} alt=""/>
                            </button>
                        </a>
                    </li>
                    
                </ul>

            </div>
        </div>

        
)

export default Navigation;
