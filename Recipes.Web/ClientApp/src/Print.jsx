import React from "react";
import './Styles.css';

class Print extends React.Component {
    render() {
        const { title, source, category, prepTime, renderIngredients, directions, notes } = this.props;
        return (
            <div id="recipe-card" className="clearfix animated bounceInDown">
                <div id="banner">
                    <h1>{title}</h1>
                    <h5 id="category">Category: {category}</h5>
                    <p>From: {source}</p>
                    <p>Prep Time: {prepTime}</p>
                    </div>
                <div id="left">                   
                    {renderIngredients()}
                </div>
                <div id="right">
                    <h2>Directions</h2>
                    <p>{directions}</p>
                    <h2>Additional Notes</h2>
                    <p id="notes">{notes}</p>
                </div>
            </div>
        );
    }
}

export default Print;