import { useContext, useCallback, useMemo } from 'react';
import { TrackEvent } from './AnalyticsTracker';
import { AnalyticsContext } from './AnalyticsPage';

type TrackParams = Pick<TrackEvent, 'event' | 'type' | 'tag'> &
  Partial<Pick<TrackEvent, 'pages' | 'merchantId' | 'ip'>>;

const useAnalytics = () => {
  const { pages, tracker, merchantId, ip } = useContext(AnalyticsContext);

  const track = useCallback(
    ({ event, type, tag, ...optional }: TrackParams) => {
      if (!tag) {
        return;
      }

      tracker.track({ event, type, tag, pages, merchantId, ip, ...optional });
    },
    [pages, tracker, merchantId, ip]
  );

  const trackCallback = useCallback(
    (trackParams: TrackParams) => () => {
      track(trackParams);
    },
    []
  );

  return useMemo(() => ({ track, trackCallback }), [track, trackCallback]);
};

export default useAnalytics;
