const Footer = () => {
  return (
    <>
      <footer>
        <p>© Designed and built by Matt Espinoza</p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }

        .title,
        p {
          color: #333;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        p {
          margin: 0;
          font-size: 1rem;
          text-align: center;
        }

        @media (max-width: 600px) {
          .title {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
