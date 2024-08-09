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

const TemperatureChart = () => {
  // Dummy data for hourly forecast
  const data = {
    labels: [
      "1 AM",
      "2 AM",
      "3 AM",
      "4 AM",
      "5 AM",
      "6 AM",
      "7 AM",
      "8 AM",
      "9 AM",
      "10 AM",
      "11 AM",
      "12 PM",
    ],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [16, 15, 15, 14, 14, 13, 12, 14, 17, 20, 22, 25], // Dummy temperature data
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
    <Card className="my-6">
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
