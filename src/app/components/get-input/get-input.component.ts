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

  public addItem(): void {
    this.listItem = this.inputValue;
    this.resetInput();
  }

  public setItemStatus(status: boolean): void {
    this.listItem = '';
    this.displayError = status;
  }

  public enableAddBtn(): boolean {
    return !(this.inputValue && this.inputValue.trim().length > 0);
  }

  private resetInput(): void {
    this.inputValue = '';
    this.inputEl.nativeElement.focus();
  }

  ngAfterViewInit() {
    this.inputEl.nativeElement.focus();
  }
}
