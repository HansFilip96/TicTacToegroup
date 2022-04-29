import React from "react";
import "./Grid.css";
import GridIndividual from "./GridIndividual";
function Grid({ setBoxToValue, BoxSelections, GameState }) {
  if (GameState == 1) {
    const RenderGrid = () => {
      return BoxSelections.map((selection, i) => (
        <GridIndividual
          coordinates={i}
          setBoxToValue={setBoxToValue}
          BoxSelections={BoxSelections}
        />
      ));
    };
    return <div id="Grid">{RenderGrid()}</div>;
  }
  if (GameState == 2) {
    const RenderGrid = () => {
      return BoxSelections.map((selection, i) => (
        <GridIndividual
          coordinates={i}
          setBoxToValue={setBoxToValue}
          BoxSelections={BoxSelections}
        />
      ));
    };
    return <div id="Grid">{RenderGrid()}</div>;
  }
  if (GameState == 0) {
    return null;
  }
}

export default Grid;
