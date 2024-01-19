const planetData = [
    {
        name: 'Mercury',
        description: 'Mercury is the smallest and innermost planet in the Solar System.',
        diameter: '4,880 kilometers',
        distanceFromSun: '57.91 million kilometers',
        orbitalPeriod: '88 days',
        gravity: '3.7 m/s²',
        atmosphere: 'Thin and composed mainly of oxygen, sodium, and hydrogen',
        moons: [],
        surfaceTemperature: '430°C (800°F)',
        orbitalEccentricity: '0.206',
        axialTilt: '2.04 degrees',
        ringSystem: false,
        surfaceFeatures: 'Craters and plains',
        discovery: 'Known to ancient civilizations',
        notableMissions: [],
        rotationPeriod: '59 days',
        magneticFieldStrength: '0.00006 times that of Earth',
    },
    {
        name: 'Venus',
        description: 'Venus is the second planet from the Sun, named after the Roman goddess of love and beauty.',
        diameter: '12,104 kilometers',
        distanceFromSun: '108.2 million kilometers',
        orbitalPeriod: '225 days',
        gravity: '8.87 m/s²',
        atmosphere: 'Thick with clouds of sulfuric acid, causing a runaway greenhouse effect',
        moons: [],
        surfaceTemperature: '471°C (880°F)',
        orbitalEccentricity: '0.007',
        axialTilt: '177.36 degrees',
        ringSystem: false,
        surfaceFeatures: 'Volcanoes and plains',
        discovery: 'Known to ancient civilizations',
        notableMissions: [],
        rotationPeriod: '243 days',
        magneticFieldStrength: '0.000015 times that of Earth',
    },
    {
        name: 'Earth',
        description: 'Earth is the third planet from the Sun, and the only celestial body known to support life.',
        diameter: '12,742 kilometers',
        distanceFromSun: '149.6 million kilometers',
        orbitalPeriod: '365.25 days',
        gravity: '9.81 m/s²',
        atmosphere: 'Rich in nitrogen and oxygen, supporting a diverse range of life forms',
        moons: ['Moon'],
        surfaceTemperature: 'Varies (-88°C to 58°C / -126°F to 136°F)',
        orbitalEccentricity: '0.017',
        axialTilt: '23.44 degrees',
        ringSystem: false,
        surfaceFeatures: 'Oceans, mountains, and diverse landscapes',
        discovery: 'Known to ancient civilizations',
        notableMissions: ['Apollo 11', 'Curiosity Rover'],
        rotationPeriod: '24 hours',
        magneticFieldStrength: '0.25 to 0.65 Gauss',
    },
    {
        name: 'Mars',
        description: 'Mars is the fourth planet from the Sun, often called the "Red Planet" due to its reddish appearance.',
        diameter: '6,779 kilometers',
        distanceFromSun: '227.9 million kilometers',
        orbitalPeriod: '687 days',
        gravity: '3.71 m/s²',
        atmosphere: 'Thin and composed mainly of carbon dioxide',
        moons: ['Phobos', 'Deimos'],
        surfaceTemperature: '-87°C (-125°F) to -5°C (23°F)',
        orbitalEccentricity: '0.093',
        axialTilt: '25.19 degrees',
        ringSystem: false,
        surfaceFeatures: 'Valleys, deserts, and polar ice caps',
        discovery: 'Known to ancient civilizations',
        notableMissions: ['Mars Rover (various missions)'],
        rotationPeriod: '24.6 hours',
        magneticFieldStrength: '0.001 times that of Earth',
    },
    {
        name: 'Jupiter',
        description: 'Jupiter is the largest planet in the Solar System, known for its prominent bands of clouds and the Great Red Spot.',
        diameter: '139,820 kilometers',
        distanceFromSun: '778.5 million kilometers',
        orbitalPeriod: '11.86 years',
        gravity: '24.79 m/s²',
        atmosphere: 'Primarily composed of hydrogen and helium',
        moons: ['Io', 'Europa', 'Ganymede', 'Callisto'],
        surfaceTemperature: '-145°C (-234°F)',
        orbitalEccentricity: '0.049',
        axialTilt: '3.13 degrees',
        ringSystem: true,
        surfaceFeatures: 'Gas giant with bands of clouds and the Great Red Spot',
        discovery: 'Known to ancient civilizations',
        notableMissions: ['Galileo Probe', 'Juno'],
        rotationPeriod: '9.8 hours',
        magneticFieldStrength: '14 times that of Earth',
    },
    {
        name: 'Saturn',
        description: 'Saturn is the sixth planet from the Sun, famous for its spectacular ring system.',
        diameter: '116,460 kilometers',
        distanceFromSun: '1.43 billion kilometers',
        orbitalPeriod: '29.46 years',
        gravity: '10.44 m/s²',
        atmosphere: 'Mainly hydrogen and helium',
        moons: ['Titan', 'Enceladus', 'Mimas', 'Rhea'],
        surfaceTemperature: '-178°C (-289°F)',
        orbitalEccentricity: '0.056',
        axialTilt: '26.73 degrees',
        ringSystem: true,
        surfaceFeatures: 'Gas giant with a prominent ring system',
        discovery: 'Known to ancient civilizations',
        notableMissions: ['Cassini-Huygens'],
        rotationPeriod: '10.7 hours',
        magneticFieldStrength: '0.22 times that of Earth',
    },
    {
        name: 'Uranus',
        description: 'Uranus is the seventh planet from the Sun, known for its unique rotation on its side.',
        diameter: '50,724 kilometers',
        distanceFromSun: '2.87 billion kilometers',
        orbitalPeriod: '84 years',
        gravity: '8.69 m/s²',
        atmosphere: 'Primarily composed of hydrogen, helium, and methane',
        moons: ['Miranda', 'Ariel', 'Umbriel', 'Titania', 'Oberon'],
        surfaceTemperature: '-224°C (-371°F)',
        orbitalEccentricity: '0.046',
        axialTilt: '97.77 degrees',
        ringSystem: true,
        surfaceFeatures: 'Gas giant with a tilted rotation axis',
        discovery: 'Discovered by William Herschel in 1781',
        notableMissions: [],
        rotationPeriod: '17.2 hours',
        magneticFieldStrength: '0.23 times that of Earth',
    },
    {
        name: 'Neptune',
        description: 'Neptune is the eighth and farthest planet from the Sun, known for its vibrant blue color.',
        diameter: '49,244 kilometers',
        distanceFromSun: '4.5 billion kilometers',
        orbitalPeriod: '164.8 years',
        gravity: '11.15 m/s²',
        atmosphere: 'Mainly composed of hydrogen, helium, and methane',
        moons: ['Triton', 'Nereid', 'Proteus', 'Larissa'],
        surfaceTemperature: '-201°C (-330°F)',
        orbitalEccentricity: '0.010',
        axialTilt: '28.32 degrees',
        ringSystem: true,
        surfaceFeatures: 'Storms and a dynamic atmosphere',
        discovery: 'Discovered mathematically before direct observation in 1846',
        notableMissions: ['Voyager 2'],
        rotationPeriod: '16.1 hours',
        magneticFieldStrength: '0.46 times that of Earth',
    },
    {
        name: 'Pluto',
        description: 'Pluto is a dwarf planet located in the Kuiper Belt, beyond Neptune.',
        diameter: '2,377 kilometers',
        distanceFromSun: '5.91 billion kilometers',
        orbitalPeriod: '248 years',
        gravity: '0.62 m/s²',
        atmosphere: 'Thin and primarily composed of nitrogen, methane, and carbon monoxide',
        moons: ['Charon', 'Styx', 'Nix', 'Kerberos', 'Hydra'],
        surfaceTemperature: '-233°C (-387°F) to -223°C (-369°F)',
        orbitalEccentricity: '0.248',
        axialTilt: '122.53 degrees',
        ringSystem: false,
        surfaceFeatures: 'Varied terrain with plains, mountains, and possible ice volcanoes',
        discovery: 'Discovered by Clyde Tombaugh in 1930',
        notableMissions: ['New Horizons'],
        rotationPeriod: '6.4 days',
        magneticFieldStrength: 'Unknown',
    }    
];


