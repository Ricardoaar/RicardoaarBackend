import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { InjectModel } from '@nestjs/mongoose';
import { MODELS } from '@/web_api/src/portfolio/models.contants';
import { Model, Types } from 'mongoose';
import { Project } from '@/web_api/src/portfolio/projects/entities/project.model';
import { Skill } from '@/web_api/src/portfolio/skills/entities/skill.model';


@Injectable()
export class ProjectsService {

  constructor(@InjectModel(MODELS.PROJECTS) private projects: Model<Project>,
              @InjectModel(MODELS.SKILLS) private skills: Model<Skill>,
  ) {
  }

  async create(createProjectInput: CreateProjectInput) {

    const { skills, ...projectInput } = createProjectInput;

    const project = await this.projects.create({ ...projectInput, createdAt: new Date() });

    if (skills) {

      const updated = await this.skills.updateMany({ _id: { $in: skills } }, { $addToSet: { projects: project._id } });
      console.log({ updated });
    }
    return project;
  }

  findAll() {
    return this.projects.find();
  }

  async findOne(id: number) {
    return this.projects.findById(id);
  }

  async update(id: number, updateProjectInput: UpdateProjectInput) {
    const { skills, ...projectInput } = updateProjectInput;
    const project = await this.projects.findByIdAndUpdate(id, projectInput);
    if (skills) {
      await this.skills.updateMany({ _id: { $in: skills } }, { $addToSet: { projects: project._id } });
    }

    return project;
  }

  remove(id: number) {
    return this.projects.findByIdAndDelete(id);
  }

  async getSkills(id: Types.ObjectId) {
    const data = await this.skills.find({
      projects: {
        $in: [id],
      },
    });
    console.log({ data });
    return data;
  }
}

