import {  Outlet, NavLink } from "react-router-dom";

export const ROUTES = {
    Community: "/community"
  };

function Root() {
    return (
        <>
            <nav>
                <NavLink to={ROUTES.Community} >
                Community
                </NavLink>
            </nav>
            <Outlet/>
      </>
    );

}

export default Root;