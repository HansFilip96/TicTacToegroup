import React from "react";
import "./Scoring.css";

function Scoring({ GameState, GamePoint }) {
  if (GameState == 1) {
    return (
      <div id="Scoring">
        <div id="scoring__x">
          <label id="scoring__X__Title">X (You)</label>
          <b id="scoring__X__text">{GamePoint[0]}</b>
        </div>
        <div id="scoring__tied">
          <label id="scoring__Tied__Title">Ties</label>
          <b id="scoring__Tied__text">{GamePoint[1]}</b>
        </div>
        <div id="scoring__O">
          <label id="scoring__O__Title">O (CPU)</label>
          <b id="scoring__O__text">{GamePoint[2]}</b>
        </div>
      </div>
    );
  }
  if (GameState == 2) {
    return (
      <div id="Scoring">
        <div id="scoring__x">
          <label id="scoring__X__Title">X (You)</label>
          <b id="scoring__X__text">{GamePoint[0]}</b>
        </div>
        <div id="scoring__tied">
          <label id="scoring__Tied__Title">Ties</label>
          <b id="scoring__Tied__text">{GamePoint[1]}</b>
        </div>
        <div id="scoring__O">
          <label id="scoring__O__Title">O (CPU)</label>
          <b id="scoring__O__text">{GamePoint[2]}</b>
        </div>
      </div>
    );
  }
  if (GameState == 0) {
    return null;
  }
}

export default Scoring;
