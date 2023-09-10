import { Link } from "./link";

export class Project {
  public title: string = "";
  public tagline: string = "";
  public description: string = "";

  public images: string[] = [];
  public links: Link[] = [];
  public stamps?: string[] = [];

  constructor(title: string, tagline: string, description: string, images: string[], links: Link[], stamps?: string[]) {
    this.title = title;
    this.tagline = tagline;
    this.description = description;
    this.images = images;
    this.links = links;
    this.stamps = stamps;
  }
}
