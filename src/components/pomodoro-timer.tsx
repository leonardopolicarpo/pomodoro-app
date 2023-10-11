import { useState } from "react";
import { useInterval } from "../hooks/use-interval";
import { Button } from "./Button";
import { Timer } from "./timer";

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
};

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>

      <Timer mainTime={mainTime}/>

      <div className="controls">
        <Button
          text="Olá"
          onClick={() => console.log('Oi')}
        />
        <Button
          text="Olá"
          onClick={() => console.log('Oi')}
        />
        <Button
          text="Olá"
          onClick={() => console.log('Oi')}
        />
      </div>

      <div className="details">
        <p>Testanto Lorem ipsum dolor sit amet consectetur adipisicing magnam quis.</p>
        <p>Testanto Lorem ipsum dolor sit amet consectetur adipisicing magnam quis.</p>
        <p>Testanto Lorem ipsum dolor sit amet consectetur adipisicing magnam quis.</p>
      </div>
    </div>
  )
};