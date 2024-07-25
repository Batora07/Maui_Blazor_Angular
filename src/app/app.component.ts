import { Component, HostListener, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'MauiPoCSynapse';
  map: google.maps.Map;
  @ViewChild('mapWrapper', {static: false}) mapElement: ElementRef;

  public windowWidth: any;
  public windowHeight: any;
  
  ngOnInit() {
     this.windowWidth = window.innerWidth;
     this.windowHeight = window.innerHeight;
  }

  ngAfterViewInit() {
    this.initializeMap();
  }

  initializeMap(){
    const lngLat = new google.maps.LatLng(6.5874964, 3.9886097);
    const mapOptions: google.maps.MapOptions = {
      center: lngLat,
      zoom: 16,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
  
  @HostListener('window:resize', ['$event'])

  resizeWindow() {
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
  } 
  
}