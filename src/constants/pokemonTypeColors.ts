export interface PokemonTypeColors {
    grass: string;
    fire: string;
    water: string;
    bug: string;
    normal: string;
    flying: string;
    poison: string;
    electric: string;
    ground: string;
    psychic: string;
    rock: string;
    ice: string;
    fighting: string;
    ghost: string,
    dark: string,
    steel: string,
    dragon: string,
    fairy: string;
}

const pokemonTypeColors: PokemonTypeColors = {
    "grass": '#7AC74C',
    "fire": '#F57F17',
    "water": '#479ACC',
    "bug": '#A6B9B2',
    "normal": '#A8A878',
    "flying": '#8AAECC',
    "poison": '#A33772',
    "electric": '#F7D066',
    "ground": '#E2C76B',
    "psychic": '#FFC6D9',
    "rock": '#B6A13B',
    "ice": '#96D9D6',
    "fighting": '#C22E28',
    "ghost": '#706D7A',
    "dark": '#70574A',
    "steel": '#B7B7CE',
    "dragon": '#7037FF',
    "fairy": '#F4BCE9',
}

export const pokemonTypeColorsKeys: Array<keyof PokemonTypeColors> = Object.keys(pokemonTypeColors) as Array<keyof PokemonTypeColors>

export default pokemonTypeColors