import { PokemonSquare } from "../PokemonSquare"
import './styles.css'

const DinamicSquare = ({ seconds, onClick }) => {
    return (
        <div className='container-dinamic-square' onClick={onClick}>
            <PokemonSquare seconds={seconds} />
        </div>
    )
}

export { DinamicSquare }