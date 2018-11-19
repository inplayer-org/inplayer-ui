import {
  FunctionComponent,
  CSSProperties,
  ReactNode,
  ReactNodeArray,
  ReactElement,
  Component,
  SyntheticEvent,
  ButtonHTMLAttributes
} from 'react';
import { AnyStyledComponent, BaseThemedCssFunction } from 'styled-components';
import moment from 'moment';

// TODO andrej-naumovski 16.11.2018: Improve types for styled-components exports

interface IGrid {
  Column: AnyStyledComponent;
  Row: AnyStyledComponent;
  Container: AnyStyledComponent;
}

export declare const Grid: IGrid;

export interface CheckboxProps {
  label: string;
  id: string;
  name: ?string;
  checked: boolean;
  onChange: (checked: boolean) => any;
  className?: string;
  style?: CSSProperties;
}

export declare const Checkbox: FunctionComponent<CheckboxProps>;

export interface MenuItem {
  title: string;
  href?: string;
  onClick?: (e: SyntheticEvent<*>) => any;
}

export interface UserMenuDropdownProps {
  menuItems: Array<MenuItem>;
  actionItem?: MenuItem;
}

export interface UserMenuProps extends UserMenuDropdownProps {
  image: ReactElement<*> | string;
  className?: string;
  style?: CSSProperties;
}

interface UserMenuState {
  open: boolean;
}

export declare class UserMenu extends Component<UserMenuProps, UserMenuState> {
  toggleMenuOpen: () => any;
}

export interface HeaderProps {
  title?: string;
  userMenuProps?: UserMenuProps;
  tabNavigationProps?: TabNavigationProps;
  className?: string;
  style?: CSSProperties;
}

export declare const Header: FunctionComponent<HeaderProps>;

export interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => any;
  children: ReactNode;
  title: string;
  className?: string;
  style?: CSSProperties;
}

export declare const Modal: FunctionComponent<ModalProps>;

export interface NavbarProps {
  children: ReactNode;
  logo: ?ReactElement<*> | ?string;
  className?: string;
  style?: CSSProperties;
}

interface NavbarState {
  open: boolean;
}

interface Navbar$MenuItemProps {
  active: boolean;
  icon: ?string | ?ReactNode;
  onClick: ?(e: SyntheticEvent<HTMLDivElement>) => any,
  children: ?ReactNode,
}

export declare class Navbar extends Component<NavbarProps, NavbarState> {
  static MenuItem: FunctionComponent<Navbar$MenuItemProps>;
  toggleOpen: () => any;
}

export type NavbarMenuItemProps = Navbar$MenuItemProps;

type NoteType = 'informative' | 'success' | 'warning' | 'danger';

export interface NoteProps {
  title: string;
  text: string;
  icon: string;
  type: NoteType;
  className?: string;
  style?: CSSProperties;
}

export declare const Note: FunctionComponent<NoteProps>;

export interface RadioProps {
  label: string;
  id: string;
  name: ?string;
  checked: boolean;
  onChange: (checked: boolean) => any;
  className?: string;
  style?: CSSProperties;
}

export declare const Radio: FunctionComponent<RadioProps>;

export interface TableColumn {
  title: string;
  key: string;
  render: ({ value: string }) => ReactNode;
}

export interface TableRowData extends Object {
  id: number | string;
}

export interface TableOptions {
  rowSelection: {
    active: boolean;
    action: () => any;
  };
  rowActions: {
    icon: string;
    onClick: (id: number | string) => any;
  };
}

export interface TableProps {
  columns: Array<TableColumn>;
  data: Array<TableRowData>;
  className?: string;
  style?: CSSProperties;
  options?: TableOptions;
}

interface TableState {
  selected: {
    [number | string]: boolean;
  };
  selectedAll: boolean;
}

