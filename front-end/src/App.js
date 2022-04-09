import { Route, Routes } from "react-router-dom";
import { ServicesView } from "./views/services";
import { HomeView } from "./views/home";
import { NotFoundView } from "./views/NotFound"

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeView />} />
      <Route path='/servicos' element={<ServicesView/>} />
      <Route path='*' element={<NotFoundView />} />
    </Routes>
  );
}

export default App;
