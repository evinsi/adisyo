import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  masalar: any;
  toplamFiyatlar: any;
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getMasa().subscribe((res) => {
      this.masalar = res;
    });
  }
  saveMasa(masa: any) {
    localStorage.setItem('key', masa.masaNo);
  }
}
