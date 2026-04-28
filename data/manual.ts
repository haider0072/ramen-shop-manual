import type { Manual } from "@/lib/types";
import { introChapter } from "./chapters/01-intro";
import { basePlaneChapter } from "./chapters/02-base-plane";
import { buildingShapeChapter } from "./chapters/03-building-shape";
import { duplicateSeparateChapter } from "./chapters/04-duplicate-separate";
import { signFrameChapter } from "./chapters/05-sign-frame";
import { curbChapter } from "./chapters/06-curb";
import { detailsChapter } from "./chapters/07-details";
import { cameraChapter } from "./chapters/08-camera";
import { bevelChapter } from "./chapters/09-bevel";
import { cablesChapter } from "./chapters/10-cables";
import { chairChapter } from "./chapters/11-chair";
import { ramenChapter } from "./chapters/12-ramen";
import { glassChapter } from "./chapters/13-glass";
import { materialsChapter } from "./chapters/14-materials";
import { interiorLightChapter } from "./chapters/15-interior-light";
import { exteriorLightChapter } from "./chapters/16-exterior-light";
import { fogChapter } from "./chapters/17-fog";
import { texturingChapter } from "./chapters/18-texturing";
import { animationChapter } from "./chapters/19-animation";
import { renderChapter } from "./chapters/20-render";

export const manual: Manual = {
  videoId: "K7__BjW4UWE",
  title: "Ramen Shop. A Blender Field Manual.",
  chapters: [
    introChapter,
    basePlaneChapter,
    buildingShapeChapter,
    duplicateSeparateChapter,
    signFrameChapter,
    curbChapter,
    detailsChapter,
    cameraChapter,
    bevelChapter,
    cablesChapter,
    chairChapter,
    ramenChapter,
    glassChapter,
    materialsChapter,
    interiorLightChapter,
    exteriorLightChapter,
    fogChapter,
    texturingChapter,
    animationChapter,
    renderChapter,
  ],
};
