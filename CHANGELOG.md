# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.2] - 2022-07-11

### Changed

Changed asset to to be https://rcl.assets.cancerresearchuk.org/ fixes [#505](https://github.com/CRUKorg/cruk-react-components/issues/#505)

### Fixed

Error appearing on SU2C theme pages where only .woff file exists not .woff2 [#506](https://github.com/CRUKorg/cruk-react-components/issues/#506)

## [1.1.1] - 2022-05-23

### Fixed

Moving Avatar assets path for different themes into the themes and out of the component. Also removing explicit mentions of assets paths in tests where possiblee.

## [1.1.0] - 2022-05-22

### Added

Added IconFa component for a tree-shakable Icon component, removed Icon component from other components [#490](https://github.com/CRUKorg/cruk-react-components/issues/#490)

### Fixed

Fix missing images form Avatar, Header and Footer using placeholder cloudfront distribution

## [1.0.11] - 2022-05-11

### Fixed

Fix text expanding on ios landscape [#469](https://github.com/CRUKorg/cruk-react-components/issues/#469)
Fix support for overflow-wrap on heading and text components [#470](https://github.com/CRUKorg/cruk-react-components/issues/#470)

## [1.0.10] - 2022-04-1

### Fixed

Change all body font weight from 500 to 400 to match design system spec [#454](https://github.com/CRUKorg/cruk-react-components/issues/#454)

## [1.0.9] - 2022-04-06

### Changed

CRUK magenta_500 from #e40074 to #e40087 to match design system

### Fixed

- Text size s is incorrect should be 0.875 em not 0.857 em [#452](https://github.com/CRUKorg/cruk-react-components/issues/#452)

## [1.0.8] - 2022-03-29

### Fixed

- TextField with extra on left or right looks wonkey on iOS [#445](https://github.com/CRUKorg/cruk-react-components/issues/445)

## [1.0.7] - 2022-03-24

### Fixed

- Focus rect visible on mouse click and touch events for some items [#438](https://github.com/CRUKorg/cruk-react-components/issues/438)

## [1.0.6] - 2022-03-23

### Fixed

- Links, Pagination button/links and Buttons that have been cast as an anchor tag all show default focus outline on focus. This wasn't happening in Firefox. [#428](https://github.com/CRUKorg/cruk-react-components/issues/428)

### Added

- Carousel component
- secondaryPercentage prop for Progress Bar and Totaliser

## [1.0.5] - 2022-02-09

### Changed

- Using node 16 and cypress 9.4.1

## [1.0.4] - 2022-02-02

### Fixed

- Collapse focus rect SU2C needs reduced border radius [#403](https://github.com/CRUKorg/cruk-react-components/issues/403)
- Totaliser with custom summary has a speech bubble arrow artifact [#404](https://github.com/CRUKorg/cruk-react-components/issues/404)

## [1.0.3] - 2022-01-21

### Changed

- Moving storybook/react into dev dependencies

## [1.0.2] - 2022-01-21

### Changed

- Bumping storybook dependencies to 6.4.14

## [1.0.1] - 2021-12-01

### Removed

- "@react-theming/storybook-addon", because it was breaking storybook post 6.4

### Changed

- Replaced all absolute paths with relative paths, not out of choice but because rollup + typescript + absolute paths leads to broken typescript definition files with absolute paths, this broke intellisense.
- Footer logo src and alt text configurable from theme

### Added

- New theme selector bar in storybook top bar to replace the react-theming addon

## [1.0.0] - 2021-10-18

### Changed

(BREAKING CHANGES)

- Renamed RadioGroup to RadioConsent to discorage people to use this pattern in other scenarios
- The old Button variant 'tertiary' has been removed and old Button variant 'text' is now Button variant 'teriary'
- Changed avatar name prop type from ReactNode to string

### Added

- Added aria-described by support for controlls with error messages for TextField, TextAreaField, Select, Checkbox, Radio
- Added isIconButton prop to Button sets the button into a round or square shape when it only contains and icon, is happening in order to deprecate Icon and use another tree shakeable icon library in its stead.
- Added hideRequiredInLabel prop to select to hide required in label when it is used to filter lists etc.

## [0.1.7] - 2021-10-06

### Fixed

- CRUK secondary button hover colours solution causes cypress to think something is covering/obscuring text inputs when it isn't

## [0.1.6] - 2021-10-05

### Fixed

- CRUK secondary button hover colours not accessible [#299](https://github.com/CRUKorg/cruk-react-components/issues/299)
- CRUK totaliser colours not accessible [#324](https://github.com/CRUKorg/cruk-react-components/issues/324)

## [0.1.5] - 2021-09-23

### Added

- Test for TextField with extra left and extra right props

### Changed

- Heading H6 tags are always 1em

### Fixed

- TextField isValid and isInvalid checks and crosses disappear when focused because of Chrome browser default styling [#298](https://github.com/CRUKorg/cruk-react-components/issues/298)
- Missing attributes on AddressDataType [#306](https://github.com/CRUKorg/cruk-react-components/issues/306)

## [0.1.4] - 2021-08-27

### Changed

- improved select cypress tests
- Checkbox and Radio focus rect box shaddow is now inset for visual fix where it appears cropped in some scenarios

### Added

- Added onPopOverIsOpenChange prop to PopOver component
- Added backgroundColor prop to Modal component

## [0.1.3] - 2021-08-09

### Changed

- Added Hotjar recording suppression attribute to TextField, TextAreaField and AddressLookup components

## [0.1.2] - 2021-07-20

### Added

- LegendWrapper component

### Changed

- Added hasError and errorMessage prop to Radio and Checkbox components
- Updated styles for the Radio and Checkbox components to reflect hasError
- Updated JS doc comment for Text, Link, TextField and TextAreaField components
- Updated ErrorText colour, font weight and spacing inside form controlls
- Updated AddressLookup, tab away from component and search results disappear, address results are focusable and input will no longer blur when clicking though lists of address

### Removed

### Fixed

## [0.1.1] - 2021-06-11

### Added

### Changed

### Removed

### Fixed
