import * as React from "react";
import {NavLink, Outlet} from 'react-router-dom';
import { CastomLink } from "../../Component/Rout/CastomLink";

const setActive = ({isActive})=> isActive ? 'active-link' : ''

export const Layout =() => {

return (
  <div>
    <div>
         <CastomLink to='/home' className={setActive}>HomePage</CastomLink>-
        <NavLink to='/content' className={setActive}>Content</NavLink>-
        <NavLink to='/blog' className={setActive}>BlogPage</NavLink>-
        <NavLink to='/blog/id' className={setActive}>SinglePage</NavLink>-
        <NavLink to='/about' className={setActive}>AboutPage</NavLink>-
    </div>
<Outlet/>
<footer>
  Footer
</footer>
    </div>
)
}