import React from "react";

class Print extends React.Component {
    render() {
        const { title, source, category, prepTime, renderIngredients, directions, notes, printRef } = this.props;
        return (
            <div className="d-flex align-items-center justify-content-center" style={{ height: 600 }}>
                <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{ width: 300, backgroundColor: "rgb(248, 249, 250)" }}>
                    <div className="card-body" ref={printRef}>
                        <h3 className="card-title fw-bold">{title}</h3>
                        <p className="card-text fs-5">{source}</p>
                        <p className="card-text fs-5">{category}</p>
                        <p className="card-text fs-5">{prepTime}</p>
                        {renderIngredients()}
                        <p className="card-text fs-5">{directions}</p>
                        <p className="card-text fs-5">{notes}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Print;