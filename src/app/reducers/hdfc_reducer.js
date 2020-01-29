import {FETCH_HDFC_MASTER_SUCCESS_ACTION,FETCH_HDFC_MASTER_FAILURE_ACTION} from "../actions/types";

const INIT_STATE = {};

export default function(state = INIT_STATE, action) {
  state = Object.assign({}, state, {});

  switch (action.type) {
    case FETCH_HDFC_MASTER_SUCCESS_ACTION:
      state.auditedAudits = action.payload.audits;
      state.fetchMasterError = false;
      console.log(state);
      return state;

    case FETCH_HDFC_MASTER_FAILURE_ACTION:
      state.fetchMasterError = true;
      return state;
  }
  return state;
}