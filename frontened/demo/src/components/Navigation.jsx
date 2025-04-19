import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navigation() {
  const { user, isLoggedIn } = useContext(AuthContext);
  
  // Debug what's in the user object
  console.log("Navigation user:", user);
  
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold">
          EventHUB
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create-event" className="hover:underline">
              Create Event
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link to="/profile" className="hover:underline">
                {user?.email || "Profile"}
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login" className="hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:underline">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}