import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class PageLoaderService {

  public emitter: Subject<string>;

  constructor(
    private router: Router,
  ) {
    this.emitter = new BehaviorSubject<string>('Loading...');

    this.router.events.subscribe();
  }

  public set(text: string): void {
    this.emitter.next(text);
  }

  public clear(): void {
    setTimeout(() => {
      this.emitter.next(null);
    }, 1000);
  }
}
