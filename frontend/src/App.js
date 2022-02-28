import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./config/router";

import "./App.sass";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.layout />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
