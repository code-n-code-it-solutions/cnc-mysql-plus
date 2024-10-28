// resources/js/pages/LoginPage.tsx

import React from 'react';

const LoginPage: React.FC = () => {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState<string | null>(null);
    // const navigate = useNavigate();
    //
    // const handleLogin = async (e: React.FormEvent) => {
    //     e.preventDefault();
    //     setError(null);
    //
    //     try {
    //         await axios.post('/login', { email, password });
    //         navigate('/dashboard');
    //     } catch (error) {
    //         setError('The provided credentials do not match our records.');
    //     }
    // };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded shadow">
                <h1 className="text-2xl font-bold mb-6 text-center">Login to CNC-MySQL Studio</h1>
                {/*{error && <p className="text-red-500 text-center">{error}</p>}*/}
                {/*<form onSubmit={handleLogin}>*/}
                {/*    <div className="mb-4">*/}
                {/*        <label className="block text-gray-700" htmlFor="email">Email</label>*/}
                {/*        <input*/}
                {/*            type="email"*/}
                {/*            id="email"*/}
                {/*            value={email}*/}
                {/*            onChange={(e) => setEmail(e.target.value)}*/}
                {/*            className="w-full px-3 py-2 border rounded"*/}
                {/*            required*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="mb-4">*/}
                {/*        <label className="block text-gray-700" htmlFor="password">Password</label>*/}
                {/*        <input*/}
                {/*            type="password"*/}
                {/*            id="password"*/}
                {/*            value={password}*/}
                {/*            onChange={(e) => setPassword(e.target.value)}*/}
                {/*            className="w-full px-3 py-2 border rounded"*/}
                {/*            required*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">*/}
                {/*        Login*/}
                {/*    </button>*/}
                {/*</form>*/}
            </div>
        </div>
    );
};

export default LoginPage;
