import React from "react";
import Container from "@mui/material/Container";
import "./StartScreen.css";
import { useEffect } from "react";

function StartScreen({
  GameState,
  SetGameState,
  SetUserIconSelection,
  UserIconSelection,
}) {
  const HandleClick = (Value) => {
    SetUserIconSelection(Value);
    console.log(UserIconSelection);
  };
  const HandleGameState = (Value) => {
    SetGameState(Value);
  };

  if (GameState === 0) {
    return (
      <div>
        <Container maxWidth="xs">
          <div id="startscreen__logo">
            <img src="./assets/logo.svg" alt="" />
          </div>
          <div id="startscreen__iconSelection">
            <b id="startscreen__iconselection__text1">Pick Player 1's Mark</b>
            <div id="Startscreen__IconBackground">
              <div
                id={
                  UserIconSelection == 0
                    ? "Startscreen__IconBackground__x__Active"
                    : "Startscreen__IconBackground__x"
                }
                onClick={() => {
                  HandleClick(0);
                }}
              >
                <img src="./assets/icon-x.svg" alt="" />
              </div>
              <div
                id={
                  UserIconSelection == 1
                    ? "Startscreen__IconBackground__o__Active"
                    : "Startscreen__IconBackground__o"
                }
                onClick={() => {
                  HandleClick(1);
                }}
              >
                <img src="./assets/icon-o.svg" alt="" />
              </div>
            </div>

            <b id="startscreen__iconselection__text2">
              Remember: <span id="spanColor">X</span> Goes First
            </b>
          </div>
          <div id="startscreen__buttons">
            <button
              id="startscreen__newgame__btn__cpu"
              onClick={() => {
                HandleGameState(2);
              }}
            >
              New Game (VS CPU)
            </button>
            <button
              id="startscreen__newgame__btn__player"
              onClick={() => {
                HandleGameState(1);
              }}
            >
              {" "}
              New Game (VS Player)
            </button>
          </div>
        </Container>
      </div>
    );
  }
  if (GameState == 1) {
    return null;
  }
}

export default StartScreen;
