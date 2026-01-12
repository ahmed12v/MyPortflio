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
    if (this.menuOpen) {
    document.body.classList.add('no-scroll');
  } else {
    document.body.classList.remove('no-scroll');
  }
  }
  closeMenu() {
    this.menuOpen = false;
    document.body.classList.remove('no-scroll');
  }

  openMycv(){
    window.open("https://drive.google.com/file/d/1zXvT6AtexNgjAvy4XzoptfmecV7cpr9B/view?usp=drive_link", "_blank");
  }

}
