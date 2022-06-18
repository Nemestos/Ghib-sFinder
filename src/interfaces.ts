export interface IPeople {
    id: string,
    name: string,
    gender: string,
    age: string,
    eye_color: string,
    hair_color: string,
    films: Array<string>,
    species: string,
    url: string
}

export interface ILocation {
    id: string,
    name: string,
    climate: string,
    terrain: string,
    surface_water: string,
    residents: Array<string>,
    films: Array<string>,
    url: string
}

export interface ISpecies {
    id: string,
    name: string,
    classification: string,
    eye_colors: string,
    hair_colors: string,
    url: string,
    people: Array<string>,
    films: Array<string>
}

export interface IVehicle {
    id: string,
    name: string,
    description: string,
    vehicle_class: string,
    length: string,
    pilot: string,
    films: Array<string>,
    url: string
}

export interface IMovie {
    id: string,
    title: string,
    original_title: string,
    original_title_romanised: string,
    image:string,
    movie_banner:string,
    description: string,
    director: string,
    producer: string,
    release_date: string,
    running_time: string,
    rt_score: string,
    people: Array<string>,
    species: Array<string>,
    locations: Array<string>,
    vehicles: Array<string>,
    url: string
}
