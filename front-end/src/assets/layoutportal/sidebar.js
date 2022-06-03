import { CloseButton, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../../store/User/User.selectors";
import { SideBarItem } from "./sidebaritem";

const menuItens = [
    {
        to: '/portal',
        text: 'Dashboard',
        userTypes: [1, 2]
    },
    {
        to: '/portal/servicos',
        text: 'Serviços',
        userTypes: [1]
    }
]

export function Sidebar ( {isOpen, onClose}) {
  const { type } = useSelector(selectUser)
  const filteredMenuItems = menuItens.filter(item => item.userTypes.includes(type))
    return (
      <SidebarStyled
        className="bg-dark text-white d-flex flex-column p-3"
        isOpen={isOpen}
      >
        <CloseButton
          variant="white"
          onClick={onClose}
          className="ms-auto d-lg-none"
        />
        <p className="h1">JN Mecânica Automotiva</p>
        <hr />
        <Nav variant="pills" className="flex-column">
          {filteredMenuItems.map((item, index) => (
           <SideBarItem key={index} item={item}/>
          ))}
        </Nav>
      </SidebarStyled>
    )
}

const SidebarStyled = styled.header`
width: 280px;
@media (max-width: 991px) { 
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100vh;
    margin-left: -100%;
    transition: all .2s linear;
    ${(props) => props.isOpen && `
        margin-left: 0;
`}
}
`