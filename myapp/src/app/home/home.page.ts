import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreUsuario: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log('Query Params:', params);
      this.nombreUsuario = params['nombreUsuario'];
    });
  }
}

