import { Router, Request, Response } from 'express';

import PostController from './controllers/post.controller'
import UserController from './controllers/user.controller'

const router = Router()

router.get("/posts", PostController.getPosts)
router.post("/posts", PostController.addPost)

router.post("/users", UserController.addUser)


export default router;
