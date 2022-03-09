import { AnalyticsTag } from './AnalyticsPage';

export interface AnalyticsProps {
  /** Unique identifier of the component within the logical page hierarchy. */
  tag?: AnalyticsTag;

  /** Posiition of the component within a table-like component. */
  position?: {
    /** Unique ID of the row (usually what you would use as a key in react). */
    id: string;

    /** Row index. */
    row?: number;

    /** Column index or name. */
    column?: number | string;
  };
}
