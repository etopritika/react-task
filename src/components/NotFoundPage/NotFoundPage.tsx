import { Link } from "react-router-dom";
import "./NotFoundPage.css"

const NotFoundPage = () => {
  return (
    <main className="container not-found-container">
      <p>Page not found</p>
      <button type="button">
        <Link to="/">Back to Home</Link>
      </button>
    </main>
  );
};

export default NotFoundPage;
