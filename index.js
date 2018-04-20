module.exports.onWindow = browserWindow =>
  browserWindow.setVibrancy("ultra-dark");

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
  fontFamily:
    '"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace',
  fontSize: 14,
};

// Check if Verminal configuration exists in ~/.hyper.js. If not, fall back to default configuration.
const checkConfig = function(config, setting) {
  return (
    (config.hasOwnProperty("verminal") && config.verminal[setting]) ||
    defaultConfig[setting]
  );
};

exports.decorateConfig = config =>
  Object.assign({}, config, {
    fontFamily: checkConfig(config, "fontFamily"),
    fontSize: checkConfig(config, "fontSize"),
    fontWeight: checkConfig(config, "fontWeight"),
    fontWeightBold: checkConfig(config, "fontWeightBold"),
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
      lightWhite: foregroundColor,
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

    .hyper-search-wrapper {
      font-family: "SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace !important;
      position: absolute !important;
      top: auto !important;
      bottom: 0 !important;
      left: 0 !important;
      right: 0 !important;
      border: 0 !important;
      padding: 0 !important;
      background-color: rgba(255, 255, 255, .1) !important;
      display: flex;
      align-items: center;
      width: 100% !important;
      height: 31px !important;
      border-radius: 0px !important;
      opacity: 1 !important;
    }

    .hyper-search-wrapper button {
      top: 0 !important;
      opacity: 0.8 !important;
      padding: 0 6px;
      cursor: pointer;
      width: 45px !important;
      background: none !important;
      color: rgba(255, 255, 255, 0.65) !important;
    }
    
    .hyper-search-wrapper button:hover {
      opacity: 1.0 !important;
    }
    
    .hyper-search-wrapper button:nth-of-type(1) {
      border-radius: 6px 0 0 6px !important;
      border-right: none !important;
    }

    .hyper-search-wrapper button:nth-of-type(2) {
      border-radius: 0 4px 4px 0 !important;
    }

    #hyper-search-input {
      font-family: "SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace !important;
      background-color: none !important;
      padding: 8px 16px !important;
      color: #fff !important;
      width: 100%;
    }
  `,
  });
