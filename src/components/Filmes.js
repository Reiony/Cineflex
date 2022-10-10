import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function PrimeiraPagina() {
    const [filmes, setFilmes] = useState(null)
    useEffect(() => {
        const promessa = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")
        promessa.then(response => {
            setFilmes(response.data)
            console.log(response.data)
        })
        promessa.catch(error => {
            alert(error.response.data)
            console.log(error.response.data)
        })
    }, [])

    if (filmes === null) {
        return <PaginaFilmes><img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" /></PaginaFilmes>
    }

    return (
        <PaginaFilmes>
            <h3>Selecione o filme</h3>
            <ListaFilmes>
                {filmes.map((item) =>
                    <Link to={`/sessoes/${item.id}`}>
                        <Filme>
                            <Cartaz>
                                <img src={item.posterURL} alt={item.posterURL} />
                            </Cartaz>
                        </Filme>
                    </Link>
                )}
            </ListaFilmes>
        </PaginaFilmes>
    )
}


const PaginaFilmes = styled.div`
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
`
const ListaFilmes = styled.div`
    width:100%;
    margin-top:40px;
    gap:20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Filme = styled.div`
    margin: 0 auto;
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Cartaz = styled.div`
    img {
    width: 129px;
    height: 193px;
}
`