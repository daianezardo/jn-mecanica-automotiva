import { Route, Routes } from "react-router-dom";
import { ServicesView } from "./views/services";
import { HomeView } from "./views/home";
import { NotFoundView } from "./views/NotFound"
import { ServiceDetailView } from "./views/ServiceDetail";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/servicos' element={<ServicesView/>} />
      <Route path='/servicos/:id' element={<ServiceDetailView/>} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  );
}

export default App;
