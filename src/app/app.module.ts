import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GetInputComponent } from "./components/get-input/get-input.component";
import { DisplayListComponent } from "./components/display-list/display-list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent, GetInputComponent, DisplayListComponent],
  imports: [BrowserModule, CommonModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
