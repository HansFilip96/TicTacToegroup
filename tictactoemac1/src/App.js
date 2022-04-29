import "./App.css";
import Container from "@mui/material/Container";
import TopBar from "./components/TopBar/TopBar";
import Grid from "./components/Grid/Grid";
import Scoring from "./components/Scoring/Scoring";
import EndGameScreen from "./components/EndGameScreen/EndGameScreen";
import StartScreen from "./components/StartScreen/StartScreen";
import { useState, useEffect } from "react";

function App() {
  const [EndGameState, SetEndGameState] = useState(0); // What banner window should be rendered.
  const [UserIconSelection, SetUserIconSelection] = useState(0); // Icon Selection for User.
  const [GameState, SetGameState] = useState(0); // Over Game State, 0/1/2. 0 = Start Screen, 1 = Play Screen, 2 = ?
  const [BoxSelections, SetBoxSelections] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]); // What Boxes have been selected and with what. Todays Project?
  const [GamePoint, setGamePoint] = useState([0, 0, 0]);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const setBoxToValue = (coordinate) => {
    if (BoxSelections[coordinate] == null) {
      if (GameState == 1) {
        let newArray = [...BoxSelections];
        if (UserIconSelection == 0) {
          newArray[coordinate] = "X";
          SetUserIconSelection(1);
        } else {
          newArray[coordinate] = "O";
          SetUserIconSelection(0);
        }
        SetBoxSelections(newArray);
      }
      if (GameState == 2) {
        let newArray = [...BoxSelections];

        if (UserIconSelection == 0) {
          function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
          newArray[getRandomInt(8)] = "X";
          SetUserIconSelection(1);
        } else {
          newArray[coordinate] = "O";
          SetUserIconSelection(0);
        }
        SetBoxSelections(newArray);
      } else {
        /// dator logik här
      }
    }
  };
  const RestartGame = () => {
    SetGameState(0);
    SetBoxSelections([null, null, null, null, null, null, null, null, null]);
    SetUserIconSelection(0);
    SetEndGameState(0);
  };
  const NextRound = () => {
    SetBoxSelections([null, null, null, null, null, null, null, null, null]);
    SetEndGameState(0);
    SetUserIconSelection(0);
  };
  const Cancel = () => {
    SetEndGameState(0);
  };

  function calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        BoxSelections[a] &&
        BoxSelections[a] === BoxSelections[b] &&
        BoxSelections[a] === BoxSelections[c]
      ) {
        return BoxSelections[a];
      }
    }
    return null;
  }

  useEffect(() => {
    if (calculateWinner() == "X") {
      let newGamePoint = [...GamePoint];
      newGamePoint[0] = newGamePoint[0] + 1;
      setGamePoint(newGamePoint);
      SetEndGameState(1);
    } else if (calculateWinner() == "O") {
      let newGamePoint = [...GamePoint];
      newGamePoint[2] = newGamePoint[2] + 1;
      setGamePoint(newGamePoint);
      SetEndGameState(2);
    } else {
      let occupiedBoxes = BoxSelections.filter((box) => box != null);
      if (occupiedBoxes.length == 9) {
        let newGamePoint = [...GamePoint];
        newGamePoint[1] = newGamePoint[1] + 1;
        setGamePoint(newGamePoint);
        SetEndGameState(3);
      }
    }
    // console.log(calculateWinner(), "won");
  }, [BoxSelections]);

  return (
    <div>
      <StartScreen
        GameState={GameState}
        SetGameState={SetGameState}
        SetUserIconSelection={SetUserIconSelection}
        UserIconSelection={UserIconSelection}
      />
      <Container maxWidth="xs">
        <TopBar
          GameState={GameState}
          SetGameState={SetGameState}
          SetUserIconSelection={SetUserIconSelection}
          SetBoxSelections={SetBoxSelections}
          RestartGame={RestartGame}
          SetEndGameState={SetEndGameState}
          UserIconSelection={UserIconSelection}
        />
        <Grid
          setBoxToValue={setBoxToValue}
          BoxSelections={BoxSelections}
          GameState={GameState}
          SetGameState={SetGameState}
        />
        <Scoring
          GameState={GameState}
          SetGameState={SetGameState}
          GamePoint={GamePoint}
        />
      </Container>
      <EndGameScreen
        EndGameState={EndGameState}
        RestartGame={RestartGame}
        NextRound={NextRound}
        Cancel={Cancel}
      />
    </div>
  );
}

export default App;

// Start Skärm Klar:
// CPU, Scenarion.
