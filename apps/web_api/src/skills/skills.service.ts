import { Injectable } from '@nestjs/common';
import { CreateSkillInput } from './dto/create-skill.input';
import { UpdateSkillInput } from './dto/update-skill.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from '@/web_api/src/skills/entities/skill.model';
import { MODELS } from '@/web_api/src/experiences/models.contants';

@Injectable()
export class SkillsService {
  constructor(@InjectModel(MODELS.SKILLS) private skills: Model<Skill>) {
  }

  create(createSkillInput: CreateSkillInput) {
    return this.skills.create({ ...createSkillInput, createdAt: new Date() });
  }

  findAll() {
    return this.skills.find().populate(MODELS.EXPERIENCES);
  }

  findOne(id: number) {
    return this.skills.findById(id);
  }

  update(id: string, updateSkillInput: UpdateSkillInput) {
    const data = this.skills.findByIdAndUpdate(id, updateSkillInput);
    return data.populate(MODELS.EXPERIENCES);
  }

  remove(id: number) {
    return this.skills.findByIdAndDelete(id);
  }
}
