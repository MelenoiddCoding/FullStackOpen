import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }

  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = useCallback(() => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  });

  const handleRightClick = useCallback(() => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  });

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text={"left"} />
      <Button onClick={handleRightClick} text={"right"} />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
