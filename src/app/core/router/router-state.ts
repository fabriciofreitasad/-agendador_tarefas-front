import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterState {
  private ratoaAtualSubject$ = new BehaviorSubject<string>('');
  public readonly rotaAtual$ = this.ratoaAtualSubject$.asObservable();

  constructor(private router: Router) {
    this.ratoaAtualSubject$.next(this.router.url);

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((evento: NavigationEnd) => {
        this.ratoaAtualSubject$.next(evento.url);
      });
  }
}
