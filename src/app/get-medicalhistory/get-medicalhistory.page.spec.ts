import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetMedicalhistoryPage } from './get-medicalhistory.page';

describe('GetMedicalhistoryPage', () => {
  let component: GetMedicalhistoryPage;
  let fixture: ComponentFixture<GetMedicalhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMedicalhistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetMedicalhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
