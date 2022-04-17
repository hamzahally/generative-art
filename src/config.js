const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'brick colour', number: 2 },
];
  
const format = {
    width: 35,
    height: 35
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };