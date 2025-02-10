import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { createCheckoutSession } from "../controllers/payment.controller.js";
import Stripe from "stripe";
import Coupon from "../models/coupon.model.js";
import Order from "../models/order.model.js";

const router = express.Router();

router.post("/create-checkout-session", protectRoute, createCheckoutSession);
router.post("/checkout-success", protectRoute);
export default router;
