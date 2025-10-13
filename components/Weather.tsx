"use client";

import { useEffect, useState } from "react";
import {
  Cloud,
  CloudRain,
  Sun,
  Wind,
  Droplets,
  Thermometer,
  MapPin,
  ArrowUp,
  ArrowDown,
  Sunrise,
  Sunset,
} from "lucide-react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  weather: { description: string }[];
  wind: { speed: number };
  sys: { country: string; sunrise: number; sunset: number };
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
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
        }
      },
      () => setError("Location access denied")
    );
  }, []);

  const getWeatherIcon = (desc: string) => {
    if (desc.includes("rain"))
      return <CloudRain size={72} className="text-red-500" />;
    if (desc.includes("cloud"))
      return <Cloud size={72} className="text-red-500" />;
    if (desc.includes("sun") || desc.includes("clear"))
      return <Sun size={72} className="text-red-500" />;
    return <Cloud size={72} className="text-red-500" />;
  };

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  if (error)
    return (
      <div className="app-container flex items-center justify-center text-stone-400">
        {error}
      </div>
    );

  if (!weather)
    return (
      <div className="app-container flex items-center justify-center text-stone-400">
        Loading weather...
      </div>
    );

  return (
    <div className="app-container text-center flex flex-col items-center justify-center space-y-6">
      {/* Header */}
      <h1 className="text-3xl mb-6 font-semibold tracking-tight text-stone-900 dark:text-stone-100">
        Maurii Weather
      </h1>

      {/* City & Country */}
      <div className="flex items-center gap-2 text-stone-600 dark:text-stone-300 text-sm">
        <MapPin size={16} />
        <span>
          {weather.name}, {weather.sys.country}
        </span>
      </div>

      {/* Main Weather Icon + Temperature */}
      <div className="flex flex-col items-center justify-center">
        {getWeatherIcon(weather.weather[0].description)}
        <div className="text-6xl font-bold text-stone-900 dark:text-stone-100 mt-3">
          {Math.round(weather.main.temp)}°C
        </div>
        <p className="capitalize text-stone-500 dark:text-stone-400 mt-1 tracking-wide">
          {weather.weather[0].description}
        </p>
      </div>

      {/* Info Card */}
      <div className="w-full bg-gray-100 dark:bg-stone-800 rounded-lg p-4 mt-4">
        {/* Temperature Details */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-stone-600 dark:text-stone-400 mb-3">
          <div className="flex items-center gap-1">
            <Thermometer size={16} />
            Feels {Math.round(weather.main.feels_like)}°C
          </div>
          <div className="flex items-center gap-1">
            <ArrowUp size={16} />
            High {Math.round(weather.main.temp_max)}°C
          </div>
          <div className="flex items-center gap-1">
            <ArrowDown size={16} />
            Low {Math.round(weather.main.temp_min)}°C
          </div>
        </div>

        {/* Humidity + Wind */}
        <div className="flex justify-evenly gap-8 text-sm text-stone-600 dark:text-stone-400 mb-3">
          <div className="flex items-center gap-1">
            <Droplets size={16} />
            {weather.main.humidity}%
          </div>
          <div className="flex items-center gap-1">
            <Wind size={16} />
            {Math.round(weather.wind.speed)} m/s
          </div>
        </div>

        {/* Sunrise / Sunset */}
        <div className="flex justify-evenly gap-8 text-sm text-stone-600 dark:text-stone-400">
          <div className="flex items-center gap-1">
            <Sunrise size={16} />
            {formatTime(weather.sys.sunrise)}
          </div>
          <div className="flex items-center gap-1">
            <Sunset size={16} />
            {formatTime(weather.sys.sunset)}
          </div>
        </div>
      </div>
    </div>
  );
}
