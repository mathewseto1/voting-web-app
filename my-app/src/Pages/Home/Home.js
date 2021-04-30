import { useState } from "react";
import Input from "../../Components/Input";

export default function Home() {
    const [options, setOptions] = useState([]);
    const [question, setQuestion] = useState("");
    const [option, setOption] = useState("");

    return (
        <div className="homeContainer">
            <h1 className="heading"> Swipe Poll </h1>
            <div>
                <Input
                    className="questionInput"
                    placeholder="Type a question..."
                    value={question}
                    setValue={setQuestion}
                />

                <Input
                    className="optionInput"
                    placeholder="Add an option..."
                    value={option}
                    setValue={setOption}
                />

                <button
                    className="addButton"
                    onClick={() => {
                        setOptions([...options, option]);
                    }}
                >
                    Add
                </button>

                <ul>
                    {options.map((o) => (
                        <li className="listItem" key={o}>
                            {o}
                        </li>
                    ))}
                </ul>

                <button className="createButton">Create Poll</button>
            </div>
        </div>
    );
}