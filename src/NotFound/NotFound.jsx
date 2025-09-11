import React from 'react';

export default function NotFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <p className="fs-3">
          <span className="text-danger">Oops!</span> Page not found.
        </p>
        <p className="lead">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <a href="/" className="btn btn-primary mt-3">
          Go to Homepage
        </a>
      </div>
    </div>
  );
}