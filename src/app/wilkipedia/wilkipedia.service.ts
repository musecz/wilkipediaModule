import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import { Subject } from 'rxjs';

@Injectable()
export class WilkipediaService {

  constructor(private _jsonp: Jsonp) { }
  term$ = new Subject<string>();

  search(term: string) {
    let search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');

    return this._jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
        .map(res => res.json()[1])
        .subscribe(res => {
          this.term$.next(res)
        });
  }
}
