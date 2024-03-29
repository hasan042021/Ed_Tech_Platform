import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch } from "react-router-dom";
import logoImage from "../../assets/image/learningportal.svg";
import { userLoggedOut } from "../../features/auth/authSlice";
import { adminPrivateRoutes, studentPrivateRoutes } from "../../routes/routes";

const Navbar = () => {
  const admin = useMatch("/admin/*");
  const dashboard = useMatch("/admin/dashboard");
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth.user);
  return (
    <nav className="shadow-md">
      <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">
        <img className="h-10" src={logoImage} />
        <div className="flex items-center gap-3">
          {!admin
            ? studentPrivateRoutes.map((r) => {
                if (r.path.includes("/:")) return;
                return (
                  <Link to={`/${r.path}`} className="font-bold">
                    {r.name}
                  </Link>
                );
              })
            : !dashboard
            ? adminPrivateRoutes.map((r) => (
                <Link to={`/admin/${r.path}`} className="font-bold">
                  {r.name}
                </Link>
              ))
            : null}

          <h2>{name}</h2>
          <button
            onClick={() => dispatch(userLoggedOut())}
            className="flex gap-2 border border-cyan items-center px-4 py-1 rounded-full text-sm transition-all hover:bg-cyan "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
