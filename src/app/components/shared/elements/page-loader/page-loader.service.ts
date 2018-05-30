import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class PageLoaderService {

  public emitter: Subject<string>;

  constructor() {
    this.emitter = new BehaviorSubject<string>('Loading...');
  }

  public set(text: string): void {
    this.emitter.next(text);
  }

  public clear(): void {
    setTimeout(() => {
      this.emitter.next(null);
    }, 800);
  }
}
