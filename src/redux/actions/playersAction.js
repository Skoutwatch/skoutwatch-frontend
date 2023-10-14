import { GLOBALTYPES } from "./globalTypes";
import { postDataApi, getDataApi } from "../../utils/fetchData";

export const createPlayer = (data, image) => async (dispatch) => {
  const projectId = process.env.REACT_APP_PROJECT_ID;
  const name = `${data.first_name} ${data.last_name}`;

  try {
    dispatch({ type: GLOBALTYPES.PLAYER_CREATE });

    const res = await postDataApi(`${projectId}/nfts`, {
      attributes: data,
      name: name,
      symbol: "swu",
      description: "player",
      image:
        "https://cms.groupeditors.com/img/AFP_bebc936012dd157f9c1aef8f2c4d98ff093ea23a.jpg?crop=173,0,683,510&w=400&h=400&scale=both",
    });
    console.log(res);

    dispatch({
      type: GLOBALTYPES.PLAYER_SUCCESS,
      playload: res,
    });

    console.log(res);
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.PLAYER_FAILURE,
      payload: {
        error: "An error has occured",
      },
    });
  }
};

export const getPlayers = () => async (dispatch) => {
  const projectId = process.env.REACT_APP_PROJECT_ID;
  try {
    dispatch({ type: GLOBALTYPES.GETPLAYER_REQUEST });

    const res = await getDataApi(`${projectId}/nfts`);

    dispatch({
      type: GLOBALTYPES.GETPLAYER_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.GETPLAYER_FAILURE,
      payload: {
        error: "An error just occured",
      },
    });
  }
};

export const getOnePlayer = (id) => async (dispatch) => {
  const projectId = process.env.REACT_APP_PROJECT_ID;
  try {
    dispatch({ type: GLOBALTYPES.GETPLAYER_REQUEST });

    const res = await getDataApi(`${projectId}/nfts/${id}`);

    dispatch({
      type: GLOBALTYPES.GETPLAYER_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GLOBALTYPES.GETPLAYER_FAILURE,
      payload: {
        error: "An error has just occured",
      },
    });
  }
};
