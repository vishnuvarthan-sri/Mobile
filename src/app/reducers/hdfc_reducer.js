import {
  FETCH_HDFC_MASTER_SUCCESS_ACTION,
  FETCH_HDFC_MASTER_FAILURE_ACTION,
  SAVE_AUDIT_SUCCESS_ACTION,
  SAVE_AUDIT_FAILURE_ACTION,
  FETCH_HDFC_PHOTO_SUCCESS_ACTION,
  FETCH_HDFC_PHOTO_FAILURE_ACTION,
  FETCH_UNASSIGNED_FAILURE_ACTION,
  FETCH_UNASSIGNED_SUCCESS_ACTION,
} from "../actions/types";
import { toast } from "react-semantic-toasts";

const INIT_STATE = {
  isLoading: true
};

export default function (state = INIT_STATE, action) {
  state = Object.assign({}, state, {});

  switch (action.type) {
    case FETCH_HDFC_MASTER_SUCCESS_ACTION:
      state.auditedAudits = action.payload.audits;
      state.fetchMasterError = false;
      state.isLoading = false
      return state;

    case FETCH_HDFC_MASTER_FAILURE_ACTION:
      state.fetchMasterError = true;
      state.isLoading = false
      return state;

    case FETCH_UNASSIGNED_SUCCESS_ACTION:
      state.unassigned = action.payload.data;
  
      state.fetchUnassignedError = false;
      return state;
    case FETCH_UNASSIGNED_FAILURE_ACTION:
      state.fetchUnassignedError = true;
    
      return state;
    case FETCH_HDFC_PHOTO_SUCCESS_ACTION:
      state.photos = action.payload.data;
   
      state.fetchPhotoError = false;
      return state;
    case FETCH_HDFC_PHOTO_FAILURE_ACTION:
      state.fetchPhotosError = true;
 
      return state;

    case SAVE_AUDIT_SUCCESS_ACTION:
      state.saveAuditsError = false;
   
      setTimeout(() => {
        toast({
          type: "success",
          icon: "thumbs up outline",
          title: "Success",
          description: "Audits Saved",
          time: 5000,
        });
      }, 0);
      return state;

    case SAVE_AUDIT_FAILURE_ACTION:
      state.saveAuditsError = true;
 
      setTimeout(() => {
        toast({
          type: "error",
          icon: "thumbs down outline",
          title: "error",
          description: "Contact System Admin",
          time: 5000,
        });
      }, 0);
  }
  return state;
}
