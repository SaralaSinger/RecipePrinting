import React from 'react';
import { Link } from 'react-router-dom';
import { useCon } from './Context';

const Home = () => {
    const { user } = useCon();
    return (
        <div className="d-flex align-items-center justify-content-center" style={{ height: 600, backgroundColor: "rgb(238, 238, 238)" }}>
            <div className="text-center">
                <h1 className="display-4">Welcome to the Recipe App!!</h1>
                <p className="lead">
                    <Link to="/viewall">
                        <button className="btn btn-danger btn-lg">Click here to view all recipes</button>
                    </Link>
                </p>
                {!user && <p className="lead">
                    <Link to="/login">
                        <button className="btn btn-warning btn-lg">Click here to Login</button>
                    </Link>
                </p>}
                {!!user && <p className="lead">
                    <Link to="/addrecipe">
                        <button className="btn btn-warning btn-lg">Click here to add a recipe</button>
                    </Link>
                </p>}
            </div>
        </div>

    )
}
export default Home;