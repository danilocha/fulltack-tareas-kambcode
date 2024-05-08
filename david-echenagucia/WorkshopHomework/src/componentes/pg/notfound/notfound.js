import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>No encontre el sitio</h2>
      <Link to="/projects"> ver mas </Link>
    </>
  );
};

export default NotFound;
