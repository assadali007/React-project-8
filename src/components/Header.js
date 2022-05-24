
import logo from '../troll-face.png'

export default function Header () {

     return (
         <header className="header">

         <img  className="header--image" src={logo}/>
             <h2 className="header--title">Header component</h2>
                 <h4 className="header--project">React course - Project 3</h4>

         </header>
     )
}