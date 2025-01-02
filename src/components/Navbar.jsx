import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import { IoNavigateCircle } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const links = [
  {
    name: "Home",
    path: "/",
    key: "home",
  },
  {
    name: "Services",
    path: "/services",
    key: "services",
  },
  {
    name: "Profile",
    path: "/profile",
    key: "profile",
  },
  {
    name: "Manage Services",
    path: "/manage-services",
    key: "manage-services",
  },
];

const Navbar = () => {
  // Destructuring Auth Context
  const { user, loading, Logout } = useContext(AuthContext);

  // Mobile Menu Open/ Close
  const [mobileMenu, setMobileMenu] = useState(false);

  // logout
  const navigate = useNavigate();
  const handleLogout = () => {
    Logout()
      .then(() => {
        toast.success("Logout Successful");
        navigate("/login");
      })
      .catch(() => {
        toast.error("Logout Failed");
      });
  };

  return (
    <nav
      className={`fixed bg-primary w-full top-0 z-50 px-5 py-4 flex items-center justify-between transition-all duration-300`}
    >
      <div className="flex gap-2">
        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenu(true)} className="text-white">
            <FaBars size={24} />
          </button>
        </div>
        {/* Mobile Links */}
        {mobileMenu && (
          <div className="absolute top-0 left-0 w-full h-screen bg-primary bg-opacity-90 flex flex-col items-center justify-center gap-6 md:hidden">
            <ul className="text-white space-y-4">
              {links.map((link) => (
                <li key={link.key}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `hover:text-accent ${
                        isActive ? "text-accent border-b-2 border-accent" : ""
                      }`
                    }
                    onClick={() => setMobileMenu(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Logo Section */}
        <Link to={"/"} className="text-accent text-2xl font-bold">
          <div className="flex items-center justify-center gap-1">
            <IoNavigateCircle className="text-3xl font-semibold" />
            <h2 className="text-2xl font-bold">Navigate</h2>
          </div>
        </Link>
      </div>

      {/* Middle Section */}
      <div className="hidden md:flex items-center gap-6 text-white">
        <ul className="flex gap-6 text-white">
          {links.map((link) => (
            <li key={link.key}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-accent ${
                    isActive ? "text-accent border-b-2 border-accent" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Section */}
      {user ? (
        <div className="flex items-center gap-4">
          <Link to={"/profile"}>
            {loading ? (
              <img
                title={`${user.displayName} Visit Your Profile`}
                src={user.photoURL}
                className="h-10 w-10 rounded-full border-2 border-accent"
                alt=""
              />
            ) : (
              <img
                title={`${user.displayName} Visit Your Profile`}
                src={user.photoURL}
                className="h-10 w-10 rounded-full border-2 border-accent"
                alt=""
              />
            )}
          </Link>
          <button
            onClick={handleLogout}
            className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/80 transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <FaUserCircle
            className="text-accent text-3xl "
            title={`Nayeem Uddin | Visit Profile`}
          />
          <Link
            to={"/login"}
            className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/80 transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
