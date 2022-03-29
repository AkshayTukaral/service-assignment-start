import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterserviceService } from '../counterservice.service';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[] = this.userService.inactiveUsers;
  count = this.counterService.counter
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private userService: UserServiceService,private counterService: CounterserviceService){}

  onSetToActive(id: number) {
    this.userService.onSetToActive(id);
    this.counterService.userstatuschanged('active')

  
  }
}
