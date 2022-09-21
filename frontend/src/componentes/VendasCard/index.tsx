import NotificacaoBotao from '../botao-notificacao'
import './StyleVendasCard.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../../utils/request';
import { Sale } from '../../models/sale';

function VendasCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {

        const dmin = minDate.toISOString().slice(0,10);
        const dmax = maxDate.toISOString().slice(0,10);
        

        axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => {
                setSales(response.data.content);
            });
    }, [minDate,maxDate]);

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
                            {sales.map(sale => {
                                return (
                                <tr key={sale.id}>
                                    <td className="mostrar992">{sale.id}</td>
                                    <td className="mostrar576">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="mostrar992">{sale.visited}</td>
                                    <td className="mostrar992">{sale.deals}</td>
                                    <td>R$ {sale.amount.toFixed(2)}</td>
                                    <td>
                                        <div className="tabela-vendas-btn-red-container">
                                            <NotificacaoBotao saleId={sale.id}/>
                                        </div>
                                    </td>
                                </tr>)
                            })}

                        </tbody>

                    </table>
                </div>

            </div>
        </>
    )
}

export default VendasCard