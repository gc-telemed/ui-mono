import { Component } from '@angular/core';

@Component({
  selector: 'gita-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  displayer = false;

  toggleSidebar() {
    this.displayer = !this.displayer;
    console.log("toggleDisplay", this.displayer);
  }
}