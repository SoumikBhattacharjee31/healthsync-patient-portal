
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // For demo purposes, toggle login state
  
  // Just for demo
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-health-purple to-health-dark-purple flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="ml-2 text-xl font-bold text-health-deep-purple">HealthSync</span>
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="border-transparent text-gray-700 hover:text-health-purple inline-flex items-center px-1 pt-1 text-sm font-medium">
                Home
              </Link>
              {isLoggedIn && (
                <>
                  <Link to="/dashboard" className="border-transparent text-gray-700 hover:text-health-purple inline-flex items-center px-1 pt-1 text-sm font-medium">
                    Dashboard
                  </Link>
                  <Link to="/resources" className="border-transparent text-gray-700 hover:text-health-purple inline-flex items-center px-1 pt-1 text-sm font-medium">
                    Resources
                  </Link>
                </>
              )}
              <Link to="/about" className="border-transparent text-gray-700 hover:text-health-purple inline-flex items-center px-1 pt-1 text-sm font-medium">
                About
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="icon" className="relative" onClick={() => {}}>
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </Button>
                <Button variant="ghost" onClick={toggleLogin} className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  <span>Account</span>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-health-purple focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-gray-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            {isLoggedIn && (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                  Dashboard
                </Link>
                <Link to="/resources" className="text-gray-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                  Resources
                </Link>
              </>
            )}
            <Link to="/about" className="text-gray-700 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              About
            </Link>
            
            {/* Mobile action buttons */}
            <div className="pt-4 pb-3 border-t border-gray-200">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center px-3">
                    <Button variant="outline" size="sm" className="flex-1 justify-center" onClick={toggleLogin}>
                      Account
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col space-y-2 px-3">
                  <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" className="w-full">Login</Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsOpen(false)}>
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNav;
