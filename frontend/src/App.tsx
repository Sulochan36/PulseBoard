import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import useSyncUser from "./hooks/useSyncUser"


const App = () => {
  useSyncUser()

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App