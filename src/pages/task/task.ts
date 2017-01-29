import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Task } from './task.component'

/*
  Generated class for the Task page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-task',
  templateUrl: 'task.html'
})
export class TaskPage {
  tasks: Array<Task> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tasks = [
      { checked: true, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", hasEvent: true, subscribed: true, interested: 4 },
      { checked: false, content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", hasEvent: false, subscribed: false, interested: -1 },
      { checked: false, content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", hasEvent: true, subscribed: false, interested: 15 },
      { checked: true, content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", hasEvent: true, subscribed: true, interested: 45 }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

}
