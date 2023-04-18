import { useRouter } from 'next/router'
import React, { useState } from "react";
import Link from 'next/link';




export default function NavItem({href, name, open, setOpen}){
    const router = useRouter()
    const currentRoute = router.pathname
    return (
        <Link  onClick={() => setTimeout(() => {setOpen(!open)}, 100)}  href={href} className={`${currentRoute === href ? 'active' : ''} nav-link`}>
        <li className="nav-item"> {name} </li>

        </Link>

    );
}