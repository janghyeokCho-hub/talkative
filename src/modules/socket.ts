import produce from "immer";
import { createAction, handleActions } from "redux-actions";

const SOCKET_INIT = "socket/INIT";
const CHANGE_SOCKET_CONNECT = "socket/CHANGE_SOCKET_CONNECT";

export const socketInit = createAction(SOCKET_INIT);
export const changeSocketConnect = createAction(CHANGE_SOCKET_CONNECT);

export type SocketState = {
  type: string;
};

const initialState: SocketState = {
  type: "NC",
};

const socket = handleActions<SocketState, any>(
  {
    [SOCKET_INIT]: () => ({
      ...initialState,
    }),
    [CHANGE_SOCKET_CONNECT]: (state, action) => {
      return produce(state, (draft) => {
        draft.type = action.payload;
      });
    },
  },
  initialState
);

export default socket;
