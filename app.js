
const main = () => {
    const canvas = document.querySelector('canvas');
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // Scene, Camera, Renderer - These are three things we need

    // Camera
    const fow = 50;
    const aspect = width / height;
    const near = 0.1; // if things are too close, do not render
    const far = 2000; // if things are too far, do not render

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas }); // standard renderer

    renderer.setSize(width, height);

    // Scene
    const scene = new THREE.Scene();
    const loader = new THREE.TextureLoader();
    loader.load(
        
    )
}

main();