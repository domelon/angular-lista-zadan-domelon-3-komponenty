import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AddTaskComponent, TodoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
