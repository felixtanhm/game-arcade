import React from "react";

import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="min-h-full	flex flex-col items-center justify-center gap-2"
    >
      <h1 className="text-color font-bold	text-9xl">Oops!</h1>
      <p className="text-color">Sorry, an unexpected error has occurred.</p>
      <p className="text-color">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
