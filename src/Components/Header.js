import React from 'react';
import Icon from '@material-ui/core/Icon';


const Header = () => {
    return (
        <header>
         <nav className="navbar navbar-inverse">
           <div className="container-fluid">
              <div className="navbar-header">
                 <a className="navbar-brand text-danger" >Outotec</a>
                 <a className="navbar-brand text-dark" >Service Center</a>
              </div>
               <ul className="nav navbar-nav navbar-right">
                <li> <Icon className="material-icons username" fontSize="large"  >perm_identity</Icon></li>
               </ul>
           </div>
         </nav>
        </header>   
    )
}

export default Header;