import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import LoginPage from './pages/auth/login.page';
import DashboardPage from './pages/studio/dashboard.page';

const App: React.FC = () => {
    console.log("React app is loading"); // Add this line

    return (
        <BrowserRouter>
            <div>
                <h1>App is Working!</h1> {/* Check if this text shows up */}
                <Routes>
                    <Route path="/auth/login" element={<LoginPage/>}/>
                    <Route path="/dashboard" element={<DashboardPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

createRoot(document.getElementById('app')!).render(<App/>);
