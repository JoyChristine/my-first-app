import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
}) 
export class ServerComponent {
 serverId: number = 10;
 serverStatus: string = 'offline';
}
// *@Component*  
// ({
// selector: 'greet',
// viewProviders: [
// Greeter
// ],
// template: `<needs-greeter></needs-greeter>`
// })