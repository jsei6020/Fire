import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BackpackPage } from './backpack.page';

describe('BackpackPage', () => {
  let component: BackpackPage;
  let fixture: ComponentFixture<BackpackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackpackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BackpackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
