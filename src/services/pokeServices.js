const getPokes = async ({ id }) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('Falló la petición')
        }
    } catch (error) {
        throw error;
    }
}

export { getPokes }