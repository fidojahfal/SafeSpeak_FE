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
        <Routes>
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/profile/:id/edit" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
