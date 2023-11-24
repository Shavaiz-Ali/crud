
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import UserDetail from "./components/Userdetail"
import {Routes, Route} from "react-router-dom"
import Contact from "./components/Contact"
function App() {

  return (
    <>
       <Navbar />
       <Routes>
        <Route path="/" element={<Form />}/>
        <Route path="/userdetail/:id" element={<UserDetail />}/>
        <Route path="/contact" element={<Contact />}/>
       </Routes>
    </>
  )
}

export default App
