import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function AppLayout() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "20px",
          background: "#f5f5f5",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
