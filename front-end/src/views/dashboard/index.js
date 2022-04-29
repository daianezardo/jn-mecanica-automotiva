import { Alert } from "react-bootstrap";
import { LayoutPortal } from "../../assets/layoutportal";

export function DashboardView() {
    return (
        <LayoutPortal>
        <h1 className="mt-4">Bem vindo(a) Daiane!</h1>
        <p>Utilize o menu para gerenciar os dados do site.</p>
        <Alert variant="info">Você receberá as informações do serviço por e-mail.</Alert>
        </LayoutPortal>
    )
}