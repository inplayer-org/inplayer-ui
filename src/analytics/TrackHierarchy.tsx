import * as React from 'react';

import Tracker from './tracker';

const TrackHierarchy = React.createContext({ hierarchy: [] as string[], tracker: new Tracker() });

export default TrackHierarchy;
