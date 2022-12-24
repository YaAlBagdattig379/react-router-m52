// import React from 'react';
// import  {Link, useMatch, useResolvedPath} from 'react-router-dom'

// function NavLink({children , to , ...props}){
//         let resolved = useResolvedPath(to);
//         let match = useMatch({path : resolved.pathname, end:true});
//     return (
//         <div>
//             <Link
//                 style={{ textDecoration : match ? "underline" : "none"}}
//                 to={to}
//                 {...props}
//                 >
//                   {children}
//             </Link>
//             {match && "(active)"}
//         </div>
//     );
// };

// export default NavLink;
/*
import * as React from "react";
import { NavLink } from "react-router-dom";

function NavList() {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="messages"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="tasks"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink to="tasks">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : undefined
                }
              >
                Tasks
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
} 

 */