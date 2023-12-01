import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
 @if(show)
 {
  <h1>Show</h1>
 }
 @else
 {
 <h1>not show</h1>
 }
 @switch(role)
 {
  @case('user'){
<h1>User Role</h1>
  }
   @default{
    <h1>Rolunuz bulunamadı</h1
   }
 }
 <ul>
 @for(todo of todos;track todo)
 {
  <li>
  {{index}}={{todo}}
  <span *ngIf="$first>İlk kayıt</span>
  <span *ngIf="$last>Son kayıt</span>
  </li>
 }
 @empty{
  <h1>Listede hiçbir kayıt bulunamadi</h1>
 }
 </ul>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'builtin';
  show: boolean = false;
  todos: string[] = ["e1,e2,e3"];
}
