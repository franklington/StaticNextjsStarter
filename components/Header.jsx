import Link from 'next/link'
import Anime from './Anime'
import Nav from './Nav';


export default function Header() {
return (

        <div className='navigation'>
                <Link className='nav-brand' href="/">
                   
                      <Anime src="./images/logo.svg" alt="Sharing Club" height={30}></Anime>
                
                </Link>
            
                <Nav></Nav>
             
        </div>
    
    )
}