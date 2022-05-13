import express from "express";
import { createPost, getPost } from "../controller/postsControl.js";
const router = express.Router();


router.get('/', getPost );
router.post('/', createPost  );

export default router