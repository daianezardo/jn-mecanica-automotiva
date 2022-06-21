import styled from "styled-components"
import { Container } from "react-bootstrap"
import { AuthForm } from "../../components/authForm"


export function LoginView () {
    return (
        <BackGround className="d-flex">
            <Container className="bg-white rounded p-3 p-md-5">
            <AuthForm/>
            </Container>
        </BackGround>
    )
}

const BackGround = styled.main`
    background: linear-gradient(180deg, #73F9C9 0%, #C5FAE7 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
`