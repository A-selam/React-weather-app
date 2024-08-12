import { useContext } from "react";
import { forecastContext } from "@/App";

import { Card } from "./ui/card";
import { Wind } from "lucide-react";
import { Droplets } from "lucide-react";

export default function WeatherDetail() {
  const forecastData = useContext(forecastContext);

  return (
    <Card className="bg-transparent border-none text-white flex flex-col justify-center items-center">
      <div className="w-24 h-24 mb-1">
        <img
          className="w-24 h-24 m-auto"
          src={`${forecastData.current.condition.icon}`}
          alt="forcast-img"
        />
      </div>
      <p className="text-5xl font-semibold my-2 mt-1">
        {`${forecastData.current.temp_c}`}&deg;C
      </p>
      <p className="text-lg font-semibold mt-2 ">{`${forecastData.current.condition.text}`}</p>
      <table className="border-separate border-spacing-x-2 border-spacing-y-4">
        <tbody>
          <tr>
            <td className="border-r border-white pr-5 w-24">
              <Wind color="white" size={20} className="inline-block mr-1" />{" "}
              Wind
            </td>
            <td className=" w-20 text-right">
              {`${forecastData.current.wind_kph}`} Km/h
            </td>
          </tr>
          <tr>
            <td className="border-r border-white">
              <Droplets color="white" size={20} className="inline-block mr-1" />{" "}
              Hum
            </td>
            <td className="text-right">
              {`${forecastData.current.humidity}`}%
            </td>
          </tr>
        </tbody>
      </table>
    </Card>
  );
}
