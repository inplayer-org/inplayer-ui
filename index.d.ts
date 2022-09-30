import {
  FunctionComponent,
  CSSProperties,
  ReactNode,
  ReactNodeArray,
  ReactElement,
  Component,
  SyntheticEvent,
  ButtonHTMLAttributes,
  HTMLAttributes,
  AllHTMLAttributes,
  ChangeEvent,
  ForwardRefExoticComponent,
  Ref,
} from 'react';
import { StyledComponent, ThemeProviderComponent } from 'styled-components';
import moment, { Moment } from 'moment';
import { FocusedInputShape } from 'react-dates';

export { FocusedInputShape } from 'react-dates';

export type AnalyticsTag = string;

/**
 * Props present on various components which aid in the tracking of analytics events.
 */
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

export declare class AnalyticsTracker {
  registerHandler: (fn: AnalyticsHandlerFn) => void;
  deregisterHandler: (fn: AnalyticsHandlerFn) => void;
  track: (event: Event) => void;
}

export interface AnalyticsContextValue {
  pages: AnalyticsPage[];
  tracker: AnalyticsTracker;
  merchantId: number;
  ip: string;
}

export type AnalyticsPageProps = {
  /** Tag of this page. */
  tag: AnalyticsTag;

  /** Type of this page. */
  type: AnalyticsPageType;

  /** Children in the page. */
  children?: React.ReactNode;

  /** merchant id */
  merchantId?: number;

  /** user ip address */
  ip?: string;
};

export type AnalyticsComponentProps = {
  children: (context: AnalyticsContextValue) => React.ReactNode;
};

export declare const ROOT_ANALYTICS_CONTEXT: AnalyticsContextValue;

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
}

export interface Event {
  // temporarily mark them as strings
  event: AnalyticsEvents | string;
  type: AnalyticsComponentType | string;
  tag: AnalyticsTag;
  pages: AnalyticsPage[];
  merchantId?: number;
  ip?: string;
}

export type AnalyticsHandlerFn = (event: Record<string, any>) => void;

export declare const AnalyticsPage: FunctionComponent<AnalyticsPageProps>;

export declare const AnalyticsComponent: FunctionComponent<AnalyticsComponentProps>;
export interface ContainerProps extends AnalyticsProps {
  className?: string;
  columns?: number | string;
  gap?: string;
  columnGap?: string;
  rowGap?: string;
  height?: string;
  minRowHeight?: string;
  flow?: string;
  rows?: number | string;
  areas?: Array<string>;
  justifyContent?: string;
  alignContent?: string;
}

declare type TrackParams = Pick<Event, 'event' | 'type' | 'tag'> &
  Partial<Pick<Event, 'pages' | 'merchantId' | 'ip'>>;

export declare const useAnalytics: () => {
  track: (trackParams: TrackParams) => void;
  trackCallback: (trackParams: TrackParams) => () => void;
};

export interface CellProps extends AnalyticsProps {
  className?: string;
  width?: number;
  height?: number;
  top?: number | string;
  left?: number | string;
  middle?: boolean;
  center?: boolean;
  area?: string;
}

interface IGrid {
  Container: StyledComponent<'div', Theme, ContainerProps>;
  Cell: StyledComponent<'div', Theme, CellProps>;
}

export declare const Grid: IGrid;

export interface CheckboxProps extends AnalyticsProps {
  label: string;
  id: string;
  name?: string;
  checked: boolean;
  onChange: (checked: boolean) => any;
  containerRef?: React.RefObject<HTMLDivElement>;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
}

export declare const Checkbox: FunctionComponent<CheckboxProps>;

export interface MenuItem {
  title: string;
  href?: string;
  onClick?: (e: SyntheticEvent<HTMLElement>) => any;
  image?: string;
  smallSize?: boolean;
}

export interface ModalProps extends AnalyticsProps {
  isModalOpen: boolean;
  closeModal: () => any;
  children: ReactNode;
  title: string;
  className?: string;
  isOverflowVisible?: boolean;
}

export declare const Modal: FunctionComponent<ModalProps>;

