import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ForcastTabs() {
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
                src="//cdn.weatherapi.com/weather/64x64/night/179.png"
                alt=""
              />
              <div className="ml-3">
                <p>Wednesday, July 12</p>
                <p className="text-sm">Cloudy</p>
              </div>
            </div>
            <div>
              <p className="leading-5 pl-3 border-l-2 border-white">18&deg;C</p>
            </div>
          </div>
          <div className="border-b-2 border-blue-800 flex items-center justify-between py-3">
            <div className="flex items-center">
              <img
                className="w-18 h-18"
                src="//cdn.weatherapi.com/weather/64x64/night/179.png"
                alt=""
              />
              <div className="ml-3">
                <p>Wednesday, July 12</p>
                <p className="text-sm">Cloudy</p>
              </div>
            </div>
            <div>
              <p className="leading-5 pl-3 border-l-2 border-white">18&deg;C</p>
            </div>
          </div>
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center">
              <img
                className="w-18 h-18"
                src="//cdn.weatherapi.com/weather/64x64/night/179.png"
                alt=""
              />
              <div className="ml-3">
                <p>Wednesday, July 12</p>
                <p className="text-sm">Cloudy</p>
              </div>
            </div>
            <div>
              <p className="leading-5 pl-3 border-l-2 border-white">18&deg;C</p>
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
