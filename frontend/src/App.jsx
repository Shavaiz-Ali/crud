
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import GetFormData from "./components/GetFormData"
import UserDetail from "./components/Userdetail"
import {Routes, Route} from "react-router-dom"
function App() {

  return (
    <>
       <Navbar />
       <Routes>
        <Route path="/" element={<Form />}/>
        <Route path="/admin" element={<GetFormData />}/>
        <Route path="/userdetail/:id" element={<UserDetail />}/>
       </Routes>
    </>
  )
}

export default App
