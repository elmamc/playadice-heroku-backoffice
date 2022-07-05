import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApplicationConfigService } from '../core/config/application-config.service';
export class Login {
  constructor(public username: string, public password: string) { }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,
    private applicationConfigService: ApplicationConfigService) { }

  ngOnInit(): void {
    console.log("ciao", this.applicationConfigService.getEndpointFor('login'))
  }
  login(): void {
    console.log("test", this.applicationConfigService.getEndpointFor('login'))
    this.http
      .post(this.applicationConfigService.getEndpointFor('login'), credentials)
      .subscribe((response => console.log("response",response)));
  }
}
