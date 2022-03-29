import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterserviceService } from '../counterservice.service';

import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: string[] = this.userService.activeUsers;
  count = this.counterService.counter

  
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor(private userService: UserServiceService, private counterService: CounterserviceService){

  }


  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
    this.counterService.userstatuschanged('inactive')
    
  }

}
