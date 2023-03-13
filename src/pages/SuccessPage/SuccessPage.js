import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"

export default function SuccessPage() {
    const location = useLocation()
    const state = location.state

    return (

        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer data-test="seats-info">
                <strong><p>Ingressos</p></strong>
                {state.seats.map((s)=><p>Assento {s}</p>
                )}
            </TextContainer>

            <TextContainer data-test="client-info">
                <strong><p>Comprador</p></strong>
                <p>Nome: {state.name}</p>
                <p>CPF: {state.cpf}</p>
            </TextContainer>

            <TextContainer data-test="movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{state.movie.title}</p>
                <p>{state.data.day.date} - {state.data.name}</p>
            </TextContainer>

            <Link to="/" data-test="go-home-btn"> <button>Voltar para Home</button></Link>
        </PageContainer>
    )
}

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    margin-top: 30px;

    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';

    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
    h1 {
        display: flex;
        align-items: center;
        text-align: center;
        font-family: 'Roboto';
        font-style: normal;
        color: #247A6B;

        font-weight: 700;
        font-size: 24px;
        line-height: 28px;

    }
`
