import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <div>
         <NavLink to ="/"> Home</NavLink>
         <NavLink to ="riky">Riky</NavLink>
        |<NavLink to ="goku">Goku</NavLink>

    </div>
  );
}