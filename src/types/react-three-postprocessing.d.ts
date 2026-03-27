declare module "@react-three/postprocessing" {
  export { EffectComposer } from "postprocessing";
  export * from "postprocessing";

  import { ReactNode, ComponentProps } from "react";
  import { Effect, EffectComposer as PPEffectComposer } from "postprocessing";

  export interface EffectComposerProps {
    children?: ReactNode;
    enabled?: boolean;
    depthBuffer?: boolean;
    disableNormalPass?: boolean;
    enableNormalPass?: boolean;
    stencilBuffer?: boolean;
    autoClear?: boolean;
    resolutionScale?: number;
    multisampling?: number;
    renderPriority?: number;
    camera?: THREE.Camera;
    scene?: THREE.Scene;
  }

  export function EffectComposer(props: EffectComposerProps): JSX.Element;

  export interface N8AOProps {
    color?: string | THREE.Color;
    aoRadius?: number;
    intensity?: number;
    aoSamples?: number;
    denoiseSamples?: number;
    denoiseRadius?: number;
    distanceFalloff?: number;
    screenSpaceRadius?: boolean;
    halfRes?: boolean;
    depthAwareUpsampling?: boolean;
    [key: string]: unknown;
  }

  export function N8AO(props: N8AOProps): JSX.Element;
}
