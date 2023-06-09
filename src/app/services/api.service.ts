import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = 'http://localhost:49152';
  constructor(private http: HttpClient, private router: Router) {}

  getKategories() {
    return this.http.get<any>('http://localhost:49152/kategori').pipe(
      map((res) => {
        return res;
      })
    );
  }

  getMenuByKategori(kategoriName: any) {
    return this.http
      .get<any>('http://localhost:49152/urunler?urunKategori=' + kategoriName)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  sepeteEkle(urun: any) {
    const sepettekiUrun = {
      urunAdi: urun.urunAdi,
      fiyat: urun.fiyat,
      kategori: urun.urunKategori,
      delOrMin: true,
      adet: 1,
      masaNo: localStorage.getItem('key'),
    };
    this.http
      .post<any>('http://localhost:49152/sepet', sepettekiUrun)
      .subscribe((res) => {
        res;
      });
  }

  getSepet(masaNo: any) {
    return this.http
      .get<any>('http://localhost:49152/sepet?masaNo=' + masaNo)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
  deleteUrun(id: any) {
    fetch('http://localhost:49152/sepet/' + id, {
      //
      method: 'DELETE',
      headers: {
        'Content-Type': 'app/json',
      },
    }).then((res) => {});
  }
  saveSiparis() {
    this.http.get<any>('http://localhost:49152/sepet').subscribe((res) => {
      let json = [];
      json = res;
      localStorage.setItem('sepet', JSON.stringify(json));
    });
  }
  deleteSepet() {
    this.http.delete<any>('http://localhost:49152/sepet');
  }
  getMasa() {
    return this.http.get<any>('http://localhost:49152/masa').pipe(
      map((res) => {
        return res;
      })
    );
  }
}
