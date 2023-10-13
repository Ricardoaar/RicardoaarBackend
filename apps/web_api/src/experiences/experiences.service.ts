import { Injectable } from '@nestjs/common';
import { CreateExperienceInput } from './dto/create-experience.input';
import { UpdateExperienceInput } from './dto/update-experience.input';
import { InjectModel } from '@nestjs/mongoose';
import { Experience } from '@/web_api/src/experiences/entities/experience.model';
import { Model, Types } from 'mongoose';
import { MODELS } from '@/web_api/src/experiences/models.contants';

@Injectable()
export class ExperiencesService {

  constructor(@InjectModel(MODELS.EXPERIENCES) private experience: Model<Experience>) {

  }

  create(createExperienceInput: CreateExperienceInput) {
    return this.experience.create(createExperienceInput);
  }

  findAll() {
    return this.experience.find({});
  }

  findOne(id: number) {
    return this.experience.findById(id);
  }

  update(id: Types.ObjectId, updateExperienceInput: UpdateExperienceInput) {
    const data = this.experience.findByIdAndUpdate(id, updateExperienceInput);
    return data.populate(MODELS.SKILLS);
  }

  remove(id: number) {
    return this.experience.findByIdAndDelete(id);
  }
}
