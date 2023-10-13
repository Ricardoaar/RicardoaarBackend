import { Injectable } from '@nestjs/common';
import { CreateExperienceInput } from './dto/create-experience.input';
import { UpdateExperienceInput } from './dto/update-experience.input';
import { InjectModel } from '@nestjs/mongoose';
import { Experience } from '@/web_api/src/experiences/entities/experience.model';
import { Model } from 'mongoose';
import { MODELS } from '@/web_api/src/experiences/models.contants';
import { ObjectId } from 'mongodb';

@Injectable()
export class ExperiencesService {

  constructor(@InjectModel(Experience.name) private experience: Model<Experience>) {

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

  update(id: ObjectId, updateExperienceInput: UpdateExperienceInput) {
    return this.experience.findByIdAndUpdate(id, updateExperienceInput);
  }

  remove(id: number) {
    return this.experience.findByIdAndDelete(id);
  }
}
