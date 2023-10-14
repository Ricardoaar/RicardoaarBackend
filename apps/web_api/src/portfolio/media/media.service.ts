import { Injectable } from '@nestjs/common';
import { CreateMediaInput } from './dto/create-media.input';
import { UpdateMediaInput } from './dto/update-media.input';
import { InjectModel } from '@nestjs/mongoose';
import { MODELS } from '@/web_api/src/portfolio/models.contants';
import { Model, Types } from 'mongoose';
import { Media } from '@/web_api/src/portfolio/media/entities/media.entity';

@Injectable()
export class MediaService {
  constructor(@InjectModel(MODELS.MEDIA) private media: Model<Media>) {

  }

  create(createMediaInput: CreateMediaInput) {
    return this.media.create({ ...createMediaInput, createdAt: new Date() });
  }

  findAll() {
    return this.media.find();
  }

  findOne(id: number) {
    return this.media.findById(id);
  }

  update(id: Types.ObjectId, updateMediaInput: UpdateMediaInput) {
    return this.media.findByIdAndUpdate(id, updateMediaInput, { new: true });
  }

  remove(id: Types.ObjectId) {
    return this.media.findByIdAndDelete(id);
  }
}
