import styled from "styled-components"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const PageContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';

    font-size: 24px;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`
const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    width: 330px;
    padding: 10px;
`
const MovieContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`
export default function HomePage() {

    const [movies, SetMovies] = useState([])

    useEffect(() => {
        const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        const promise = axios.get(url)
        promise.then((ans) => {
            console.log(ans.data)
            SetMovies(ans.data)
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }, [])

    if (movies.length === 0) {
        return (
            <PageContainer>
                Selecione o filme

                <ListContainer>
                    <h1>Carregando...</h1>
                </ListContainer>
            </PageContainer>
        )
    }


    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>

                {movies.map((mov) => (
                    <MovieContainer key={mov.title} data-test="movie">
                        <Link to={`/sessoes/${mov.id}`}> 
                        <img src={mov.posterURL} alt={mov.title} />
                        </Link>
                    </MovieContainer>
                ))}

            </ListContainer>

        </PageContainer>
    )
}