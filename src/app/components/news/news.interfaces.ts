import { IImage } from '../media/media.interfaces';
import { IUser } from '../users/users.interfaces';

export interface INews {
  slug: string;
  heading: string;
  date: string;
  thumb: IImage;
  author: IUser;
  background?: IImage;
  body: string;
  featuredImage?: IImage;
  featuredVideo?: string;
  photos?: IImage[];
  similar?: string[];
}
