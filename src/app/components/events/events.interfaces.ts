import { IImage } from '../media/media.interfaces';
import { IUser } from '../users/users.interfaces';

export interface ILocation {
  id: number;
  heading: string;
  address: string;
}

export interface IEvent {
  slug: string;
  heading: string;
  thumb: IImage;
  start: string;
  end: string;
  location: ILocation;
  body: string;
  author: IUser;
  tags: string[];
  facebook?: string;
}
