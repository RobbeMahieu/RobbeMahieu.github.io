import { Link } from "./link";

export class Project {
  public title: string = "";
  public tagline: string = "";
  public description: string = "";

  public images: string[] = [];
  public links: Link[] = [];

  constructor(title: string, tagline: string, description: string, images: string[], links: Link[]) {
    this.title = title;
    this.tagline = tagline;
    this.description = description;
    this.images = images;
    this.links = links;
  }
}
