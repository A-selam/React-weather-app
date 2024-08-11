import { MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
  CardFooter,
} from "./ui/card";

export default function MainCard() {
  return (
    <Card className="bg-blue-950 bg-blend-overlay text-slate-300 bg-[url('mntn.jpg')] bg-cover bg-top bg-no-repeat rounded-3xl">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="inline-block">Good Morning</CardTitle>
          <CardDescription className="text-base font-bold p-1">
            <MapPin color="white" size={15} className="inline-block mr-1" />
            Jimma, Ethiopia
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pb-0">
        <h1 className="text-6xl font-bold mt-5 mb-3">11.40 PM</h1>
        <p className="text-sm ">Tuesday, August 8</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pb-3 pt-4">
        <div className="">
          <p className="text-sm ">Weather Forcast</p>
          <p className="text-xl font-semibold ">Partly Cloudy</p>
          <p>Isolated thunderstorm, Precipitation: 30%</p>
        </div>
        <div className="w-24 h-24 flex items-center">
          <img
            className="w-24 h-24 m-auto"
            src="//cdn.weatherapi.com/weather/64x64/night/179.png"
            alt="forcast-img"
          />
        </div>
      </CardFooter>
    </Card>
  );
}
