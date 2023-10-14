import { Injectable } from '@nestjs/common';
import { CreateExperienceInput } from './dto/create-experience.input';
import { UpdateExperienceInput } from './dto/update-experience.input';
import { InjectModel } from '@nestjs/mongoose';
import { Experience } from '@/web_api/src/portfolio/experiences/entities/experience.model';
import { Model, Types } from 'mongoose';
import { MODELS } from '@/web_api/src/portfolio/models.contants';
import { Skill } from '@/web_api/src/portfolio/skills/entities/skill.model';

@Injectable()
export class ExperiencesService {

  constructor(@InjectModel(MODELS.EXPERIENCES) private experience: Model<Experience>,
              @InjectModel(MODELS.SKILLS) private skills: Model<Skill>) {

  }

  async create(createExperienceInput: CreateExperienceInput) {
    const { skills, ...experienceInput } = createExperienceInput;


    const experience = await this.experience.create({ ...experienceInput, createdAt: new Date() });
    if (skills) {
      await this.skills.updateMany({ _id: { $in: skills } }, { $addToSet: { experiences: experience._id } });
    }

    return experience;
  }

  findAll() {
    return this.experience.find({});
  }

  findOne(id: Types.ObjectId) {
    return this.experience.findById(id);
  }

  async update(id: Types.ObjectId, updateExperienceInput: UpdateExperienceInput) {
    const { skills, ...experienceInput } = updateExperienceInput;

    if (skills) {
      await this.skills.updateMany({ _id: { $in: skills } }, { $addToSet: { experiences: id } });
    }

    return this.experience.findByIdAndUpdate(id, experienceInput, { new: true });
  }

  addSkill(id: Types.ObjectId, skillId: Types.ObjectId) {
    return this.experience.findByIdAndUpdate(id, { $addToSet: { skills: skillId } });
  }

  getSkills(id: string) {
    return this.skills.find({ experiences: { $in: id } });
  }

  remove(id: number) {
    return this.experience.findByIdAndDelete(id);
  }
}
