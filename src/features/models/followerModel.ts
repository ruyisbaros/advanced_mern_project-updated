import { IFollowerDocument } from '../interfaces/follower.interface';
import mongoose, { model, Model, Schema } from 'mongoose';

const followerSchema: Schema = new Schema({
    followerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
    followingId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
    createdAt: { type: Date, default: Date.now() }
});

const FollowerModel: Model<IFollowerDocument> = model<IFollowerDocument>('Follower', followerSchema, 'Follower');
export { FollowerModel };
