import React, { ReactNode } from "react";
import { createAction, handleActions, Action } from "redux-actions";
import produce from "immer";

export type MainLayerState = {
  visiable: boolean;
  children: ReactNode;
  layer: any[];
};

const SET_VISIBLE = "mainlayer/SET_VISIBLE";
const SET_CHILDREN = "mainlayer/SET_CHILDREN";
const INIT = "mainlayer/INIT";
const SET_LAYER = "mainlayer/SET_LAYER";
const PUSH_LAYER = "mainlayer/PUSH_LAYER";
const POP_LAYER = "mainlayer/POP_LAYER";

export const setVisiable = createAction<boolean, boolean>(
  SET_VISIBLE,
  (payload: boolean) => payload
);
export const setChildren = createAction<ReactNode, ReactNode>(
  SET_CHILDREN,
  (payload: ReactNode) => payload
);
export const init = createAction(INIT);
export const setLayer = createAction<any, any>(
  SET_LAYER,
  (payload: any) => payload
);
export const pushLayer = createAction<any, any>(
  PUSH_LAYER,
  (payload: any) => payload
);
export const popLayer = createAction(POP_LAYER);

const initialState: MainLayerState = {
  visiable: false,
  children: typeof React.Fragment,
  layer: [],
};

const mainlayer = handleActions<MainLayerState, any>(
  {
    [INIT]: () => ({
      ...initialState,
    }),
    [SET_VISIBLE]: (state, action: Action<boolean>) => {
      return produce(state, (draft) => {
        draft.visiable = action.payload;

        if (!action.payload) draft.children = initialState.children;
      });
    },
    [SET_CHILDREN]: (state, action: Action<ReactNode>) => {
      return {
        ...state,
        children: action.payload,
      };
    },
    [SET_LAYER]: (state, action: Action<any>) => {
      return produce(state, (draft) => {
        draft.layer = [action.payload];
      });
    },
    [PUSH_LAYER]: (state, action: Action<any>) => {
      return produce(state, (draft) => {
        draft.layer.push(action.payload);
      });
    },
    [POP_LAYER]: (state) => {
      return produce(state, (draft) => {
        draft.layer.splice(draft.layer.length - 1, 1);
      });
    },
  },
  initialState
);

export default mainlayer;
