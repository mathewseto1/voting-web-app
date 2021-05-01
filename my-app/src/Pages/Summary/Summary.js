import "./Summary.css"

function Summary(){

    const code = "sdfsdf";
    const question = "Question";
    const options = [
        { name: "Option 1", votes: 3 },
        { name: "Option 2", votes: 3 },
    ];

    return (
        <div className="summaryContainer">
            <h1>Code: {code}</h1>
            <h1>{question}</h1>

            <ul>
                {options.map ((a_option) => (
                    <li className="listItem" key={a_option.name}>
                    {a_option.name}:{" "}
                    <span className="votes">{a_option.votes} votes </span>
                    </li>
                )
                )
                }
            </ul>

        </div>

    )
}
export default Summary;