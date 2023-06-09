import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hesap',
  templateUrl: './hesap.component.html',
  styleUrls: ['./hesap.component.css'],
})
export class HesapComponent implements OnInit {
  sepettekiUrun: any;
  toplamFiyat: number = 0;
  saveOrNot = false;
  constructor(private api: ApiService, private router: Router) {}
  ngOnInit(): void {
    this.api.getSepet(localStorage.getItem('key')).subscribe((data) => {
      this.sepettekiUrun = data;
      for (let urun of this.sepettekiUrun) {
        this.toplamFiyat += urun.fiyat;
      }
    });
  }
  addUrun(urun: any) {
    urun.adet++;

    if (urun.adet > 1) {
      urun.delOrMin = false;
    } else {
      urun.delOrMin = true;
    }
  }

  delete(urun: any) {
    this.api.deleteUrun(urun.id);
    window.location.reload();
  }
  save() {
    this.api.saveSiparis();
    this.router.navigateByUrl('home');
    this.saveOrNot = true;
    localStorage.setItem('save', 'true');
  }
}
