module.exports.onWindow = browserWindow => browserWindow.setVibrancy("dark");

const foregroundColor = "#fff";
const backgroundColor = "rgba(0, 0, 0, .65)";
const overlap = "rgba(0, 0, 0, .15)";
const red = "#FF3B30";
const green = "#4CD964";
const yellow = "#FFCC00";
const blue = "#0095FF";
const magenta = "#FF2D55";
const cyan = "#5AC8FA";
const white = "#FFFFFF";

exports.decorateConfig = config =>
  Object.assign({}, config, {
    fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',
    fontSize: 12,
    backgroundColor,
    foregroundColor,
    borderColor: overlap,
    cursorColor: blue,
    colors: {
      black: backgroundColor,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack: "#686868",
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor
    },
    css: `
    ${config.css}
    .hyper_main {
      border: none !important;
    }
    .header_header {
      background-color: ${overlap} !important;
    }
    .tabs_borderShim {
      border-color: transparent !important;
    }
    .tab_tab {
      border: 0;
    }
    .tab_textActive {
      background: rgba(255, 255, 255, .05);
    }
  `
  });
