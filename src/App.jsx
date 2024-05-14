import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <ProfilePage />
      </main>
    </div>
  );
}

export default App;
