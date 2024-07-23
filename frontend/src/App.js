import React from "react";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuthStore from "./store/authStore";
import ChannelPage from "./pages/ChannelPage";
import CreateWorkationPage from "./pages/CreateWorkation";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/common/Navbar";

function App() {
  const { user } = useAuthStore();
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar className="m-1">헤더위치</Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/createworkation" element={<CreateWorkationPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/channel" element={<ChannelPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
