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
    
    //poscicion de la camara
    camera.position.z = 60;
    camera.position.y = 15;
    
    //textura de las primitivas
    let texture = new THREE.TextureLoader().load('public/p6.jpg');//carga la textura
    let material = new THREE.MeshBasicMaterial({ map:texture });//la agrega al material
       
     //piramide
    let piramide = new THREE.Mesh(new THREE.TetrahedronGeometry(16,0),material);
    piramide.position.x = 0;
    scene.add(piramide);   
     
    //cubo
    let cubo = new THREE.Mesh(new THREE.BoxGeometry( 10, 10, 10 ),material);
    cubo.position.x = -40;
    scene.add(cubo); 

    //toriode
    let toroide = new THREE.Mesh(new THREE.TorusGeometry( 10, 3, 16, 100 ),material);
    toroide.position.x = 40;
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