import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { WilkipediaService } from '../wilkipedia.service';

@Component({
  selector: 'app-wilkipedia-result',
  templateUrl: './wilkipedia-result.component.html',
  styleUrls: ['./wilkipedia-result.component.css']
})
export class WilkipediaResultComponent implements OnInit, OnDestroy {
  items;
  private _searchSubscription: Subscription;

  constructor(private _service: WilkipediaService) { }

  ngOnInit() {
    this._service.term$.subscribe(result => {
      this.items = result;
    });
  }

  ngOnDestroy() {

  }

}
