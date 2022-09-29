# Change Log

All notable changes to this project will be documented in this file.

# [2.5.28] - 29.09.2022

## Added

- Add `disabled` for Dropdown options
# [2.5.27] - 04.08.2022

## Added

- Changed the color of the text in the footer for Previews from fixed value to a value from the theme colors

# [2.5.26] - 21.07.2022

## Added

- Add `hasItemEntries` prop for Table component

# [2.5.25] - 04.04.2022

## Added

- Add `displayFormat` prop for DayPicker component

# [2.5.24] - 09.03.2022

## Added

- New `useAnalytics` hook as an alternative to `AnalyticsComponent`

# [2.5.23] - 21.02.2022

## Change

- Buy button tag name on paywall previews

# [2.5.22] - 04.02.2022

## Added

- Option in column table to make fields(columns) editable
- onBlur function to trigger persa when input and textarea are focused-out

# [2.5.21] - 25.01.2022

## Change

- Styling changes in preview templates for restricted asset
- FooterText component refactored

# [2.5.20] - 21.01.2022

## Fixes

- TextArea by providing the required props

# [2.5.19] - 21.01.2022

## Added

- Handlers for Input, TextArea, Pagination, Accordion and Switch.
- Tagging Paywall previews

## Fixes

- TabNavigation handler type

# [2.5.18] - 10.01.2022

## Added

- Handlers for Checkbox, Radiobutton, Daypicker and Datepicker.
- Handler for selected Tab change.

# [2.5.17] - 12.11.2021

## Added

- Tagging for StepWizard

## Fixes

- Dropdown component tag sent in tracker

# [2.5.16] - 12.11.2021

## Added

- Analytics handler for dropdown component
- Tagging for pagination and navbar

# [2.5.15] - 02.11.2021

## Fixes

- Tab component import bug

### Change

- Accordion component to be analytics ready

# [2.5.14] - 27.10.2021

## Added

- Analytics handler for button component

# [2.5.13] - 05-10-2021

## Added

- AnalyticsProps type to the components in index.d.ts file.

# [2.5.12] - 28-09-2021

## Added

- Explicit exports for components, types and interfaces from `src/analytics`.

# [2.5.11] - 28-09-2021

## Added

- Analytics tracking adds forgotten import for React.

# [2.5.10] - 27-09-2021

### Added

- Analytics tracking props for all components.

# [2.5.9] - 23-09-2021

### Added

- Add another type of datepicker component with dropdown presets
- Drawer component functionality and design

# [2.5.8] - 19-08-2021

### Change

- Return Accordion panel label when toggling it.

# [2.5.7] - 17-06-2021

### Change

- Changes connected with logo re-branding

# [2.5.6] - 09-04-2021

### Fixes

- Changed width, height and padding-left of Checkbox component's top wrapper to be in `em` instead of `rem`

# [2.5.5] - 22-03-2021

### Change

- Add styling changes for asset restrictions in preview templates

# [2.5.4] - 12-03-2021

### Change

- Add missing className for Switch component in order to externaly style it with styled-components

# [2.5.3] - 23-02-2021

### Fixes

- Daypicker moment type error

# [2.5.2] - 22-01-2021

### Change

- Use pixels instead of rem for font sizes

# [2.5.1] - 15-01-2021

### Added

- Add the possibility to have more than one table button

# [2.5.0] - 12-01-2021

### Changes

- Change footer text depending on user auth state

# [2.4.2] - 11-11-2020

### Changes

- Change preview box margin for preview 1

### Fixes

- Remove polished normalize function from GlobalStyles

# [2.4.1] - 21-09-2020

### Changes

- Remove box-sizing from globalStyles

# [2.4.0] - 16-09-2020

### Changes

- Remove redundant NavBar component

# [2.3.0] - 15-09-2020

### Changes

- Remove redundant Header and UserMenu components

# [2.2.4] - 07-09-2020

### Changes

- Expose the flashTooltip method to parent component when using ref through useImperativeHandle

# [2.2.3] - 27-08-2020

### Changes

- Added shouldClose and onRequestClose optional props to Accordion
- Added actionsRowTitle optional prop to Table
- Changed Datepicker period labels

# [2.2.2] - 24-08-2020

### Fixes

- Preview 5 border styling

# [2.2.1] - 21-08-2020

### Fixes

- Downgrade babel-plugin-styled-components to version working properly with Rollup

# [2.2.0] - 20-08-2020

### Added

- Theme background color palette

# [2.1.2] - 10-08-2020

