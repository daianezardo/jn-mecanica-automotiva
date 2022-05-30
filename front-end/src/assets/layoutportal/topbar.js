import {Container, Dropdown, Nav, Navbar} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { logout } from "../../service/users.service";

export function TopBar( { onOpen } ) {
    const user = useSelector((state) => {
        return state
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        const action = {
            type: 'USER_LOGOUT'
        }
        dispatch(action)
        navigate('/')
    }
    return (
        <Navbar bg='light' expand='lg'>
            <Container fluid>
            <Navbar.Toggle onClick={onOpen} />
            <Nav className="ms-auto">
                <Dropdown align='end'>
                    <Dropdown.Toggle variant="light">{user.name}</Dropdown.Toggle>
                    <MenuStyled>
                        <Dropdown.Item onClick={handleLogout}>Sair</Dropdown.Item>
                    </MenuStyled>
                </Dropdown>
            </Nav>
            </Container>
        </Navbar>
    )
}

const MenuStyled = styled(Dropdown.Menu)`
    position: absolute !important;
`