const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,//This is the number of images that will be created.
    layersOrder: [//Name should be exactly the same as the folder names in layers folder. Layer organization should also be carefully ordered.
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
    ],
  },
  // {
  //   growEditionSizeTo: 20,//If you want to create another set of images, you can add another layer configuration here. But the 'growEditionSizeTo' should be ('growEditionSizeTo' of the first set + 'number of images you want to create') [eg. 10 + 20 = 30]
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Eyeball" },
  //     { name: "Eye color" },
  //     { name: "Iris" },
  //     { name: "Shine" },
  //     { name: "Bottom lid" },
  //     { name: "Top lid" },
  //     { name: "Goo" },
  //   ],
  // },
];

const shuffleLayerConfigurations = true;//If you want to shuffle the layers order, set this to true. This works relatively well when you have multiple layer configurations. 

const debugLogs = false;//Set this to true if you want to see extra details during rendering.

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

//This puts your extra metadata in the JSON file.
const extraMetadata = {
  // artist: 'Maruf',
  // surname: 'Hossain',
};

const rarityDelimiter = "#";//

const uniqueDnaTorrance = 10000;//This sets your image generation to fail if you dont have enough unique layers. This 

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
