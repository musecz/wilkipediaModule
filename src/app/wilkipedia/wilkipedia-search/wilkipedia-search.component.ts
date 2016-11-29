import { Component, OnInit } from '@angular/core';
import { WilkipediaService } from '../wilkipedia.service';
import {Subject} from "rxjs";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-wilkipedia-search',
  templateUrl: './wilkipedia-search.component.html',
  styleUrls: ['./wilkipedia-search.component.css']
})
export class WilkipediaSearchComponent implements OnInit {

  term$ = new Subject<string>();
  constructor(private _service: WilkipediaService) {
    this.term$
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe(term => {  
      this._service.search(term);
    })
  }

  ngOnInit() {

  }

}
