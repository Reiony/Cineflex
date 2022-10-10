import styled from "styled-components";
export default function QuartaPagina({ name, cpf, assentosescolhidos, sumariosessao }) {
    return (
        <Finalizacao>
            <Sucesso>
                <h3>Pedido feito com sucesso!</h3>
            </Sucesso>
            <CaixaInfo>
                <h2>
                    Filme e Sessão
                </h2>
                <h4> {sumariosessao.movie.title}</h4>
                <h4>{sumariosessao.day.date} - {sumariosessao.name}</h4>
                <h4>
                </h4>
                <h2>
                    Ingressos
                </h2>
                {assentosescolhidos.map((a) => <h4>Assento {a}</h4>)}

                <h2>
                    Comprador
                    Nome: {name}
                    CPF: {cpf}
                </h2>
            </CaixaInfo>
            <BotaoHome>
            </BotaoHome>
        </Finalizacao>
    )
}
const Finalizacao = styled.div`
    margin-top: 117px;
    margin-bottom: 40px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;

        color: #293845;
    }
    h4{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
`
const Sucesso = styled.div`
    width: 374px;
    height: 110px;
    h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;

        color: #247A6B;

    }

`

const CaixaInfo = styled.div`
    width:100%;
    gap:20px;
`

const BotaoHome = styled.div`
width:100%;
`
/* 
const DadosSessão = styled.div`
`

const Ingressos = styled.div`
`
 */