import Filmes from "./components/Filmes"
import Sessoes from "./components/Sessoes"
import TerceiraPagina from "./components/TerceiraPagina"
import QuartaPagina from "./components/QuartaPagina"
import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GlobalStyle } from "./components/GlobalStyles";
export default function App() {
    const [cpf, setCPF] = useState("")
    const [name, setName] = useState("")
    const [assentosescolhidos, setAssentosescolhidos] = useState([])
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header>
                <title>CINEFLEX</title>
            </Header>
            <Routes>
                <Route path="/" element={<Filmes />} />
                <Route path="/sessoes/:idFilme" element={<Sessoes />} />
                <Route path="/assentos/:idSessao" element={<TerceiraPagina
                    cpf={cpf}
                    setCPF={setCPF}
                    name={name}
                    setName={setName}
                    assentosescolhidos={assentosescolhidos}
                    setAssentosescolhidos={setAssentosescolhidos}
                />} />
                <Route path="/sucesso" element={<QuartaPagina/>} />
            </Routes>
        </BrowserRouter>
    )
}

const Header = styled.div`
    position:fixed;
    top:0;
    left:0;
    width: 375px;
    height: 67px;
    background: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    title {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #E8833A;
    }
`