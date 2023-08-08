import { useEffect, useState } from "react";
import HorizontalLine from "../HorizontalLine";

const Footer = () => {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    // Function to get the current date and format it as "Month Year"
    const getCurrentDate = () => {
      const currentDate = new Date();
      const month = currentDate.toLocaleString("default", { month: "long" });
      const year = currentDate.getFullYear();
      return `${month} ${year}`;
    };

    // Set the lastUpdated state with the current date
    setLastUpdated(getCurrentDate());
  }, []);

  const handleMyUpdatesClick = () => {
    // Redirect to https://compound.super.site/ in a new tab
    window.open(
      "https://compound.beehiiv.com/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <div className="footer-container">
        <div className="left-content">
          {/* Updated: October 2022 */}
          <p className="updated">{`Updated: ${lastUpdated}`}</p>
        </div>
        <div className="right-content">
          {/* My Life Updates 📭 ↗ */}
          <p className="my-updates" onClick={handleMyUpdatesClick}>
            <u>My Life Updates</u> 📭 ↗<br />
            <span>(read by 2,000+ people)</span>
          </p>
        </div>
      </div>

      <HorizontalLine />

      <p className="emoji" role="img" aria-label="Crystal Ball">
        🔮
      </p>

      <p className="designed">© Designed and built by Matt Espinoza</p>

      <style jsx>{`
        .footer-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-top: 1px solid #eaeaea;
        }

        p {
          margin: 0;
          font-size: 0.875rem;
          text-align: center;
        }

        .updated {
          font-size: 1rem;
          font-weight: bold;
          color: #555;
        }

        .my-life-updates {
          display: flex;
          align-items: center;
        }

        .my-updates {
          font-size: 1rem;
          font-weight: bold;
          color: #6b46c1;
          cursor: pointer; /* Add cursor pointer to indicate it's clickable */
          transition: color 0.2s ease, transform 0.2s ease; /* Add transition for color and transform */
        }

        .my-updates:hover {
          color: teal; /* Change color on hover to teal */
          transform: translateY(-2px); /* Add floating effect on hover */
        }

        .my-updates span {
          font-size: 0.75rem;
          color: #555;
        }

        .emoji {
          font-size: 2rem;
          margin-bottom: -0.75rem; /* Adjust the value to reduce space */
          margin-top: 3rem;
        }

        .designed {
          font-size: 0.875rem;
          margin-top: 1rem;
          margin-bottom: 3rem;
          text-align: center;
          font-weight: bold;
          color: #555;
        }
      `}</style>
    </>
  );
};

export default Footer;
