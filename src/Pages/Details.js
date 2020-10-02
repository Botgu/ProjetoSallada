import React, { useEffect, useState } from "react";
import api from '../api.js';
import '../styles.css'
import './details.css'
import WineBottle from '../assets/wine-bottle.svg'

export default function Details() {
    const url = window.location.href;
    const arrayOfStrings = url.split('?');
    const [detalhe = null, setDetalhe] = useState(null);

    useEffect(() => {
        if (detalhe == null) {
            async function loadDetail() {
                await api.get(`product/${arrayOfStrings[1]}`).then(res => {
                    setDetalhe(res.data.data);
                })
            }
            loadDetail();
        }
    })

    return (
        <div>
            {detalhe &&
                <div>
                    <div className="menu">
                        <h1>Detalhes Produto</h1>
                    </div>
                    <div className="detalhesConteudo">
                        <div className="rowFoto">
                            <img src={detalhe.images.large} width="280px" alt="Vinho" />
                        </div>
                        <div className="conteudoSobre">
                            <div className="nomePreco">
                                <strong>{detalhe.name} </strong>
                            </div>
                            <div className="sobre">
                                <span><strong>Sobre o Vinho:<br />
                                </strong>{detalhe.aboutThisWine} </span>
                                <div className="nomePais">
                                    <h3>Produtor</h3>
                                    <span> {detalhe.countries[0].name}: </span>
                                    <img className="iconBandeira" src={detalhe.countries[0].icon} width="35px" />
                                    <h3>Tipo</h3>
                                    <span> {detalhe.type} </span>
                                    <img className="iconBandeira" src={WineBottle} width="35px" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <h1>Para mais informações entre em contato!</h1>
                    </div>
                </div>
            }
        </div >
    );
}