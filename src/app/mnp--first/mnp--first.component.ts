import { Component, AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from "three";

@Component({
  selector: 'first--task',
  templateUrl: './mnp--first.component.html',
  styleUrls: ['./mnp--first.component.css']
})
export class MnpFirstTaskComponent implements AfterContentInit
{
  ngAfterContentInit (): void
  {
    this._initScene();

    window.onresize = ()=>
    {
      this._RenderingAreaChanged();
    }
    let cubeGeometry = new THREE.BoxGeometry(3, 3, 3);

    let cubeMaterial = new THREE.MeshStandardMaterial();
    cubeMaterial.color = new THREE.Color(0x34ff57);
    cubeMaterial.side = THREE.DoubleSide;
    cubeMaterial.metalness = 0.75;
    cubeMaterial.roughness = 0.55;

    let cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cubeMesh.position.set(0, 0, 0);
    //
    let pLight1 = new THREE.AmbientLight(0xffffff, 2);
    //
    let pLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    pLight2.position.set(0, 10, 10);
    pLight2.lookAt(this._scene.position);
    //
    let axis = new THREE.AxisHelper(50);
    //
    this._scene.add(axis);
    this._scene.add(cubeMesh);
    this._scene.add(pLight1);
    this._scene.add(pLight2);
    //
    (this.canvas.nativeElement as HTMLElement).appendChild(this._renderer.domElement);
    //
    this.render();
  }

  @ViewChild('canvas') canvas: ElementRef;
  private _scene: THREE.Scene;
  private _camera: THREE.PerspectiveCamera;
  private _renderer: THREE.WebGLRenderer;
  private _renderWidth: number;
  private _renderHeight: number;
  private _proportions: number;
  private _trackballControls: THREE.TrackballControls;

  private get _visualiser():HTMLElement
  {
    return <HTMLElement>this.canvas.nativeElement;
  }

  public logInfo: string;

  constructor() 
  {
    
  }

  private render ()
  {
    this._renderer.render(this._scene, this._camera);
    requestAnimationFrame(() => this.render());
  }

  public InitFullscreen()
  {
    this._initPointerLock();
    this._initFullScreen();
  }

  private _initPointerLock()
  {
    (<HTMLElement>this.canvas.nativeElement).requestPointerLock();
  }
  private _initFullScreen()
  {
    document.documentElement.webkitRequestFullscreen();
  }
  private _RenderingAreaChanged()
  {
    this._renderWidth = this._visualiser.clientWidth;
    this._renderHeight = this._visualiser.clientHeight;
    console.log(this._visualiser.clientWidth, this._visualiser.clientHeight)
    this._proportions = this._renderWidth / this._renderHeight;
    this._renderer.setSize(this._renderWidth, this._renderHeight);
    this._camera.aspect = this._proportions;
    this._camera.updateProjectionMatrix();
  }
  private _initScene()
  {
    //
    this._scene = new THREE.Scene();
    //
    this._renderer = new THREE.WebGLRenderer({ antialias: true });
    this._renderer.setClearColor(0x000000);
    //
    this._camera = new THREE.PerspectiveCamera(45, this._proportions, 0.1, 1000);
    this._camera.position.set(0, 0, 300);
    //
    this._RenderingAreaChanged();
    //
    this._scene.add(this._camera);
    //
    document.documentElement.addEventListener('mousemove',this._mouseMove.bind(this));
  }
  private _mouseMove(event: MouseEvent)
  {
    console.log(1);
    this._camera.rotateZ(1*Math.PI/180);
    this._camera.rotateY(1*Math.PI/180);
    this._camera.matrixAutoUpdate = true;
  }
}