### Changes

- Added optional onLogoClick and logoTitle props to Navbar
- Added id's on TabNavigation Tabs

# [2.1.1] - 29-07-2020

### Changes

- Display next 100 years in DatePicker

# [2.1.0] - 28-07-2020

### Changes

- Custom Toggle/Switch component
- Removed icon prop from Toggle/Switch

# [2.0.4] - 20-07-2020

### Fixes

- Use Math.floor only if totalItemsNumber is 10.000 in Pagination component

# [2.0.3] - 15-07-2020

### Fixes

- Use Math.floor instead of Math.ceil in Pagination component

# [2.0.2] - 15-07-2020

### Fixes

- Set items limit to 10.000 in pagination

# [2.0.1] - 15-07-2020

### Fixes

- ESLint TypeScript errors/warnings

# [2.0.0] - 14-07-2020

### Added

- Paywall Previews Templates
- Added optional placeholder prop to DayPicker
- Select options for month and year in DatePicker and DayPicker
- Added optional disabled prop to DatePicker
- Added icon boolean prop to Switch
- Table renderEmptyTable boolean prop
- Table Header section
- Avatar component
- Custom Pagination Component
- Add more colors

### Change

- Show DatePicker's inner presets on the left
- Add optional prop to Single Day picker - disable past days
- Support one day selection on DatePicker
- Improve DatePicker to conditionally show presets
- Highlight today's date on DatePicker
- Added onClose event to SingleDay picker
- Radio button refactor and minor UI change
- Replace local images with appropriate ones from aws
- Remove react-quill and use html-react-parser
- Sanitize html string using dompurify
- Open paywall modal on preview themes image click
- Redesign of buttons and minor styling changes to Header, Card and Table
- Add ids to Paywall Previews for easier client manipulation
- UserMenu width and display
- Remove font loading
- Add disabled option to DayPicker component
- Rename InPlayer icons with more meaningful names
- Added optional activePeriod prop to the date picker where user defines which presets period to be selected
- Added CUSTOM period which is used when user chose custom dates from date picker
- Added style for active date preset
- Removed margin on Typography
- Added animation on accordion open/close
- Do not show the arrow on disabled accordion panel
- Removed padding from Accordion
- Accordion api change, removed renderActionButton and renderFooterLink options
- Add arrow up/down in accordion header to show whether accordion is open or close

# [2.0.0-beta.74] - 01-07-2020

### Change

- Dropdown improvement

### Fixes

- Fixed isOutsideRange in DatePickerProps type

# [2.0.0-beta.73] - 25-06-2020

### Change

- Show DatePicker's inner presets on the left

### Change

- Add optional prop to Single Day picker - disable past days
- Support one day selection on DatePicker

### Fixes

- Conditionally render DatePicker wrapper classes

# [2.0.0-beta.71] - 23-06-2020

### Change

- Improve DatePicker to conditionally show presets
- Highlight today's date on DatePicker

# [2.0.0-beta.70] - 19-06-2020

### Fixes

- Fix radio button text wrapping

# [2.0.0-beta.69] - 16-06-2020

### Change

- Added onClose event to SingleDay picker
- Radio button refactor and minor UI change
- Replace local images with appropriate ones from aws

# [2.0.0-beta.68] - 12-06-2020

### Change

- Remove react-quill and use html-react-parser
- Sanitize html string using dompurify
- Open paywall modal on preview themes image click
- Redesign of buttons and minor styling changes to Header, Card and Table

# [2.0.0-beta.67] - 10-06-2020

### Added

- Add ids to Paywall Previews for easier client manipulation

### Fixes

- UserMenu width and display

# [2.0.0-beta.66] - 03-06-2020

### Change

- Remove font loading

# [2.0.0-beta.65] - 03-06-2020

### Fixes

- Add `sideEffects: false` in package.json for webpack

# [2.0.0-beta.64] - 03-06-2020

### Fixes

- Global styles

# [2.0.0-beta.63] - 01-06-2020

### Added

- Added optional placeholder prop to DayPicker
- Select options for month and year in DatePicker and DayPicker

### Fixes

- MenuItems options optional

# [2.0.0-beta.62] - 26-05-2020

### Added

- Webpack component code splitting

### Fixes

- Fix Pagination UI appearance for big numbers

### Changes

- Make all previews centered

# [2.0.0-beta.61] - 20-05-2020

### Fixes

- Use Roboto as primary font

# [2.0.0-beta.60] - 19-05-2020

