import "./LastUpdate.css";
import { useEffect, useState } from "react";

function LastUpdated() {
  // Get today's date
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateTimeLeft = () => {
      const now = new Date();
      const nextHour = new Date();

      // Set the time to the start of the next hour
      nextHour.setHours(now.getHours() + 1, 0, 0, 0);

      const timeDiff = nextHour - now;

      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      setTimeLeft(
        `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`
      );
    };

    // Update the time left immediately and then every second
    updateTimeLeft();
    const intervalId = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  const today = new Date();

  // Format the date
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);
  return (
    <div className="pricing-header p-3 pb-md-4 mx-auto text-center d-flex flex-column">
      <h1 className="display-4 fw-normal text-body-emphasis">
        Today, {formattedDate}
      </h1>
      <p className="fs-4 fw-light">The top 20 most watched movies of the day</p>
      <div id="counter" className="align-self-center">
        <p className="fs-6 fw-light text-body-secondary">
          Next update in
          <span className="text-primary-emphasis"> {timeLeft}</span>
        </p>
      </div>
    </div>
  );
}

export default LastUpdated;
