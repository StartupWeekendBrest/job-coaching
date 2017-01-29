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
      { checked: true, content: "Atelier de simulation d’entretien", date: "le 4/01/2017, de 16h à 18h", place: "au K2, 3 rue de la boetie à Brest", hasEvent: true, subscribed: true, interested: 4 },
      { checked: false, content: "Atelier pour affûter sa candidature", date: "le 9/01, de 10h à 12h", place: "à la maison des associations à Brest", hasEvent: true, subscribed: false, interested: 12 },
      { checked: false, content: "Participer au programme\"Un outil de recherche par jour\"", date: "sur un mois", place: "http://www.unoutilderechercheparjour.com/", hasEvent: true, subscribed: false, interested: 42 },
      { checked: true, content: "Créer un profil LinkedIn", date: "", place: "", hasEvent: false, subscribed: false, interested: -1},
      { checked: true, content: "Contacter la Chambre Locale de Commerce", date: "", place: "", hasEvent: true, subscribed: false, interested: 7},
      { checked: false, content: "Participer à la session mensuelle du JUG Finistère", date: "", place: "", hasEvent: true, subscribed: false, interested: 14},
      { checked: false, content: "Renseigner ma dernière formation sur LinkedIn", date: "", place: "", hasEvent: false, subscribed: false, interested: 2}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskPage');
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

}
