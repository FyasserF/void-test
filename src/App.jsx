import { Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Hero from "./components/Hero/Hero"
import Main from "./components/Main/Main"

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Main />
      {/* <Routes>

      </Routes> */}
    </>
  )
}
