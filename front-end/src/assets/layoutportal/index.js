import { useState } from "react";
import { Container } from "react-bootstrap";
import { Sidebar } from "./sidebar";
import { TopBar } from "./topbar";

export function LayoutPortal ({ children }) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    return (
        <div className="d-flex flex-grow-1">
            <Sidebar isOpen={isSideBarOpen} onClose={() => 
            setIsSideBarOpen(false)} />
            <main className="flex-grow-1">
                <TopBar onOpen={() => setIsSideBarOpen(true)} />
                <Container fluid>
                {children}
                </Container>
            </main>
        </div>
    )
}