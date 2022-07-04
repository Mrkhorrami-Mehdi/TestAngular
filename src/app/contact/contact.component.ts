import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  users: any
  constructor(
    private user: UserService) {
  }
  click(w: number) {
    alert(this.users[w].email + " - " + this.users[w].address.city + "-" + this.users[w].phone);
  }
  ngOnInit(): void {
    this.user.getdata().subscribe(para => {
      this.users = para
    })
  }
}
