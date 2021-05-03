import "./Summary.css";
import {useHistory, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Summary(){

    const [data, setData] = useState()
    const history = useHistory();
    const { code } = useParams()
    // const code = "sdfsdf";
    // const question = "Question";
    // const options = [
    //     { name: "Option 1", votes: 3 },
    //     { name: "Option 2", votes: 3 },
    // ];

    useEffect(() => {
        axios.get(
            'http://localhost:3001/' + code
        ).then((res) => {
            setData(res.data)
        }).catch((err) => {
            alert(err)
            history.push('/')
        })
    }, [code, history])

    return (
        <div className="summaryContainer">
            <h1>Code: {code}</h1>
            <h1>{data?.question}</h1>

            <ul>
                {data?.results.map ((a_option) => (
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