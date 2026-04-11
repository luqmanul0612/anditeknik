declare module "*.svg" {
  import { FC, SVGProps } from "react";

  // SVG Component Type
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const content: string; 
  export default content;
}
