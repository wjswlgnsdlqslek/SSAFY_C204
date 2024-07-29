import React from "react";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuthStore from "./store/authStore";
import ChannelPageLayout from "./pages/ChannelPageLayout";
import GroupChannelPage from "./pages/GroupChannelPage";
import FeedChannelPage from "./pages/FeedChannelPage";
import CreateWorkationPage from "./pages/CreateWorkation";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

function App() {
  const { user } = useAuthStore();
  console.log(user);
  return (
    <BrowserRouter>
      <div className="App flex flex-col min-h-screen">
        <Navbar className="m-1" />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/createworkation" element={<CreateWorkationPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/channel" element={<ChannelPageLayout />}>
              <Route path="group/:groupId" element={<GroupChannelPage />} />
              <Route path="feed/" element={<FeedChannelPage />} />
              <Route path="feed/:userId" element={<FeedChannelPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
