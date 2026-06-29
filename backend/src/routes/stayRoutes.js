import { Router } from "express";

import { createStay, deleteStay, getStayById, getStays, searchStays, updateStay } from "../controllers/stayController.js";

const router = Router();

router.get("/search", searchStays);
router.route("/").get(getStays).post(createStay);
router.route("/:id").get(getStayById).put(updateStay).delete(deleteStay);

export default router;
