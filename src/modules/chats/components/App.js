import React from "react"

import { AuthProvider } from "../contexts/AuthContext"

import Chats from "./Chats"

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
        <AuthProvider>
          <Chats/>
        </AuthProvider>
    </div>
  )
}

export default App
