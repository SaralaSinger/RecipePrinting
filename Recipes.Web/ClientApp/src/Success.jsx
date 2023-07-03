import React from "react";
const Success = () => {
    return (
        <div className="container" style={{ marginTop: 80 }}>
            <div className="d-flex align-items-center justify-content-center" style={{ height: 350, backgroundColor: "rgb(238, 238, 238)" }}>
                <div className="text-center">
                    <h1 className="display-4">Your recipe has been added successfully.</h1>
                    <p className="lead">Thank you and enjoy!</p>
                </div>
            </div>
        </div>
    )
}

export default Success