import React, { useEffect, useState, useCallback } from "react";
import { Slide } from "react-awesome-reveal";

const TimeUntil = () => {
  const [time, setTime] = useState({
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  });

  const renderItem = (time, val) => (
    <div className="countdown_item">
      <div className="countdown_time">{time}</div>
      <div className="countdown_tag">{val}</div>
    </div>
  );

  const getTimeUntil = useCallback((deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("time passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  }, []);

  useEffect(() => {
    setInterval(() => getTimeUntil("Mar, 23, 2023, 19:00:00"), 1000);
  }, [getTimeUntil]);

  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event starts in</div>
        <div className="countdown_bottom">
          {renderItem(time.days, "Days")} {renderItem(time.hours, "HRS")}{" "}
          {renderItem(time.minutes, "mins")} {renderItem(time.seconds, "secs")}
        </div>
      </div>
    </Slide>
  );
};

export default TimeUntil;
