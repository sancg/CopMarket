import { useEffect, useState } from 'react';

import './App.css';
import Compare from './Compare';

const App = () => {
    // Example of Fetching data
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     fetch('http://localhost:1234/')
    //         .then((data) => {
    //             return data.json();
    //         })
    //         .then((d) => {
    //             console.log(d);
    //             setData(d);
    //         });

    //     return () => {};
    // }, []);

    return (
        <main>
            <Compare />
        </main>
    );
};

export default App;
