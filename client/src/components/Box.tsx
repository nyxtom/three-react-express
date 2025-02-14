import { useEffect } from 'react';
import * as THREE from 'three';

import { useThreeScene } from '../contexts/three-provider';

export function Box() {
  const { scene } = useThreeScene();

  useEffect(() => {
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    return () => {
      scene.remove(cube);
    };
  }, [scene]);

  return null;
}
