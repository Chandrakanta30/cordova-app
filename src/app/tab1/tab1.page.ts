import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  @ViewChild('mySlider') slider: ElementRef;

  sliderIndex:number=0
  constructor( public service:ServiceService) { }

  sliderOpts = {
    speed:500,
    autoplay: {
      delay: 10000
      }
  };

  earthquake:any = { };

  banks = [
  ];


  routes = [];


  carParks = [];

  SlideChanges(slide: IonSlides) {
    

    slide.getActiveIndex().then((index: number) => {
      console.log(index);
      this.sliderIndex=index;

      if(index===0){
        // this.fetchEarthQuackData();
        this.fetchBankList();
      this.fetchCarParkList();
      }
      if(index===1){
        this.fetchEarthQuackData();
        this.fetchRouteList();
        // this.fetchBankList();
      }
      if(index===2){
        // this.fetchRouteList();
        this.fetchBankList();
        this.fetchCarParkList();
      }
      if(index===3){
        // this.fetchCarParkList();
        this.fetchRouteList();
        this.fetchEarthQuackData();

      }
    });
  }

  ngOnInit(): void {
    

    this.service.getEarthQuackData().subscribe(data => {
      console.log(data);
      this.earthquake=data;
      this.fetchBankList();
      this.fetchCarParkList();
    });
  }



  fetchBankList(){
    this.service.bankList().subscribe(data => {
      console.log(data);
      let data2:any=data;
      this.banks=data2.result.records;
    });
  }
  fetchCarParkList(){
    this.service.getCarParkList().subscribe(data => {
      console.log(data);
      let response:any=data;
      this.carParks=response.carParks;
    });
  }

  fetchRouteList(){
    this.service.routesList().subscribe(data => {
      console.log(data);
      let response:any=data
      this.routes=response.routes;
    });
  }

  fetchEarthQuackData(){
    this.service.getEarthQuackData().subscribe(data => {
      console.log(data);
      this.earthquake=data;
    });
  }

  slideChanged(slide: IonSlides){
    slide.startAutoplay();
  }
}
