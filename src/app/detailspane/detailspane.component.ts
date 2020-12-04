import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sw-detailspane',
  templateUrl: './detailspane.component.html',
  styleUrls: ['./detailspane.component.scss']
})

export class DetailspaneComponent implements OnInit {

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  title = 'DetailsPane';

  constructor() { }

  ngOnInit(){

  }

}
