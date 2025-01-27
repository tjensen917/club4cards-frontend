import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the token
        setIsLoggedIn(false); // Update state
        navigate('/'); // Redirect to Home
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            {!isLoggedIn ? (
                <>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </>
            ) : (
                <>
                    <Link to="/account">Account</Link>
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
        </nav>
    );
};

export default Header;
