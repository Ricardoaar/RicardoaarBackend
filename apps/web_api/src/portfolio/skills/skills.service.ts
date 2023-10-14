import { Injectable } from '@nestjs/common';
import { CreateSkillInput } from './dto/create-skill.input';
import { UpdateSkillInput } from './dto/update-skill.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Skill } from '@/web_api/src/portfolio/skills/entities/skill.model';
import { MODELS } from '@/web_api/src/portfolio/models.contants';

@Injectable()
export class SkillsService {
  constructor(@InjectModel(MODELS.SKILLS) private skills: Model<Skill>) {
  }

  create(createSkillInput: CreateSkillInput) {
    return this.skills.create({ ...createSkillInput, createdAt: new Date() });
  }

  findAll() {
    return this.skills.find();
  }

  findOne(id: Types.ObjectId) {
    return this.skills.findById(id).populate(MODELS.EXPERIENCES);
  }

  update(id: string, updateSkillInput: UpdateSkillInput) {
    const data = this.skills.findByIdAndUpdate(id, { ...updateSkillInput, updatedAt: new Date() });
    return data.populate(MODELS.EXPERIENCES);
  }

  remove(id: number) {
    return this.skills.findByIdAndDelete(id);
  }
}
