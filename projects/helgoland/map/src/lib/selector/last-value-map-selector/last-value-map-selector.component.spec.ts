import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HelgolandCoreModule } from '@helgoland/core';
import { DatasetApiInterfaceTesting } from 'projects/testing/dataset-api-interface.testing';
import { TranslateTestingModule } from 'projects/testing/translate.testing.module';

import { MapCache } from '../../base/map-cache.service';
import { HelgolandMapSelectorModule } from '../module';
import { LastValuePresentation } from '../services/last-value-label-generator.interface';
import { LastValueMapSelectorComponent } from './last-value-map-selector.component';

describe('LastValueMapSelectorComponent with external Data', () => {
  let component: LastValueMapSelectorComponent;
  let fixture: ComponentFixture<LastValueMapSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HelgolandCoreModule,
        TranslateTestingModule,
        HelgolandMapSelectorModule
      ],
      providers: [
        DatasetApiInterfaceTesting,
        MapCache
      ],
      declarations: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastValueMapSelectorComponent);
    (fixture.nativeElement as HTMLElement).style.height = '500px';
    component = fixture.componentInstance;
    component.fitBounds = [[49.5, 3.27], [51.5, 5.67]];
    component.fitBoundsMarkerOptions = { padding: [20, 20] };
    fixture.detectChanges();
  });

  it('should create', () => {
    component.lastValuePresentation = LastValuePresentation.Textual;
    component.lastValueSeriesIDs = [
      'https://www.fluggs.de/sos2/api/v1/__51',
      'https://www.fluggs.de/sos2/api/v1/__78',
      'https://www.fluggs.de/sos2/api/v1/__95',
      'https://www.fluggs.de/sos2/api/v1/__54'
    ];
    component.onSelected.subscribe(res => console.log(res));
  });
});

