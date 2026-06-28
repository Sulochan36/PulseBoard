import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import useSyncUser from "./hooks/useSyncUser"
import { useAuth } from "@clerk/react"
import { useEffect } from "react"
import { setupAxiosInterceptors } from "./api/axios"
import { Toaster } from "react-hot-toast"


const App = () => {
  useSyncUser()
  const { getToken, isLoaded } = useAuth()

  useEffect(() => {
    if (isLoaded) {
      setupAxiosInterceptors(getToken);
    }
  }, [isLoaded, getToken]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </>
  )
}

export default App