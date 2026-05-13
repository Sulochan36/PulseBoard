import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider, useAuth } from '@clerk/react'

function DebugClerk() {
  const { isSignedIn, userId, sessionId } = useAuth();

  useEffect(() => {
    console.log("SIGNED IN:", isSignedIn);
    console.log("USER ID:", userId);
    console.log("SESSION ID:", sessionId);
  }, [isSignedIn, userId, sessionId]);

  return null;
}

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} >
      <DebugClerk />
      <App /> 
  </ClerkProvider>
  </StrictMode>,
)
