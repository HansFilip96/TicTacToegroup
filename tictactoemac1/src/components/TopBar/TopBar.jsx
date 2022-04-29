import React from "react";
import "./TopBar.css";

function TopBar({
  GameState,
  SetGameState,
  SetBoxSelections,
  SetUserIconSelection,
  RestartGame,
  SetEndGameState,
  UserIconSelection,
}) {
  if (GameState == 1) {
    return (
      <div id="TopBar">
        <img id="TopBar__Logo" src={"/assets/logo.svg"} alt="" />
        <div id="TopBar__TurnIndicator">
          <img
            id="TopBar_TurnIndicator__Icon"
            src={
              UserIconSelection == 0
                ? "/assets/icon-x.svg"
                : "/assets/icon-o.svg"
            }
            alt=""
          />
          <label id="TopBar_TurnIndicator__Text">Turn</label>
        </div>

        <button
          id="TopBar__Reset__Btn"
          onClick={() => {
            SetEndGameState(4);
          }}
        >
          <img
            id="TopBar__Reset__BtnLogo"
            src={"/assets/icon-restart.svg"}
            alt=""
          />
        </button>
      </div>
    );
  }
  if (GameState == 2) {
    return (
      <div id="TopBar">
        <img id="TopBar__Logo" src={"/assets/logo.svg"} alt="" />
        <div id="TopBar__TurnIndicator">
          <img
            id="TopBar_TurnIndicator__Icon"
            src={
              UserIconSelection == 0
                ? "/assets/icon-x.svg"
                : "/assets/icon-o.svg"
            }
            alt=""
          />
          <label id="TopBar_TurnIndicator__Text">Turn</label>
        </div>

        <button
          id="TopBar__Reset__Btn"
          onClick={() => {
            SetEndGameState(4);
          }}
        >
          <img
            id="TopBar__Reset__BtnLogo"
            src={"/assets/icon-restart.svg"}
            alt=""
          />
        </button>
      </div>
    );
  }
  if (GameState == 0) {
    return;
  }
}

export default TopBar;
