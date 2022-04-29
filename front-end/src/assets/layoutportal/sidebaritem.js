import { Nav } from "react-bootstrap";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export function SideBarItem ({ item }) {
    const resolved = useResolvedPath(item.to)
    const match = useMatch({ path: resolved.pathname })
    return (
      <Nav.Item>
        <Nav.Link active={match} as={Link} to={item.to} className="text-white">{item.text}</Nav.Link>
      </Nav.Item>
    );
}