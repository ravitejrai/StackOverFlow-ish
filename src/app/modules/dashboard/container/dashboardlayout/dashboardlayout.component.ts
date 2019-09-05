import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/message.service';


@Component({
  selector: 'app-dashboardlayout',
  templateUrl: './dashboardlayout.component.html',
  styleUrls: ['./dashboardlayout.component.scss']
})
export class DashboardlayoutComponent implements OnInit{
  
  userInfo: any;
  firstName: any;
  lastName: any;
  emailId: any;
  availableBalance: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private router:Router,private messageService:MessageService) { }

  ngOnInit() {
    this.messageService.getMessage().subscribe((data) => {
    this.userInfo = data;
    this.firstName = data.tabledata.firstName;
    this.lastName = data.tabledata.lastName;
    this.emailId = data.tabledata.email;
    this.availableBalance = '$10,000';




    //console.log(data, "dash.....")
    //console.log("this.u....",this.userInfo)
    //console.log(this.userInfo.tabledata)
    //console.log(data.tabledata.email)

      })
    
  }

  onLogOut()
  {
    this.router.navigate(['/'])
  }

}
