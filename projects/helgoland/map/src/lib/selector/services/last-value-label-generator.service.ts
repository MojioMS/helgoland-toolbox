import { Injectable } from '@angular/core';
import { Timeseries } from '@helgoland/core';
import * as L from 'leaflet';
import moment from 'moment';

import { LastValueLabelGenerator } from './last-value-label-generator.interface';

@Injectable()
export class LastValueLabelGeneratorService extends LastValueLabelGenerator {

  constructor() {
    super();
  }

  public createIconLabel(ts: Timeseries) {
    const date = moment(ts.lastValue.timestamp).fromNow();
    return L.divIcon({
      className: 'last-value-container',
      html: `<span class="last-value-label">${ts.lastValue.value}&nbsp;${ts.uom}</span><br><span class="last-value-date">${date}</span>`
    });
  }

}
