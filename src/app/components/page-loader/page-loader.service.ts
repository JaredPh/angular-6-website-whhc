import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root',
})
export class PageLoaderService {

  public subject: Subject<string>;

  constructor() {
    this.subject = new Subject();
  }

  public getObservable(): Observable<string> {
    return this.subject.asObservable();
  }

  public set(text: string): void {
    console.log('pl set', text);
    this.subject.next(text);
  }

  // public clear(): void {
  //   console.log('pl clear');
  //   this.emitter.next(null);
  // }
}
