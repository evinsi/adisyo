import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  kategoriName: any;
  menus: any;
  constructor(private api: ApiService, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.kategoriName = params['kategoriName'];
      this.api.getMenuByKategori(params['kategoriName']).subscribe((data) => {
        this.menus = data;
      });
    });
  }

  siparis(urun: any) {
    this.api.sepeteEkle(urun);
    window.location.reload();
  }
}
