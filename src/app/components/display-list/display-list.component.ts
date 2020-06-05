import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss'],
})
export class DisplayListComponent implements OnInit, OnChanges {
  @Input() listItem: string;
  @Output() itemStatus = new EventEmitter<boolean>();
  listItems: Array<string> = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    if (this.listItem) {
      const val = this.listItem.trim().toLowerCase();
      if (this.listItems.indexOf(val) === -1) {
        this.listItems.push(val);
        this.itemStatus.emit(false);
      } else {
        this.itemStatus.emit(true);
      }
    }
  }
}
