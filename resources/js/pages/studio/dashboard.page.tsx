import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardPage: React.FC = () => {
    // const [user, setUser] = useState<any>(null);
    //
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         try {
    //             const response = await axios.get('/api/user');
    //             setUser(response.data);
    //         } catch (error) {
    //             console.error('Not authenticated', error);
    //         }
    //     };
    //
    //     fetchUser();
    // }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <p>This is the dashboard content.</p>
        </div>
    );
};

export default DashboardPage;
