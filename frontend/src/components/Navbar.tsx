import { Link } from "react-router-dom";
import { CgYinyang } from "react-icons/cg";
import { useEffect, useState } from "react";
function Navbar(){
    const [ theme, setTheme ] = useState("dark");
    useEffect(()=>{
    },[]);
    function toggleTheme(){
        setTheme(theme=="dark" ? "light":"dark");
    }
    return(
        <>
            <div className="bg-grey flex flex-row justify-between items-center">
                <h1 className="px-10 font-bold text-lg">
                    <Link to='/'>FOOD APP 😋</Link>
                </h1>
                <div className="flex flex-row justify-center items-center gap-3.5">
                    <Link to='/create' className="btn hover:bg-green-700">+</Link>
                    <button className="btn hover:bg-blue-500" onClick={toggleTheme}><CgYinyang /></button>
                </div>
            </div>
        </>
    )
}

export default Navbar;