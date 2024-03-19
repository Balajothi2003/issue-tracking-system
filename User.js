import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Result() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/task')
            .then(res => { setResults(res.data); })
            .catch(err => { console.log(err); });
    }, []);

    return (
        <div>
            <h1>Issue Correction</h1>
            <div className="x-container">
                {results.map(x=> (
                    <div className="result-item" key={x.id}>
                        <h2>{x.studentName}</h2>
                        <p>Name:{x.name}</p>
                        <p>Emailid:{x.emailid}</p>
                        <p>Rollno: {x.rollno}</p>
                        <p>Correctionno:{x.correctionno}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
