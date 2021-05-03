import TinderCard from "react-tinder-card";
import "./Vote.css";
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

function Vote(){
    
    // const question = "Dummy question";
    // const options = ["Option 1", "Option 2"];
    const { code } = useParams()
    const history = useHistory()
    const [data, setData] = useState()


    useEffect(() => {
        axios
            .get('http://localhost:3001/' + code)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                alert(err)
                history.pushState('/')
            })
        },[code, history])




    const handleSwipe = (direction, card) => {
        if (direction === "right") {
            //swipped right
            axios.post('http://localhost:3001/' + code, {
                option: card,
            })
        }
    }

    return (
        <div className = "voteContainer">
            <h2>Swipe Left for no or Right for yes</h2>
            
            <h1>{data?.quesiton}</h1>
            
            <div className = "cardContainer">
                {data?.options.map((option_available) => (
                
                <TinderCard
                    key = {option_available}
                    cardName = "card"
                    onCardLeftScreen = {(direction) =>
                        handleSwipe(direction, option_available)
                    }
                    preventSwipe = {["up", "down"]}>
                    {option_available}
                </TinderCard>
                    
                ))}
            </div>
        </div>
    )
}
export default Vote