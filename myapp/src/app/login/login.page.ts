import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  nombreUsuario: string = '';
 constructor(private navCtrl: NavController) {
    if (this.nombreUsuario) {
      this.navCtrl.navigateForward(['/home'], {
        queryParams: { username: this.nombreUsuario }
      });
    }

   
    
 }


  ngOnInit() {
    
  }

}
