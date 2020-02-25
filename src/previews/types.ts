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
