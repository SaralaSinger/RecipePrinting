import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Print from "./Print";
import ReactToPrint from "react-to-print";
import { useCon } from './Context';

const RecipeDetails = () => {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const printRef = useRef();
    const { user } = useCon();

    useEffect(() => {
        const getRecipeById = async () => {
            const { data } = await axios.get(`/api/recipe/getrecipebyid?id=${id}`);
            setRecipe(data);
        };
        getRecipeById();
    }, []);

    const renderIngredients = () => {
        if (recipe.ingredients && recipe.ingredients.length > 0) {
            return (
                <>
                    <h3>Ingredients:</h3>
                    <ul>
                        {recipe.ingredients?.map((ingredient) => (
                            <li key={ingredient.id}>
                                {ingredient.measurement} - {ingredient.name}
                            </li>
                        ))}
                    </ul>
                </>
            );
        }
    };

    const { title, directions, prepTime, source, category, notes } = recipe;

    return (
        <div>
            {user ? <ReactToPrint
                trigger={() => <button className="btn btn-primary w-30">Print this out!</button>}
                content={() => printRef.current}
            /> :
                <p className="lead">
                    <Link to="/login">
                        <button className="btn btn-warning btn-lg">Login to enable printing!</button>
                    </Link>
                </p>
            }
            <Print
                ref={printRef}
                title={title}
                source={source}
                category={category}
                prepTime={prepTime}
                renderIngredients={renderIngredients}
                directions={directions}
                notes={notes}
            />
            <Link to="/viewall">
                <button className="btn btn-primary w-20">Back to All Recipes</button>
            </Link>
        </div>
    );
};

export default RecipeDetails;
