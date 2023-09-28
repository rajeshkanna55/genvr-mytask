import aipic from '../assets/aipic.jpg';
import profile from '../assets/profile.png';
import pic5 from '../assets/pic5.jpg';
import pic6 from '../assets/pic6.jpg';
import pic7 from '../assets/pic7.jpg';
import pic8 from '../assets/pic8.jpg';
import pic9 from '../assets/pic9.jpg';
import pic10 from '../assets/pic10.jpg';
import pic11 from '../assets/pic11.jpg';
import pic12 from '../assets/pic12.jpg';
import pic13 from '../assets/pic13.jpg';
import pic14 from '../assets/pic14.png';
import pic15 from '../assets/pic15.png';
import pic16 from '../assets/pic16.png';
import pic17 from '../assets/pic17.png';
import pic19 from '../assets/pic19.png';
import pic20 from '../assets/pic20.png';
import pic21 from '../assets/pic21.png';
import img1 from '../assets/3d_character.webp';
import adorable from '../assets/adorable.webp';
import animePotrait from '../assets/anime_potrait.webp';
import archViz from '../assets/arch_viz.webp';
import bnwFilmNoir from '../assets/b_n_w_film_noir.png';
import beautifulPotrait from '../assets/beautiful_potrait.webp';
import building from '../assets/building.webp';
import caricature from '../assets/caricature.webp';
import cgiCharacter from '../assets/cgi_character.webp';
import comicArt from '../assets/comic_art.webp';
import controlRoom from '../assets/control_room.webp';
import cuteCreature from '../assets/cute_creature.png';
import cuteCreatureWebp from '../assets/cute_creature.webp';
import cuteKawaii from '../assets/cute_kawaii.webp';
import cyberPunk from '../assets/cyber_punk.webp';
import dark from '../assets/dark.webp';
import dataViz from '../assets/data_viz.webp';
import defaultNegLowToken from '../assets/default_neg_low_token.png';
import defaultNegSfw from '../assets/default_neg_sfw.png';
import defaultNeg from '../assets/default_neg.png';
import digitalArt from '../assets/digital_art.webp';
import digitalPainting from '../assets/digital_painting.png';
import digitalPotrait from '../assets/digital_potrait.webp';
import dramatic from '../assets/dramatic.webp';
import drawing1 from '../assets/drawing1.webp';
import drawing2 from '../assets/drawing2.webp';
import fashion from '../assets/fashion.webp';
import figurine from '../assets/figurine.webp';
import ghibli from '../assets/ghibli.png';
import girl from '../assets/girl.png';

export const imageList = [
  img1,
  adorable,
  aipic,
  animePotrait,
  archViz,
  bnwFilmNoir,
  beautifulPotrait,
  building,
  caricature,
  cgiCharacter,
  comicArt,
  controlRoom,
  cuteCreature,
  cuteCreatureWebp,
  cuteKawaii,
  cyberPunk,
  dark,
  dataViz,
  defaultNegLowToken,
  defaultNegSfw,
  defaultNeg,
  digitalArt,
  digitalPainting,
  digitalPotrait,
  dramatic,
  drawing1,
  drawing2,
  fashion,
  figurine,
  ghibli,
  girl,
];



export const lora = [
  { id: 1, name: "Athena", image: aipic },
  { id: 2, name: "Aphrodite", image: profile },
  { id: 3, name: "Gaya", image: pic5 },
  { id: 4, name: "Malena", image: pic6 },
  { id: 5, name: "Vengi", image: pic7 },
  { id: 6, name: "Mars", image: pic8 },
  { id: 7, name: "Heali", image: pic9 },
  { id: 8, name: "Poseidon", image: pic10 },
  { id: 9, name: "seoul", image: pic11 },
  { id: 10, name: "Vins", image: pic12 },
  { id: 11, name: "Halena", image: pic13 },
  { id: 12, name: "Faye", image: pic14 },
  { id: 13, name: "Thor", image: pic15 },
  { id: 14, name: "Zeus", image: pic16 },
  { id: 15, name: "Helious", image: pic17 },
  { id: 16, name: "Heimdall", image: pic19 },
  { id: 17, name: "Hercules", image: pic20 },
  { id: 18, name: "Odin", image: pic21 },
];

