export interface IProjectLink {
  link: string;
  text: string;
}

export interface IProject {
  name: string;
  description: string;
  image: string;
  links: IProjectLink[];
}
