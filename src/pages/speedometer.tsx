// Speedometer.js
import { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";

interface CanDataManager {
  RegisterDataReceivedCallback: (callback: (data: number) => void) => void;
}

interface SpeedometerProps {
  canDataManager: CanDataManager;
}

const Speedometer = ({ canDataManager }: SpeedometerProps) => {
  const [speedData, setSpeedData] = useState(50); // default value

  useEffect(() => {
    console.log("called");
    canDataManager.RegisterDataReceivedCallback((data: number) => {
      console.log("speedData event------", data);
      setSpeedData(data);
    });
  }, [canDataManager]); // Re-run the effect when `canDataManager` changes

  return (
    <ReactSpeedometer
      maxValue={100}
      value={speedData}
      needleColor="red"
      startColor="green"
      segments={10}
      endColor="blue"
    />
  );
};

export default Speedometer;
