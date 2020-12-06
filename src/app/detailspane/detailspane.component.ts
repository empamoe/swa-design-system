import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'sw-detailspane',
  templateUrl: './detailspane.component.html',
  styleUrls: ['./detailspane.component.scss'],
})

export class DetailspaneComponent implements OnInit {

  /**
   * DetailsPane Title
   *
   * @required
   */
  @Input()
  title = 'DetailsPane';

  /**
   * DetailsPane ID
   *
   * @required
   */
  id = 1;

  /**
   * Is this the detailspane closed?
   */
  @Input()
  closed = false;

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.closed ? 'detailspane detailspane--closed' : 'detailspane';

    return [mode];
  }

  constructor() { }

  ngOnInit(){

  }

}