### Fixes

- Remove format from SingleDatePicker
- Checkbox css update

# [2.0.0-beta.59] - 18-05-2020

### Fixes

- Preview1 - minor css changes

# [2.0.0-beta.58] - 18-05-2020

### Fixes

- Preview1 branding label

# [2.0.0-beta.57] - 18-05-2020

### Changes

- Reverted design (css and class names) for preview 1

# [2.0.0-beta.56] - 15-05-2020

### Fixes

- Incorrectly published version because of NPM being down

# [2.0.0-beta.55] - 15-05-2020

### Fixes

- Remove margin auto from paywall preview

# [2.0.0-beta.54] - 14-05-2020

### Fixes

- Webpack externals

# [2.0.0-beta.53] - 14-05-2020

### Fixes

- Components layout fixes

# [2.0.0-beta.52] - 13-05-2020

### Fixes

- Paywall previews layout improvements

# [2.0.0-beta.51] - 12-05-2020

### Fixes

- Paywall previews layout improvements

# [2.0.0-beta.50] - 12-05-2020

### Fixes

- Paywall previews layout improvements

# [2.0.0-beta.49] - 11-05-2020

### Fixes

- Paywall previews layout improvements

# [2.0.0-beta.48] - 29-04-2020

### Fixes

- Fix loading fonts on every rerender

## Change

- Remove letter-spacing nad text-transform in Label

# [2.0.0-beta.47] - 28-04-2020

### Fixes

- Preview1 remove fixed 100% height

# [2.0.0-beta.46] - 28-04-2020

### Fixes

- Preview1 flex layout improvements

# [2.0.0-beta.45] - 28-04-2020

### Fixes

- Preview1 layout

### Changes

- Use font-weight 300 for Label

# [2.0.0-beta.44] - 27-04-2020

### Added

- Text editor style changes: Set margin to overwrite browser(user agent) fall-back (browsers defaults)

# [2.0.0-beta.43] - 23-04-2020

### Added

- Preview1 classNames because of client implementations based on this classes and ids

# [2.0.0-beta.42] - 16-04-2020

### Change

- Add fix min-width for all preview boxes

# [2.0.0-beta.41] - 14-04-2020

### Fixes

- Add missing icon prop in type definitions of Input

# [2.0.0-beta.40] - 09-04-2020

### Change

- Improve Paywall Previews look

# [2.0.0-beta.39] - 06-04-2020

### Change

- Change position of buy button and remove bold style for title (it will be set in preview asset section)

# [2.0.0-beta.38] - 31-03-2020

### Fixes

- Font loading

# [2.0.0-beta.37] - 27-03-2020

### Fixes

- Fix icon prop type in AccordionPanel

# [2.0.0-beta.36] - 27-03-2020

### Added

- Added optional disabled prop to DatePicker
- Added icon boolean prop to Switch

### Fixes

- Use ES exports everywhere

# [2.0.0-beta.35] - 25-03-2020

### Added

- Web fonts loader

# [2.0.0-beta.34] - 25-03-2020

### Change

- Modify eslint, stylelint and prettier rules

### Fixes

- Include types in build folder

# [2.0.0-beta.33] - 24-03-2020

### Chore

- Update all npm libs

# [2.0.0-beta.32] - 24-03-2020

### Added

- Add more colors

# [2.0.0-beta.31] - 06-03-2020

### Change

- Add disabled option to DayPicker component

# [2.0.0-beta.30] - 04-03-2020

### Change

- Add full width and height to Paywall Previews

# [2.0.0-beta.29] - 03-03-2020

### Change

- Improve Paywall Previews look and feel

# [2.0.0-beta.28] - 02-03-2020

### Change

- Redesign the Loader component

# [2.0.0-beta.27] - 28-02-2020

### Change

- Set loginFooterLabel as optional prop and add default value

# [2.0.0-beta.26] - 28-02-2020

### Added

- Paywall Preview Templates

# [2.0.0-beta.25] - 06-02-2020

### Change

- Custom pagination component

# [2.0.0-beta.24] - 05-02-2020

### Fix

- Include react and react-dom as externals in webpack config

# [2.0.0-beta.23] - 05-02-2020

### Fix

- Make table body responsive

# [2.0.0-beta.22] - 24-01-2020

### Fix

- Export not exported interfaces

# [2.0.0-beta.21] - 22-01-2020

### Added

- Re-export FocusedInputShape from react-dates

# [2.0.0-beta.20] - 20-01-2020

### Fix

