import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

//Testing
router.get("/healthcheck", (_, res: Response) =>
  res.status(200).json({
    status: "success",
    message: "Welcome to server 🚀",
  })
);

// UnKnown Routes
router.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route: ${req.originalUrl} not found 👾`) as any;
  err.statusCode = 404;
  next(err);
});

export default router;