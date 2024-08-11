import MainCard from "./components/MainCard";
import TemperatureChart from "./components/TemperatureChart";
import WeatherDetail from "./components/WeatherDetail";
import ForcastTabs from "./components/ForcastTabs";
// api: 9ec9bbb7f2814aacabe72411242006

export default function App() {
  return (
    <div className="bg-blue-100 grid grid-cols-3 gap-6 p-6">
      <div className="col-span-2">
        <MainCard></MainCard>
        <TemperatureChart></TemperatureChart>
      </div>
      <div className="bg-gradient-to-tr from-blue-950 via-blue-900 to-blue-950 p-6 rounded-3xl">
        <WeatherDetail></WeatherDetail>
        <ForcastTabs></ForcastTabs>
      </div>
    </div>
  );
}
