import AuthButtons from "./components/AuthButtons";
import useSyncUser from "./hooks/useSyncUser";

function App() {
  useSyncUser();
  
  return (
    <div style={{ padding: "40px" }}>

      <h1>

        MERN + Clerk + TypeScript

      </h1>

      <AuthButtons />

    </div>

  )
}

export default App