- Render loader on data fetch in table

# [2.0.0-beta.19] - 25-12-2019

### Added

- Table renderEmptyTable boolean prop

### Fixes

- Table header section did not have border when headerSection was omitted
- Table headerSection option accepts null as a value

# [2.0.0-beta.18] - 20-12-2019

- Mistakenly omitted

# [2.0.0-beta.17] - 17-12-2019

### Fixes

- InPlayerIcon name in Accordion

### Added

- Table header section

# [2.0.0-beta.16] - 13-12-2019

### Change

- Rename InPlayer icons with more meaningful names

# [2.0.0-beta.15] - 13-12-2019

### Fixes

- Missing Avatar component export

### Added

- Render all available InPlayer icons in docs demo

# [2.0.0-beta.14] - 06-12-2019

### Added

- Avatar component

# [2.0.0-beta.13] - 04-12-2019

### Fixes

- CSS update to date range picker

# [2.0.0-beta.12] - 02-12-2019

### Change

- Added optional activePeriod prop to the date picker where user defines which presets period to be selected
- Added CUSTOM period which is used when user chose custom dates from date picker

# [2.0.0-beta.11] - 26-11-2019

### Fixes

- Card title and content padding

# [2.0.0-beta.10] - 26-11-2019

### Fixes

- Add padding-bottom to Card Title

# [2.0.0-beta.9] - 26-11-2019

### Fixes

- Remove padding in Card Title

# [2.0.0-beta.8] - 26-11-2019

### Change

- Added style for active date preset

### Fixes

- Do not display default presets to the DatePicker if displayPresets is not set

# [2.0.0-beta.7] - 19-11-2019

### Change

- Availability to add default or custom presets to DatePicker

# [2.0.0-beta.6] - 08-11-2019

### Change

- Removed margin on Typography

# [2.0.0-beta.5] - 06-11-2019

### Change

- Added animation on accordion open/close
- Do not show the arrow on disabled accordion panel

# [2.0.0-beta.4] - 05-11-2019

### Fixes

- Wrong position of info icon after arrow icon is added

# [2.0.0-beta.3] - 05-11-2019

### Change

- Add arrow up/down in accordion header to show whether accordion is open or close

# [2.0.0-beta.1] - 01-11-2019

### Change

- Removed padding from Accordion

# [2.0.0-beta.0] - 30-10-2019

### Change

- Accordion api change, removed renderActionButton and renderFooterLink options

# [1.1.0] - 25-10-2019

### Change

- Add renderIcon option to Icon

# [1.0.4] - 22-10-2019

### Fixes

- Fix invalid date in day picker. Create moment from string without specifying the format

# [1.0.3] - 18-10-2019

### Fixes

- Fix typo in react and react-dom version

# [1.0.2] - 17-10-2019

### Fixes

- Change webpack libraryTarget output to commonjs2

# [1.0.1] - 16-10-2019

### Change

- Add margin to Typography

# [1.0.0] - 10-10-2019 Fully tested major version

# [0.26.3] - 04-10-2019

### Fixes

- Fixed type attribute of input

### Change

- Changed the date type. The date can be of type moment or type string

# [0.26.2] - 25-09-2019

### Fixes

- Optimize generated bundle size

# [0.26.1] - 11-09-2019

### Change

- Update Table link css

### Fixes

- Display tooltip in tables

# [0.26.0] - 11-09-2019

### Added

- Input with icon option

### Change

- Update theme colors

# [0.25.5] - 05-09-2019

### Fixes

- Table layout to auto

# [0.25.4] - 23-08-2019

### Fixes

- Remove redundant Radio styles

# [0.25.3] - 20-08-2019

### Fixes

- Remove overflow: hidden for actions cell

# [0.25.2] - 15-08-2019

### Change

- Always display TableCell content in single line by handling long content overflow and wrapping

# [0.25.1] - 01-08-2019

### Change

- Update webfontloader wq active in globalStyles

# [0.25.0] - 29-07-2019

### Added

- Add onActivePanelChange handler in Accordion

# [0.24.0] - 26-07-2019

### Fixes

- Add private AccordionPanel prop 'isOtherPanelActive' to prevent icon rendering
  by an inactive AccordionPanel while another AccordionPanel is active

### Change

- Add and implement public AccordionPanel props 'disabled' and 'iconTooltip'

# [0.23.1] - 19-07-2019

### Fixes

- Add missing optional prop disabled to Checkbox component

# [0.23.0] - 19-07-2019

### Change

