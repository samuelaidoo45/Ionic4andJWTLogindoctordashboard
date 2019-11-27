import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WriteMedicalhistoryPage } from './write-medicalhistory.page';

describe('WriteMedicalhistoryPage', () => {
  let component: WriteMedicalhistoryPage;
  let fixture: ComponentFixture<WriteMedicalhistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteMedicalhistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WriteMedicalhistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
