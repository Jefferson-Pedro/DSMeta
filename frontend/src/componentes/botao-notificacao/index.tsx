import icon from '../../assets/img/notificacao-icon.svg'
import './stylesBotaoNofiticacao.css'

function NotificacaoBotao() {
    return (
        <div className="tabela-vendas-btn-red">
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificacaoBotao
