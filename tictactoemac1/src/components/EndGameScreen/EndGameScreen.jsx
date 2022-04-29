import React from "react";
import "./EndGameScreen.css";
import { useState } from "react";

// Declaration EndGameState
// 0 = Render Nothing
// 1 = Render 'You Won' Window
// 2 = Render 'You Lost' Window
// 3 = Render 'Tied' Window
// 4 = Render Restart Window.

function EndGameScreen({ EndGameState, RestartGame, NextRound, Cancel }) {
  if (EndGameState === 0) {
    return <div></div>;
  }
  if (EndGameState === 1) {
    return (
      <div id="EndGameScreen">
        <div id="EndGameScreen__Top"></div>
        <div id="EndGameScreen__Content">
          <p id="EndGameScreen__Text">X Won!</p>
          <div id="EndGameScreen__Img_Pos">
            <img id="EndGameScreen__Img" src="/assets/icon-x.svg" alt="" />
            <h1 id="EndGameScreen__H1">Takes The Round</h1>
          </div>
          <div id="EndGameScreen__Btn__Quit__Cta">
            <button id="EndGameScreen__Btn__Quit" onClick={RestartGame}>
              Quit
            </button>
            <button id="EndGameScreen__Btn__Restart" onClick={NextRound}>
              Next Round
            </button>
          </div>
        </div>
        <div id="EndGameScreen__Bottom"></div>
      </div>
    );
  }
  if (EndGameState === 2) {
    return (
      <div id="EndGameScreen">
        <div id="EndGameScreen__Top"></div>
        <div id="EndGameScreen__Content">
          <p id="EndGameScreen__Text">O Won</p>
          <div id="EndGameScreen__Img_Pos">
            <img id="EndGameScreen__Img" src="/assets/icon-o.svg" alt="" />
            <h1 id="EndGameScreen__H1">Takes The Round</h1>
          </div>
          <div id="EndGameScreen__Btn__Quit__Cta">
            <button id="EndGameScreen__Btn__Quit" onClick={RestartGame}>
              Quit
            </button>
            <button id="EndGameScreen__Btn__Restart" onClick={NextRound}>
              Next Round
            </button>
          </div>
        </div>
        <div id="EndGameScreen__Bottom"></div>
      </div>
    );
  }

  if (EndGameState === 3) {
    return (
      <div id="EndGameScreen">
        <div id="EndGameScreen__Top"></div>
        <div id="EndGameScreen__Content">
          <h1 id="EndGameScreen__H1">Tied</h1>
          <div id="EndGameScreen__Btn__Quit__Cta">
            <button id="EndGameScreen__Btn__Quit" onClick={RestartGame}>
              Quit
            </button>
            <button id="EndGameScreen__Btn__Restart" onClick={NextRound}>
              Next Round
            </button>
          </div>
        </div>
        <div id="EndGameScreen__Bottom"></div>
      </div>
    );
  }
  if (EndGameState === 4) {
    return (
      <div id="EndGameScreen">
        <div id="EndGameScreen__Top"></div>
        <div id="EndGameScreen__Content">
          <img id="EndGameScreen__Img" src="" alt="" />
          <h1 id="EndGameScreen__H1">Restart Game?</h1>
          <div id="EndGameScreen__Btn__Quit__Cta">
            <button id="EndGameScreen__Btn__Quit" onClick={RestartGame}>
              Restart
            </button>
            <button id="EndGameScreen__Btn__Restart" onClick={Cancel}>
              Cancel
            </button>
          </div>
        </div>
        <div id="EndGameScreen__Bottom"></div>
      </div>
    );
  }
}

export default EndGameScreen;
