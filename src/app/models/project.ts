export class Project {
  public title: string = "";
  public tagline: string = "";
  public description: string = "";

  public images: string[] = [];
  public links: string[] = [];

  constructor(title: string, tagline: string, description: string, images: string[], links: string[]) {
    this.title = title;
    this.tagline = tagline;
    this.description = description;
    this.images = images;
    this.links = links;
  }
}
