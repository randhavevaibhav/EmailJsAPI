import { Router } from "express";
import { emailJsControllers } from "../controllers/emailJsControllers.js";
const router = Router();

router.post("/mail", emailJsControllers);

export default router;