export type NoteType = 'informative' | 'success' | 'warning' | 'danger';

export interface NoteProps extends AnalyticsProps {
  title: string;
  text: string;
  type: NoteType;
}

export declare const Note: FunctionComponent<NoteProps>;

export interface RadioProps extends AnalyticsProps {
  label: string;
  id: string;
  name?: string;
  checked: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
  onBlur?: (e: any) => any;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
}

export declare const Radio: FunctionComponent<RadioProps>;

export interface EditableFields {
  fn: (props: ColumnFunctionProps) => void;
  validationSchema: ObjectSchema<any>;
}

export interface TableColumn<T extends TableRowData> {
  title: string;
  key: string;
  render?: (props: TableColumn$RenderProps<T>) => ReactNode;
  style?: CSSProperties;
  editable?: EditableFields;
}

export interface TableRowData extends Object {
  id: number | string;
}

export interface TableColumn$RenderProps<T extends TableRowData, V = any> {
  value: V;
  rowValues: T;
}

export interface ColumnFunctionProps {
  value: string;
  currentValue: string;
  id: number;
}

export interface RowAction<T extends TableRowData> {
  icon?: string;
  onClick?: (id: number | string) => any;
  render?: (props: { row: T }) => ReactNode;
}

export interface RowActionsRender<T extends TableRowData> {
  (prop: { row: T }): ReactNode;
}

export type RowActions<T extends TableRowData> = Array<RowAction<T>> | RowActionsRender<T>;

export interface TableOptions<T extends TableRowData> {
  rowSelection: {
    active: boolean;
    action: () => any;
  };
  rowActions: RowActions<T>;
  headerSection?: Node | JSX.Element | null;
}

interface TableButtonProps extends AnalyticsProps {
  label: string;
  icon?: string | ReactNode;
  onClick: (e: SyntheticEvent) => any;
  type: string;
}

export interface TableProps<TableData extends TableRowData = TableRowData> extends AnalyticsProps {
  columns: Array<TableColumn<TableData>>;
  data: Array<TableData>;
  showLoader?: boolean;
  renderEmptyTable?: boolean;
  className?: string;
  style?: CSSProperties;
  options?: Partial<TableOptions<TableData>>;
  tableButton?: Array<TableButtonProps>;
  actionsRowTitle?: string;
  editableById?: string;
  hasItemEntries?: boolean;
  totalItems?: number;
}

interface TableState {
  selected: {
    [s: string]: boolean;
  };
  selectedAll: boolean;
}

export declare class Table<TableData extends TableRowData> extends Component<
  TableProps<TableData>,
  TableState
> {
  toggleRow: (id: number) => () => any;
  toggleSelectAll: () => any;
  generateRows: (data: Array<TableData>) => ReactNodeArray;
  generateColumns: (data: Array<TableColumn<TableData>>) => ReactNodeArray;
  renderColumns: (data: Array<TableColumn<TableData>>) => ReactNodeArray;
  renderRows: (data: Array<TableData>) => ReactNodeArray;
}
interface NavigationTab extends AnalyticsProps {
  title: string;
}

export interface TabContentProps {
  icon?: string;
  iconPosition?: string;
  iconModifiers?: Array<string>;
}

export interface TabNavigationProps<T>
  extends DivHTMLAttributes<HTMLDivElement>,
    TabContentProps,
    AnalyticsProps {
  tabs: Array<NavigationTab>;
  onTabClick: (index: number) => any;
  selectedTabIndex: number;
  className?: string;
  style?: CSSProperties;
}

export declare var TabNavigation: FunctionComponent<TabNavigationProps>;

interface TabInfo {
  name: string;
}

interface TabsProps extends AnalyticsProps {
  tabs: Array<TabInfo>;
  selectedTabIndex: number;
  onTabClick: (index: number) => void;
  className?: string;
  style?: CSSProperties;
}

export declare const Tabs: FunctionComponent<TabsProps>;

export interface ActionButtonRenderProps {
  closeAccordion: (e?: SyntheticEvent<*>) => void;
}

