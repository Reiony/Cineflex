import styled from "styled-components";
import { Link } from "react-router-dom";
export default function QuartaPagina({ name, setName, cpf, setCPF, assentosescolhidos, setAssentosescolhidos, sumariosessao, setSumariosessao}) {
    function resetTudo(){
        setName("")
        setCPF("")
        setAssentosescolhidos([])
        setSumariosessao([])
    }
    return (
        <Finalizacao>
            <Sucesso>
                <h3>Pedido feito com sucesso!</h3>
            </Sucesso>
            <CaixaInfo>
                <Caixa>
                    <h2>
                        Filme e Sessão
                    </h2>
                    <h4> {sumariosessao.movie.title}</h4>
                    <h4>{sumariosessao.day.date} - {sumariosessao.name}</h4>
                </Caixa>
                <Caixa>
                    <h2>
                        Ingressos
                    </h2>
                    {assentosescolhidos.map((a) => <h4>Assento {a}</h4>)}
                </Caixa>
                <Caixa>
                    <h2>
                        Comprador
                    </h2>
                    <h4>Nome: {name}</h4>
                    <h4>CPF: {cpf} </h4>
                </Caixa>
            </CaixaInfo>
            <Link to={'/'}>
            <BotaoHome onClick={resetTudo}>
                <p>Voltar para Home</p>
            </BotaoHome>
            </Link>
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
`

const BotaoHome = styled.div`
margin-top:30px;
    width: 225px;
    height: 42px;
    left: 74px;
    top: 622px;
    background: #E8833A;
    border-radius: 3px;
    display:flex;
    justify-content: center;
    align-items: center;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;

        color: #FFFFFF;
    }
`

const Caixa = styled.div`
width:100%;
padding: 10px 0;`
/* 
const DadosSessão = styled.div`
`

const Ingressos = styled.div`
`
 */