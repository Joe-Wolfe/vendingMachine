import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Vending Machine</h1>
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHBpOGx5Y3ZveTN1cjB4azQycHF4Z2YwbTJoeXZnaDRkcHF2a3djNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPaI8ZrQS9wnigM/giphy.gif" alt="Vending Machine" />
            <br /><Link to="/RootBeer">Root Beer</Link>
            <br /><Link to="/Doritos">Doritos</Link>
            <br /><Link to="/CinnamonRoll">Cinnamon Roll</Link>
        </div>
    );
}

export default Home