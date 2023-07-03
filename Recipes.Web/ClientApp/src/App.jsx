import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './Layout';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import { ContextComponent } from './Context';
import PrivateRoute from './PrivateRoute';
import Logout from './Logout';
import ViewAll from './ViewAll';
import RecipeDetails from './RecipeDetails';
import AddRecipe from './AddRecipe';
import MyRecipes from './MyRecipes';
import Success from './Success';
import Print from './Print';

const App = () => {
    return (
        <ContextComponent>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/viewall' element={<ViewAll />} />
                    <Route exact path='/print' element={<Print />} />
                    <Route exact path='/RecipeDetails/:id' element={<RecipeDetails />} />
                    <Route exact path='/signup' element={<Signup />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/success' element={<Success />} />
                    <Route exact path='/addrecipe' element={
                        <PrivateRoute>
                            <AddRecipe />
                        </PrivateRoute>
                    } />
                    <Route exact path='/myrecipes' element={
                        <PrivateRoute>
                            <MyRecipes />
                        </PrivateRoute>
                    } />
                    <Route exact path='/logout' element={
                        <PrivateRoute>
                            <Logout />
                        </PrivateRoute>
                    } />
                </Routes>
            </Layout>
        </ContextComponent>
    );
};

export default App;

