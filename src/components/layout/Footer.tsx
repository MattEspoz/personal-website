import { useEffect, useState } from "react";

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

  return (
    <>
      <div className="footer-container">
        <div className="left-content">
          {/* Updated: October 2022 */}
          <p className="updated">{`Updated: ${lastUpdated}`}</p>
        </div>
        <div className="right-content">
          {/* My Life Updates 📭 ↗ */}
          <p className="my-updates">
            My Life Updates 📭 ↗<br />
            <span>(read by 1,500+ people)</span>
          </p>
        </div>
      </div>

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
        }

        .my-updates span {
          font-size: 0.75rem;
          color: #555;
        }

        .designed {
          font-size: 0.875rem;
          margin-top: 3rem;
          text-align: center;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Footer;
