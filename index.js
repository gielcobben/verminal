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
const defaultConfig = {
  fontFamily: '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',
  fontSize: 12,
  foregroundColor,
  backgroundColor,
  borderColor: overlap,
  cursorColor: blue,
  minimal: false,
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
    lightWhite: foregroundColor,
  }
};

// Check if Verminal configuration exists in ~/.hyper.js. If not, fall back to default configuration.
const checkConfig = (config, setting) => (config.hasOwnProperty("verminal") && config.verminal[setting]) || defaultConfig[setting]
const checkConfigColor = (config, colorName) => (config.hasOwnProperty("verminal") && config.verminal.colors && config.verminal.colors[colorName]) || defaultConfig.colors[colorName]
// Setup vibrancy
exports.onWindow = browserWindow => browserWindow.setVibrancy("ultra-dark")

// Setup configs
exports.decorateConfig = config => {

  return Object.assign({}, config, {
        fontFamily: checkConfig(config, "fontFamily"),
        fontSize: checkConfig(config, "fontSize"),
        fontWeight: checkConfig(config, "fontWeight"),
        fontWeightBold: checkConfig(config, "fontWeightBold"),
        backgroundColor: checkConfig(config, "backgroundColor"),
        foregroundColor: checkConfig(config, "foregroundColor"),
        borderColor: checkConfig(config, "borderColor"),
        cursorColor: checkConfig(config, "cursorColor"),
        minimal: checkConfig(config, "minimal"),
        colors: {
          black: checkConfigColor(config, "black"),
          red: checkConfigColor(config, "red"),
          green: checkConfigColor(config, "green"),
          yellow: checkConfigColor(config, "yellow"),
          blue: checkConfigColor(config, "blue"),
          magenta: checkConfigColor(config, "magenta"),
          cyan: checkConfigColor(config, "cyan"),
          white: checkConfigColor(config, "white"),
          lightBlack: checkConfigColor(config, "lightBlack"),
          lightRed: checkConfigColor(config, "lightRed"),
          lightGreen: checkConfigColor(config, "lightGreen"),
          lightYellow: checkConfigColor(config, "lightYellow"),
          lightBlue: checkConfigColor(config, "lightBlue"),
          lightMagenta: checkConfigColor(config, "lightMagenta"),
          lightCyan: checkConfigColor(config, "lightCyan"),
          lightWhite: checkConfigColor(config, "lightWhite")
        },
        css: `
    .hyper_main {
      border: none !important;
    }

    .header_header {
      background-color: ${config && config.verminal && config.verminal.minimal ? 'transparent' : overlap} !important;
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
    .hyper-search-wrapper {
        border: 0 !important;
        padding: 0 !important;
        background-color: transparent !important;
        display: flex;
        opacity: 0.8 !important;
      }
    .hyper-search-wrapper button {
      top: 0 !important;
      opacity: 0.8 !important;
      padding: 0 6px;
      cursor: pointer;
    }
    .hyper-search-wrapper button:hover {
      opacity: 1.0 !important;
    }
    .hyper-search-wrapper button:nth-of-type(1) {
      border-radius: 4px 0 0 4px !important;
      border-right: 1px solid #ddd !important;
    }
    .hyper-search-wrapper button:nth-of-type(2) {
      border-radius: 0 4px 4px 0 !important;
    }
    .hyper-search-wrapper:before {
      width: 20px;
      color: #000;
      position: absolute;
      content: "🔍";
      font-size: 10px;
      margin: 7px;
      z-index: 999;
    }
    #hyper-search-input {
      background-color: #fff !important;
      border-radius: 4px;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
      padding: 3px 6px 3px 24px !important;
      color: #000 !important;
      opacity: 0.9 !important;
      margin-right: 2px;
    }
    #hyper-search-input:focus {
      opacity: 1.0 !important;
      box-shadow: 0 1px 10px rgba(0, 0, 0, 1.0);
    }

    ${config.css}
  `,
  })
};
