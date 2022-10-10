import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import LegendaAssentos from "./LegendaAssentos"
import Form from "./Form"
export default function TerceiraPagina({cpf, setCPF, name, setName, assentosescolhidos, setAssentosescolhidos, sumariosessao, setSumariosessao}) {
    const { idSessao } = useParams()
    function VerificaAssento(posicao,disponivel) {
        if (disponivel){
            const novoArray = [...assentosescolhidos, posicao]
        if (!assentosescolhidos.includes(posicao)) {
            setAssentosescolhidos(novoArray)
        }else{
            const  ArrayFiltrado = novoArray.filter((e)=>posicao!==e)
            setAssentosescolhidos(ArrayFiltrado)
        }
        console.log(assentosescolhidos)
        } else {
            alert("Este assento está indisponível")
        }
     }

    useEffect(() => {
        const prometido = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
        prometido.then(response => {
            setSumariosessao(response.data)
            console.log(response.data)
        })
        prometido.catch(e => {
            alert(e.response.data)
            console.log(e.response.data)
        })
    }, [])

    if (sumariosessao.length === 0) {
        return <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" />
    }

    return (
        <PaginaAssentos>
            <h3>Selecione o(s) assento(s)</h3>
            <CaixaAssentos>
                {sumariosessao.seats.map((item, index) =>
                    <BolaAssento isAvailable={item.isAvailable} assentosescolhidos={assentosescolhidos} name={item.name} onClick={() => VerificaAssento(item.name,item.isAvailable)} >
                        <h4>{item.name}</h4>
                    </BolaAssento>
                )}
            </CaixaAssentos>
            <LegendaAssentos />
            <Form assentosescolhidos={assentosescolhidos} name={name} setName={setName} cpf={cpf} setCPF={setCPF}></Form>
            <FooterFilme>
                <Borda>
                    <img src={sumariosessao.movie.posterURL} alt={sumariosessao.movie.posterURL} />
                </Borda>
                <ResumoFilmeSelecionado>
                    <h3>{sumariosessao.movie.title}</h3>
                    <h3>{sumariosessao.day.weekday} - {sumariosessao.name}</h3>
                </ResumoFilmeSelecionado>
            </FooterFilme>
        </PaginaAssentos>
    )
}


const PaginaAssentos = styled.div`
    margin-top: 117px;
    margin-bottom: 40px;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    h3{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        letter-spacing: 0.04em;
        text-align: center;
    }
    button{
        margin-top:30px;
        width: 225px;
        height: 42px;
        border:none;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #E8833A;
        border-radius: 3px;
    }
    h5{
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
const CaixaAssentos = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;
    margin:25px;
    gap:6px;
`

const BolaAssento = styled.div`
    width: 26px;
    height: 26px;
    background: ${props => props.isAvailable ? props.assentosescolhidos.includes(props.name)? "#1AAE9E" :"#C3CFD9" : "#FBE192"};
    border: 1px solid ${props => props.isAvailable ? props.assentosescolhidos.includes(props.name)?"#0E7D71" :"#808F9D" : "#F7C52B"};
    border-radius: 12px;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor:${props => props.isAvailable ? "pointer" : "default"};
    h4{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;


    }
`
const FooterFilme = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 375px;
    height: 117px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    gap:20px;
    display:flex;
    align-items: center;
    padding-left:10px;
    img{
        width:48px;
        height:72px;
    }
    h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #293845;
    }
`
const Borda = styled.div`
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ResumoFilmeSelecionado = styled.div`
    display:flex;
    flex-direction:column;
`