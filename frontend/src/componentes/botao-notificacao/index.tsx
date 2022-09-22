import axios from 'axios'
import { toast } from 'react-toastify'
import { toToastItem } from 'react-toastify/dist/utils'
import icon from '../../assets/img/notificacao-icon.svg'
import { BASE_URL } from '../../utils/request'
import './stylesBotaoNofiticacao.css'

type Props = {
    saleId: number;
}

function handClick(id : number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        toast.info("SMS enviado com sucesso!")
    });
}

function NotificacaoBotao({saleId}: Props) {
    return (
        <div className="tabela-vendas-btn-red" onClick={() => handClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificacaoBotao
