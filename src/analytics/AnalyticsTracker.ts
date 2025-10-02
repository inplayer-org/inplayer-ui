import { AnalyticsPageObject, AnalyticsTag } from './AnalyticsPage';

export enum AnalyticsEvents {
  CLICK = 'click',
  DROPDOWN_CHANGE = 'dropdown_change',
  SWITCH_ON = 'switch_on',
  SWITCH_OFF = 'switch_off',
  DROPDOWN_SELECT = 'dropdown_select',
  CHECKBOX_ON = 'checkbox_on',
  CHECKBOX_OFF = 'checkbox_off',
  RADIOBUTTON_SELECT = 'radiobutton_select',
  DATEPICKER_CHANGE = 'datepicker_date_change',
  DAYPICKER_CHANGE = 'daypicker_date_change',
  KEYBOARD_EVENT = 'keyboard_event',
  FOCUS_OUT = 'focus_out',
}

export enum AnalyticsComponentType {
  BUTTON = 'button',
  DROPDOWN = 'dropdown',
  SWITCH = 'switch',
  PAGINATION = 'pagination',
  ICON = 'icon',
  LINK = 'link',
  CHECKBOX = 'checkbox',
  DATEPICKER = 'datepicker',
  DAYPICKER = 'daypicker',
  DATEPICKER_PRESET = 'datepicker_preset',
  TAB = 'tab',
  ACCORDION = 'accordion',
  MODAL = 'modal',
  INPUT = 'input',
  TEXTAREA = 'textarea',
  TAB_NAVIGATION = 'tab_navigation',
  RADIO = 'radio',
}

export interface TrackEvent {
  event: AnalyticsEvents;
  type: AnalyticsComponentType;
  tag: AnalyticsTag;
  pages: AnalyticsPageObject[];
  merchantId: number;
  ip: string;
}

export type AnalyticsHandlerFn = (event: TrackEvent) => void;

export default class AnalyticsTracker {
  handlers: AnalyticsHandlerFn[] = [];

  registerHandler = (fn: AnalyticsHandlerFn) => {
    this.handlers.push(fn);

    return () => {
      this.unregisterHandler(fn);
    };
  };

  unregisterHandler = (fn: AnalyticsHandlerFn) => {
    this.handlers = this.handlers.filter((handler) => handler !== fn);
  };

  track = (event: TrackEvent) => {
    this.handlers.forEach((handler) => handler(event));
  };
}