export interface AccordionPanel extends AnalyticsProps {
  label: string;
  icon?: ReactNode;
  iconTooltip?: TooltipProps;
  disabled?: boolean;
  renderContent: (actions: { closePanel: (e?: SyntheticEvent<any>) => void }) => any;
}

export interface AccordionProps {
  panels: Array<AccordionPanel>;
  contentHeight: string;
  isExtendable?: boolean;
  width?: string;
  extendWidth?: string;
  onActivePanelChange?: (index: number, label: string) => void;
  shouldClose?: boolean;
  onRequestClose?: () => void;
}

export interface AccordionState {
  activePanel: number;
}

export declare class Accordion extends Component<AccordionProps, AccordionState> {
  toggleOpen: (name: string) => (e: SyntheticEvent<HTMLElement>) => void;
  toggleClose: (name: string, accordionAction: () => any) => (saveOnClose: boolean) => any;
}

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonContentProps {
  icon?: string | ReactNode;
  iconPosition?: string;
  iconModifiers?: Array<IconModifier>;
}

export type ButtonModifier =
  | 'hoverInfo'
  | 'hoverDanger'
  | 'hoverWarning'
  | 'hoverSuccess'
  | 'buttonPrimary'
  | 'buttonInfo'
  | 'buttonDanger'
  | 'buttonSuccess'
  | 'buttonLink';

