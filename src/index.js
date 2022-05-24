import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppTracker from "./AppTracker";


/*
function Pk()
{
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)

    console.log("component render")

 */
    /**
     * Quiz:
     * 1. What will happen if I put back our Star Wars API call
     *    into the effect function?
     * 2. How will the useEffect be different if I use
     *    setStarWarsData() instead of console.log()
     */
    /*
    React.useEffect(function() {
        console.log("effect run")
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])


    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}

     */



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App/>
        <AppTracker/>
    </>


)

