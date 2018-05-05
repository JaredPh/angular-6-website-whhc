import { IImage } from '../media/media.interfaces';

export interface IUser {
  id: string;
  fname: string;
  lname: string;
  avatar: IImage;
}