export declare class Table extends Component<TableProps, TableState> {
  toggleRow: (id: number) => () => any;
  toggleSelectAll: () => any;
  generateRows: (data: Array<TableRowData>) => ReactNodeArray;
  generateColumns: (data: Array<TableColumn>) => ReactNodeArray;
  renderColumns: (data: Array<TableColumn>) => ReactNodeArray;
  renderRows: (data: Array<TableRowData>) => ReactNodeArray;
}

interface NavigationTab {
  title: string;
}

export interface TabNavigationProps {
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

interface TabsProps {
  tabs: Array<TabInfo>;
  selectedTabIndex: number;
  onTabClick: (index: number) => void;
  className?: string,
  style?: CSSProperties;
}

export declare const Tabs: FunctionComponent<TabsProps>;

interface TooltipProps {
  placement: string;
  dataTip: string;
  children: ReactNode;
  className?: string;
  color?: string;
  style?: CSSProperties;
}

export declare const Tooltip: FunctionComponent<TooltipProps>;

export interface AccordionPanel {
  label: string;
  icon?: string;
  renderContent: () => ReactNode;
  footerLink: string;
  buttonText: string;
  accordionAction: () => any;
}

export interface AccordionProps {
  panels: Array<Panel>;
}

export interface AccordionState {
  [string]: boolean;
}

export declare class Accordion extends Component<AccordionProps, AccordionState> {
  toggleOpen: (name: string) => (e: SyntheticEvent<*>) => void;
  toggleClose: (name: string, accordionAction: () => any) => (saveOnClose: boolean) => any;
}

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonContentProps {
  icon?: string;
  iconPosition?: string;
  iconModifiers?: Array<string>;
  children: ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes, ButtonContentProps {
  buttonModifiers?: Array<string>;
  size?: ButtonSize;
  style?: CSSProperties;
  className?: string;
}

export declare const Button: FunctionComponent<ButtonProps>;

export interface CardProps {
  title?: string;
  titleVariant?: string;
  className?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export declare const Card: FunctionComponent<CardProps>;

interface DatePicker$OnDateChange$Arguments {
  startDate: typeof moment;
  endDate: typeof moment;
}

export type DatePicker$OnDateChange = (values: DatePicker$OnDateChange$Arguments) => any;

export interface DatePickerProps {
  startDate: string;
  endDate: string;
  startDateId?: string;
  endDateId?: string;
  calendarInfo: boolean;
  isOutsideRange: boolean;
  onDateChange: DatePicker$OnDateChange;
  style?: CSSProperties,
  className?: string,
}

interface DatePickerState {
  focusedInput: ?string;
};

type Period = THIS_WEEK | LAST_WEEK | THIS_MONTH | LAST_MONTH | THIS_YEAR;

export declare class DatePicker extends Component<DatePickerProps, DatePickerState> {
  onFocusedInputChange: (focusedInput: string) => void;
  handleRangeClick: (activePeriod: Period) => void;
  renderDatePresets: () => ReactNode;
}

export interface Option {
  value: string;
  displayName: string;
}

export interface DropdownProps extends HTMLSelectElement {
  value: string;
  onChange: (value: string) => any;
  className?: string;
  color?: string;
  options: Array<Option>;
  style?: CSSProperties;
}

export declare const Dropdown: FunctionComponent<DropdownProps>;

export declare const Icon: AnyStyledComponent;

export declare const Label: AnyStyledComponent;

export declare const Loader: AnyStyledComponent;

type NotificationVariant = 'success' | 'danger' | 'warning';

interface NotificationProps {
  title: string;
  content: string;
  variant?: NotificationVariant;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  close: () => void;
}

interface INotification extends FunctionComponent<NotificationProps> {
  create(props: NotificationProps, parentDiv: ?HTMLDivElement);
  success(props: NotificationProps, parentDiv: ?HTMLDivElement);
  warning(props: NotificationProps, parentDiv: ?HTMLDivElement);
  danger(props: NotificationProps, parentDiv: ?HTMLDivElement);
}

export declare const Notification: INotification;

export interface PaginationProps {
  pageCount: number;
  currentPage: number;
  pageRangeDisplayed: number;
  marginPagesDisplayed: number;
  previousLabel: string;
  nextLabel: string;
  breakLabel: string;
  onPageChange: (data: { selected: number }) => any;
  breakClassName?: string;
  initialPage?: number;
  disableInitialCallback?: boolean;
  containerClassName?: string;
  pageClassName?: string;
  pageLinkClassName?: string;
  activeClassName?: string;
  activeLinkClassName?: string;
  previousClassName?: string;
  nextClassName?: string;
  previousLinkClassName?: string;
  nextLinkClassName?: string;
  disabledClassName?: string;
  hrefBuilder?: () => string;
  extraAriaContext?: string;
  style?: CSSProperties;
  className?: string;
}

export declare const Pagination: FunctionComponent<PaginationProps>;

type ProgressType = 'circle' | 'line';

export interface ProgressProps {
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

export interface SingleDayPickerProps {
  onDateChange: (date: typeof moment) => any;
  date: string;
  isOutsideRange: (any) => boolean;
  id?: string;
  style?: CSSProperties;
  className?: string;
}

interface SingleDayPickerState {
  focusedInput: string;
}

export declare class SingleDayPicker extends Component<SingleDayPickerProps, SingleDayPickerState> {
}

export interface SwitchProps {
  checked: boolean;
  disabled: boolean;
  id: string;
  label: string;
  onChange: (checked: boolean) => any;
  className?: string;
  style?: CSSProperties;
}

export declare const Switch: FunctionComponent<SwitchProps>;

export declare const TextArea: AnyStyledComponent;

export interface TextFieldProps {
  type: string;
  placeholder: string;
  id: string;
  onChange: (value: number | string) => any;
}

export declare const TextField: FunctionComponent<TextFieldProps>;

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface TypographyProps {
  variant: TypographyVariant;
  description: ?boolean;
  children: ReactNode;
  className?: string;
  modifiers?: Array<string>;
  color?: string;
  style?: CSSProperties;
}

export declare const Typography: FunctionComponent<TypographyProps>;

export interface Theme {
  palette: {
    primary: {
      main: string;
      light: ?string;
      dark: ?string;
    },
    secondary: {
      main: string;
      light: ?string;
      dark: ?string;
    },
    text: {
      main: string;
      light: ?string;
      disabled: ?string;
    },
  },
  dimensions: {
    baseGrid: number;
    borderRadius: string;
  },
  font: {
    primary: string;
    primaryFallback: string;
    weights: {
      thin: ?number;
      light: ?number;
      normal: number;
      semiBold: ?number;
      bold: ?number;
    },
    sizes: {
      extraSmall: string;
      small: string;
      medium: string;
      large: string;
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    },
  },
  padding: {
    sizes: {
      small: string;
      medium: string;
    },
  },
}

export interface  ThemeWrapperProps {
  children: ReactNode;
  theme: ?Theme;
}

declare export const ThemeWrapper: FunctionComponent<ThemeWrapperProps>;

interface IColors {
  white: '#fff';
  blue: '#286090';
  darkBlue: '#253a66';
  mediumBlue: '#010185';
  midnightBlue: '#272B38';
  gray: '#d7dde5';
  lightGray: '#F6F8FB';
  darkGray: '#b9c1cb';
  fontDarkGray: '#44494e';
  fontGray: '#a0a3aa';
  fontLightGray: '#c8ccd4';
  lightSkyBlue: '#97CCF6';
  skyBlue: '#07AAE6';
  deepSkyBlue: '#0a8cd2';
  navy: '#2A4D8E';
  accentPink: '#fcc8be';
  lemon: '#fcf3c0';
  mint: '#c8e8de';
  neutralGray: '#f6f8fb';
  red: '#f26f59';
  paleRed: '#f9ece8';
  yellow: '#f4ca19';
  paleYellow: '#fffcee';
  green: '#5dc6a3';
  paleGreen: '#e4f9f2';
  black: '#000';
}

export declare const Colors: IColors;
