import {IImage} from '../media/media.interfaces';

export interface INews {
  background?: string;
  body?: string;
  date: string;
  heading: string;
  photos?: IImage[];
  slug: string;
  thumb: string;
  video?: string;
}
