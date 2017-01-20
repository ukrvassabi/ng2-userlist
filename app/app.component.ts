import { Component } from "@angular/core";
import { User } from "./shared/models/user";

@Component({
	selector: "my-app",
	templateUrl: "./app/app.component.html",
	styleUrls: ["./app/app.component.css"]
})
export class AppComponent {
	message: string = "Hello";
	users: User[] = [
		{ id: 24, name: "Danny", username: "doctor7" },
		{ id: 24, name: "Erick", username: "derek" },
		{ id: 24, name: "Jimm", username: "tipy2" }
	];

	activeUser: User;

	selectUser(user) {
		this.activeUser = user;
	};

	onUserCreated(event) {
		this.users.push(event.user);
	};
}