import { Routes, Route, Navigate } from "react-router-dom"
import NewNote from "./components/NewNote"

function App() {
  return (
    <main className="p-8">
      <Routes>
        <Route path="/" element={<h1>Hi</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>show</h1>} />
          <Route path="edit" element={<h1>edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  )
}

export default App
