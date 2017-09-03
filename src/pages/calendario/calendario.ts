import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { addPase } from "../../providers/auth/addPASE";
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html'
})
export class Calendario {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: new Date()
  };

  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false,title:String };
  minDate = new Date().toISOString();
  items:FirebaseListObservable<any[]>;
  eventData={startTime: new Date(), endTime: new Date(), allDay: false,title:String  };
  
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController,public con: addPase) {
      this.items = this.con.getAll();
    
      
      
     //  this.eventSource.push(this.event)
    
     
     
    
    }
      
   
    ionViewDidLoad() {
      this.items.forEach(list => {
        for (var _i = 1; _i <= list.length; _i++) {

          console.log(list[_i-1].atividade)
           this.eventData.startTime = new Date(list[_i-1].data);
            this.eventData.endTime = new Date(list[_i-1].datafinal+'T'+list[_i-1].hora+':00-03:00');
            this.eventData.title = list[_i-1].atividade;
            this.event.allDay  = false;
            let events = this.eventSource;
            events.push(this.eventData);
            this.eventSource = [];
            setTimeout(() => {
              this.eventSource = events;
            });
          }
       
       
      });
    
    }
    
    addEvent() {
      let modal = this.modalCtrl.create('EventModal', {selectedDay: this.selectedDay});
      modal.present();
      console.log(modal);
      modal.onDidDismiss(data => {
        if (data) {
          let eventData = data;
  
          eventData.startTime = new Date(data.startTime);
          eventData.endTime = new Date(data.endTime);
  
          let events = this.eventSource;
          events.push(eventData);
          this.eventSource = [];
          setTimeout(() => {
            this.eventSource = events;
          });
        }
      });
    }
  
    onViewTitleChanged(title) {
      this.viewTitle = title;
    }
    onEventSelected(event) {
        let start = moment(event.startTime).format('LLLL');
        let end = moment(event.endTime).format('LLLL');
  
        let alert = this.alertCtrl.create({
          title: '' + event.title,
          subTitle: 'From: ' + start + '<br>To: ' + end,
          buttons: ['OK']
        })
        alert.present();
      }
  
    onTimeSelected(ev) {
      this.selectedDay = ev.selectedTime;
    }
  }
