import { Document } from 'mongoose';

export default interface IPost extends Document {
    title: string;
    description: string;
    draft: boolean;
}