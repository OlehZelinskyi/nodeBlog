// eslint-disable-next-line no-unused-vars
export default function errorMiddleware(err, req, res, next) {
  const response = {
    status: err.status || 500,
    message: err.message,
    stack: err.stack,
  };

  return res.status(response.status).json(response);
}
