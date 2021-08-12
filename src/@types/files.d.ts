/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.json' {
  const value: any;
  export default value;
}

// typings.d.ts
declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
