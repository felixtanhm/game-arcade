import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="min-h-full	flex flex-col items-center justify-center gap-4"
    >
      <h1 className="text-color font-bold text-5xl text-center">Oops!</h1>
      <p className="text-color text-xl text-center">
        Sorry, an unexpected error has occurred. <br />
        {error.statusText || error.message}
      </p>
      <Link
        className="btn-sec-color p-4 border-solid border-2 rounded-lg font-medium"
        to="/"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
