import colorPalette from "./colorPalette";

const base = {
  blue: "#1890ff",
  purple: "#722ed1",
  cyan: "#13c2c2",
  green: "#52c41a",
  magenta: "#eb2f96",
  pink: "#eb2f96",
  red: "#f5222d",
  orange: "#fa8c16",
  yellow: "#fadb14",
  volcano: "#fa541c",
  geekblue: "#2f54eb",
  lime: "#a0d911",
  gold: "#faad14"
};

const colors = {};

Object.keys(base).map(key => {
  for (let i = 1; i < 11; i++) {
    if (i === 6) {
      colors[`${key}${i}`] = base[key];
    } else {
      colors[`${key}${i}`] = colorPalette(base[key], i);
    }
  }
});

export default colors;
