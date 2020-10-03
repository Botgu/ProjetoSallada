import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import api from '../../api.js';
import '../../styles.css';
import './details.css';
import { DetailButton, RowFoto } from './styles';
import WineBottle from '../../assets/wine-bottle.svg';
import Cone from '../../assets/cone.svg';
import Grape from '../../assets/grape.svg';
import Termometer from '../../assets/thermometer.svg';
import Restaurant from '../../assets/restaurant.svg';
import Menu from "../../components/Menu/Menu.js";
import Footer from "../../components/Footer/Footer.js";

export default function Details() {

    const [detalhe, setDetalhe] = useState();
    const { id } = useParams();

    useEffect(() => {
        async function loadDetail() {
            const response = await api.get(`product/${id}`)
            setDetalhe(response.data.data);
        }

        loadDetail();
    }, [id]);


    const history = useHistory();
    async function handleHome() {
        history.push('/');
    }


    return (
        <div>
            {detalhe &&
                <div>
                    <Menu title="Detalhes Produto"></Menu>
                    <div className="detalhesConteudo">
                        <RowFoto>
                            <img src={detalhe.images.large} alt="Vinho" />
                        </RowFoto>
                        <div className="conteudoSobre">
                            <div className="nomePreco">
                                <strong>{detalhe.name} </strong>
                            </div>
                            <div className="sobre">
                                <span><strong>Sobre o Vinho:<br />
                                </strong>{detalhe.aboutThisWine} </span>
                                <div className="nomePais">
                                    <div>
                                        <h4>Produtor</h4>
                                        <img className="iconDetail" src={detalhe.countries[0].icon} width="20px" alt="Bandeira" />
                                        <span> {detalhe.countries[0]?.name} </span>
                                    </div>
                                    <div>
                                        <h4>Tipo</h4>
                                        <img className="iconDetail" src={WineBottle} width="20px" alt="Garrafa Vinho" />
                                        <span> {detalhe.type} </span>
                                    </div>
                                    <div>
                                        <h4>Teor alcoólico</h4>
                                        <img className="iconDetail" src={Cone} width="20px" alt="Funil" />
                                        <span> {detalhe.bundleProducts[0]?.alcoholContent}</span>
                                    </div>
                                    <div>
                                        <h4>Uvas</h4>
                                        <img className="iconDetail" src={Grape} width="20px" alt="Uva" />
                                        <span> {detalhe.bundleProducts[0]?.grapeList} </span>
                                    </div>
                                    <div>
                                        <h4>Servir</h4>
                                        <img className="iconDetail" src={Termometer} width="20px" alt="Termometro" />
                                        <span> {detalhe.bundleProducts[0]?.servingTemperature} </span>
                                    </div>
                                    <div>
                                        <h4>Combina:</h4>
                                        <img className="iconDetail" src={Restaurant} width="20px" alt="Garfo e faca" />
                                        <span> {detalhe.bundleProducts[0]?.pairing} </span>
                                    </div>
                                </div>
                                <DetailButton onClick={handleHome} > Voltar </DetailButton>
                            </div>
                        </div>
                    </div>
                    <Footer title="Para mais informações entre em contato! tel:9999-9999"></Footer>
                </div>
            }
        </div >
    );
}