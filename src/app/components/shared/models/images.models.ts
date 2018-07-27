export class Image {
  url: string;
  description: string;
  height: number;
  width: number;

  constructor(data: any) {
    this.url = data.url;
    this.description = data.description;
    this.height = data.height;
    this.width = data.width;
  }
}
