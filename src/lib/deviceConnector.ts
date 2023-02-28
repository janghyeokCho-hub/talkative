import path from "path";
import url from "url";
import * as remote from "@electron/remote";
import { ipcRenderer } from "electron/renderer";

export const socketConnect = (events) => {
  const socket = remote.getGlobal("CONN_SOCKET");
  const eventList = Object.keys(events);

  if (socket === null || socket.connected === false) {
    ipcRenderer.send("req-socket-connect", {
      token: "cykim^d^a9u36kt017j3",
      accessid: "cykim",
      eventList,
    });
  }

  ipcRenderer.removeAllListeners("socket-event");

  ipcRenderer.on("socket-event", (_, args) => {
    const func: Function = events[args.channel].func;
    func(args.payload);
  });
};

export const closeSocket = (type: boolean) => {
  const socket = remote.getGlobal("CONN_SOCKET");
  if (socket !== null && !socket.disconnected) {
    if (type) {
      if (socket.hasListeners("disconnect")) {
        socket.off("disconnect");
      }
      socket.on("disconnect", () => {
        console.log("Socket disconnected success");
      });
    }
    socket.close();
  }
  ipcRenderer.removeAllListeners("socket-event");
};

export const isMainWindow = (): boolean => {
  if (remote) {
    return remote.getCurrentWindow().id === 1;
  } else {
    return false;
  }
};

export const closeAllChildWindow = () => {
  try {
    const allWindows = remote.BrowserWindow.getAllWindows();
    allWindows.forEach((win) => {
      if (win.id !== 1) {
        win.close();
      }
    });
  } catch (e) {}
};
