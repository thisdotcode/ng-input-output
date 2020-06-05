import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-get-input',
  templateUrl: './get-input.component.html',
  styleUrls: ['./get-input.component.scss'],
})
export class GetInputComponent implements AfterViewInit {
  inputValue: string;
  listItem: string;
  displayError = false;
  @ViewChild('inputEl', { static: false }) inputEl: ElementRef;

  addItem() {
    this.listItem = this.inputValue;
    this.inputValue = '';
    this.inputEl.nativeElement.focus();
  }

  setItemStatus(status: boolean) {
    this.displayError = status;
    this.listItem = '';
  }

  enableInput() {
    return !(this.inputValue && this.inputValue.trim().length > 0);
  }

  ngAfterViewInit() {
    this.inputEl.nativeElement.focus();
  }
}
