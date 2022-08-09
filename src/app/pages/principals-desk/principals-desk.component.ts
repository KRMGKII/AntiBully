import { ApiService } from 'src/app/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principals-desk',
  templateUrl: './principals-desk.component.html',
  styleUrls: ['./principals-desk.component.scss'],
})
export class PrincipalsDeskComponent implements OnInit {
  constructor(private api: ApiService) {}

  msg: any = '';

  ngOnInit(): void {
    this.api.getMsg().subscribe((msg: any) => {
      console.log(msg);
      this.msg = msg.msg[0].msg;
    });
  }
}
