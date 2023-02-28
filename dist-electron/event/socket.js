var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  reqSocketConnect: () => reqSocketConnect
});
module.exports = __toCommonJS(stdin_exports);
var import_electron = require("electron");
var import_socket = __toESM(require("socket.io-client"));
const reqSocketConnect = (_, args) => {
  const preFunctions = {};
  if (CONN_SOCKET === null || CONN_SOCKET.disconnect) {
    CONN_SOCKET = (0, import_socket.default)("http://192.168.11.80", {
      forceNew: true,
      transports: ["websocket"],
      reconnection: false
    });
    CONN_SOCKET.on("message", (data) => {
      if (data.result === "success") {
        import_electron.BrowserWindow.getAllWindows().forEach((win) => {
          if (win) {
            win.webContents.send("socket-event", {
              channel: "onConnected",
              payload: null
            });
          }
        });
      }
    });
    CONN_SOCKET.on("connect", () => {
    });
    CONN_SOCKET.on("connect_error", (event) => {
    });
    CONN_SOCKET.on("connect_timeout", () => {
    });
    CONN_SOCKET.on("error", (event) => {
    });
  }
};

//# sourceMappingURL=socket.js.map