import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login'); // Redirect if not logged in
        }

        // Fetch user data (mock API call)
        const fetchUserData = async () => {
            // Replace this with actual API call
            const response = { firstName: 'John', email: 'john@example.com', subscriptionStatus: 'Active' };
            setUserData(response);
        };

        fetchUserData();
    }, [navigate]);

    return (
        <div>
            {userData ? (
                <>
                    <h1>Welcome, {userData.firstName}!</h1>
                    <p>Email: {userData.email}</p>
                    <p>Subscription Status: {userData.subscriptionStatus}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Account;
