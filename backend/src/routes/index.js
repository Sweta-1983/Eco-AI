import { Router } from "express";

import stayRoutes from "./stayRoutes.js";

const router = Router();

router.get("/", (_req, res) => {
  res.status(200).json({
    message: "EcoStay AI API v1",
    status: "ready",
  });
});

router.use("/stays", stayRoutes);

export default router;
