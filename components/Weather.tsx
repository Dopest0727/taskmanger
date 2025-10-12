"use client";

import { useEffect, useState } from "react";
import {
  Cloud,
  CloudRain,
  Sun,
  Wind,
  Droplets,
  Thermometer,
} from "lucide-react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: { description: string; icon: string }[];
  wind: { speed: number };
  sys: { country: string };
}

const fallbackCoords = { lat: 59.33, lon: 18.07 }; // Default: Stockholm

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      try {
        const res = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
        if (!res.ok) throw new Error("Weather fetch failed");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        console.error("Weather fetch failed:", err);
        setError("Could not fetch weather data");
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          fetchWeather(pos.coords.latitude, pos.coords.longitude);
        },
        () => {
          console.warn("Geolocation denied. Using fallback location.");
          fetchWeather(fallbackCoords.lat, fallbackCoords.lon);
        }
      );
    } else {
      console.warn("Geolocation not supported. Using fallback location.");
      fetchWeather(fallbackCoords.lat, fallbackCoords.lon);
    }
  }, []);

  const getWeatherIcon = (desc: string) => {
    if (desc.includes("rain")) return <CloudRain size={50} />;
    if (desc.includes("cloud")) return <Cloud size={50} />;
    if (desc.includes("sun") || desc.includes("clear"))
      return <Sun size={50} />;
    return <Cloud size={50} />;
  };

  if (error)
    return (
      <div className="app-container flex items-center justify-center h-64 text-sm text-stone-500 dark:text-stone-400">
        {error}
      </div>
    );

  if (!weather)
    return (
      <div className="app-container flex items-center justify-center h-64 text-sm text-stone-500 dark:text-stone-400">
        Loading weather...
      </div>
    );

  return (
    <div className="app-container flex flex-col items-center justify-center h-64 text-center">
      <div className="text-xl font-semibold text-stone-900 dark:text-stone-100">
        {weather.name}, {weather.sys?.country ?? ""}
      </div>

      <div className="mt-3 flex flex-col items-center gap-2 text-5xl font-bold text-stone-800 dark:text-stone-100">
        {getWeatherIcon(weather.weather[0].description)}
        <span>{Math.round(weather.main.temp)}°C</span>
      </div>

      <p className="capitalize text-stone-600 dark:text-stone-400 mt-1">
        {weather.weather[0].description}
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-stone-600 dark:text-stone-400">
        <div className="flex items-center gap-1">
          <Thermometer size={16} />
          Feels like {Math.round(weather.main.feels_like)}°C
        </div>
        <div className="flex items-center gap-1">
          <Droplets size={16} />
          {weather.main.humidity}%
        </div>
        <div className="flex items-center gap-1">
          <Wind size={16} />
          {Math.round(weather.wind.speed)} m/s
        </div>
      </div>
    </div>
  );
}
