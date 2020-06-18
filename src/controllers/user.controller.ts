import { Request, Response } from 'express'

import User from '../models/user.schema'
import IUser from '../interfaces/user.interface';
import * as yup from 'yup'


const userValidate = yup.object().shape({
    name: yup.string().min(3).max(30).required(),
    email: yup.string().email().required(),
})


class UserController {
    async addUser(req: Request, res: Response) {
        const user: IUser = req.body;

        try {
            await userValidate.validate(user, { abortEarly: false })
        } catch (error) {
            return res.status(400).json(error)
        }

        const result = await User.create(user)
        return res.json({ result })
    }
}

export default new UserController();