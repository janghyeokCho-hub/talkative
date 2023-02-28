import { useEffect } from "react";
import * as deviceConnector from "@/lib/deviceConnector";
import * as socketActions from "@/lib/socket/socketActions";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/modules";

const SocketContainer = () => {
  const connected = useSelector((state: RootStateType) => state.socket.type);

  const dispatch = useDispatch();
  useEffect(() => {
    deviceConnector.socketConnect({
      onConnected: socketActions.handleConnect(dispatch),
    });
  }, []);

  useEffect(() => {
    if (connected === "DC") {
      if (deviceConnector.isMainWindow()) {
        deviceConnector.closeAllChildWindow();
      }
    }
  }, [connected]);
  return null;
};

export default SocketContainer;
