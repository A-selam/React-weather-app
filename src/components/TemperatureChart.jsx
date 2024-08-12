import { useContext } from "react";

import { forecastContext } from "@/App";

import { Line } from "react-chartjs-2";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function labelExtractor(hours) {
  const label = [];
  hours.map((hour) => label.push(hour.time.split(" ")[1]));
  return label;
}

function dataExtractor(hours) {
  const data = [];
  hours.map((hour) => data.push(hour.temp_c));
  return data;
}

const TemperatureChart = () => {
  const forecastData = useContext(forecastContext);

  const labels = labelExtractor(forecastData.forecast.forecastday[0].hour);
  const temp_data = dataExtractor(forecastData.forecast.forecastday[0].hour);

  // Dummy data for hourly forecast
  const data = {
    labels: [...labels],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [...temp_data], // Dummy temperature data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0, // Smooth lines
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {},
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  };

  return (
    <Card className="my-6 rounded-3xl">
      <CardHeader className="pb-2">
        <CardTitle>Hourly Forcast</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height: "225px", width: "100%" }}>
          <Line data={data} options={options} />;
        </div>
      </CardContent>
    </Card>
  );
};

export default TemperatureChart;
