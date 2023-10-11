import { secondsToTime } from "../utils/seconst-to-time";

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return (
    <div className="timer">
      {secondsToTime(props.mainTime)}
    </div>
  )
}