- Add renderFooterLink option to panel properites

# [0.22.0] - 15-07-2019

### Change

- Rename isCollapsible flat to isExtendable in Accordion

# [0.21.0] - 15-07-2019

### Change

- Add isCollapsible option to Accordion

# [0.20.1] - 12-07-2019

### Change

- CSS Tooltip styling changes

# [0.20.0] - 11-07-2019

### Change

- Change actionButton method to renderActionButton in Accordion component.

# [0.19.5] - 11-07-2019

### Fixes

- Add missing optional prop disable to Radio component

# [0.19.4] - 04-07-2019

### Fixes

- Use 1px for Input and Dropdown border

# [0.19.3] - 03-07-2019

### Fixes

- Use svg background image for Dropdown arrow

### Change

- Change accordion footer z-index

# [0.19.2] - 02-07-2019

### Fixes

- Style Dropdown consistently across browsers

# [0.19.1] - 01-07-2019

### Change

- Adjust Dropdown to match Input height

# [0.19.0] - 21-06-2019

### Fixes

- AccordionPanel prop activeTab type declaration corrected from string to boolean

### Change

- AccordionPanel renderContent is only called for the currently active tab and its
  content is unmounted upon closing the tab
- Change Accordion's state interface: a single state prop activePanel: number is now used
- AccordionPanel's activeTab prop renamed to isActive

# [0.18.0] - 06-06-2019

### Change

- Accordion action button render

# [0.17.0] - 27-05-2019

### Added

- Add isDisabled, isCompleted props to StepWizard Steps

# [0.16.1] - 22-05-2019

### Fixes

- Reset content position after closing the accordion

# [0.16.0] - 21-05-2019

### Added

- Step Wizard

### Change

- Modify Tooltip behavior

# [0.15.2] - 16-05-2019

### Fixes

- Make endDate prop optional in DatePicker component

# [0.15.1] - 15-05-2019

### Change

- Accordion redesign

# [0.15.0] - 09-05-2019

### Added

- Single Day Picker Component added

# [0.14.5] - 24-04-2019

### Fixes

- Include minimumNights prop in DatePicker Component

# [0.14.4] - 19-04-2019

### Fixes

- Fix table preventing popup menu from overflowing

# [0.14.3] - 19-04-2019

### Fixes

- Destroy Notification after duration expiry

# [0.14.2] - 17-04-2019

### Change

- Reduce Notification animation delay

# [0.14.1] - 05-04-2019

### Fixes

- Modify icon prop type in TableButtons

# [0.14.0] - 05-04-2019

### Added

- Add optional tableButton prop to Table component

# [0.13.0] - 28-03-2019

### Added

- Add Custom Icon to Button as prop

### Changes

- Add optional containerRef prop on Checkbox component

# [0.12.0] - 25-03-2019

### Added

- Add Input sizes (xs, sm, md, lg)
- Add Button buttonLink modifier

### Fixes

- Center button icon content
- Remove max-width fixed values
- Rename defaultChecked prop to checked in Switch component

# [0.11.1] - 22-03-2019

### Fixes

- Use same padding sizes for Input and Dropdown
- Use rem unit for spacing through out the app

# [0.11.0] - 21-03-2019

### Added

- Add InPlayerIcon component with custom icon font

### Fixes

- Remove fixed width in Input component
- Pass onFocusChange and focusedInput as required props to DatePicker component

# [0.10.4] - 20-03-2019

### Fixes

- Make Input ref prop optional in Input component

# [0.10.3] - 20-03-2019

### Fixes

- Make calendarInfo and isOutsideRange DatePicker props optional
- Change the types of startDate and endDate (from string to Moment)
- Forward ref to Input component

# [0.10.2] - 19-03-2019

### Changes

- Add optional defaultOption prop on Dropdown element.

### Fixes

- Add margin left to the Label in Switch component

# [0.10.1] - 18-03-2019

### Changes

- Add optional disabled prop on Dropdown element.

### Fixes

- The style of Button's "span" child element no longer overrides the style of its potential siblings of the same type

# [0.10.0] - 14-03-2019

### Changes

- Add fullHeight prop to Button
- Enable to use icons in Tabs component

# [0.9.5] - 13-03-2019

### Changes

- Remove left positioning from Label

# [0.9.4] - 13-03-2019

### Changes

- Remove margin from Label

### Fixes

- Export Container and Cell props

# [0.9.3] - 12-03-2019

### Changes

- Make disabled prop optional on Switch

# [0.9.2] - 11-03-2019

