(function(){
    //creacion de la escena
    let scene = new THREE.Scene(); 
    const aspectRatio = window.innerWidth / window.innerHeight;
    //perspectiva de la camara
    let camera = new THREE.PerspectiveCamera(75,aspectRatio,0.1,100); 
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);
    //agregar la escena y la  camara
    renderer.render(scene,camera);
    
    //Sombras
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.soft = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    //poscicion de la camara
    camera.position.z = 60;
    camera.position.y = 15;
    
    //textura de las primitivas
    let texture = new THREE.TextureLoader().load('public/p6.jpg');//carga la textura
    let material = new THREE.MeshBasicMaterial({ map:texture });//la agrega al material
    
    //Plano
    let planeGeometry = new THREE.PlaneGeometry(200,900);
    planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));
    let groundMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });
    let plane = new THREE.Mesh(planeGeometry, groundMaterial);
    plane.receiveShadow  = true;
    let mesh;
    plane.position.y = -14;
    scene.add(plane);

    //Lucez
        //Luz de punto
        let pointLight = new THREE.PointLight(0x606060);
        //Luz ambiental
        let atmoLight = new THREE.AmbientLight(0x606060);
        //ubicacion de la luz;
        atmoLight.position.y = 60;
        pointLight.position.y = 40;
        //activar sombras
        pointLight.castShadow = true;
        //color
        scene.background = new THREE.Color(0xeeeeee);
        //agregamos lucez a escena
        scene.add(pointLight);
        scene.add(atmoLight);
    
    //textura de las primitivas
    let texture2 = new THREE.TextureLoader().load('public/p5.jpg');//carga la textura
    let material2 = new THREE.MeshBasicMaterial({ map:texture });//la agrega al material
       
     //piramide
    let piramide = new THREE.Mesh(new THREE.TetrahedronGeometry(16,0),material);
    piramide.position.x = 0;
            //Render shadow
            piramide.receiveShadow  = true;
            piramide.castShadow = true;
    scene.add(piramide);   
     
    //cubo
    let cubo = new THREE.Mesh(new THREE.BoxGeometry( 10, 10, 10 ),material);
    cubo.position.x = -40;
        //Render shadow
            cubo.receiveShadow  = true;
            cubo.castShadow = true;
    scene.add(cubo); 

    //toriode
    let toroide = new THREE.Mesh(new THREE.TorusGeometry( 10, 3, 16, 100 ),material);
    toroide.position.x = 40;
            //Render shadow
            toroide.receiveShadow  = true;
            toroide.castShadow = true;
    scene.add(toroide); 
    
   //crear animacion 
    function loop(){ 
        requestAnimationFrame(loop);
        //rotacion de figuras
        piramide.rotation.z +=0.01;
        cubo.rotation.y +=0.01;
        toroide.rotation.x +=0.01;
        renderer.render(scene,camera);
    }
    loop();
   
    })(); 