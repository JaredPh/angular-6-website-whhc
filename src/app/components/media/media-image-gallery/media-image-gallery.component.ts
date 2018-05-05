import { Component, Input, OnInit } from '@angular/core';
import { IImage } from '../media.interfaces';

@Component({
  selector: 'whhc-media-image-gallery',
  templateUrl: './media-image-gallery.component.html',
  styleUrls: ['./media-image-gallery.component.scss'],
})
export class MediaImageGalleryComponent implements OnInit {

  @Input() images: IImage[];

  public rows: { url: string, width: number }[][];

  ngOnInit() {
    this.rows = this.chunk(this.images).map(row => row.map(i => {
      return {
        url: i.url,
        width: (i.width / i.height),
      };
    }));
  }

  private chunk(input: IImage[]): any {
    const chunkSizeArr: number[] = [];
    let remainingSize: number = input.length;

    while (remainingSize > 0) {
      let chunkSize: number;

      switch (remainingSize) {
        case 1:
          chunkSize = 1;
          break;
        case 2: case 4: case 7:
          chunkSize = 2;
          break;
        default:
          chunkSize = 3;
          break;
      }

      chunkSizeArr.push(chunkSize);
      remainingSize -= chunkSize;
    }

    let index = 0;
    return chunkSizeArr.reverse().reduce((array, chunkSize): IImage[][] => {
      const chunk: IImage[] = input.slice(index, index + chunkSize);
      index += chunkSize;
      return [...array, chunk];
    }, []);
  }
}
