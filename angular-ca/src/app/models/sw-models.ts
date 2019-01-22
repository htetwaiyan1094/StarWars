const character = [ 
    'birth_year', 'height', 'mass',
    'gender', 'hair_color', 'skin_color'
];

const film = [
    'created', 'director', 'producer', 'opening_crawl'
];

const specie = [
    'classification', 'designation', 'average_lifespan',
    'average_height', 'hair_colors', 'skin_colors', 'eye_colors'
];

const starship = [
    'model', 'manufacturer', 'starship_class', 'cost_in_credits', 'max_atmosphering_speed',
    'hyperdrive_rating', 'MGLT', 'length', 'cargo_capacity', 'crew', 'passengers'
];

const vehicle = [
    'model', 'manufacturer', 'vehicle_class', 'cost_in_credits',
    'max_atmosphering_speed', 'length', 'cargo_capacity', 'crew', 'passengers'
]

const planet = [
    'population', 'rotation_period', 'orbital_period', 'diameter',
    'gravity', 'terrain', 'susurface_water' , 'climate'
]


export const modelMap = new Map()
    .set('people', character)
    .set('films', film)
    .set('species', specie)
    .set('starships', starship)
    .set('vehicles', vehicle)
    .set('planets', planet);