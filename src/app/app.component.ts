import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public ngOnInit() {
    ajax('http://127.0.0.1:8000/api/products/').subscribe((e) =>
      console.log(e)
    );
  }
}
