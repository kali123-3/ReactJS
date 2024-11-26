import {Link, Outlet} from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <Link to="/"  > Home </Link>
            <Link to="/contact/1"> Contact  </Link>
            <Link to="/detail"> Global  </Link>
            <Link to="detail/analyse"> analytic  </Link>
            <Link to="/detail/images"> images  </Link>

        </>
    )
}
