import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TaskPage } from '../task/task';

/*
  Generated class for the Pseudo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pseudo',
  templateUrl: 'pseudo.html'
})
export class PseudoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PseudoPage');
  }

  goToTask() {
	  console.log(42)
	  this.navCtrl.push(TaskPage)
  }

}