### Fixes

- Fixed an issue where the value prop wasn't passed down to the actual HTML element

# [0.9.1] - 11-03-2019

### Fixes

- Add missing value prop for Radio to typedefs

# [0.9.0] - 11-03-2019

### Changes

- Change onChange of Radio to accept ChangeEvent instead of boolean

### Fixes

- Fix font-family from user agent stylesheet overriding HTML elements

# [0.8.3] - 07-03-2019

### Fixes

- Passed down Pagination currentPage prop to forcePage of ReactPaginate

# [0.8.2] - 06-03-2019

### Fixes

- Fix Pagination className not being forwarded to container

# [0.8.1] - 05-03-2019

### Fixes

- Fix primary font being set on html instead of body after loading and not applying

# [0.8.0] - 05-03-2019

### Changes

- Changed color of the `a` element on hover table

### Fixes

- Font family fixed for `p`, `span` and `a` elements

### Added

- Add new extraLarge font size

# [0.7.2] - 04-03-2019

### Changes

- Tooltip span positioned absolute
- Changed color of the `a` element in button and table

# [0.7.1] - 04-03-2019

### Fixes

- Fix Input handling of onChange event

### Changes

- Status color for the icon and the tooltip set to light gray
- Border in the table displayed
- New line support added in the tooltip

### Added

- Add new `pale (#f0f3f6)` color to Colors object

# [0.7.0] - 28-02-2019

### Changes

- Rename TextField component to Input
- Add full width/height to CardContent
- Additional user menu added in Header

### Fixes

- Update TextField/Input TypeScript definitions

# [0.6.1] - 27-02-2019

### Fixes

- Update Button TypeScript definitions
- Update Table RowAction TypeScript definitions

# [0.6.0] - 25-02-2019

### Changes

- Enable Table to recieve a render function for `rowActions` prop as well as an array of actions
- Rework/Modify Grid

# [0.5.1] - 22-02-2019

### Changes

- Remove margins for Typography
- Edit margins for Label

### Fixes

- Add modifier definitions for Label, Dropdown, Icon

# [0.5.0] - 21-02-2019

### Changes

- Enhance and modify Table API with generics and better type checking

### Fixes

- Table and DropDown prop definition types
- Fix Table crashing from accessing properties of optional props

# [0.4.0] - 20-02-2019

### Changes

- Add `showLoader` prop to Table.
- Add generic for the data type to Table.
- Enable generic types for Button.

### Fixes

- Fix an issue with wrong text color on the selected pagination page
- Add missing Dropdown props

### Added

- Add PillLabel component

# [0.3.1] - 19-02-2019

### Changes

- Make render prop optional on TableColumn

# [0.3.0] - 19-02-2019

### Added

- Pass all row values as render props of TableColumn

# [0.2.1] - 19-02-2019

### Fixes

- TextField of type search styling
- Set default theme withProvider prop

# [0.2.0] - 15-02-2019

- Minor style adjustments to theme
- Add withProvider prop to inject a custom ThemeProvider

# [0.1.9] - 08-02-2019

### Fixes

- Fix minor styling issues with Header and Navbar

# [0.1.8] - 08-02-2019

### Changes

- Replace fontfaceobserver with webfontloader

# [0.1.7] - 07-02-2019

### Fixes

- Fix fontfaceobserver font loading

### Changes

- Minor changes in default globalStyles

# [0.1.5] - 07-02-2019

### Fixes

- Navbar Menu Item fixed width

### Changes

- Make active prop optional in MenuItem

# [0.1.4] - 06-02-2019

### Fixes

- Body global style primary color to palette text main color

### Changes

- Label `disabled` prop to be optional

# [0.1.3] - 18-01-2019

### Added

- Types for styled-components

# [0.1.2] - 18-01-2019

### Fixes

- Set white as default background color for the Dropdown component

# [0.1.1] - 27-11-2018

### Fixes

- Update libs that use harmful npm lib event-stream as dependency

# [0.1.0] - 22-11-2018

### Added

- Grid block
- Checkbox component
- Header component
- Modal component
- NavBar component
- Note component
- Radio component
- TabNavigation component
- Tabs component
- Table component
- Tooltip component
- User Menu component
- Accordion element
- Button element
- Card element
- DatePicker element
- Dropdown element
- Icon element
- Label element
- Loader element
- Notification element
- Progress element
- SingleDayPicker element
- Switch element
- TextArea element
- TextField element
- Typography element
- Pagination element
- Typings
