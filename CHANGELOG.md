# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [7.0.0] - 2025-12-14

### Breaking Changes

- No longer using styled components theme provider, everything is now themed with the data-theme attribute and CCS variables
- Colour names that were camel cased in the theme objects are now kebab case to match css variable conventions
- All content that changes by theme like logo in the header, footer text, or avatar fallback images, now lives in the the component where and additional "themeName" prop is a required attribute so select the correct content.

## [6.2.2] - 2025-12-02

### Added

- Added font-smoothing to global styles [#1129](https://github.com/CRUKorg/cruk-react-components/issues/1104)

## [6.2.2] - 2025-12-02

### Fixes

- More fixes for radio consent to handle smaller screen widths more gracefully [#1126](https://github.com/CRUKorg/cruk-react-components/issues/1104)

## [6.2.1] - 2025-12-02

### Fixes

- Fixed radio consent to handle smaller screen widths more gracefully [#1126](https://github.com/CRUKorg/cruk-react-components/issues/1104)

## [6.2.0] - 2025-10-29

### Changed

- Changed the input labels to match helix designs in size and colors [#1117](https://github.com/CRUKorg/cruk-react-components/issues/1104)
- Changed step current dot styling so that the dot shows a block of color [#1116](https://github.com/CRUKorg/cruk-react-components/issues/1104)

## [6.1.2] - 2025-10-29

### Fixes

- Update RFL header logo [#1104](https://github.com/CRUKorg/cruk-react-components/issues/1104)

## [6.1.1] - 2025-07-18

### Fixed

- Fix missing types on export [#1042](https://github.com/CRUKorg/cruk-react-components/issues/1042)

## [6.1.0] - 2025-06-30

### Changed

- Updated webpack/babel to vite/swc, also updated all tests from Cypress component tests to Playwright component tests [#1028](https://github.com/CRUKorg/cruk-react-components/issues/1028)
- Now showing (optional) for optional fields instead of (required) for required fields [#1027](https://github.com/CRUKorg/cruk-react-components/issues/1027)

## [6.0.3] - 2025-05-06

### Fixes

- SU2C body font updated [#1005](https://github.com/CRUKorg/cruk-react-components/issues/1005)
- When Modal open animates, set transform origin to the top, so scroll position starts are the top not the middle.

## [6.0.2] - 2025-02-05

### Fixes

- Theme objects in lib export seem to be missing sections [#987](https://github.com/CRUKorg/cruk-react-components/issues/987)

## [6.0.1] - 2025-02-03

### Fixes

- reverting tsconfig outputs [#985](https://github.com/CRUKorg/cruk-react-components/issues/985)

## [6.0.0] - 2025-02-03

### Breaking Changes

- Using React 19 [#983](https://github.com/CRUKorg/cruk-react-components/issues/983)

## [5.0.8] - 2025-02-03

### Changed

- Using Eslint 9 [#979](https://github.com/CRUKorg/cruk-react-components/issues/979)
- Bumping storybook to 8.5 [#981](https://github.com/CRUKorg/cruk-react-components/issues/981)

## [5.0.7] - 2025-02-03

### Changed

- Changed badge API to grow by default but allow force circle/square [#971](https://github.com/CRUKorg/cruk-react-components/issues/971)

### Fixed

- Carousel Previous and Next buttons not working when component imported [#903](https://github.com/CRUKorg/cruk-react-components/issues/903)

## [5.0.6] - 2024-10-29

### Added

- Added option to animate in modals [#940](https://github.com/CRUKorg/cruk-react-components/issues/940)

## [5.0.5] - 2024-07-30

### Fixed

- Carousel Previous and Next buttons not working when component imported [#901](https://github.com/CRUKorg/cruk-react-components/issues/901)

## [5.0.4] - 2024-07-19

### Fixed

- Collapse chevron not flipping [#890](https://github.com/CRUKorg/cruk-react-components/issues/890)

## [5.0.3] - 2024-07-18

### Fixed

- Fixed badge with svg breaks React stylesheets [#888](https://github.com/CRUKorg/cruk-react-components/issues/888)

## [5.0.2] - 2024-07-17

### Fixed

- Fixed additional non html attributes leaking into html elements [#885](https://github.com/CRUKorg/cruk-react-components/issues/885)

## [5.0.1] - 2024-07-15

### Fixed

- Fixed styled component props bleeding into html elements [#883](https://github.com/CRUKorg/cruk-react-components/issues/883)

## [5.0.0] - 2024-07-15

### Breaking Changes

- Minimum Node version 18
- Minimum React version 18
- Minimum Styled Components version 6.1

### Changed

- Updated StoryBook to v8
- Updated Rollup to v4.18
- Updated Prettier to v3

### Removed

- Removed Jest for unit tests in favour of build in Node assertions

### Fixed

- Bump node and React [#875](https://github.com/CRUKorg/cruk-react-components/issues/875)

## [4.2.2] - 2024-07-12

### Fixed

- Fixed carousel to debounce onPositionChanged handler to work better when using external state [#874](https://github.com/CRUKorg/cruk-react-components/issues/874)
- Fixed ID not being passed to Collapse parent container [#847](https://github.com/CRUKorg/cruk-react-components/issues/847)
- Fixed add heigh and with where possible to images in header and footer to improve rendering speeds [#336](https://github.com/CRUKorg/cruk-react-components/issues/336)

### Removed

- removed out-of-date references in README about using docker for snapshot tests and percy tests.

## [4.2.1] - 2024-06-12

### Changed

- Changed the appearance of compact totaliser and changed the colours for totalizer for rfl theme [#859](https://github.com/CRUKorg/cruk-react-components/issues/859)

- Add GTM attributes to pagination [#860](https://github.com/CRUKorg/cruk-react-components/issues/860)

## [4.1.0] - 2023-11-22

### Changed

- Changing styling for Avatar which now has a border instead of a box shadow [#801](https://github.com/CRUKorg/cruk-react-components/issues/#801))
- Changing licence from UNLICENSED to MIT [#797](https://github.com/CRUKorg/cruk-react-components/issues/#797))

## [4.1.0] - 2023-09-11

### Added

- Fix RFL theme [#785](https://github.com/CRUKorg/cruk-react-components/issues/#785))

## [4.0.4] - 2023-10-30

### Fixed

- Fix CRUK theme secondary button text hover colour not accessible [#792](https://github.com/CRUKorg/cruk-react-components/issues/#792))

## [4.0.3] - 2023-10-30

### Fixed

- Poppings light font file location corrected [#789](https://github.com/CRUKorg/cruk-react-components/issues/#789))

## [4.0.2] - 2023-10-23

### Fixed

- Background grey should be lighter [#783](https://github.com/CRUKorg/cruk-react-components/issues/#783))

## [4.0.1] - 2023-10-23

### Fixed

- Fontface helper now pulls font weights from themes [#781](https://github.com/CRUKorg/cruk-react-components/issues/#781))

## [4.0.0] - 2023-10-23

### Changed

- New CRUK theme [#715](https://github.com/CRUKorg/cruk-react-components/issues/#715))
- Not necessarily a breaking change but a big change affects other sub brands in subtle ways and changes themeType, complete overhaul over how fontfaces are handled specifically multiweight fonts

## [3.5.1] - 2023-10-12

### Fixed

- Fixed where ErrorText icon appears when there is no error fix for [#769](https://github.com/CRUKorg/cruk-react-components/issues/#769))

## [3.5.0] - 2023-10-12

### Fixed

- Fixed where text field collapses and additional fix for #759 [#767](https://github.com/CRUKorg/cruk-react-components/issues/#767))

### Added

- ErrorText component now includes an error icon for colour blind users [#672](https://github.com/CRUKorg/cruk-react-components/issues/#672))

### Changed

- Hinttext attribute for AddressLookup component now matches TextInput component which access strings and ReactNodes

## [3.4.1] - 2023-10-03

### Fixed

- Fixed extra-text left and right of TextField where in edge cases it can expand to 100% width [#759](https://github.com/CRUKorg/cruk-react-components/issues/#759))

## [3.4.0] - 2023-8-18

### Changed

- Updated bowelbabe theme for buttons and avatar

## [3.3.0] - 2023-8-18

### Removed

- Full removal Icon component which has been deprecated in favour of IconFa component
- Removal of readmes on main index export

## [3.2.0] - 2023-8-04

### Added

- Added range of box shadows in themes and added shaddow large to sticky header which should float on top of everything [#721](https://github.com/CRUKorg/cruk-react-components/issues/#721))

### Fixed

- Storybook stories when GlobalStyle component was required to override font set by theme in outer theme switcher

## [3.1.1] - 2023-7-25

### Fixed

- Fixed commas in AddressLookup found address fields, when some fields contains number not strings [#712](https://github.com/CRUKorg/cruk-react-components/issues/#712))

## [3.1.0] - 2023-7-25

### Changed

- AddressLookup hintText now customisable, can be blank string

### Fixed

- Fixed commas in AddressLookup found address fields [#712](https://github.com/CRUKorg/cruk-react-components/issues/#712))

## [3.0.0] - 2023-6-21

### Changed

- Using Storybook 7 for docsite
- Added 'full' on PopOver for a more explicit way of enabling the child button to extend full width [#697](https://github.com/CRUKorg/cruk-react-components/issues/#697))

### Fixed

Disabled styles for checkbox and radio [#675](https://github.com/CRUKorg/cruk-react-components/issues/#675))

## [2.0.1] - 2023-04-04

### Changed

- Updated bowelbabe footer text

## [2.0.0] - 2023-04-03

### BREAKING CHANGES

- Removing CJS export only ESM export exists

### Changed

- Removing Percy in favour of local screenshots in docker instance.

## [1.5.1] - 2023-03-22

### Added

Added bowelbabe title font to fontface css string builder util

## [1.5.0] - 2023-03-21

### Added

Tests for InfoBox
Bowelbabe theme for all components
Node 18 in engines

## [1.4.0] - 2023-02-01

### Added

To fix font flicker with SSR issue with GlobalStyle and @font-face declarations [#636](https://github.com/CRUKorg/cruk-react-components/issues/#636)) but adding a GlobalStyleNoFontFace, the same as GlobalStyle but without font-face declarations, also added a Fontface module with a string function to add the styles in static location on a SSR server.

## [1.3.3] - 2023-01-05

### Change

Attempt to fix typscript error with Link [#625](https://github.com/CRUKorg/cruk-react-components/issues/#625))

## [1.3.0] - 2023-01-05

### Change

Attempt to fix typscript error with Link [#625](https://github.com/CRUKorg/cruk-react-components/issues/#625))

## [1.2.5] - 2022-12-21

### Fixed

Fixed header squished icon for mobile view

## [1.2.4] - 2022-12-20

No change NPM things 1.2.3 exists already when it doesn't

## [1.2.3] - 2022-12-17

### Fixed

Smoother sticky header transitions on scroll [#611](https://github.com/CRUKorg/cruk-react-components/issues/#611))

## [1.2.2] - 2022-11-02

### Fixed

Fixed a11y isssue with pagination prev and next buttons when disabled [#593](https://github.com/CRUKorg/cruk-react-components/issues/#593))

### Changed

Added some notes in the readme about maintainance of the repo

## [1.2.1] - 2022-10-19

### Fixed

Fixed IconFa typing missmatch issue that was breaking build in release scripts

## [1.2.0] - 2022-10-14

### Added

New InfoBox component used to alert the user of new information, with icon, title and message

### Fixed

Fixed Badge with non text children becomes display block instead of inline-block [#576](https://github.com/CRUKorg/cruk-react-components/issues/#576))
Fixed LabelWrapper component missing onClick prop [#577](https://github.com/CRUKorg/cruk-react-components/issues/#577))

## [1.1.8] - 2022-08-09

### Changed

Adding fullscreen mode to modal [#548](https://github.com/CRUKorg/cruk-react-components/issues/#548))
Adding fullwidth item mode to carousel [#549](https://github.com/CRUKorg/cruk-react-components/issues/#549))

### Fixed

Fixed carousel arrow buttons wrong size for safari and firefox osx [#558](https://github.com/CRUKorg/cruk-react-components/issues/#558))

## [1.1.7] - 2022-08-19

### Changed

Adding react and react-dom 18 as peer dependency option and removeing a types that use FC or FunctionComponent [#540](https://github.com/CRUKorg/cruk-react-components/issues/#540))

## [1.1.6] - 2022-08-15

### Fixed

Fix typo in the fix for safari button styling [#531](https://github.com/CRUKorg/cruk-react-components/issues/#531))

## [1.1.5] - 2022-08-15

### Fixed

Buttons cast as anchor tags look bloated on iOS safari [#531](https://github.com/CRUKorg/cruk-react-components/issues/#531))

## [1.1.4] - 2022-08-12

### Fixed

Using new fork of cypress-image-snapshots original repo is no longer maintianed :(

## [1.1.3] - 2022-07-16

### Fixed

Removed arbitrary spacing on user block [#513](https://github.com/CRUKorg/cruk-react-components/issues/#513)
Removed arbitrary z-indexes on totaliser [#514](https://github.com/CRUKorg/cruk-react-components/issues/#514)

## [1.1.2] - 2022-07-11

### Changed

Changed asset path to to be https://rcl.assets.cancerresearchuk.org/ fixes [#505](https://github.com/CRUKorg/cruk-react-components/issues/#505)

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
- The old Button variant 'tertiary' has been removed and old Button variant 'text' is now Button variant 'tertiary'
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
