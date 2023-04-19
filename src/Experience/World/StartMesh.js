import * as THREE from 'three'
import Experience from '../Experience.js'
import vertexShader from '../shaders/starter_shader/vertex.glsl'
import fragmentShader from '../shaders/starter_shader/fragment.glsl'

export default class StarterMesh
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.setGeometry()
        this.setTextures()
        this.setMaterial()
        this.setMesh()
    }

    setGeometry()
    {
        this.geometry = new THREE.IcosahedronGeometry(2, 3)
    }

    setTextures()
    {

    }

    setMaterial()
    {
        this.material = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader
        })
    }

    setMesh()
    {
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.mesh.rotation.x = - Math.PI * 0.5
        this.mesh.receiveShadow = true
        this.scene.add(this.mesh)
    }
}