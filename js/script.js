/*
   TASKS
   - set background to black
   - create particle system
   - get stuff to explode
   */
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

        //set up particles
        var 
        particleCount = 100,
        particleGeometry = new THREE.Geometry(),
        particleMaterial = new THREE.ParticleBasicMaterial({
            color: 0xFFFFFF,
            size: 20,
            map: THREE.ImageUtils.loadTexture(
                "/images/particle.png"
            ),
            blending: THREE.AdditiveBlending,
            transparent: true
        });

    var container;

    var camera, controls, scene, renderer;


    init();
    animate();

    function init() {

        camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
        camera.position.z = 500;

        controls = new THREE.OrbitControls( camera );
        controls.addEventListener( 'change', render );

        scene = new THREE.Scene();
        //scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );


				for ( i = 0; i < particleCount; i ++ ) {

					var vertex = new THREE.Vector3();
                    vertex.x = Math.random() * 1000 - 500;
                    vertex.y = Math.random() * 1000 - 500;
                    vertex.z = Math.random() * 1000 - 500;

					particleGeometry.vertices.push( vertex );

				}

        particles = new THREE.ParticleSystem( particleGeometry, particleMaterial );

scene.add(particles);
console.log(particles.geometry.vertices);
        //var geometry = new THREE.CylinderGeometry( 0, 10, 30, 4, 1 );
        //var material =  new THREE.MeshLambertMaterial( { color:0xffffff, shading: THREE.FlatShading } );

        //for ( var i = 0; i < 500; i ++ ) {

        //var mesh = new THREE.Mesh( geometry, material );
        //mesh.position.x = ( Math.random() - 0.5 ) * 1000;
        //mesh.position.y = ( Math.random() - 0.5 ) * 1000;
        //mesh.position.z = ( Math.random() - 0.5 ) * 1000;
        //mesh.updateMatrix();
        //mesh.matrixAutoUpdate = false;
        //scene.add( mesh );

        //}


        // lights

        //light = new THREE.DirectionalLight( 0xffffff );
        //light.position.set( 1, 1, 1 );
        //scene.add( light );

        //light = new THREE.DirectionalLight( 0x002288 );
        //light.position.set( -1, -1, -1 );
        //scene.add( light );

        //light = new THREE.AmbientLight( 0x222222 );
        //scene.add( light );


        // renderer

        renderer = new THREE.WebGLRenderer( { antialias: false } );
        //renderer.setClearColor( scene.fog.color, 1 );
        renderer.setSize( window.innerWidth, window.innerHeight );

        container = document.getElementById( 'canvas' );
        container.appendChild( renderer.domElement );


        //

        window.addEventListener( 'resize', onWindowResize, false );

    }

    function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        render();

    }

    function animate() {
particles.geometry.vertices

for (var i = 0; i < particles.geometry.vertices.length; i += 1) {

console.log(particles.geometry.vertices[i]);   
}
				

        requestAnimationFrame( animate );
        controls.update();

    }

    function render() {

        renderer.render( scene, camera );

    }

}());
