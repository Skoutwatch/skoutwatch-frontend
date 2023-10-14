import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

import Loading from "./Loading";
import Toast from "./Toast";

function Notify() {
  const { player } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      {player.loading && <Loading />}

      {/* {player.error && (
        <Toast
          msg={{ title: "Error", body: player.error }}
          handleShow={() =>
            dispatch({ type: GLOBALTYPES.PLAYER_SUCCESS, payload: {} })
          }
          bgColor="bg-red-500"
          textColor="text-red-500"
          border="border-red-500"
        />
      )}

      {player.success && (
        <Toast
          msg={{ title: "Successful", body: player.success }}
          handleShow={() =>
            dispatch({ type: GLOBALTYPES.PLAYER_FAILURE, payload: {} })
          }
          bgColor="bg-green-500"
          textColor="text-primary"
          border="border-primary"
        />
      )} */}
    </div>
  );
}

export default Notify;
