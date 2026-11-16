import { useState, useEffect } from "react";

function Clock() {
  // useState: menyimpan waktu saat ini
  const [now, setNow] = useState(new Date());

  // useEffect: menjalankan interval setelah komponen dirender
  useEffect(() => {
    // setInterval: perbarui waktu setiap 1 detik (1000 ms)
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // cleanup: dijalankan saat komponen di-unmount
    return () => clearInterval(intervalId);
  }, []); // [] = efek hanya dijalankan sekali saat pertama render

  const time = now.toLocaleTimeString("id-ID", { hour12: false }).replace(/\./g, ":");
  const date = now.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="clock">
      <div className="clock-time">{time}</div>
      <div className="clock-date">{date}</div>
    </div>
  );
}

export default Clock;
