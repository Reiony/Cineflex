import styled from 'styled-components';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
export default function Sessoes() {
  const { idFilme } = useParams();
  const [sessoes, setSessoes] = useState([]);
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((response) => {
      setSessoes(response.data);
    });
    promise.catch((error) => {
      alert(error.response.status);
    });
  }, []);

  if (sessoes.length === 0) {
    return (
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" />
    );
  }
  return (
    <PaginaSessoes>
      <Main>
        <Topo>Selecione o Horário</Topo>
        {sessoes.days.map((item, index) => (
          <div key={`sessao_${item.date}_${index}`}>
            <Sessao>
              {item.weekday} - {item.date}
            </Sessao>
            <CaixaHorarios>
              {item.showtimes.map((obj, i) => (
                <Link key={`horario_${obj.id}`} to={`/assentos/${obj.id}`}>
                  <Horario>
                    <h4>{obj.name}</h4>
                  </Horario>
                </Link>
              ))}
            </CaixaHorarios>
          </div>
        ))}
      </Main>
      <FooterFilme>
        <Borda>
          <img src={sessoes.posterURL} alt={sessoes.posterURL} />
        </Borda>
        <h3>{sessoes.title}</h3>
      </FooterFilme>
    </PaginaSessoes>
  );
}

const PaginaSessoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Topo = styled.div`
  padding-top: 97px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #293845;
  letter-spacing: 0.04em;
  text-align: center;
  margin: 0 auto;
`;
const Main = styled.div`
  display: flex;
  max-height: 760px;
  padding-bottom: 20px;
  flex-wrap: wrap;
  overflow: scroll;
`;

const Sessao = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  padding: 24px;
  color: #293845;
`;

const CaixaHorarios = styled.div`
  display: flex;
  gap: 15px;
  padding-left: 24px;
`;

const Horario = styled.div`
  width: 83px;
  height: 43px;
  background: #e8833a;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  h4 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
`;

const FooterFilme = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 375px;
  height: 117px;
  background: #dfe6ed;
  border: 1px solid #9eadba;
  gap: 20px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  img {
    width: 48px;
    height: 72px;
  }
  h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #293845;
  }
`;

const Borda = styled.div`
  width: 64px;
  height: 89px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
