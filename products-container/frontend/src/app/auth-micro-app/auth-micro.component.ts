import { AfterContentInit, Component } from '@angular/core';
import { mount } from 'authMicro/authApp';

@Component({
  selector: 'app-vue-app',
  templateUrl: './auth-micro.component.html',
  styleUrls: ['./auth-micro.component.css']
})
export class AuthComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    const fetch_el = document.getElementById('auth')
    mount(fetch_el);
  }
}
