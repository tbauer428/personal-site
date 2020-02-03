import * as React from "react";

interface ToggleProps {
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Toggle(Props: ToggleProps) {
  return <button onClick={Props.ClickHandler}>Toggle</button>;
}
