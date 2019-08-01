# Change Log

All notable changes to this project will be documented in this file.

=======

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
