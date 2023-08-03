import React, { useState } from 'react'
import { PokemonSquare } from '../../components'
import { DinamicSquare } from '../../components/DinamicSquare'
import './styles.css'

const PokeMonPage = () => {
    const [reload, setReaload] = useState(false)
    return (
        <div className='main-container'>
            <div className='pokemons-container'>
                <PokemonSquare seconds={3} />
                <DinamicSquare seconds={5} onClick={() => setReaload(!reload)} />
                <DinamicSquare seconds={7} onClick={() => setReaload(!reload)} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
                <PokemonSquare seconds={10} reload={reload} />
            </div>
        </div>
    )
}

export { PokeMonPage }