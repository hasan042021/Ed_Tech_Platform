import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AdminOutlet from "./components/AdminOutlet";
import StudentsOutlet from "./components/StudentsOutlet";
import Login from "./pages/Authentication/Login";
import Registration from "./pages/Authentication/Registration";
import { adminPrivateRoutes, studentPrivateRoutes } from "./routes/routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/*" element={<StudentsOutlet />}>
            {studentPrivateRoutes.map((stRoute) => (
              <Route path={stRoute.path} element={<stRoute.component />} />
            ))}
          </Route>
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/*" element={<AdminOutlet />}>
            {adminPrivateRoutes.map((adminRoute) =>
              adminRoute.provider ? (
                <Route
                  path={adminRoute.path}
                  element={
                    <adminRoute.provider>
                      <adminRoute.component />
                    </adminRoute.provider>
                  }
                />
              ) : (
                <Route
                  path={adminRoute.path}
                  element={<adminRoute.component />}
                />
              )
            )}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
