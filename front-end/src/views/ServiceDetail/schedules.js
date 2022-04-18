import { Alert, Table } from "react-bootstrap";

export function Schedules ({ schedules }) {
    console.log(schedules)
    return (
      <>
        <h2>Agendamentos</h2>
        {schedules.length > 0 ? ( 
        <Table striped responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>E-mail</th>
            </tr>
          </thead>
          <tbody>
              {schedules.map(schedules => (
                  <tr key={schedules.id}>
                      <td>{schedules.id}</td>
                      <td>{schedules.name}</td>
                      <td>{schedules.email}</td>
                  </tr>
              ))}
          </tbody>
        </Table>
        ) : (
            <Alert variant="info">Este serviço não possui agendamentos.</Alert>
        )}
      </>
    );

}