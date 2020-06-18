import mongoose from 'mongoose'

import IPost from '../interfaces/post.interface'

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 120
    },
    description: {
        type: String,
        required: true,
        min: 10
    },
    draft: {
        type: Boolean,
        default: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })


export default mongoose.model<IPost>("Post", postSchema)