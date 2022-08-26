import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationConfigService } from '../core/config/application-config.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private applicationConfigService: ApplicationConfigService
  ) { }


login(): void {
  console.log("test", this.applicationConfigService.getEndpointFor('login'))
    this.http
    .post(this.applicationConfigService.getEndpointFor('login'), {})
    .subscribe((response => console.log("response", response)));
}
}
