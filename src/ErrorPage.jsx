import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>OH NO, This route doesn't exist</h1>
      <Link to="/">You can go back to home page by clicking here.</Link>
    </div>
  );
};

export default ErrorPage;
