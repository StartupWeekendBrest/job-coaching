import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PseudoPage } from '../pseudo/pseudo';

/*
  Generated class for the Secteur page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-secteur',
  templateUrl: 'secteur.html'
})
export class SecteurPage {
	items: Array<{region:string}> = [];
	title: string = "Secteur(s) géographique(s)"
	step: number = 0

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.items.push({region: "Bretagne"})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecteurPage');
  }

	addLocationField() {
		this.items.push({region: ""})
	}

	displayActivitiesSector() {
		if(this.step == 0) {
			this.title = "Secteur(s) d'activitée(s)"
			this.items.length = 0
			this.items.push({region: "Communication"})
			this.step = 1
		}
		else {
			this.navCtrl.push(PseudoPage)
		}
	}
}
