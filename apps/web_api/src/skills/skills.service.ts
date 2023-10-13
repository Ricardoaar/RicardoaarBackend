import { Injectable } from '@nestjs/common';
import { CreateSkillInput } from './dto/create-skill.input';
import { UpdateSkillInput } from './dto/update-skill.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from '@/web_api/src/skills/entities/skill.model';

@Injectable()
export class SkillsService {
  constructor(@InjectModel(Skill.name) private skills: Model<Skill>) {
  }

  create(createSkillInput: CreateSkillInput) {
    return this.skills.create({ ...createSkillInput, createdAt: new Date() });
  }

  findAll() {
    return this.skills.find();
  }

  findOne(id: number) {
    return this.skills.findById(id);
  }

  update(id: string, updateSkillInput: UpdateSkillInput) {
    return this.skills.findByIdAndUpdate(id, { ...updateSkillInput, updated_at: new Date() });
  }

  remove(id: number) {
    return this.skills.findByIdAndDelete(id);
  }
}
