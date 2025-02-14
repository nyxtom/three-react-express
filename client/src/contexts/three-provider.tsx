import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export interface ThreeStateContexType {
  camera: THREE.PerspectiveCamera;
  controls: null | OrbitControls;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
}

export const ThreeContext = createContext<null | ThreeStateContexType>(null);

export function ThreeProvider({ children }: PropsWithChildren) {
  const refContainer = useRef<HTMLDivElement>(null);
  const [threeState, setThreeState] = useState<ThreeStateContexType>({
    camera: new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    ),
    controls: null as null | OrbitControls,
    renderer: new THREE.WebGLRenderer(),
    scene: new THREE.Scene(),
  });

  const { camera, renderer, scene } = threeState;
  useEffect(() => {
    if (!refContainer.current) return;

    camera.position.set(0, 5, 10);

    const { clientHeight, clientWidth } = refContainer.current;
    renderer.setSize(clientWidth, clientHeight);
    refContainer.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    setThreeState((prev) => ({ ...prev, controls }));

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.domElement.remove();
      renderer.dispose();
      controls.dispose();
    };
  }, [camera, renderer, scene]);

  useEffect(() => {
    const resizeRenderer = () => {
      if (renderer.domElement) {
        const { clientHeight, clientWidth } = renderer.domElement;
        renderer.setSize(clientWidth, clientHeight);
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener('resize', resizeRenderer);
    return () => window.removeEventListener('resize', resizeRenderer);
  }, [camera, renderer]);

  return (
    <ThreeContext.Provider value={threeState}>
      <div className="w-screen h-screen" ref={refContainer}></div>
      {children}
    </ThreeContext.Provider>
  );
}

export function useThreeScene(): ThreeStateContexType {
  return useContext(ThreeContext) as ThreeStateContexType;
}
