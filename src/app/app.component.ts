import { Component } from '@angular/core';
import { ApplicationConfigService } from './core/config/application-config.service';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'playadice-heroku-backoffice';
  constructor(applicationConfigService: ApplicationConfigService) {
    applicationConfigService.setEndpointPrefix(environment.apiEndpointPrefix);
    applicationConfigService.setApiVersion(environment.apiVersion);
    console.log("test",environment.apiEndpointPrefix)
    console.log("test",environment.apiVersion)
  }
}
