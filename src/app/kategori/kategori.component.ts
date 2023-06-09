import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css'],
})
export class KategoriComponent implements OnInit {
  kategoriler: any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getKategories().subscribe((data) => {
      this.kategoriler = data;
    });
  }
}
