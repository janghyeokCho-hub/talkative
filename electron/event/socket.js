import { BrowserWindow } from "electron";
import socketio from "socket.io-client";

export const reqSocketConnect = (_, args) => {
  const preFunctions = {};
  if (CONN_SOCKET === null || CONN_SOCKET.disconnect) {
    CONN_SOCKET = socketio("http://192.168.11.80", {
      forceNew: true,
      transports: ["websocket"],
      reconnection: false,
    });
    CONN_SOCKET.on("message", (data) => {
      if (data.result === "success") {
        BrowserWindow.getAllWindows().forEach((win) => {
          if (win) {
            win.webContents.send("socket-event", {
              channel: "onConnected",
              payload: null,
            });
          }
        });
      }
    });
    CONN_SOCKET.on("connect", () => {});
    CONN_SOCKET.on("connect_error", (event) => {});
    CONN_SOCKET.on("connect_timeout", () => {});
    CONN_SOCKET.on("error", (event) => {});
  }
};
