import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
    foo(input: number) {
        let num: number = 0;
        if (input < 15) {
            num = 100;
        }
        else 
            num = 10;
        return num;
    }

    bar(input: number) {
        // Untested function
        let num: number = input*10;
        return num;
    }
}
