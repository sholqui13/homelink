import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  datosMenu=[
    {
      'titulo':'How We Help',
      'url':'#'
    },
    {
      'titulo':'Who We Help',
      'url':'#'
    },
    {
      'titulo':'Resources',
      'url':'#'
    },
    {
      'titulo':'About Homelink',
      'url':'#'
    },
    {
      'titulo':'Get In Touch',
      'url':'#'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  public openMenu: boolean = false;

  showMenu(): void {
    this.openMenu = !this.openMenu;
  }

}
