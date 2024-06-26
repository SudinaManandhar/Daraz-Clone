import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  email: string='';
  password: string='';
  error: string='';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      () => {
        this.router.navigate(['/home']); // Navigate to home page on successful login
      },
      (error) => {
        this.error = error.message; // Display error message to user
      }
    );
  }

}
