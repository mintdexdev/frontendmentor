import { useEffect, useState } from 'react';

export default function LiveClock530() {
  const [time, setTime] = useState(getOffsetTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getOffsetTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getOffsetTime() {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const offset530 = utc + 5.5 * 60 * 60 * 1000;
    return new Date(offset530);
  }

  return (
    <p className="font-mono text-lg text-center">
      <span className=" text-gray-500">local Time </span>
      [{time.toLocaleTimeString()}]
      <span className=" text-gray-500"> GMT+5:30</span>
    </p>
  );
}
