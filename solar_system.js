const planetInfo = document.querySelector('#display-planet-info')
const closeBtn = document.getElementById("planet-card-close");

closeBtn.addEventListener('click', function() {
    planetInfo.classList.remove('active');
});

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
const solarSystemContainer = document.getElementById("solar-system-simulator");
solarSystemContainer.appendChild(renderer.domElement);

// Create the Sun
const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Create planets
const planetNames = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
const planets = [];

for (let i = 0; i < planetNames.length; i++) {
    const planetGeometry = new THREE.SphereGeometry(1, 32, 32);
    const planetMaterial = new THREE.MeshBasicMaterial({ color: getRandomColor() });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);

    // Place planets in a circular orbit around the sun
    const angle = (i / planetNames.length) * Math.PI * 2;
    const radius = 10 + i * 2;
    planet.position.x = Math.cos(angle) * radius;
    planet.position.z = Math.sin(angle) * radius;

    // Attach the planet name to each planet object
    planet.name = planetNames[i];

    planets.push(planet);
    scene.add(planet);
}

// Set up the camera position
camera.position.z = 20;

// Add event listener for mouse click on planets
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

document.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(planets);
    
    if (intersects.length > 0) {
        const clickedPlanet = intersects[0].object;
        const planetName = clickedPlanet.name;
        console.log('Clicked on ' + planetName);
        planetInfo.classList.add('active');
    }

    // Add wheel event listener to handle zooming
    solarSystemContainer.addEventListener('wheel', onWheel);

    function onWheel(event) {
      // Prevent default behavior to stop the browser from scrolling
      event.preventDefault();

      // Adjust the camera position based on the wheel event
      camera.position.z += event.deltaY * 0.1;
    }

    // Add event listeners for mouse drag to move the camera
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    solarSystemContainer.addEventListener('mousedown', onMouseDown);
    solarSystemContainer.addEventListener('mouseup', onMouseUp);
    solarSystemContainer.addEventListener('mousemove', onMouseMove);

    function onMouseDown(event) {
        isDragging = true;
        previousMousePosition = { x: event.clientX, y: event.clientY };
    }

    function onMouseUp() {
        isDragging = false;
    }

    function onMouseMove(event) {
        if (!isDragging) return;

        const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y
        };

        // Adjust the camera rotation based on the mouse movement
        const rotationSpeed = 0.01;
        camera.rotation.y += deltaMove.x * rotationSpeed;
        camera.rotation.x += deltaMove.y * rotationSpeed;

        previousMousePosition = { x: event.clientX, y: event.clientY };
    }

}

// Add zoom functionality
window.addEventListener('wheel', onWheel);

function onWheel(event) {
    camera.position.z += event.deltaY * 0.1;
}

// Helper function to generate random colors
function getRandomColor() {
    return Math.random() * 0xffffff;
}

// Animation loop
function animate() {
    
    // Rotate planets
    planets.forEach(planet => {
        planet.rotation.y += 0.01;
    });
    
    // Render the scene
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();