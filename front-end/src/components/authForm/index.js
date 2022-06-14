import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { RegisterForm } from "./registerForm";

export function AuthForm ({ redirectAfterLogin = true }) {
    return (
        <Row>
            <Col xs={12} lg='auto' className="flex-fill"><LoginForm/></Col>
            <Or xs={12} lg='auto' className="flex-fill">ou</Or>
            <Col xs={12} lg='auto' className="flex-fill"><RegisterForm redirectAfterLogin={redirectAfterLogin}/></Col>
        </Row>
    )
}

const Or = styled(Col)`
    text-align: center;
    padding: 16px 0;
    @media (min-width: 992px) {
        padding-left: 42px;
        padding-right: 42px;
        align-self: center;
    }
`