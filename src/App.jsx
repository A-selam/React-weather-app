import MainCard from "./components/MainCard";
import TemperatureChart from "./components/TemperatureChart";

export default function App() {
  return (
    <div className="bg-blue-100 grid grid-cols-3 gap-6 p-6">
      <div className="col-span-2">
        <MainCard></MainCard>
        <TemperatureChart></TemperatureChart>
      </div>
      <div className="bg-gradient-to-tr from-blue-950 via-blue-900 to-blue-950"></div>
    </div>
  );
}
