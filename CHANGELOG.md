# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.8] - 2021-10-06

### Added

- Added aria-described by support for controlls with error messages for TextField, TextAreaField, Select, Checkbox, Radio
- isIconButton prop to Button sets the button into a round or square shape when it only contains and icon, is happening in order to depricate Icon and use another tree shakeable icon library in its stead.

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
- Missing attribures on AddressDataType [#306](https://github.com/CRUKorg/cruk-react-components/issues/306)

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
