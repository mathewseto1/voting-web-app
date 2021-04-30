import TinderCard from "react-tinder-card";

function Vote(){
    const question = "Dummy question";
    options = ["Option 1", "Option 2"];

    const handleSwipe = (direction, card) => {
        if (direction === "right") {
            //swipped right
        }
    };

    return (
        <div className = "voteContainer">
            <h2>Swipe Left for no or Right for yes</h2>
            
            <h1>{question}</h1>
            
            <div className = "cardContainer">
                {options.map((option_available) => 
                <TinderCard
                    key = {option_available
                    cardName = "card"
                    onCardLeftScreen = {(direction) =>
                    }
                })}
            </div>
        </div>
    )
}