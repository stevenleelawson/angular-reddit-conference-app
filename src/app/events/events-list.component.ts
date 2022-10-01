import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from "@angular/router";

@Component({
	// Dont need selector anymore as we will be routing directly to it
	// selector: 'events-list',
	template: `
		<div>
			<h1>Upcoming Angular Events</h1>
			<hr>
		<div class="col-md-5" *ngFor="let event of events">
			<event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
		<div>
		</div>
	`,
})
export class EventsListComponent implements OnInit {
	events: any;
	constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute) {
	}
	
	ngOnInit() {
		//now getting events directly from route via EventListResolver so below is before:
		// this.eventService.getEvents().subscribe(events => { this.events = events})
		this.events = this.route.snapshot.data['events']
	}

	handleThumbnailClick(eventName) {
		this.toastr.success(eventName);
	}
}