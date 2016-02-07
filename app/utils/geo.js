'use strict';

import {COORDINATE_DECIMAL_PRECISION} from '../constants/geo';

export function coordinateToPrecision(coordinate, precision = COORDINATE_DECIMAL_PRECISION) {
  return coordinate.toFixed(precision);
}
