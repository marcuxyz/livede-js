import mongoose from 'mongoose'

import IUser from '../interfaces/user.interface'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 30
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })


export default mongoose.model<IUser>("User", userSchema)