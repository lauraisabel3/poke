import React, { useEffect, useState } from 'react'
import { getPokes } from '../../services'
import './styles.css'

const PokemonSquare = ({ seconds, reload }) => {
    const [counter, setCounter] = useState(seconds)
    const [poke, setPoke] = useState({})
    const interval = seconds * 1000

    function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    const getPokemonsInfo = async () => {
        const response = await getPokes({ id: random(1, 100) })
        setPoke(response)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1)
        }, interval);

        return () => clearInterval(intervalId);
    }, [interval])

    useEffect(() => {
        getPokemonsInfo();
    }, [counter, reload]);
    return (
        <div className='container-pokemon'>
            <p>{poke.name}</p>
            <p>Segundos: {seconds}</p>
            <div className='cloud-container'>
                {poke !== {} && <img src={poke?.sprites?.front_default} alt='Pokemon img' className='cloud-img' />}
            </div>
        </div>
    )
}

export { PokemonSquare }