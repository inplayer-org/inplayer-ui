import * as React from 'react';

import TrackHierarchy from './TrackHierarchy';

interface Props {
  pageTag: string;
  children?: React.ReactNode;
  silent?: boolean;
}

const TrackPage = ({ pageTag, children, events }: Props) => (
  <TrackHierarchy.Consumer>
    {({ hierarchy, tracker }) => {
      const newHierarchy = { tracker, hierarchy: [...hierarchy, pageTag] };

      if (!silent) {
        useEffect(() => {
          tracker.emit({ on: 'page', event: 'mount', hierarchy, tag: pageTag });

          return () => {
            tracker.emit({ on: 'page', event: 'unmount', hierarchy, tag: pageTag });
          };
        }, []);
      }

      return <TrackHierarchy.Provider value={newHierarchy}>{...children}</TrackHierarchy.Provider>;
    }}
  </TrackHierarchy.Consumer>
);

export default TrackPage;
