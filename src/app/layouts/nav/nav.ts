import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
  openMycv(){
    window.open("https://drive.google.com/file/d/1zXvT6AtexNgjAvy4XzoptfmecV7cpr9B/view?usp=drive_link", "_blank");
  }
  




}
