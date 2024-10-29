import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import UserTable from "./components/UserTable";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <UserTable />
      </div>
      <Footer />
    </div>
  );
}

export default App;
