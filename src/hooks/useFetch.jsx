import { useState, useEffect } from "react";

export default function useFetch(city = "jimma") {
  const [currentData, setCurrentData] = useState({});
  const [forecastData, setForecastData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all([
          fetch(
            `https://api.weatherapi.com/v1/current.json?key=9ec9bbb7f2814aacabe72411242006&q=${city}`,
            { mode: "cors" }
          ),
          fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=9ec9bbb7f2814aacabe72411242006&q=${city}&days=5`,
            { mode: "cors" }
          ),
        ]);

        if (responses.some((response) => !response.ok)) {
          throw new Error("Error fetching data");
        }

        const [currData, forcData] = await Promise.all(
          responses.map((r) => r.json())
        );

        setCurrentData(currData);
        setForecastData(forcData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    dataFetch();
  }, [city]);

  return { currentData, forecastData, loading, error };
}
