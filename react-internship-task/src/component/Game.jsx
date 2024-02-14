import React, { useState, useEffect, useRef, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authorizedUserActions } from "../store/userData";

function Game() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authorizedUser = useSelector((store) => store.authorizedUser);
  const [pumps, setPumps] = useState(0);
  const [popped, setPopped] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("UserID");
    if (token === null || token === undefined) {
      navigate("/");
    }
  }, []);

  const handleLogout = () => {
    dispatch(authorizedUserActions.unSetData(localStorage.getItem("UserID")));
    localStorage.removeItem("UserID");
    navigate("/");
  };

  const pumpBalloon = () => {
    if (!popped) {
      setPumps(pumps + 1);
      if (pumps >= 10) {
        setPopped(true);
      }
    }
  };

  const resetGame = () => {
    setPumps(0);
    setPopped(false);
  };
  return (
    <div>
      <div className="d-flex mx-5 pt-4">
        {authorizedUser && authorizedUser.length > 0 && (
          <h2 className="flex-grow-1">Welcome {authorizedUser[0].name}</h2>
        )}
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <hr />
      <div className="game-container d-flex flex-column align-items-center">
        <h1>Balloon Popping Game</h1>
        <h3>Pumps : {pumps}</h3>
        {popped ? (
          <div>
            <h4>Oh no! The balloon popped!</h4>
            <button
              className="rounded-3 px-3 py-2 bg-dark-subtle"
              onClick={resetGame}
            >
              Play Again
            </button>
          </div>
        ) : (
          <div className="balloon" onClick={pumpBalloon}></div>
        )}
      </div>
    </div>
  );
}

export default Game;
