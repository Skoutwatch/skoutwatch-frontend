import { GLOBALTYPES } from "../actions/globalTypes";

const initialStore = {
  loading: false,
  player: [],
  redirect: true,
  error: "",
};

const playerReducer = (state = initialStore, action) => {
  switch (action.type) {
    case GLOBALTYPES.PLAYER_CREATE:
      return {
        ...state,
        loading: true,
        redirect: false,
      };

    case GLOBALTYPES.PLAYER_SUCCESS:
      return {
        loading: false,
        player: action.payload,
        redirect: true,
        error: "",
      };

    case GLOBALTYPES.PLAYER_FAILURE:
      return {
        loading: false,
        redirect: false,
        player: [],
        error: action.payload,
      };

    case GLOBALTYPES.GETPLAYER_REQUEST:
      return {
        ...state,
        player: [],
        loading: true,
      };

    case GLOBALTYPES.GETPLAYER_SUCCESS:
      return {
        ...state,
        loading: false,
        player: action.payload,
        error: "",
      };

    case GLOBALTYPES.GETPLAYER_FAILURE:
      return {
        loading: false,
        player: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
