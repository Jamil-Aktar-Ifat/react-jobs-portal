import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center my-10">
      <h1>Ooops!!!</h1>
      <Link to="/" className="btn">Go back to Home</Link>
    </div>
  );
};

export default ErrorPage;
