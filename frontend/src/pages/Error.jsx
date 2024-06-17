import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h2
        style={{
          maxWidth: "65rem",
          margin: "0 auto",
          textAlign: "center",
          fontSize: "3rem",
          fontWeight: 400,
          marginTop: "8rem",
        }}
      >
        Page is not found.
        <Link to="/">Go to Home page.</Link>
      </h2>
    </>
  );
};

export default Error;
