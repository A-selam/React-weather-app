import { useContext } from "react";
import { forecastContext } from "@/App";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function dateExtractor(date) {
  const dateObj = new Date(date);

  const options = { weekday: "long", month: "long", day: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("en-US", options);
  return formattedDate;
}

export default function ForcastTabs() {
  const forecastData = useContext(forecastContext);

  return (
    <Tabs
      defaultValue="weather"
      className="w-full items-center flex flex-col mt-5"
    >
      <TabsList className="p-2 m-auto w-full justify-evenly bg-gradient-to-t from-blue-950 to-blue-800 text-white">
        <TabsTrigger value="weather">Weather</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        <TabsTrigger value="tab4">Tab 4</TabsTrigger>
      </TabsList>
      <TabsContent value="weather" className=" w-full">
        <div className=" text-white w-full">
          <div className="border-b-2 border-blue-800 flex items-center justify-between py-3">
            <div className="flex items-center w-['80%']">
              <img
                className="w-16 h-16"
                src={`${forecastData.forecast.forecastday[0].day.condition.icon}`}
                alt=""
              />
              <div className="ml-3">
                <p>{`${dateExtractor(
                  forecastData.forecast.forecastday[0].date
                )}`}</p>
                <p className="text-sm">{`${forecastData.forecast.forecastday[0].day.condition.text}`}</p>
              </div>
            </div>
            <div>
              <p className="leading-5 pl-3 border-l-2 border-white">
                {`${forecastData.forecast.forecastday[0].day.avgtemp_c}`}&deg;C
              </p>
            </div>
          </div>
          <div className="border-b-2 border-blue-800 flex items-center justify-between py-3">
            <div className="flex items-center">
              <img
                className="w-18 h-18"
                src={forecastData.forecast.forecastday[1].day.condition.icon}
                alt=""
              />
              <div className="ml-3">
                <p>
                  {dateExtractor(forecastData.forecast.forecastday[1].date)}
                </p>
                <p className="text-sm">{`${forecastData.forecast.forecastday[1].day.condition.text}`}</p>
              </div>
            </div>
            <div>
              <p className="leading-5 pl-3 border-l-2 border-white">
                {`${forecastData.forecast.forecastday[1].day.avgtemp_c}`}&deg;C
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <img
                className="w-18 h-18"
                src={forecastData.forecast.forecastday[2].day.condition.icon}
                alt=""
              />
              <div className="ml-3">
                <p>
                  {dateExtractor(forecastData.forecast.forecastday[2].date)}
                </p>
                <p className="text-sm">
                  {forecastData.forecast.forecastday[2].day.condition.text}
                </p>
              </div>
            </div>
            <div>
              <p className="leading-5 pl-3 border-l-2 border-white">
                {`${forecastData.forecast.forecastday[2].day.avgtemp_c}`}&deg;C
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="tab2">Tab 2</TabsContent>
      <TabsContent value="tab3">Tab 3</TabsContent>
      <TabsContent value="tab4">Tab 4</TabsContent>
    </Tabs>
  );
}
