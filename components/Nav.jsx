import React, { useState } from "react";
import { useRouter } from 'next/router'
import Link from 'next/link';



function NavItem({href, name, open, setOpen}){
    const router = useRouter()
    const currentRoute = router.pathname
    return (
        <Link  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}  href={href} className={`${currentRoute === href ? 'active' : ''} nav-link`}>
        <li className="nav-item"> {name} </li>

        </Link>

    );
}



export default function Nav(){
    const [navActive, setNavActive] = useState(0);

    return (
        <div className='nav-container'>
        <button aria-expanded="false" aria-label="Toggle navigation" className={`${navActive ? "active" : ""} nav-btn`} onClick={() => setNavActive(!navActive)}>
            <line/>
            <line/>
            <line/>
        </button>
        <nav className={`${navActive ? "active" : ""} nav-navbar`}>
            <ul className="nav-items">
                <NavItem open={navActive} setOpen={setNavActive}  href="/" name="Home"></NavItem>
                <NavItem open={navActive} setOpen={setNavActive} href="/about" name="About"></NavItem>

                
            </ul>
        </nav>
        </div>)
}