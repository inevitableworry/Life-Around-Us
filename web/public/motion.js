// Motion and timing parameters (numbers supplied by the product owner).
// Frame counts are at 60 fps; radii are camera distances from Earth's centre
// in Earth radii (R). Per-frame speeds and decays are applied frame-rate
// independently: x += v * f and v *= decay ** f, where f = elapsed seconds * 60.
export const FPS = 60;

export const MOTION = {
  opening: {
    totalFrames: 175,
    logoIn: [0, 20],          // logo fades in
    logoOut: [140, 150],      // logo fades out
    earthIn: [20, 80],        // the Earth fades in behind the logo
    overlaysIn: [160, 175],   // card, labels and header fade in
  },

  autoTour: {
    idleSeconds: 10,          // the auto tour starts after this much idle time
    cityEverySeconds: 60,     // a new city every 60 s
    arrivalPauseSeconds: 15,  // each stop stays this long once the camera has settled (the owner's choice: time to read the news; the old port: 3)
    maxSpeed: 0.5,            // degrees of arc per frame
    easeDecay: 0.98,          // ease-out: each frame covers at most (1 - decay) of what remains
    arrivalEpsilon: 1.0,      // degrees: autopilot_epsilon (layout.xml)
    activateDegrees: 3.0,     // degrees: the destination's glow, name, news and picture come on this close
  },

  // min/max: the auto tour's distances. zoomMin/zoomMax: how close and how
  // far the viewer can zoom by hand (the tour comes back to its own range).
  // travelMax: on a long flight the auto tour climbs this high, so the whole
  // Earth is in view mid-flight (short hops stay lower).
  // The PS3 original's values (data/world/layout.xml): autopilot_min_radius
  // 1.4, autopilot_max_radius 2.8, cam_radius_min0 1.4, cam_radius_max 2.8,
  // seen through its 45-degree lens (fovY below).
  radius: { min: 1.4, max: 2.8, travelMax: 2.8, zoomMin: 1.4, zoomMax: 2.8 },
  fovY: 45,                   // fwWorld: gluPerspective(45, aspect, 0.1, 100)

  manual: {
    latLngStep: 0.025,        // degrees/frame added per input step
    latLngMax: 2.5,
    rotateStep: 0.0005,       // radians/frame per input step (view roll)
    rotateMax: 0.01,
    rotateDecay: 0.95,
    zoomStep: 0.0025,         // R/frame per input step
    zoomMax: 0.025,
    zoomDecay: 0.9,
  },

  // Clouds fade with height, as in the original: none at 1.5 R and closer
  // (zoomed in on a city), full at 2.0 R and further (cloud_radius_min/max,
  // cloud_alpha_min/max), changing by at most 1/30 per frame.
  clouds: {
    fadeRadius: [1.5, 2.0],
    alpha: [0, 1],
    fadeFrames: 30,
    rotatePerFrame: 0.00001,  // radians
  },

  markers: {
    showRadius: [1.0, 2.7],   // city markers and names: marker_radius_min/max (layout.xml)
    // Weather and time under the names. layout.xml has info_radius 1.5-2.1
    // with info_scale_min 0.5, but the code that uses them was not found and
    // the old port keeps the info visible when zoomed out, so it is not hidden.
    infoRadius: [1.0, 2.8],
    // Unselected cities' names and icons. layout.xml says point_fade_alpha
    // 0.3, but in the running LWP-PC port they settle at 44-57 % of the
    // selected city's brightness (measured at 1080p), so 0.5.
    unselectedAlpha: 0.5,
    unselectedFadeFrames: 10,
    zoomFadeFrames: 15,       // fades triggered by crossing a radius band
  },

  overlayCrossFadeSeconds: 0.5,    // showing/hiding the card and other overlays
  cityInfoCrossFadeSeconds: 0.25,  // card content changing city to city

  infoText: { inFrames: 5, holdFrames: 60, outFrames: 5 },
  panelPulseSeconds: 0.5,
};
