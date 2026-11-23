// Per-clinic settings. In the product this file is written by the setup screen;
// for the prototype, edit it by hand.
export const CONFIG = {
  brand: "Life Around Us",
  // Controller overlay is opt-in on every device. Gesture navigation remains active.
  touchControls: false,

  clinic: {
    name: "Explorer",
    welcome: "Please relax and enjoy the ride.",
    logo: null,                        // e.g. "assets/clinic/logo.png" (clinic-owned)
  },

  // Start-up: title card while loading, then a 175-frame (~2.9 s) opening
  // (see motion.js). Any key, click or touch skips it.
  // Turn off for kiosk screens here, or launch with --no-intro / ?intro=0.
  intro: {
    enabled: true,
    sound: "soft",                     // "soft" (synthesised, original) or "none"
    volume: 0.22,
  },

  units: "C",                         // "C" or "F"
  clock: "auto",                       // "auto" (follows locale), "12h" or "24h"
  distance: "km",                      // "km" or "mi" (storm winds, the ISS's height, earthquake depth and distance)
  textSize: 1,                         // 0.9 small, 1 normal, 1.15 large, 1.3 extra large (city names, headlines, cards)
  locale: undefined,                   // e.g. "en-US"; undefined = system language

  // The large city card on the left (country, city, time, weather). Off:
  // the globe is centred and the city names on the globe carry the info.
  showCityCard: false,

  // News strip at the bottom for the current city (each part can be switched off).
  live: {
    newsRefreshHours: 3,               // a city's headlines are fetched again after this long
    photos: true,                     // city photos from Wikimedia Commons (credited)
    webcams: true,                     // app/data/city_cams.txt (each camera's terms apply)
    news: true,                        // Google News headlines via the shell; calmMode filters them
    liveClouds: true,                  // the real cloud cover (EUMETSAT's global satellite composite, every 3 h)
    cloudRefreshHours: 1,              // check for a newer cloud map this often
    // Live events (the PS3 port's earthquake and storm stops). The options
    // menu (O / Tab, Triangle) can change these; its choices are remembered.
    quakes: true,                      // USGS earthquakes, flown to when they appear
    quakeMinMagnitude: 6.0,
    quakeHours: 3,                     // the old project (v1.2): the last 3 hours, matching its refresh
    quakeRefreshMinutes: 10,
    storms: true,                      // GDACS tropical storms (209 km/h winds and up, last 18 h)
    stormRefreshMinutes: 180,          // the old project (v1.3): at start-up and every 3 hours
    rumble: true,                      // controller rumble when arriving at an earthquake
  },

  // Camera motion and timing (auto tour, manual control, fades) are in
  // motion.js. Only per-clinic choices live here.
  tour: {
    driftDegreesPerSecond: 0.04,       // the globe turns slowly under the camera after arrival
    showCityLabels: true,              // markers and names of tour cities on the globe
  },

  // Regional detail around the current city (sharper than the global map),
  // streamed as Web-Mercator tiles {z}/{y}/{x} from NASA GIBS. Public domain.
  regional: {
    day: {
      url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/BlueMarble_ShadedRelief_Bathymetry/default/GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpeg",
      maxZoom: 8,
      credit: "NASA GIBS",
    },
    night: {
      url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_Black_Marble/default/2016-01-01/GoogleMapsCompatible_Level8/{z}/{y}/{x}.png",
      maxZoom: 8,
      credit: "NASA GIBS",
    },
  },

  weather: {
    refreshHours: 3,                   // as the old project: one batched request every 3 h (33 of the free daily calls)
    // Open-Meteo's free endpoint is for non-commercial use only. Paying
    // customers must use a commercial key (customer-api.open-meteo.com).
    apiKey: "",
  },

  // Calm mode: the news strip leaves out disaster, war, crime and medical-fear headlines.
  calmMode: true,

  // The viewer's own city, visited right after the first stop on every
  // launch: a tour city's name, e.g. "Halifax". null: found automatically from
  // this PC's time zone and its internet address's rough location.
  homeCity: null,

  // Frame rate cap. 0: one frame per display refresh (60, 120, 144 Hz...).
  // 60 holds it to the old port's 60 fps.
  maxFps: 0,

  // The old app's soft, dreamy look, ported from its own bloom pass: the globe
  // mixed half and half with a quarter-size blurred copy of itself (see
  // main.js "the old look"), plus slightly soft text. 1: like the old app,
  // 0.5: light (a quarter of the blur), 0: off (crisp).
  // Options > Settings > Globe > Old Look.
  oldLook: 1,

  // The first prototype's city close-up (a low, tilted view that circles each
  // city over satellite tiles, with real relief). Options > Settings > Globe > City Close-Up.
  cityCloseUp: false, // Public web uses globe view; no Windows tile cache
  tiltShift: true,                     // the close-ups' miniature look: top and bottom softly out of focus
  // The radio's On Demand: a folder called "On Demand" on the viewer's Desktop
  // (%DESKTOP% is the real Desktop, OneDrive or not; other %VARS% are expanded
  // too). One tile per song in it; a folder.jpg or cover.jpg there is the cover.
  onDemand: { folder: "%DESKTOP%\\On Demand" },
  satelliteVolClouds: true,           // Satellite Mode: volumetric clouds (a lit 3D layer) instead of the flat cloud map
  satelliteSunsetLook: true,          // Satellite Mode: the view follows the sun over the day side (sunrise to sunset, while it is low enough to share the frame)
  satelliteSpeed: "timelapse",         // Satellite Mode (Options > Settings > Satellite Mode): "timelapse" (18.75x), "real" or "fast" (60x)
  theatre: "off",                   // Theatre Mode: "off", "semi" (no name card) or "full" (no name card or logo)
  lensFlare: true,                     // a camera lens flare when the view faces the sun (strongest at the Earth's rim)
  moon: false,                         // the Moon (removed at the owner's request, 2026-11-22: no Moon, moonlight or Moon flare; not in Options)
  stormSpirals: true,                  // a slowly turning cloud spiral with an eye over every live Category 4+ storm
  volcanoes: true,                     // a red glow and ash plume over erupting volcanoes of VEI 3 and up (NASA EONET + Smithsonian GVP), every 12 h
  aurora: true,                        // aurora over the poles at night, following the live Kp index (NOAA SWPC)
  glitter: true,                       // the sun sparkling on the sea along its reflection (globe and close-ups)
  lightning: true,                     // lightning flashing in the live storms' clouds at night
  // Its imagery, as the prototype had it. DAY: Sentinel-2 cloudless by EOX --
  // free for NON-COMMERCIAL use only. NIGHT: NASA GIBS Black Marble (public domain).
  cityCloseUpTiles: {
    day: {
      key: "day",                      // the app keeps these tiles itself (shell/TileStore.cs)
      url: "https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2024_3857/default/g/{z}/{y}/{x}.jpg",
      maxZoom: 14,
      credit: "Sentinel-2 cloudless by EOX (modified Copernicus data)",
    },
    night: {
      key: "night",
      url: "https://gibs.earthdata.nasa.gov/wmts/epsg3857/best/VIIRS_Black_Marble/default/2016-01-01/GoogleMapsCompatible_Level8/{z}/{y}/{x}.png",
      maxZoom: 8,
      credit: "NASA GIBS",
    },
    // RELIEF: Terrain Tiles on AWS Open Data (SRTM and other public sources).
    terrain: {
      key: "terrain",
      url: "https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png",
      maxZoom: 12,
      credit: "Terrain Tiles (Mapzen, AWS Open Data)",
    },
  },

  // City night lights twinkle (the original's animated noise). Off: steady lights.
  nightTwinkle: false,

  // The PS3 port's sound effects (app/sfx, slots in data/soundeffect.xml).
  sfx: {
    enabled: true,                     // the menu sounds
    volume: 0.55,
    jingles: 1,                        // the turning / zooming sounds: 0 off .. 2 (Options > Settings > Sound > Jingles)
  },

  // The old port's wave.mp3 loop under the music (options: Music > Background Sound).
  ambient: {
    enabled: true,
    volume: 0.5,                       // the wave loop: 0 .. 1 (0.5 = its usual level; Options > Settings > Sound > Background Sound)
  },

  music: {
    enabled: true,
    // First start: the original soundtrack. Options > Music changes it, and
    // the choice is remembered. "all": the soundtrack then your Desktop\Music
    // songs; "ost": the soundtrack; "mine": your songs.
    source: "ost",
    // The original soundtrack (Life with PlayStation's ThemeSong06, 03, 01, 02,
    // 04, 05: the old port's playlist.txt order), here as app/music/Music6.mp3 etc.
    soundtrack: ["music/Music6.mp3", "music/Music3.mp3", "music/Music1.mp3", "music/Music2.mp3", "music/Music4.mp3", "music/Music5.mp3"],
    // Royalty-free or clinic-owned audio only, placed in app/music/.
    tracks: [],                        // e.g. ["music/track01.mp3"]
    volume: 0.35,
  },
};
