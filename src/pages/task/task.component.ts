import { Component } from '@angular/core';

@Component({})
export class Task {
    checked: boolean;
    content: string;
	date: string;
	place: string;
    hasEvent: boolean;
    subscribed: boolean;
    interested: number;
}