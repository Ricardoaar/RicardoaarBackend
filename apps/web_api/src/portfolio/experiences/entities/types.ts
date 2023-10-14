export interface IExperience {
  _id: String;
  title: string;
  company: string;
  description: string;
  startDate: Date;
  endDate: Date;


  createdAt?: Date;
  updatedAt?: Date;
}