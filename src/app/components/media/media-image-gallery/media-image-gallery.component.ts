import { getIn } from '@angular-redux/store/lib/src/utils/get-in';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { IImage } from '../media.interfaces';

@Component({
  selector: 'whhc-media-image-gallery',
  templateUrl: './media-image-gallery.component.html',
})
export class MediaImageGalleryComponent implements OnInit {

  @Input() images: IImage[];

  public modalIndex: { rowIndex: number; columnIndex: number};
  public modalPrevIndex: { rowIndex: number; columnIndex: number};
  public modalNextIndex: { rowIndex: number; columnIndex: number};

  public rows: { url: string, width: number }[][];

  ngOnInit() {
    this.rows = this.chunk(this.images).map(row => row.map(i => {
      return {
        ...i,
        ratio: (i.width / i.height),
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

  /* modal methods */
  public  showModalImage(rowIndex: number, columnIndex: number): void {
    this.modalIndex = { rowIndex, columnIndex};
    this.modalPrevIndex = this.getIndex('prev', this.modalIndex);
    this.modalNextIndex = this.getIndex('next', this.modalIndex);
  }

  public hideModalImage(): void {
    this.modalIndex = null;
  }

  public changeModalImage(action: 'next' | 'prev') {
    this.modalIndex = this.getIndex(action, this.modalIndex);
    this.modalPrevIndex = this.getIndex('prev', this.modalIndex);
    this.modalNextIndex = this.getIndex('next', this.modalIndex);
  }

  private getIndex(action: 'next' | 'prev', index: {rowIndex, columnIndex}): {rowIndex, columnIndex} {
    let columnIndex: number;
    let rowIndex: number = index.rowIndex;

    if (action === 'next') {
      columnIndex = (index.columnIndex + 1) % this.rows[index.rowIndex].length;

      if (columnIndex === 0) {
        rowIndex = (rowIndex + 1) % this.rows.length;
      }
    } else {
      columnIndex = index.columnIndex - 1;

      if (columnIndex < 0) {
        rowIndex = (this.rows.length + rowIndex - 1) % this.rows.length;
        columnIndex = this.rows[rowIndex].length - 1;
      }
    }

    return {rowIndex, columnIndex};
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent): void {

    const keys = {
      RIGHT_ARROW: 39,
      LEFT_ARROW: 37,
      SPACE: 32,
      ESCAPE: 27,
    };

    if (this.modalIndex) {
      switch (event.keyCode) {
        case keys.LEFT_ARROW:
          this.changeModalImage('prev');
          break;
        // case keys.SPACE:
        case keys.RIGHT_ARROW:
          this.changeModalImage('next');
          break;
        case keys.ESCAPE:
          this.hideModalImage();
          break;
      }
    }
  }
}
