import {Link} from "react-router-dom"


const Navbar = () => {
    return(
        <nav className="flex justify-center items-center py-[30px] bg-slate-950">
            <ul className="flex justify-center items-center gap-3">
                <Link to={"/"} className="text-white text-[16px] font-[500] cursor-pointer">Add User</Link>
                <Link to={"/admin"} className="text-white text-[16px] font-[500] cursor-pointer">Admin</Link>
            </ul>
        </nav>
    )
}

export default Navbar