let planetName = prompt('Enter Planet Name: ');
const planetInfo = document.getElementById('display-planet-info');
const planetInfoName = document.getElementById("planet-info-name");
const planetInfoPara = document.getElementById("planet-info-para");
const planetClose = document.getElementById('planet-card-close');

var idx = 0;
switch (planetName) {
    case 'Mercury':
        idx = 0;
        break;
    case 'Venus':
        idx = 1;
        break;
    case 'Earth':
        idx = 2;
        break
    case 'Mars':
        idx = 3;
        break;
    case 'Jupiter':
        idx = 4;
        break;
    case 'Saturn':
        idx = 5;
        break;
    case 'Uranus':
        idx = 6;
        break;
    case 'Neptune':
        idx = 7;
        break;
    case 'Pluto':
        idx = 8;
        break;
    default:
        idx = 0
}


planetInfoName.textContent = planetData[idx].name;
const obj = planetData[idx];

const ulElement = document.createElement('ul');

      // Loop through the object properties and create list items
for (const key in planetData[idx]) {
    if (obj.hasOwnProperty(key)) {
        const liElement = document.createElement('li');
        const keySpan = document.createElement('span');
        keySpan.textContent = key;
        keySpan.classList.add('txt-body-bold');

        // Append the key span and the value to the list item
        liElement.appendChild(keySpan);
        liElement.innerHTML += `: ${obj[key]}`;
        ulElement.appendChild(liElement);
    }
}

// Append the unordered list to the output element
planetInfoPara.innerHTML = '';
planetInfoPara.innerText = '';

planetInfo.classList.add('active');
planetInfoPara.appendChild(ulElement);

planetClose.addEventListener('click', () => {
    planetInfo.classList.remove('active');
})