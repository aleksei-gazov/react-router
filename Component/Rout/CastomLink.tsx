import * as React from "react";
import {Link, useMatch} from 'react-router-dom';

const setActive = ({isActive})=> isActive ? 'active-link' : ''

export const CastomLink =({children, to, ...props}) => {
  const match = useMatch(to)
  console.log(match)
return (
  
         <Link
          to={to}
          {...props}
          style={{
            color: match ? 'blue' : 'red'
          }}
          >
            
         {children}         
         </Link>     
)
}