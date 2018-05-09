import { IImage } from '../media/media.interfaces';
import { IUser } from '../users/users.interfaces';

export interface IEvent {
  slug: string;
  heading: string;
  thumb?: IImage; // todo: remove ?
  start: string;
  end: string;
  location: string;
  body: string; // todo: remove ?
  author?: IUser; // todo: remove ?
  tags: string[];
}
