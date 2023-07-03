import React, { useEffect } from 'react';
import axios from 'axios';
import { useCon } from './Context';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const { setUser } = useCon();
    const navigate = useNavigate();
    useEffect(() => {
        const logout = async () => {
            await axios.post('/api/account/logout');
            setUser(null);
            navigate('/');
        }
        logout();
    }, []);

    return (<></>);
}

export default Logout;