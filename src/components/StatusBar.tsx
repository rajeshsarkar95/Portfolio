"use client";
import React, { useState, useEffect } from "react";

const StatusBar = () => {
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [time, setTime] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    setTime(new Date().toLocaleTimeString());
    setDate(new Date());
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined" && "getBattery" in navigator) {
      const getBatteryStatus = async () => {
        const battery = await (navigator as Navigator & { getBattery: () => Promise<{ level: number; addEventListener: (type: string, listener: () => void) => void; removeEventListener: (type: string, listener: () => void) => void; }> }).getBattery();
        const updateBatteryLevel = () => setBatteryLevel(battery.level * 100);
        updateBatteryLevel();
        battery.addEventListener("levelchange", updateBatteryLevel);
        return () => {
          battery.removeEventListener("levelchange", updateBatteryLevel);
        };
      };

      getBatteryStatus();
    }
  }, []);
  const formattedDate = date?.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  if (!hasMounted) return null;
  return (
    <div className="flex flex-row md:flex-row items-center justify-end gap-4 bg-[#19143A] text-white px-8 ml-8 py-3 rounded-full w-fit">
      <div className="flex items-center gap-1">
        <svg
          className="w-4 h-4 md:w-5 md:h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.5 16.5a6.5 6.5 0 0 1 7 0M5 13a11 11 0 0 1 14 0M2 9a16 16 0 0 1 20 0M12 20h.01"
          />
        </svg>
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4 md:w-5 md:h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M16 4h-1V2h-6v2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-1 10H9V6h6v8z" />
          </svg>
          <span className="text-xs md:text-sm">{batteryLevel.toFixed(0)}%</span>
        </div>
      </div>

      <svg
        className="w-4 h-4 md:w-5 md:h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle
          cx="11"
          cy="11"
          r="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="21"
          y1="21"
          x2="16.65"
          y2="16.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="flex flex-nowrap items-center gap-1">
        <span className="text-xs flex flex-nowrap text-nowrap md:text-sm">{time}</span>
        <span className="flex font-semibold text-nowrap text-xs md:text-sm">
          {formattedDate}
        </span>
      </div>
    </div>
  );
};

export default StatusBar;
