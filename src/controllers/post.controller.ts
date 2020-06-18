import { Request, Response } from 'express'

import Post from '../models/post.schema'
import IPost from '../interfaces/post.interface';
import * as yup from 'yup'


const postValidate = yup.object().shape({
    title: yup.string().min(10).max(120).required("titulo requerido!"),
    description: yup.string().min(10).required(),
    author: yup.string().required(),
    draft: yup.bool(),
})


class PostController {
    async getPosts(req: Request, res: Response) {
        const posts = await Post.find().populate("author", "name email");
        return res.json({ posts })
    }

    async addPost(req: Request, res: Response) {
        const post: IPost = req.body;

        try {
            await postValidate.validate(post, { abortEarly: false })
        } catch (error) {
            return res.status(400).json(error)
        }

        const result = await Post.create(post)
        return res.json({ result })

    }
}

export default new PostController();