import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  updateLg = true;

  constructor() { }

  ngOnInit(): void {
  }

  updateLgBreakpoint(): void {
    const elementHtml = document.getElementsByTagName('html')[0];

    this.updateLg = !this.updateLg;

    elementHtml.setAttribute('--breakpoint-lg', this.updateLg ? '1100px' : '1000px');
  }

}
