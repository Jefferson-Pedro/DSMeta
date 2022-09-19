import NotificacaoBotao from '../botao-notificacao'
import './StyleVendasCard.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';

function VendasCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    return (
        <>
            <div className="div-card">
                <h2 className="titulo-vendas">Vendas</h2>
                <div>
                    <div className="container-input-form-vendas">
                        <DatePicker
                            selected={minDate}
                            onChange={(date: Date) => setMinDate(date)}
                            className="input-form-vendas"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                    <div className="container-input-form-vendas">
                        <DatePicker
                            selected={maxDate}
                            onChange={(date: Date) => setMaxDate(date)}
                            className="input-form-vendas"
                            dateFormat="dd/MM/yyyy"
                        />
                    </div>
                </div>

                <div>
                    <table className="tabela-vendas">
                        <thead>
                            <tr>
                                <th className="mostrar992">ID</th>
                                <th className="mostrar576">Data</th>
                                <th>Vendedor</th>
                                <th className="mostrar992">Visitas</th>
                                <th className="mostrar992">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="mostrar992">#374</td>
                                <td className="mostrar576">14/08/2022</td>
                                <td>Anna Thays</td>
                                <td className="mostrar992">15</td>
                                <td className="mostrar992">21</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="tabela-vendas-btn-red-container">
                                        <NotificacaoBotao />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="mostrar992">#366</td>
                                <td className="mostrar576">22/08/2022</td>
                                <td>Renan Barbosa</td>
                                <td className="mostrar992">12</td>
                                <td className="mostrar992">08</td>
                                <td>R$ 47978.00</td>
                                <td>
                                    <div className="tabela-vendas-btn-red-container">
                                        <NotificacaoBotao />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="mostrar992">#341</td>
                                <td className="mostrar576">08/08/2022</td>
                                <td>Psita da Silva</td>
                                <td className="mostrar992">21</td>
                                <td className="mostrar992">30</td>
                                <td>R$ 60000.00</td>
                                <td>
                                    <div className="tabela-vendas-btn-red-container">
                                        <NotificacaoBotao />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="mostrar992">#341</td>
                                <td className="mostrar576">08/08/2022</td>
                                <td>Fátima Cristina Lima</td>
                                <td className="mostrar992">06</td>
                                <td className="mostrar992">18</td>
                                <td>R$ 57428.13</td>
                                <td>
                                    <div className="tabela-vendas-btn-red-container">
                                        <NotificacaoBotao />
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        </>
    )
}

export default VendasCard