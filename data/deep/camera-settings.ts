import type { DeepConcept } from "@/lib/deep-types";

export const cameraSettingsConcept: DeepConcept = {
  id: "camera-settings",
  group: "render",
  title: { en: "Camera Settings", ur: "Camera Settings" },
  tagline: {
    en: "Your render is a photograph. Camera settings decide how that photo is framed: focal length, depth of field, exposure, sensor size.",
    ur: "Tumhara render aik photograph. Camera settings decide karti us photo ka framing: focal length, DOF, exposure, sensor size.",
  },
  shortcuts: [
    { keys: "Numpad 0", meaning: { en: "Look through the active camera.", ur: "Active camera se dekho." } },
    { keys: "Ctrl + Numpad 0", meaning: { en: "Set the selected object as the active camera.", ur: "Selected object ko active camera set." } },
    { keys: "G + Z Z (in camera view)", meaning: { en: "Move forward/backward along the camera's view axis (dolly).", ur: "Camera view axis ke saath aagay/peechay (dolly)." } },
  ],
  whatItIs: [
    {
      en: "A Blender camera is just a special object. It has all the standard transforms plus camera-specific properties: focal length, sensor size, depth of field, clipping. The active camera (camera icon highlighted) is what your final render shows.",
      ur: "Blender camera special object. Standard transforms + camera-specific properties: focal length, sensor size, DOF, clipping. Active camera (camera icon highlighted) jo final render dikhata.",
    },
  ],
  variants: {
    heading: { en: "Camera properties", ur: "Camera properties" },
    items: [
      {
        name: "Focal Length (mm)",
        description: { en: "How wide the lens is. 18mm = wide angle (everything fits, distortion at edges). 50mm = 'normal' (matches human eye). 85mm+ = telephoto (compressed, beautiful for portraits).", ur: "Lens kitna wide. 18mm = wide angle (sab fit, edges par distortion). 50mm = 'normal' (human eye match). 85mm+ = telephoto (compressed, portraits ke liye beautiful)." },
        when: { en: "Architecture / interior: 24-35mm. Product viz: 50-85mm. Character close-ups: 85-135mm.", ur: "Architecture / interior: 24-35mm. Product viz: 50-85mm. Character close-ups: 85-135mm." },
      },
      {
        name: "Type, Perspective",
        description: { en: "Default. Real camera with vanishing points. Things farther away look smaller.", ur: "Default. Real camera vanishing points ke saath. Door wali cheezain chhoti." },
      },
      {
        name: "Type, Orthographic",
        description: { en: "No perspective. Parallel lines stay parallel. Used for technical/architectural views, product silhouettes, isometric games.", ur: "No perspective. Parallel lines parallel. Technical/architectural views, product silhouettes, isometric games." },
      },
      {
        name: "Type, Panoramic",
        description: { en: "Equirectangular for VR, fisheye for stylized. Cycles only (EEVEE doesn't support).", ur: "Equirectangular VR ke liye, fisheye stylized ke liye. Sirf Cycles (EEVEE support nahi)." },
      },
      {
        name: "Sensor Size (mm)",
        description: { en: "Virtual sensor dimensions. Default 36mm = full-frame DSLR. Smaller sensor (like 22.3mm) = APS-C crop, fewer things fit.", ur: "Virtual sensor dimensions. Default 36mm = full-frame DSLR. Smaller (22.3mm) = APS-C crop, kam cheezain fit." },
      },
      {
        name: "Depth of Field, F-Stop",
        description: { en: "Blur amount. Low f-stop (f/1.4) = strong blur, only focus point sharp. High (f/22) = everything sharp. Real cinematic look comes from f/2 to f/4.", ur: "Blur amount. Low f-stop (f/1.4) = strong blur, sirf focus point sharp. High (f/22) = sab sharp. Real cinematic look f/2 se f/4." },
      },
      {
        name: "Depth of Field, Focus Distance",
        description: { en: "How far the focus plane is from the camera. Use 'Focus Object' field instead to lock focus to a moving object.", ur: "Focus plane camera se kitna door. 'Focus Object' field use karke moving object par focus lock." },
      },
      {
        name: "Clip Start / End",
        description: { en: "Distance range the camera 'sees'. Anything closer than Start or farther than End is invisible. Increase End for huge scenes (cities, planets).", ur: "Camera kitne range tak 'dekhe'. Start se qareeb ya End se door invisible. Bare scenes (cities, planets) ke liye End barhao." },
      },
      {
        name: "Composition Guides",
        description: { en: "Overlay options: Rule of Thirds, Center, Diagonal, Golden Ratio, Center Diagonal. Helps frame shots without leaving Blender.", ur: "Overlay options: Rule of Thirds, Center, Diagonal, Golden Ratio, Center Diagonal. Bina Blender chhore shots frame karne ki madad." },
      },
      {
        name: "Passepartout",
        description: { en: "The dimming outside the camera frame in viewport. 0.95 alpha = nearly black border. Helps you focus on the framed area.", ur: "Viewport mein camera frame ke bahar ka dimming. 0.95 alpha = nearly black border. Framed area par focus karne ki madad." },
      },
      {
        name: "Lock Camera to View",
        description: { en: "N panel → View tab → Lock → Camera to View. Now your viewport navigation moves the camera. Easiest way to compose a shot.", ur: "N panel → View tab → Lock → Camera to View. Ab viewport navigation camera move karta. Shot compose karne ka easiest tareeqa." },
      },
    ],
  },
  recipe: {
    heading: { en: "Cinematic camera setup", ur: "Cinematic camera setup" },
    steps: [
      { step: { en: "Add Camera (`Shift+A → Camera`). Select it, `Ctrl+Numpad 0` to make active.", ur: "Camera add (`Shift+A → Camera`). Select, `Ctrl+Numpad 0` active." } },
      { step: { en: "Numpad 0 to look through. Set focal length to 50mm.", ur: "Numpad 0 dekhne ke liye. Focal length 50mm." } },
      { step: { en: "Enable Lock Camera to View in N panel. Compose the shot by orbiting/panning.", ur: "N panel mein Lock Camera to View. Orbit/pan karke shot compose." } },
      { step: { en: "Enable Depth of Field. Set Focus Object to your subject. Set F-Stop to 2.8.", ur: "Depth of Field enable. Focus Object subject. F-Stop 2.8." } },
      { step: { en: "Background blurs cinematically. Subject stays sharp.", ur: "Background cinematically blur. Subject sharp." } },
    ],
  },
  pitfalls: [
    { en: "Wide-angle distortion on close subjects: faces look stretched. Use 50mm+ for character work.", ur: "Wide-angle distortion close subjects par: faces stretched. Character work ke liye 50mm+." },
    { en: "DOF blur looks pixelated/grainy: increase samples or use denoiser. EEVEE has its own DOF samples slider in Render → Depth of Field.", ur: "DOF blur pixelated/grainy: samples barhao ya denoiser. EEVEE mein Render → Depth of Field mein apne samples." },
    { en: "Camera clips through wall in animation: increase Clip Start; or move camera further from the wall.", ur: "Camera animation mein wall through clip: Clip Start barhao; ya camera wall se door." },
    { en: "Rendered frame doesn't match viewport view: you weren't in camera view (Numpad 0). Viewport is just navigation; render uses the active camera object.", ur: "Render viewport view se match nahi: tum camera view mein nahi the (Numpad 0). Viewport sirf navigation; render active camera use." },
  ],
  related: [
    { id: "samples-denoising", note: { en: "DOF noise needs samples to clean up.", ur: "DOF noise saaf karne ke liye samples chahiye." } },
  ],
};
