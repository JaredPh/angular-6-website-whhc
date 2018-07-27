import { Image } from '../shared/models/images.models';

export class Member {
  id: string;
  fname: string;
  lname: string;
  roles: string[];
  avatar: Image;

  constructor(data: any) {
    this.id = data.id;
    this.fname = data.fname;
    this.lname = data.lname;

    this.roles = data.roles;

    this.avatar = new Image(data.avatar);
  }
}
