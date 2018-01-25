import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';


  showButton = true;
  hideButton = false;

	showGreeting(event) {
		console.log(event);
		console.log("I AM showGreeting");
		this.title = 'Anubhav';
		this.showButton = false;
		this.hideButton = true;
	}

	hideGreeting(event) {
		console.log(event);
		console.log("I AM hideGreeting");
		this.title = 'App';
		this.showButton = true;
		this.hideButton = false;
	}

}
