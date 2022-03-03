import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./config/router";
import NotFount from "./pages/NotFount";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}

        <Route path="*" element={<NotFount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
