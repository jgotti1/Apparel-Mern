import express from "express";
import { getApparel } from "../controllers/apparel.js";
import { createApparel } from "../controllers/apparel.js";
import { deleteApparel } from "../controllers/apparel.js";
import student from "../models/apparel.js";

const router = express.Router();

router.get("/", getApparel);
router.post("/", createApparel);
router.delete("/:id", deleteApparel);

export default router;
