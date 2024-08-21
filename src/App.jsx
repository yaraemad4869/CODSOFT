import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import router from './routes';
import { RouterProvider } from "react-router-dom";
import { useSelector } from 'react-redux';
function App() {
  const [todos, setTodos] = useState({})
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(data => setTodos(data.response))

  }, [])
  const mode = useSelector(state => state.settings.mode)
  document.querySelector("html").style.cssText = (mode ? `
    background-color: rgb(80,40,40);
  color: rgb(252, 244, 219);
    `: `
    background-color: rgb(255, 221, 198);
    color: rgb(0, 0, 0);
    `)

  const links = document.querySelectorAll("a")
  links.forEach(item => {
    item.style.cssText = (mode ? `
    color: rgb(252, 244, 219);
    `: `
    color: rgb(0, 0, 0);
    `)
  }
  )


  return (
    <>
      {/* <Nav /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
