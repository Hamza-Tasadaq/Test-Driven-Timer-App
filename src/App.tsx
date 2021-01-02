import React from "react";
import "./App.css";
import Timer from "./components/Timer/Timer";

const App = () => {
  // const [min, setMin] = useState(0);
  // const [sec, setSec] = useState(0);
  // const [interv, setInterv] = useState<NodeJS.Timeout | any>()

  // let second = sec;
  // let minute = min;

  // function starter() {
  //   second++;
  //   if (second === 60) {
  //     minute++;
  //     second = 0;
  //   }
  //   setMin(minute);
  //   setSec(second);
  // }

  // function start() {
  //   console.log("start");
  //   console.log(sec)
  //   console.log(min)
  //   setInterv(setInterval(starter, 1000))
  // }

  // function stop() {
  //   console.log("stop")
  //   clearInterval(interv)
  //   console.log(sec)
  //   console.log(min)
  // }

  // function reset() {
  //   console.log("reset")
  //   clearInterval(interv)
  //   setSec(0)
  //   setMin(0)
  // }
  return (
    <div className="App">
      <Timer />
    </div>
  );
};

export default App;
