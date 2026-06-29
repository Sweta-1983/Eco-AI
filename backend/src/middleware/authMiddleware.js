export const protect = (_req, _res, next) => {
  const error = new Error("Authentication middleware is reserved for a future phase.");
  error.statusCode = 501;
  next(error);
};
