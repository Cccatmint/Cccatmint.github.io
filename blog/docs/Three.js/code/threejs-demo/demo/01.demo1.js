function init() {
    // create scene
    const scene = new THREE.Scene()

    // camera option
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000) // 创建透视相机
    camera.position.set(-30, 40, 30)
    camera.lookAt(scene.position)

    // renderer option
    const renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(new THREE.Color(0x000000)) // 背景色
    renderer.setSize(window.innerWidth, window.innerHeight) // 渲染区域大小

    // create axes
    const axes = new THREE.AxesHelper(20)
    scene.add(axes)

    // create plane
    const planeGeometry = new THREE.PlaneGeometry(60, 20) // 几何
    const planeMaterial = new THREE.MeshBasicMaterial({
        color: 0xAAAAAA
    })
    const plane = new THREE.Mesh(planeGeometry, planeMaterial)
    
    // plane option
    plane.rotation.x = -0.5 * Math.PI
    plane.position.set(15, 0, 0)
    scene.add(plane)

    // create a cube
    const cubeGeometry = new THREE.BoxGeometry(4, 4, 4)
    const cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0xA715CB,
        wireframe: true
    })
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    cube.position.set(-4, 3, 0)
    scene.add(cube)

    // create a sphere
    const sphereGeometry = new THREE.SphereGeometry(4, 80, 80) // 球体半径 水平分段数 垂直分段数
    const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x085824,
        wireframe: true
    })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.position.set(4, 4, 4)
    scene.add(sphere)

    // output to the html element
    const outputElement = document.getElementById('webgl_output')
    outputElement.appendChild(renderer.domElement)

    // render the scene
    renderer.render(scene, camera)

}