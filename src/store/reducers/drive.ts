import * as type from 'src/action/type';
import { equal } from './util';

export default (state: DriveState = { byId: {} }, action: Action) => {
  if (equal(action, type.drive_bulk_insert)) {
    const drives: Drive[] = action.payload.drives;
    drives
      // TODO: filter out trashed items
      .filter(d => d.mimeType === 'application/vnd.google-apps.spreadsheet')
      .forEach(d => (state.byId[d.id] = d));
    return { ...state };
  } else {
    return state;
  }
};
