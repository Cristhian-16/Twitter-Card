import React from "react";
import './App.css';
import { TwitterFollowCard } from "./TwitterFollowCard";

const App = () => {


    return (
        <section className="App">
            <TwitterFollowCard userName='renrize' name='RenRize' />
            <TwitterFollowCard userName='cristiano' name='Cristiano Ronaldo' />
        </section>
    )
}


export default App; 