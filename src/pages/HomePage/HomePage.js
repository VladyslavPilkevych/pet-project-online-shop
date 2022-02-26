import React, { useEffect, useState, memo } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer.js";

const HomePage = () => {
    return (
        <div className="App">
            <h1>Welcome!</h1>
            <CardsContainer />
        </div>
    );
}

export default memo(HomePage);