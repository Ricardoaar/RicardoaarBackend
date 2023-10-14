import { Types } from 'mongoose';

export interface ISkill {
  name: string;
  fallbackIconUrl?: string;
  experiences?: string[] | Types.ObjectId[];

  createdAt?: Date;
  updatedAt?: Date;
}