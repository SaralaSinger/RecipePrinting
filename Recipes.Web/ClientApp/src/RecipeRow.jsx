import { Link } from "react-router-dom";

const RecipeRow = ({ recipe }) => {
    const { id, title, category, source } = recipe;
    return (
        <tr style={{ backgroundColor: "rgb(248, 249, 250)", borderRadius: 15 }}>
            <td style={{ paddingTop: 15, paddingBottom: 15 }}>
                <Link to={`/recipedetails/${id}`}>
                    {title}
                </Link>
            </td>
            <td>{category}</td>
            <td>{source}</td>
        </tr>
    )
}
export default RecipeRow