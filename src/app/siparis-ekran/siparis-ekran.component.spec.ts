import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiparisEkranComponent } from './siparis-ekran.component';

describe('SiparisEkranComponent', () => {
  let component: SiparisEkranComponent;
  let fixture: ComponentFixture<SiparisEkranComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiparisEkranComponent]
    });
    fixture = TestBed.createComponent(SiparisEkranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
