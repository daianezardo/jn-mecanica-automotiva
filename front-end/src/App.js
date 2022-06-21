import { Route, Routes } from "react-router-dom";
import { ServicesView } from "./views/services";
import { HomeView } from "./views/home";
import { NotFoundView } from "./views/NotFound"
import { ServiceDetailView } from "./views/ServiceDetail";
import { DashboardView } from "./views/dashboard";
import { LoginView } from "./views/login";
import { PrivateRoute } from "./components/PrivateRoute";
import { AdminServiceView } from "./views/AdminServices";
import { AdminEditService } from "./views/AdminEditService";
import { AdminAddService } from "./views/AdminAddService";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/servicos' element={<ServicesView/>} />
      <Route path='/servicos/:id' element={<ServiceDetailView/>} />
      <Route path="/portal" 
      element=
        {<PrivateRoute>
        <DashboardView />
        </PrivateRoute>} />
        <Route path="/portal/servicos" element=
        {<PrivateRoute userTypes={[1]}>
          <AdminServiceView/>
          </PrivateRoute> }
          />
          <Route path="/portal/servicos/cadastro" element=
        {<PrivateRoute userTypes={[1]}>
          <AdminAddService/>
          </PrivateRoute> }
          />
          <Route path="/portal/servicos/:id" element=
        {<PrivateRoute userTypes={[1]}>
          <AdminEditService/>
          </PrivateRoute> }
          />
      <Route path="/portal/login" element={<LoginView />} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  );
}

export default App;