export interface ButtonProps<T>
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonContentProps,
    AnalyticsProps {
  buttonModifiers?: Array<ButtonModifier>;
  size?: ButtonSize;
  style?: CSSProperties;
  className?: string;
  as?: ComponentType<T>;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

export declare class Button<T = {}> extends Component<T & ButtonProps<T>> {}

export interface CardProps extends AnalyticsProps {
  title?: string;
  titleVariant?: string;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export declare const Card: FunctionComponent<CardProps>;

interface DayPicker$OnDateChange$Arguments {
  date: Moment;
}

export type DayPicker$OnDateChange = (values: DayPicker$OnDateChange$Arguments) => any;

export type DayPicker$OnFocusChange = (focusedInput: boolean) => any;

export interface DayPickerProps extends AnalyticsProps {
  isOutsideRange?: (day: number) => any;
  onDateChange: (date: Moment) => any;
  onFocusChange: (focused: any) => any;
  focused: boolean;
  date: Moment;
  style?: Object;
  className?: string;
  numberOfMonths?: number;
  disabled?: boolean;
  placeholder?: string;
  onClose?: () => any;
  disablePastDays?: boolean;
  displayFormat?: string;
}

export declare const DayPicker: FunctionComponent<DayPickerProps>;

interface DatePicker$OnDateChange$Arguments {
  startDate: Moment;
  endDate: Moment;
}

export type DatePicker$OnDateChange = (values: DatePicker$OnDateChange$Arguments) => any;

export type DatePicker$OnFocusChange = (focusedInput: FocusedInputShape | null) => any;

export interface DatePickerProps extends AnalyticsProps {
  startDate: Moment;
  endDate?: Moment;
  startDateId?: string;
  endDateId?: string;
  displayPresets?: Array<Period | 'default'>;
  isOutsideRange?: (day: any) => boolean;
  onDateChange: DatePicker$OnDateChange;
  style?: CSSProperties;
  className?: string;
  onFocusChange: DatePicker$OnFocusChange;
  focusedInput: FocusedInputShape | null;
  minimumNights?: number;
  customAllTimeDate?: number;
  activePeriodPreset?: string;
  disabled?: boolean;
  showPresets?: boolean;
  showPresetsWithDropdown?: boolean;
  showInnerPresets?: boolean;
}

interface DatePickerState {
  focusedInput?: string;
}

declare const THIS_WEEK = 'this week';
declare const LAST_WEEK = 'last week';
declare const LAST_TWO_WEEKS = 'last 2 weeks';
declare const THIS_MONTH = 'this month';
declare const LAST_MONTH = 'last month';
declare const LAST_SIX_MONTHS = 'last 6 months';
declare const THIS_YEAR = 'this year';
declare const ALL_TIME = 'all time';

export type Period =
  | 'this week'
  | 'last week'
  | 'last 2 weeks'
  | 'this month'
  | 'last month'
  | 'last 6 months'
  | 'this year'
  | 'all time';

export declare class DatePicker extends Component<DatePickerProps, DatePickerState> {
  onFocusedInputChange: (focusedInput: string) => void;
  handleRangeClick: (activePeriod: Period) => void;
  renderDatePresets: () => ReactNode;
}

export interface Option extends AnalyticsProps {
  value: string;
  displayName: string;
  disabled?: boolean;
}

export interface DefaultOption extends AnalyticsProps {
  displayName: string;
  disabled?: boolean;
}

export type DropdownModifier =
  | 'fontSizeExtraSmall'
  | 'fontSizeSmall'
  | 'fontSizeMedium'
  | 'fontSizeLarge';

export interface DropdownProps extends AllHTMLAttributes<HTMLSelectElement>, AnalyticsProps {
  value: string;
  onChange?: (value: string) => any;
  color?: string;
  options: Array<Option>;
  className?: string;
  style?: CSSProperties;
  modifiers?: Array<DropdownModifier>;
  disabled?: boolean;
  defaultOption?: DefaultOption;
}

export declare const Dropdown: FunctionComponent<DropdownProps>;

export interface DrawerProps extends AnalyticsProps {
  handleClose: () => void;
  isOpen: boolean;
  width?: string;
}

export declare const Drawer: FunctionComponent<DrawerProps>;

export type LabelModifier =
  | 'fontSizeExtraSmall'
  | 'fontSizeSmall'
  | 'fontSizeMedium'
  | 'fontSizeLarge';

export interface LabelProps extends AnalyticsProps {
  disabled?: boolean;
  modifiers?: Array<LabelModifier>;
}

export declare const Label: StyledComponent<'label', Theme, LabelProps>;

export interface LoaderProps extends AnalyticsProps {
  height?: number;
  width?: number;
  color?: string;
  lineWidth?: number;
  direction?: Object;
}

export declare const Loader: StyledComponent<'div', Theme, LoaderProps>;

export type NotificationVariant = 'success' | 'danger' | 'warning';

interface NotificationProps extends AnalyticsProps {
  title: string;
  content: string;
  variant?: NotificationVariant;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

interface INotification extends FunctionComponent<NotificationProps> {
  create(props: NotificationProps, parentDiv?: HTMLDivElement): void;
  success(props: NotificationProps, parentDiv?: HTMLDivElement): void;
  warning(props: NotificationProps, parentDiv?: HTMLDivElement): void;
  danger(props: NotificationProps, parentDiv?: HTMLDivElement): void;
}

export declare const Notification: INotification;

export interface PaginationProps extends AnalyticsProps {
  onPageChange: (pageNumber: number) => any;
  totalItems: number;
  startPage?: number;
  numberOfPagesDisplayed?: number;
  itemsPerPage?: number;
}

export declare const Pagination: FunctionComponent<PaginationProps>;

export type PillLabelModifier = 'primary' | 'info' | 'success' | 'danger' | 'warning';

export type PillLabelSize = 'xs' | 'sm' | 'md' | 'lg';

interface PillLabelProps extends AnalyticsProps {
  modifiers?: Array<PillLabelModifier>;
  size?: PillLabelSize;
}

export declare const PillLabel: StyledComponent<'span', Theme, PillLabelProps>;

export type ProgressType = 'circle' | 'line';

export interface ProgressProps extends AnalyticsProps {
  type?: ProgressType;
  strokeWidth?: number;
  strokeColor?: string;
  trailWidth?: number;
  trailColor?: string;
  strokeLinecap?: string;
  prefixCls?: string;
  className?: string;
  style?: CSSProperties;
  percent?: number;
  gapDegree?: number;
  gapPosition?: string;
}

export declare const Progress: FunctionComponent<ProgressProps>;

export interface SwitchProps extends AnalyticsProps {
  checked: boolean;
  disabled?: boolean;
  id: string;
  label: string;
  onChange: (checked: boolean) => any;
}

export declare const Switch: FunctionComponent<SwitchProps>;

export declare const TextArea: StyledComponent<'input', Theme>;

export type InputSize = 'xs' | 'sm' | 'md' | 'lg';

export interface InputProps extends AllHTMLAttributes<HTMLInputElement>, AnalyticsProps {
  ref?: Ref<HTMLInputElement>;
  size?: InputSize;
  style?: CSSProperties;
  className?: string;
  iconName?: string;
  icon?: ReactNode;
}

export declare const Input: ForwardRefExoticComponent<InputProps>;

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type TypographyModifier = 'textPrimary' | 'textDanger' | 'textSuccess' | 'textWarning';

export interface TypographyProps {
  variant: TypographyVariant;
  children: ReactNode;
  className?: string;
  modifiers?: Array<TypographyModifier>;
  color?: string;
  style?: CSSProperties;
}

export declare const Typography: FunctionComponent<TypographyProps>;

export interface Theme extends AnalyticsProps {
  palette: {
    primary: {
      main: string;
      light?: string;
      dark?: string;
    };
    secondary: {
      main: string;
      light?: string;
      dark?: string;
    };
    text: {
      main: string;
      light?: string;
      disabled?: string;
    };
    background: {
      main: string;
      light?: string;
      disabled?: string;
    };
  };
  dimensions: {
    baseGrid: number;
    borderRadius: string;
  };
  font: {
    primary: string;
    weights: {
      thin?: number;
      light?: number;
      normal?: number;
      semiBold?: number;
      bold?: number;
    };
    sizes: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
  };
  padding: {
    sizes: {
      small: string;
      medium: string;
    };
  };
}

export interface ThemeWrapperProps {
  children: ReactNode;
  theme?: Theme;
  withProvider?: ThemeProviderComponent<Theme>;
}
/**
 * A component which adds the theme to the library components.
 * Theme prop is optional - it will use the default theme if no theme is provided.
 * The ThemeProvider component from your styled-components version must be provided as a prop to withProvider,
 * to inject the theme into your styled-components as well.
 */
export declare const ThemeWrapper: FunctionComponent<ThemeWrapperProps>;

interface IColors {
  black: '#000';
  white: '#fff';
  blue: '#286090';
  darkBlue: '#253a66';
  mediumBlue: '#010185';
  gray: '#d7dde5';
  lightGray: '#F6F8FB';
  darkGray: '#b9c1cb';
  neutralGray: '#f6f8fb';
  fontGray: '#7d7e7f';
  fontLightGray: '#c8ccd4';
  fontDarkGray: '#3e4348';
  skyBlue: '#07AAE6';
  lightSkyBlue: '#97CCF6';
  deepSkyBlue: '#0a8cd2';
  navy: '#2A4D8E';
  lemon: '#fcf3c0';
  mint: '#c8e8de';
  red: '#f26f59';
  paleRed: '#f9ece8';
  pink: '#fcc8be';
  yellow: '#f4ca19';
  paleYellow: '#fffcee';
  green: '#5dc6a3';
  paleGreen: '#e4f9f2';
  pale: '#f0f3f6';
  turquoise: '#1abc9c';
  emerald: '#2ecc71';
  peterRiver: '#3498db';
  amethyst: '#9b59b6';
  asphalt: '#282c35';
  wetAsphalt: '#34495e';
  greenSea: '#16a085';
  nephritis: '#27ae60';
  belizeHole: '#2980b9';
  wisteria: '#8e44ad';
  midnightBlue: '#2c3e50';
  sunFlower: '#f1c40f';
  carrot: '#e67e22';
  alizarin: '#e74c3c';
  clouds: '#ecf0f1';
  concrete: '#95a5a6';
  orange: '#f39c12';
  pumpkin: '#d35400';
  pomegranate: '#c0392b';
  silver: '#bdc3c7';
  asbestos: '#7f8c8d';
}

export declare const Colors: IColors;

export type Placement = 'left' | 'right' | 'top' | 'bottom';

export type FadeEasing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';

export type TooltipBehavior = 'hover' | 'click' | 'ref';

export interface TooltipProps extends AnalyticsProps {
  behavior?: TooltipBehavior;
  durationOnClick?: number;
  arrowWidth?: number;
  background?: string;
  border?: string;
  children?: ReactNode;
  color?: string;
  content: ReactNode;
  className?: string;
  style?: string;
  fadeDuration?: number;
  fadeEasing?: FadeEasing;
  fixed?: boolean;
  fontSize?: string;
  offset?: number;
  padding?: number;
  placement?: Placement;
  radius?: number;
  zIndex?: number;
  ref?: React.RefObject<Tooltip>;
}

interface TooltipState {
  isOpen: boolean;
}

export declare class Tooltip extends Component<TooltipProps, TooltipState> {
  showTooltip: () => any;
  hideTooltip: () => any;
  flashTooltip: () => any;
}

type TransitionVariant = 'fadeInLeft' | 'fadeInRight' | 'fadeOutLeft' | 'fadeOutRight';

export interface Step extends AnalyticsProps {
  isDisabled: boolean;
  isCompleted: boolean;
  component: ReactNode;
}

interface StepWizardProps extends AnalyticsProps {
  steps: Array<Step>;
  activeStep: number;
  className?: string;
  style?: CSSProperties;
  onStepChange?: (activeStep: number) => void;
  transition?: TransitionVariant;
}

export declare const StepWizard: FunctionComponent<StepWizardProps>;

interface AvatarProps {
  imageUrl?: string;
}

export declare const Avatar: FunctionComponent<AvatarProps>;

export interface Branding {
  brand_name?: string;
  isDefault?: boolean;
  paywall_cover_photo?: string;
  preview_top_border?: boolean;
  inplayer_protected_label?: boolean;
  preview_buttons_bg_color?: string;
  preview_buttons_text_color?: string;
  paywall_brand_logo?: string;
  paywall_primary_color?: string;
  paywall_secondary_color?: string;
  paywall_buttons_bg_color?: string;
  paywall_buttons_text_color?: string;
  displayBtnColorPicker?: boolean;
  displayTextColorPicker?: boolean;
  displayPrimaryColorPicker?: boolean;
  displaySecondaryColorPicker?: boolean;
  displayModalBtnColorPicker?: boolean;
  displayModalTextColorPicker?: boolean;
  paywall_footer?: string;
  [key: string]: any;
}

interface Preview1Props {
  branding?: Branding;
  displayBuyButton?: boolean;
  previewUnavailable?: boolean;
  loginFooterLabel?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
  protectedByLabel?: string;
  premiumContentLabel?: string;
}

export declare const Preview1: FunctionComponent<Preview1Props>;

interface Preview2Props {
  branding?: Branding;
  minWidth?: string;
  minHeight?: string;
  height?: string;
  width?: string;
  loginFooterLabel?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
  premiumContentLabel?: string;
}

export declare const Preview2: FunctionComponent<Preview2Props>;

interface Preview3Props {
  branding?: Branding;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  loginFooterLabel?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
  premiumContentLabel?: string;
}

export declare const Preview3: FunctionComponent<Preview3Props>;

interface Preview4Props {
  branding?: Branding;
  displayBuyButton?: boolean;
  previewUnavailable?: boolean;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
}

export declare const Preview4: FunctionComponent<Preview4Props>;

interface Preview5Props {
  branding?: Branding;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
  premiumContentLabel?: string;
}

export declare const Preview5: FunctionComponent<Preview5Props>;

interface Preview6Props {
  branding?: Branding;
  width?: string;
  height?: string;
  minHeight?: string;
  minWidth?: string;
  loginFooterLabel?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
}

export declare const Preview6: FunctionComponent<Preview6Props>;

interface Preview7Props {
  branding?: Branding;
  displayBuyButton?: boolean;
  previewUnavailable?: boolean;
  width?: string;
  height?: string;
  minHeight?: string;
  minWidth?: string;
  loginFooterLabel?: string;
  isRestrictedAsset?: boolean;
  handleOpenModal?: (e: any) => any;
}

export declare const Preview7: FunctionComponent<Preview7Props>;
