const getPokes = async ({ id }) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not OK');
        }
        return response.json()
    } catch (error) {
        throw error;
    }
}

export { getPokes }