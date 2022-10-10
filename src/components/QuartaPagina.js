import styled from "styled-components";
export default function QuartaPagina() {
    return (
        <Finalizacao>
            <Sucesso>
                Pedido feito com sucesso!
            </Sucesso>
            {/* <DadosSessão>
                <h2>
                    Filme e Sessão
                </h2>
                <h4>
                </h4>
            </DadosSessão>
            <Ingressos>
                <h2>
                    Ingressos
                </h2>
                {info.ids.map((a)=><h4>Assento {a}</h4>)}
            </Ingressos>
            <Comprador>
                <h2>
                    Comprador
                Nome:
                CPF: 
                </h2>

            </Comprador>
            <BotaoHome>
            </BotaoHome> */}
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
/* 
const DadosSessão = styled.div`
`

const Ingressos = styled.div`
`
 */