import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeRow from "./RecipeRow";
const MyRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const getRecipes = async () => {
            const { data } = await axios.get('/api/recipe/getmyrecipes');
            setRecipes(data);
        }
        getRecipes();

    }, []);

    return (
        <div className="container" style={{ marginTop: 80 }}>
            <div className="d-flex justify-content-center">
                <table className="table text-center shadow-lg" style={{ borderCollapse: "separate", borderSpacing: 0 - 15, maxWidth: 80 }}>
                    <thead>
                        <tr style={{ backgroundColor: "rgb(33, 37, 41)", color: "white", borderRadius: 15 }}>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.map(r => <RecipeRow
                            recipe={r}
                            key={r.id}
                        />)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MyRecipes