import { changeSocketConnect } from "@/modules/socket";

export const handleConnect = (dispatch) => {
  return () => {
    console.log("Socket connect & Token auth success");
    dispatch(changeSocketConnect("CC"));
  };
};

export const handleDisConnect = (dispatch) => {
  return () => {
    console.log("Socket disconnected");
    dispatch(changeSocketConnect("DC"));
  };
};
