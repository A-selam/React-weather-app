import { useContext } from "react";

import { forecastContext } from "@/App";

import { MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
  CardFooter,
} from "./ui/card";

function greeting(time) {
  if (time < 12) {
    return "Good Morning!";
  } else if (time > 12 && time < 15) {
    return "Good Afternoon!";
  } else return "Good Evening!";
}

function dateExtractor(date) {
  const dateObj = new Date(date);

  const options = { weekday: "long", month: "long", day: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);
  return formattedDate;
}

export default function MainCard() {
  const forecastData = useContext(forecastContext);

  const datetime = forecastData.location.localtime;

  const time = datetime.split(" ")[1];

  let greet = greeting(time.split(":"[0]));
  const formattedDate = dateExtractor(datetime);

  return (
    <Card className="bg-blue-950 bg-blend-overlay text-slate-300 bg-[url('mntn.jpg')] bg-cover bg-top bg-no-repeat rounded-3xl">
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="inline-block">{`${greet}`}</CardTitle>
          <CardDescription className="text-base font-bold p-1">
            <MapPin
              color="white"
              size={15}
              className="inline-block mr-1 self-center"
            />
            {`${forecastData.location.name}, ${forecastData.location.country}`}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="pb-0">
        <h1 className="text-6xl font-bold mt-5 mb-3">{`${time}`}</h1>
        <p className="text-sm ">{`${formattedDate}`}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pb-3 pt-4">
        <div className="">
          <p className="text-sm ">Weather Forcast</p>
          <p className="text-xl font-semibold ">{`${forecastData.current.condition.text}`}</p>
          <p>
            Feels like {`${forecastData.current.feelslike_c}`}&deg;C,
            Precipitation: ...
          </p>
        </div>
        <div className="w-24 h-24 flex items-center">
          <img
            className="w-24 h-24 m-auto"
            src={`${forecastData.current.condition.icon}`}
            alt="forcast-img"
          />
        </div>
      </CardFooter>
    </Card>
  );
}
