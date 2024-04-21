import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from "@clerk/clerk-react"; // Clerk for auth
import { BrowserRouter as Router } from "react-router-dom"; // React Router for routing

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
  >
              <App />
  </ClerkProvider>
</Router>
)
