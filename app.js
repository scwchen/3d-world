
const main = () => {
    const canvas = document.querySelector('canvas');
    // Scene, Camera, Renderer - These are three things we need

    // Camera
    const fov = 75;
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const near = 0.1; // if things are too close, do not render
    const far = 2000; // if things are too far, do not render

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.z = 1;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas }); // standard renderer

    // Scene
    const scene = new THREE.Scene();
    const loader = new THREE.TextureLoader();
    const texture = loader.load(
        'https://threejs.org/manual/examples/resources/images/equirectangularmaps/tears_of_steel_bridge_2k.jpg', () => {
            const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
            rt.fromEquirectangularTexture(renderer, texture);
            scene.background = rt.texture;
        }
    );

    // Controls
    const controls = new THREE.OrbitControls(camera, canvas);

    const render = () => {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
        renderer.setSize(width, height, false);
        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

};


main();