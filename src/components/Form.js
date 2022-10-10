import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Form({ assentosescolhidos, name, setName, cpf, setCPF}) {
    const navegar = useNavigate();
    function ValidacaoFinal(event) {
        event.preventDefault();
        const URL= "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
        /* if (cpf.length !== 11) {
            alert('CPF Inválido - Precisa ter 11 Dígitos')
            return
        } */
        const request = axios.post(URL, { ids: assentosescolhidos, name: name, cpf: cpf });
        request.then((response) => {
            console.log(response.data)
            navegar("/sucesso")
        })
        request.catch(error => {
            alert(error.response.data)
            console.log(error.response.data)
            navegar("/sucesso")
        })
    }
    return (
        <FormComprador onSubmit={ValidacaoFinal}>
            <label>Nome do Comprador:</label>
            <input
                required
                placeholder="Digite seu nome..."
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <label>CPF do Comprador:</label>
            <input
                required
                placeholder="Digite seu CPF..."
                name="cpf"
                onChange={(e) => setCPF(e.target.value)}
                value={cpf}
            />
            <button type="submit"><h5>Reservar Assentos</h5></button>
        </FormComprador>
    )
}

const FormComprador = styled.form`
    display:flex;
    flex-direction:column;
    padding:20px;
    gap:10px;
    margin-top:20px;
    label{
        width: 327px;
        height: 25px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #293845;
    }
    input{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        ::placeholder{
            color: #AFAFAF;
            font-style: italic;
        }
    }
`