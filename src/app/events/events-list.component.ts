import { Component } from "@angular/core";
import { EventService } from "./shared/event.service";

@Component({
	selector: 'events-list',
	template: `
		<div>
			<h1>Upcoming Angular Events</h1>
			<hr>
		<div class="col-md-5" *ngFor="let event of events">
			<event-thumbnail [event]="event"></event-thumbnail>
		<div>
		</div>
	`,
})
export class EventsListComponent {
	events: any;
	constructor(private eventService: EventService) {
		this.events = this.eventService.getEvents()
	}
}