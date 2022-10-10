import styled from "styled-components";
export default function LegendaAssentos() {
    return (
        <Legenda>
            <CaixaItem>
                <ItemLegenda cor="#1AAE9E" borda="#0E7D71">
                </ItemLegenda>
                <h4>Selecionado</h4>
            </CaixaItem>
            <CaixaItem>
                <ItemLegenda cor="#C3CFD9" borda="#7B8B99">
                </ItemLegenda>
                <h4>Disponível</h4>
            </CaixaItem>
            <CaixaItem>
                <ItemLegenda cor="#FBE192" borda="#F7C52B">
                </ItemLegenda>
                <h4>Indisponível</h4>
            </CaixaItem>
        </Legenda>
    )
}

const Legenda = styled.div`
    display:flex;
    width:80%;
    justify-content: space-around;
    gap:10px;
`
const CaixaItem = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    h4{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        display: flex;
        align-items: center;
        letter-spacing: -0.013em;
    }
`
const ItemLegenda = styled.div`
    width: 25px;
    height: 25px;
    background: ${props => props.cor};
    border: 1px solid ${props => props.borda};
    border-radius: 17px;
`