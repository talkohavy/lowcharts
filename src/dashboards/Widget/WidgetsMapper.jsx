import { lazy } from 'react';

const widgetsMapper = {
  line: { renderer: lazy(() => import('./Line/Renderer')) },
  column: { renderer: lazy(() => import('./Column/Renderer')) },
  text: { renderer: lazy(() => import('./Text/Renderer')) },
};

export { widgetsMapper };
