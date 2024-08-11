import { Card } from "./ui/card";
import { Wind } from "lucide-react";
import { Droplets } from "lucide-react";

export default function WeatherDetail() {
  return (
    <Card className="bg-transparent border-none text-white flex flex-col justify-center items-center">
      <div className="w-24 h-24 mb-1">
        <img
          className="w-24 h-24 m-auto"
          src="//cdn.weatherapi.com/weather/64x64/night/179.png"
          alt="forcast-img"
        />
      </div>
      <p className="text-5xl font-semibold my-2 mt-1">20&deg;C</p>
      <p className="text-lg font-semibold mt-2 ">Partly Cloudy</p>
      <table className="border-separate border-spacing-x-2 border-spacing-y-4">
        <tbody>
          <tr>
            <td className="border-r border-white pr-5 w-24">
              <Wind color="white" size={20} className="inline-block mr-1" />{" "}
              Wind
            </td>
            <td className=" w-20 text-right">20 Km/h</td>
          </tr>
          <tr>
            <td className="border-r border-white">
              <Droplets color="white" size={20} className="inline-block mr-1" />{" "}
              Hum
            </td>
            <td className="text-right">15%</td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}
