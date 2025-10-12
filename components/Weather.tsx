"use client";

import { useEffect, useState } from "react";
import {
  Cloud,
  CloudRain,
  Sun,
  Wind,
  Droplets,
  Thermometer,
  Loader2,
} from "lucide-react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: { description: string }[];
  wind: { speed: number };
  sys: { country: string };
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        try {
          const res = await fetch(
            `/api/weather?lat=${latitude}&lon=${longitude}`
          );
          if (!res.ok) throw new Error("Weather fetch failed");
          const data = await res.json();
          setWeather(data);
        } catch (err) {
          console.error("Weather fetch failed:", err);
          setError("Could not fetch weather data");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location access denied");
        setLoading(false);
      }
    );
  }, []);

  const getWeatherIcon = (desc: string) => {
    desc = desc.toLowerCase();
    if (desc.includes("rain")) return <CloudRain size={96} />;
    if (desc.includes("cloud")) return <Cloud size={96} />;
    if (desc.includes("sun") || desc.includes("clear"))
      return <Sun size={96} />;
    return <Cloud size={96} />;
  };

  return (
    <div className="app-container flex flex-col items-center justify-center h-[400px]">
      {loading ? (
        <div className="flex flex-col items-center justify-center text-stone-500 dark:text-stone-400">
          <Loader2 className="animate-spin mb-2" size={28} />
          Loading weather...
        </div>
      ) : error ? (
        <div className="text-sm text-center text-stone-500 dark:text-stone-400">
          {error}
        </div>
      ) : weather ? (
        <div className="flex flex-col items-center justify-between h-full py-6 w-full text-center">
          {/* Location */}
          <div className="text-lg font-semibold text-stone-900 dark:text-stone-100">
            {weather.name}, {weather.sys.country}
          </div>

          {/* Icon & Temp */}
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="text-stone-700 dark:text-stone-200 mb-3">
              {getWeatherIcon(weather.weather[0].description)}
            </div>
            <div className="text-6xl font-bold text-stone-900 dark:text-stone-100">
              {Math.round(weather.main.temp)}°C
            </div>
            <p className="capitalize text-stone-600 dark:text-stone-400 mt-2">
              {weather.weather[0].description}
            </p>
          </div>

          {/* Details */}
          <div className="flex justify-center gap-6 mt-4 text-sm text-stone-600 dark:text-stone-400">
            <div className="flex items-center gap-1">
              <Thermometer size={24} />
              Feels like {Math.round(weather.main.feels_like)}°C
            </div>
            <div className="flex items-center gap-1">
              <Droplets size={24} />
              {weather.main.humidity}%
            </div>
            <div className="flex items-center gap-1">
              <Wind size={24} />
              {Math.round(weather.wind.speed)} m/s
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
