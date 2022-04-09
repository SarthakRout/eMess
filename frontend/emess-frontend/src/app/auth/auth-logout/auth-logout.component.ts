import { stringify } from "@angular/compiler/src/util";
import { Component, OnInit } from "@angular/core";
import { BackendService } from "src/app/shared/backend.service";

@Component({
  'selector': 'app-auth-logout',
  'templateUrl': './auth-logout.component.html',
  'styleUrls': ['./auth-logout.component.css']
})
export class AuthLogoutComponent implements OnInit {

  constructor(
    private backendService : BackendService
  ){}
  async ngOnInit(): Promise<void> {
      console.log("Initialised Logout component")
      await this.backendService.logout();
  }

}
