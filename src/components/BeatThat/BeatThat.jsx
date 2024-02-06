import React from "react";
import Button from "../Button";
import rotatingDice from "../../assets/rotating-dice.json";
import "@lottiefiles/lottie-player";

function BeatThat() {
  const [loading, setLoading] = React.useState(false);
  // onClick, sets loading to true
  // when loading is true, display animation linked to ref
  // Initialise a timeOut to set loading to false
  // When timeOut is activated, set loading to false, and set dice value.

  function rollDice() {
    setLoading(true);
  }

  return (
    <div>
      <Button variant="soft" onClick={rollDice}>
        Roll Dice
      </Button>
      {loading && (
        <lottie-player
          autoplay
          loop
          mode="normal"
          src={JSON.stringify(rotatingDice)}
          style={{ width: "400px", height: "400px" }}
        ></lottie-player>
      )}
    </div>
  );
}

export default BeatThat;