export const select = {
  Generation: [
    "Text Based",
    "Image Based",
    "Controlled Generation",
    "By reference",
    "Variations",
  ],
  Editing: [
    "Free style paint",
    "Image filters",
    "Finetune",
    "Resize and crop",
    "Inpainting",
  ],
  Extra: [
    "Upscaling",
    "Style transfer",
    "Face swap",
    "Relighting",
    "Object removal",
    "Foreground change",
    "Background change",
    "Product photography",
    "Change by prompt",
    "Click and change",
    "T-shirt generator",
  ],
  Explore: [
    "Base models",
    "Loras",
    "Textual Inversions",
    "Styles",
    "Artist styles",
    "Aesthetic embeddings",
  ],
  "Lora Model Gallery": ["My models", "Saved models", "Publicly shared models"],
};

export const categories = [
  "All",
  "Celebrity",
  "PhotoRealistic",
  "Realistic",
  "Style",
  "Lora",
  "Art Style",
  "Illustration",
  "Anime",
  "Character",
  "Game Character",
  "Video Game",
  "Clothing",
  "Fantasy",
  "Concept",
  "Guide",
  "Others",
];

export const fixedColors = [
  '#E9A292',
  '#E9CE92',
  '#D9E992',
  '#AEE992',
  '#92E9A2',
  '#92E9CE',
  '#A8DF8E',
  '#D67BFF',
  '#CAEDFF',
  '#ADC4CE',
  '#7EAA92',
  '#FBA1B7',
  '#FFDDCC',
  '#9BE8D8',
  '#FF9B9B',
  '#967E76',
  '#79E0EE',
  '#C4DFDF',
  '#FEA1A1',
  '#E3F2C1',
  '#D6E8DB',
  '#FEFF86',
  '#FFF2CC',
  '#B2A4FF',
  '#3A98B9'
];
export const imgData = [
  { id: 1, name: "Image 1", img: img1 },
  { id: 2, name: "Adorable", img: adorable },
  { id: 3, name: "Aipic", img: aipic },
  { id: 4, name: "Anime Potrait", img: animePotrait },
  { id: 5, name: "Arch Viz", img: archViz },
  { id: 6, name: "BNW Film Noir", img: bnwFilmNoir },
  { id: 7, name: "Beautiful Potrait", img: beautifulPotrait },
  { id: 8, name: "Building", img: building },
  { id: 9, name: "Caricature", img: caricature },
  { id: 10, name: "CGI Character", img: cgiCharacter },
];


export const loraImg = [
  { img: dark },
  { img: dataViz },
  { img: defaultNegLowToken },
  { img: defaultNegSfw },
  { img: defaultNeg },
  { img: digitalArt },
  { img: digitalPainting },
  { img: digitalPotrait },
  { img: dramatic },
  { img: drawing1 },
  { img: drawing2 },
  { img: fashion },
  { img: figurine },
  { img: ghibli },
  { img: girl },
];

export const filterNames = [
  'horizontal_lines', 'extreme_offset_blue', 'extreme_offset_green',
  'offset_green', 'extra_offset_blue', 'extra_offset_red', 'extra_offset_green',
  'extreme_offset_red', 'specks_redscale', 'eclectic', 'pane', 'diagonal_lines',
  'green_specks', 'casino', 'yellow_casino', 'green_diagonal_lines', 'offset',
  'offset_blue', 'neue', 'sunset', 'specks', 'wood', 'lix', 'ryo', 'bluescale',
  'solange', 'evening', 'crimson', 'teal_min_noise', 'phase', 'dark_purple_min_noise',
  'coral', 'darkify', 'incbrightness', 'incbrightness2', 'invert', 'sat_adj', 'lemon',
  'pink_min_noise', 'frontward', 'vintage', 'perfume', 'serenity', 'pink_aura', 'haze',
  'cool_twilight', 'blues', 'horizon', 'mellow', 'solange_dark', 'solange_grey',
  'zapt', 'eon', 'aeon', 'matrix', 'cosmic', 'min_noise', 'red_min_noise', 'matrix2',
  'purplescale', 'radio', 'twenties', 'ocean', 'a', 'pixel_blue', 'greyscale', 'grime',
  'redgreyscale', 'retroviolet', 'greengreyscale', 'warmth', 'green_med_noise',
  'green_min_noise', 'blue_min_noise', 'rosetint', 'purple_min_noise'
];

export const filterObjects = filterNames.map((filterName) => ({
  filter: filterName,
}));


