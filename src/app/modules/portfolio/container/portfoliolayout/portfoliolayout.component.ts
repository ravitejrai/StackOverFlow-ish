import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfoliolayout',
  templateUrl: './portfoliolayout.component.html',
  styleUrls: ['./portfoliolayout.component.scss']
})
export class PortfoliolayoutComponent implements OnInit {

  navLinks: any[];
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'User Account',
            link: 'userportfolio',
            index: 0
        },
    ];
  }

  ngOnInit() {
  }

}
