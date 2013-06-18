window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(/* function */ callback, /* DOMElement */ element){
        window.setTimeout(callback, 1000 / 60);
    };
})();


( function() {
    console.log('running script');
    var
    width= 500,
    height= 500,
    renderer= new THREE.WebGLRenderer(),
    scene = new THREE.Scene(),
    $canvas = $('#canvas'),
    cameraProperty = {
        view_angle: 45,
        aspect: width/height,
        near: 0.1,
        far: 10000
    },
    camera = new THREE.Camera(
        cameraProperty.view_angle,
        cameraProperty.aspect,
        cameraProperty.near,
        cameraProperty.far
    )
    //    geometry = new THREE.Geometry()
    ;
    var
    particles = new THREE.Geometry(),
    pMaterial = new THREE.ParticleBasicMaterial({
        color: 0xFFFFFF,
        size: 20,
        map: THREE.ImageUtils.loadTexture(
            "images/particle.png"
        ),
        blending: THREE.AdditiveBlending,
        transparent: true
    }),
    particleSystem = new THREE.ParticleSystem(particles, pMaterial),
    count = 1
    ;
    for(var p = 0; p < count; p++) {

        // create a particle with random
        // position values, -250 -> 250
        var pX = Math.random() * 500 - 250,
        pY = Math.random() * 500 - 250,
        pZ = Math.random() * 500 - 250,
        particle = new THREE.Vertex(
            new THREE.Vector3(pX, pY, pZ)
        );
        // create a velocity vector
        particle.velocity = new THREE.Vector3(
            0,				// x
            -Math.random(),	// y
            0);				// z

            // add it to the geometry
            particles.vertices.push(particle);
    }


    function setup(){
        console.log('setting up canvas');
        //bring camera back
        camera.position.z = 300;

        // start the renderer - set the clear colour
        // to a full black
        renderer.setClearColor(new THREE.Color(0, 1));
        renderer.setSize(width, height);

        // attach the render-supplied DOM element
        $canvas.append(renderer.domElement);

    }
    function render(){
        console.log('rendering');
        scene.add(particleSystem);

    }
    function animate() {

        //requestAnimationFrame( animate );

        render();

    }
    setup();
    animate();

}());
