import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes.jsx";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
