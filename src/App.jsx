import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/sigin/register.component";
import HomePage from "./pages/homePage/homePage";
import { AuthProvider } from "./context/auth.context";
import LoginPage from "./pages/sigin/login.component";
import SectionOrganization from "./pages/sections/section.organization";
import SectionUser from "./pages/sections/sectionUser";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/sectionOrganization"
            element={<SectionOrganization />}
          />
          <Route path="/userPage" element={<SectionUser />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
