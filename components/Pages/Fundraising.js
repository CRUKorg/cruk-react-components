// @Flow

import React, { useState, useEffect, useRef } from 'react';
import styled, { css, ThemeProvider, withTheme } from 'styled-components';
import { BREAKPOINT, COLORS, TYPOGRAPHY, UTILITIES } from '../Constants';
import { Badge, Button, Box, Flex, Heading, Icon, PopOver, Totaliser, UserBlock } from '../index';

type FundraisingProps = {
  theme: { colors: {}, page: {} },
};

const PageWrapper = styled.div`
  background-color: ${COLORS.grayVLight};
  width: 100%; 
`;
const Content = styled.div`
  @media (min-width: ${BREAKPOINT.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    min-height: 800px;
    ${ItemProps => ItemProps.getHeight && css`
      height: ${ItemProps.getHeight}px;
    `} 
  }
`;
// @TODO background svg
/* eslint-disable */
const CauseInfoBG = css`
  background: #fff url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNTggMTQyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTggMTQyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzJFMDA4Qjt9Cgkuc3Qxe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0M4QzlDNzt9Cgkuc3Qye2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0VDMDA4Qzt9Cgkuc3Qze2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0JDQkVDMDt9Cgkuc3Q0e2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6IzAwQjZFRDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03Ni4xLDEzMS4yYzAtNi4xLTUtMTEtMTEuMS0xMWMtNi4xLDAtMTEsNS0xMSwxMS4xYzAuMSw2LjEsNSwxMSwxMS4xLDExQzcxLjIsMTQyLjMsNzYuMSwxMzcuMyw3Ni4xLDEzMS4yeiIKCS8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04Mi4zLDE0Ny44YzAtMy45LTMuMS03LTctN2MtMy45LDAtNywzLjEtNyw3YzAsMy45LDMuMSw3LDcsN0M3OS4xLDE1NC44LDgyLjMsMTUxLjYsODIuMywxNDcuOHoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzLjYsMTI4LjljMC0zLjctMy02LjctNi43LTYuN2MtMy43LDAtNi43LDMtNi42LDYuN2MwLDMuNywzLDYuNyw2LjcsNi42QzEwLjcsMTM1LjYsMTMuNywxMzIuNiwxMy42LDEyOC45eiIKCS8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik01NS42LDEzNC4zYzAtMy41LTIuOS02LjMtNi40LTYuM2MtMy41LDAtNi4zLDIuOS02LjMsNi40YzAsMy41LDIuOSw2LjMsNi40LDYuMwoJQzUyLjgsMTQwLjcsNTUuNiwxMzcuOCw1NS42LDEzNC4zeiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjAuNSwxMjUuMmMwLTIuOS0yLjMtNS4xLTUuMi01LjFjLTIuOCwwLTUuMSwyLjMtNS4xLDUuMmMwLDIuOCwyLjMsNS4xLDUuMiw1LjEKCUM1OC4yLDEzMC4zLDYwLjUsMTI4LDYwLjUsMTI1LjJ6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00OC4xLDEzMS4yYzAtNC42LTMuOC04LjQtOC40LTguM2MtNC42LDAtOC4zLDMuOC04LjMsOC40YzAsNC42LDMuOCw4LjQsOC40LDguMwoJQzQ0LjQsMTM5LjYsNDguMSwxMzUuOCw0OC4xLDEzMS4yeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDYuNywxMTMuNmMwLTUuNS00LjUtOS45LTEwLTkuOWMtNS41LDAtOS45LDQuNS05LjksMTBjMCw1LjUsNC41LDkuOSwxMCw5LjkKCUM0Mi40LDEyMy42LDQ2LjgsMTE5LjEsNDYuNywxMTMuNnoiLz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTQwLjgsMTUzLjFjLTEuNS02LjUsMi42LTEyLjksOS4xLTE0LjRjNi41LTEuNSwxMi45LDIuNiwxNC40LDkuMWMxLjUsNi41LTIuNiwxMi45LTkuMSwxNC40CglDNDguNywxNjMuNiw0Mi4zLDE1OS42LDQwLjgsMTUzLjF6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xOC41LDE1Mi40Yy0xLjYtNy4yLDIuOS0xNC40LDEwLjEtMTZjNy4yLTEuNiwxNC40LDIuOSwxNiwxMC4xYzEuNiw3LjItMi45LDE0LjQtMTAuMSwxNgoJQzI3LjMsMTY0LjEsMjAuMSwxNTkuNiwxOC41LDE1Mi40eiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjk0LDEyOS41YzUuMiwwLDkuMy00LjIsOS4zLTkuNGMwLTUuMi00LjItOS40LTkuMy05LjRjLTUuMiwwLTkuNCw0LjItOS40LDkuNAoJQzI4NC42LDEyNS4zLDI4OC44LDEyOS41LDI5NCwxMjkuNXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3My41LDEwNC43YzAtNi4xLDUtMTEsMTEuMS0xMWM2LjEsMCwxMSw1LDExLDExLjFjLTAuMSw2LjEtNSwxMS0xMS4xLDExCglDMTc4LjMsMTE1LjgsMTczLjQsMTEwLjgsMTczLjUsMTA0Ljd6Ii8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNTEuNywxNTQuNWMwLTYuOCw1LjUtMTIuNCwxMi40LTEyLjRjNi44LDAsMTIuNCw1LjUsMTIuNCwxMi40YzAsNi44LTUuNSwxMi40LTEyLjQsMTIuNAoJQzE1Ny4yLDE2Ni45LDE1MS43LDE2MS4zLDE1MS43LDE1NC41eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTY3LjMsMTIxLjNjMC0zLjksMy4xLTcsNy03YzMuOSwwLDcsMy4xLDcsN2MwLDMuOS0zLjEsNy03LDdDMTcwLjQsMTI4LjMsMTY3LjMsMTI1LjEsMTY3LjMsMTIxLjN6Ii8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNjMuNywxMDUuMWMwLDMuMSwyLjUsNS42LDUuNiw1LjZjMy4xLDAsNS42LTIuNSw1LjYtNS42YzAtMy4xLTIuNS01LjYtNS42LTUuNgoJQzE2Ni4yLDk5LjUsMTYzLjcsMTAyLDE2My43LDEwNS4xeiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTE0LjYsMTIyLjVjMC00LjUsMy43LTguMiw4LjItOC4yYzQuNiwwLDguMiwzLjcsOC4yLDguMmMwLDQuNS0zLjcsOC4yLTguMiw4LjIKCUMxMTguMywxMzAuNywxMTQuNiwxMjcsMTE0LjYsMTIyLjV6Ii8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMDEuNiwxNDQuN2MwLTQuNSwzLjYtOC4xLDguMS04LjFjNC41LDAsOC4xLDMuNiw4LjEsOC4xYzAsNC41LTMuNiw4LjEtOC4xLDguMQoJQzEwNS4yLDE1Mi44LDEwMS42LDE0OS4yLDEwMS42LDE0NC43eiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNzMuMywxMDcuMmMwLTQuNSwzLjctOC4zLDguMy04LjNjNC41LDAsOC4yLDMuNyw4LjIsOC4zYzAsNC41LTMuNyw4LjItOC4yLDguMgoJQzc3LDExNS40LDczLjMsMTExLjcsNzMuMywxMDcuMnoiLz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTY0LDExNS4zYzAtNS45LDQuOC0xMC43LDEwLjctMTAuN2M1LjksMCwxMC43LDQuOCwxMC43LDEwLjdjMCw1LjktNC44LDEwLjctMTAuNywxMC43CglDNjguOCwxMjYsNjQsMTIxLjIsNjQsMTE1LjN6Ii8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjQuMiwxNDIuOGMwLTYuNiw1LjMtMTEuOSwxMS45LTExLjljNi42LDAsMTEuOSw1LjMsMTEuOSwxMS45YzAsNi42LTUuMywxMS45LTExLjksMTEuOQoJQzEyOS41LDE1NC43LDEyNC4yLDE0OS4zLDEyNC4yLDE0Mi44eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQ2LjMsMTEyYzAtNyw1LjctMTIuNywxMi43LTEyLjdjNywwLDEyLjcsNS43LDEyLjcsMTIuN2MwLDctNS43LDEyLjctMTIuNywxMi43CglDMTUyLDEyNC43LDE0Ni4zLDExOSwxNDYuMywxMTJ6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMzguOCwxMTUuNGMtOS41LDAtMTcuMy03LjctMTcuMy0xNy4zYzAtOS41LDcuNy0xNy4zLDE3LjMtMTcuM2M5LjUsMCwxNy4zLDcuNywxNy4zLDE3LjMKCUMyNTYuMSwxMDcuNywyNDguMywxMTUuNCwyMzguOCwxMTUuNHoiLz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTI4NS40LDc1LjFjLTMuNCwwLTYuMi0yLjgtNi4yLTYuMmMwLTMuNCwyLjgtNi4yLDYuMi02LjJjMy40LDAsNi4yLDIuOCw2LjIsNi4yCglDMjkxLjcsNzIuMywyODguOSw3NS4xLDI4NS40LDc1LjF6Ii8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNjYsMTQ2LjJjLTQuOCwwLTguNy0zLjktOC43LTguN2MwLTQuOCwzLjktOC43LDguNy04LjdjNC44LDAsOC43LDMuOSw4LjcsOC43CglDMjc0LjcsMTQyLjMsMjcwLjgsMTQ2LjIsMjY2LDE0Ni4yeiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjE5LjksOTBjLTQuNiwwLTguMy0zLjctOC4zLTguM2MwLTQuNiwzLjgtOC40LDguMy04LjRjNC42LDAsOC40LDMuNyw4LjQsOC40QzIyOC4yLDg2LjIsMjI0LjUsOTAsMjE5LjksOTB6IgoJLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI4MC4xLDE0NS4yYy0zLjUsMC02LjMtMi44LTYuMy02LjNjMC0zLjUsMi44LTYuNCw2LjMtNi40YzMuNSwwLDYuNCwyLjgsNi40LDYuNAoJQzI4Ni40LDE0Mi40LDI4My42LDE0NS4yLDI4MC4xLDE0NS4yeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMwLjksMTE1LjNjMC0zLjcsMy02LjcsNi43LTYuN2MzLjcsMCw2LjcsMyw2LjcsNi43YzAsMy43LTMsNi43LTYuNyw2LjdDMTMzLjksMTIyLDEzMC45LDExOSwxMzAuOSwxMTUuM3oiCgkvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjU3LjgsMTM1LjZjLTMuNywwLTYuNy0zLTYuNy02LjdjMC0zLjcsMy02LjcsNi43LTYuN2MzLjcsMCw2LjcsMyw2LjcsNi43CglDMjY0LjUsMTMyLjYsMjYxLjUsMTM1LjYsMjU3LjgsMTM1LjZ6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMTkuMSwxNDdjMC0zLjMsMi43LTYsNi02YzMuMywwLDYsMi43LDYsNmMwLDMuMy0yLjcsNi02LDZDMTIxLjgsMTUzLDExOS4xLDE1MC4zLDExOS4xLDE0N3oiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzMS42LDEyOS44YzAtMy4zLDIuNy02LDYtNmMzLjMsMCw2LDIuNyw2LDZjMCwzLjMtMi43LDYtNiw2QzEzNC4zLDEzNS45LDEzMS42LDEzMy4yLDEzMS42LDEyOS44eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTE0LjYsMTM0LjdjMC0zLjIsMi42LTUuOCw1LjgtNS44YzMuMiwwLDUuOCwyLjYsNS44LDUuOGMwLDMuMi0yLjYsNS44LTUuOCw1LjgKCUMxMTcuMiwxNDAuNSwxMTQuNiwxMzcuOSwxMTQuNiwxMzQuN3oiLz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTEyNS42LDE1Ny45YzAtMi42LDIuMS00LjcsNC43LTQuN2MyLjYsMCw0LjcsMi4xLDQuNyw0LjdjMCwyLjYtMi4xLDQuNy00LjcsNC43CglDMTI3LjcsMTYyLjYsMTI1LjYsMTYwLjUsMTI1LjYsMTU3Ljl6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMzUuOCwxMjUuMmMwLTIuMSwxLjctMy44LDMuOC0zLjhjMi4xLDAsMy44LDEuNywzLjgsMy44YzAsMi4xLTEuNywzLjgtMy44LDMuOAoJQzEzNy41LDEyOC45LDEzNS44LDEyNy4yLDEzNS44LDEyNS4yeiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjgwLjMsMTEwLjljLTYuMSwwLTExLTUtMTEtMTFjMC02LjEsNC45LTExLDExLTExYzYuMSwwLDExLDQuOSwxMSwxMUMyOTEuMywxMDUuOSwyODYuNCwxMTAuOSwyODAuMywxMTAuOXoiCgkvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjgxLjUsMTMwLjZjLTMuNywwLTYuNy0zLTYuNy02LjdjMC0zLjcsMy02LjcsNi43LTYuN2MzLjcsMCw2LjcsMyw2LjcsNi43CglDMjg4LjIsMTI3LjYsMjg1LjIsMTMwLjYsMjgxLjUsMTMwLjZ6Ii8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNTkuMyw3MS43Yy0zLjcsMC02LjctMy02LjctNi43YzAtMy43LDMtNi43LDYuNy02LjdjMy43LDAsNi43LDMsNi43LDYuN0MyNjYsNjguOCwyNjMsNzEuNywyNTkuMyw3MS43eiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNODAuMSwxMzEuNmMwLTQuNiwzLjctOC4yLDguMi04LjJjNC42LDAsOC4yLDMuNyw4LjIsOC4yYzAsNC42LTMuNyw4LjItOC4yLDguMgoJQzgzLjgsMTM5LjksODAuMSwxMzYuMiw4MC4xLDEzMS42eiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjc3LjUsNDUuNmMtMy42LDAtNi41LTIuOS02LjUtNi41YzAtMy42LDIuOS02LjUsNi41LTYuNWMzLjYsMCw2LjUsMi45LDYuNSw2LjUKCUMyODQsNDIuNywyODEuMSw0NS42LDI3Ny41LDQ1LjZ6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yOTAuMSw5OS44Yy01LjUsMC05LjktNC40LTkuOS05LjljMC01LjUsNC40LTkuOSw5LjktOS45YzUuNSwwLDkuOSw0LjQsOS45LDkuOQoJQzMwMC4xLDk1LjMsMjk1LjYsOTkuOCwyOTAuMSw5OS44eiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjkxLjYsNjYuMmMtNC44LDAtOC43LTMuOS04LjctOC43YzAtNC44LDMuOS04LjcsOC43LTguN2M0LjgsMCw4LjcsMy45LDguNyw4LjcKCUMzMDAuNCw2Mi4yLDI5Ni41LDY2LjIsMjkxLjYsNjYuMnoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2OC44LDU0Yy00LjEsMC03LjUtMy4zLTcuNS03LjRjMC00LjEsMy40LTcuNCw3LjUtNy40YzQuMSwwLDcuNCwzLjMsNy40LDcuNEMyNzYuMiw1MC43LDI3Mi45LDU0LDI2OC44LDU0eiIKCS8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNjIsMTQyLjRjMC0zLjksMy4xLTcsNy03YzMuOSwwLDcsMy4yLDcsN2MwLDMuOS0zLjEsNy03LDdDMTY1LjIsMTQ5LjUsMTYyLDE0Ni4zLDE2MiwxNDIuNHoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2Mi45LDEyNS40YzAtNCwzLjMtNy4zLDcuMy03LjJjNCwwLDcuMywzLjMsNy4zLDcuM2MwLDQtMy4zLDcuMy03LjMsNy4yCglDMjY2LjEsMTMyLjcsMjYyLjksMTI5LjUsMjYyLjksMTI1LjR6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xOTMuOSwxMDcuOGMwLTMuNSwyLjktNi4zLDYuNC02LjNjMy41LDAsNi4zLDIuOSw2LjMsNi40YzAsMy41LTIuOSw2LjMtNi40LDYuMwoJQzE5Ni43LDExNC4yLDE5My45LDExMS4zLDE5My45LDEwNy44eiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjU1LjMsMTEyLjdjMC0zLjcsMy02LjcsNi43LTYuNmMzLjcsMCw2LjcsMyw2LjYsNi43YzAsMy43LTMsNi43LTYuNyw2LjYKCUMyNTguMiwxMTkuNCwyNTUuMywxMTYuNCwyNTUuMywxMTIuN3oiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI1NS4xLDgwLjZjMC01LjEsNC4yLTkuMiw5LjMtOS4yYzUuMSwwLDkuMiw0LjIsOS4xLDkuM2MwLDUuMS00LjIsOS4yLTkuMyw5LjIKCUMyNTkuMSw4OS44LDI1NSw4NS43LDI1NS4xLDgwLjZ6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xODkuMSw5OC43YzAtMi45LDIuMy01LjEsNS4yLTUuMWMyLjgsMCw1LjEsMi4zLDUuMSw1LjJjMCwyLjgtMi4zLDUuMS01LjIsNS4xCglDMTkxLjMsMTAzLjgsMTg5LDEwMS41LDE4OS4xLDk4Ljd6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0yMDEuNSwxMDQuN2MwLTQuNiwzLjgtOC40LDguNC04LjNjNC42LDAsOC4zLDMuOCw4LjMsOC40YzAsNC42LTMuOCw4LjQtOC40LDguMwoJQzIwNS4yLDExMy4xLDIwMS40LDEwOS4zLDIwMS41LDEwNC43eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTIwLjMsMTA1YzAtNS41LDQuNS05LjksMTAtOS45YzUuNSwwLDkuOSw0LjUsOS45LDEwYzAsNS41LTQuNSw5LjktMTAsOS45QzEyNC43LDExNSwxMjAuMywxMTAuNSwxMjAuMywxMDV6IgoJLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEzNCwxNTYuNmMwLTQuNSwzLjctOC4yLDguMi04LjJjNC41LDAsOC4yLDMuNyw4LjIsOC4yYzAsNC42LTMuNyw4LjMtOC4yLDguMwoJQzEzNy43LDE2NC44LDEzNCwxNjEuMiwxMzQsMTU2LjZ6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05Mi4xLDEyNC42YzAtNS41LDQuNS05LjksOS45LTkuOWM1LjUsMCw5LjksNC40LDkuOSw5LjljMCw1LjUtNC40LDkuOS05LjksOS45CglDOTYuNiwxMzQuNSw5Mi4xLDEzMC4xLDkyLjEsMTI0LjZ6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03NS42LDEyMC4zYzAtNS41LDQuNC05LjksOS45LTkuOWM1LjUsMCw5LjksNC40LDkuOSw5LjljMCw1LjUtNC40LDkuOS05LjksOS45CglDODAsMTMwLjIsNzUuNiwxMjUuOCw3NS42LDEyMC4zeiIvPgo8cGF0aCBjbGFzcz0ic3QzIiBkPSJNODkuNSwxMzljMC0zLjcsMy02LjcsNi43LTYuN2MzLjcsMCw2LjcsMyw2LjcsNi43YzAsMy43LTMsNi43LTYuNyw2LjdDOTIuNSwxNDUuNiw4OS41LDE0Mi42LDg5LjUsMTM5eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTA1LjksMTM1LjJjMC0zLjEsMi41LTUuNiw1LjYtNS42YzMuMSwwLDUuNiwyLjUsNS42LDUuNmMwLDMuMS0yLjUsNS42LTUuNiw1LjYKCUMxMDguNCwxNDAuOCwxMDUuOSwxMzguMywxMDUuOSwxMzUuMnoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTE0Ni4xLDEzMy41YzAtNCwzLjItNy4yLDcuMy03LjJjNCwwLDcuMiwzLjIsNy4yLDcuMmMwLDQtMy4yLDcuMi03LjIsNy4yCglDMTQ5LjMsMTQwLjgsMTQ2LjEsMTM3LjUsMTQ2LjEsMTMzLjV6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yOTUuNiwxMTRjLTMsMC01LjQtMi40LTUuNC01LjRjMC0zLDIuNC01LjQsNS40LTUuNGMzLDAsNS40LDIuNCw1LjQsNS40QzMwMS4xLDExMS42LDI5OC42LDExNCwyOTUuNiwxMTR6Ii8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNjAuMiwxMDIuN2MyLjEsMCwzLjgtMS43LDMuOC0zLjhjMC0yLjEtMS43LTMuOC0zLjgtMy44Yy0yLjEsMC0zLjgsMS43LTMuOCwzLjgKCUMyNTYuNCwxMDEsMjU4LjIsMTAyLjcsMjYwLjIsMTAyLjd6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik05Mi44LDEwOC40YzAtMy43LDMtNi43LDYuNy02LjdjMy43LDAsNi43LDMsNi43LDYuN2MwLDMuNy0zLDYuNy02LjcsNi43Qzk1LjgsMTE1LjEsOTIuOCwxMTIuMSw5Mi44LDEwOC40eiIKCS8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yMzQuNSw0OC43YzAsNS4yLDQuMiw5LjMsOS40LDkuM2M1LjIsMCw5LjQtNC4yLDkuNC05LjNjMC01LjItNC4yLTkuNC05LjQtOS40CglDMjM4LjcsMzkuMywyMzQuNSw0My41LDIzNC41LDQ4Ljd6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xOTEuNCw4NS44YzAtNS45LDQuOC0xMC43LDEwLjctMTAuN2M1LjksMCwxMC43LDQuOCwxMC43LDEwLjdjMCw1LjktNC44LDEwLjctMTAuNywxMC43CglDMTk2LjIsOTYuNSwxOTEuNCw5MS43LDE5MS40LDg1Ljh6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMjUuMiw2Mi42YzAtMi45LDIuMy01LjIsNS4yLTUuMmMyLjksMCw1LjIsMi4zLDUuMiw1LjJjMCwyLjktMi4zLDUuMi01LjIsNS4yCglDMjI3LjUsNjcuOCwyMjUuMiw2NS41LDIyNS4yLDYyLjZ6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNjguMyw5My41YzAtMy43LDMtNi43LDYuNy02LjdjMy43LDAsNi43LDMsNi43LDYuN2MwLDMuNy0zLDYuNy02LjcsNi43QzE3MS4zLDEwMC4yLDE2OC4zLDk3LjIsMTY4LjMsOTMuNXoiCgkvPgo8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMjA1LjksNjUuMWMwLTQsMy4yLTcuMiw3LjItNy4yYzQsMCw3LjIsMy4zLDcuMiw3LjJjMCw0LTMuMiw3LjItNy4yLDcuMkMyMDkuMSw3Mi4zLDIwNS45LDY5LjEsMjA1LjksNjUuMXoiCgkvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUxLjksNTYuN2MwLTMsMi40LTUuNCw1LjQtNS40YzMsMCw1LjQsMi40LDUuNCw1LjRjMCwzLTIuNCw1LjQtNS40LDUuNEMyNTQuNCw2Mi4yLDI1MS45LDU5LjcsMjUxLjksNTYuN3oiCgkvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjA3LjksMTczYzEtNC40LTEuOC04LjctNi4yLTkuN2MtNC40LTEtOC43LDEuOC05LjcsNi4yYy0xLDQuNCwxLjgsOC44LDYuMSw5LjcKCUMyMDIuNiwxODAuMiwyMDcsMTc3LjQsMjA3LjksMTczeiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjA4LjcsMTI2LjZjMS41LTYuNS0yLjYtMTIuOS05LjEtMTQuNGMtNi41LTEuNS0xMi45LDIuNi0xNC40LDkuMWMtMS41LDYuNSwyLjYsMTIuOSw5LjEsMTQuNAoJQzIwMC44LDEzNy4xLDIwNy4yLDEzMy4xLDIwOC43LDEyNi42eiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjU0LjIsMTUxLjJjMS41LTYuNy0yLjctMTMuMy05LjQtMTQuOGMtNi43LTEuNS0xMy4zLDIuNy0xNC44LDkuM2MtMS41LDYuNywyLjcsMTMuMyw5LjQsMTQuOAoJQzI0Ni4xLDE2MiwyNTIuNywxNTcuOSwyNTQuMiwxNTEuMnoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTIzMSwxMjUuOWMxLjYtNy4yLTIuOS0xNC40LTEwLjEtMTZjLTcuMi0xLjYtMTQuNCwyLjktMTYsMTAuMWMtMS42LDcuMiwyLjksMTQuNCwxMC4xLDE2CglDMjIyLjIsMTM3LjYsMjI5LjQsMTMzLjEsMjMxLDEyNS45eiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjI3LjYsMTQxLjdjMC44LTMuNi0xLjUtNy4yLTUuMS04Yy0zLjYtMC44LTcuMiwxLjUtOCw1LjFjLTAuOCwzLjYsMS40LDcuMiw1LDgKCUMyMjMuMiwxNDcuNiwyMjYuOCwxNDUuMywyMjcuNiwxNDEuN3oiLz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTI1Ny44LDE0Ny43YzAuOC0zLjYtMS41LTcuMi01LThjLTMuNi0wLjgtNy4yLDEuNS04LDUuMWMtMC44LDMuNiwxLjUsNy4yLDUuMSw4CglDMjUzLjQsMTUzLjUsMjU3LDE1MS4zLDI1Ny44LDE0Ny43eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTg4LjIsMTM2LjJjMC44LTMuNi0xLjUtNy4yLTUuMS04Yy0zLjYtMC44LTcuMiwxLjUtOCw1LjFjLTAuOCwzLjYsMS40LDcuMiw1LjEsOAoJQzE4My44LDE0MiwxODcuNCwxMzkuOCwxODguMiwxMzYuMnoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5MC40LDE2NGMwLjctMy4yLTEuMy02LjUtNC42LTcuMmMtMy4yLTAuNy02LjUsMS4zLTcuMiw0LjZjLTAuNywzLjIsMS4zLDYuNSw0LjYsNy4yCglDMTg2LjQsMTY5LjMsMTg5LjYsMTY3LjMsMTkwLjQsMTY0eiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjQzLjcsMTMyLjFjMC44LTMuNi0xLjUtNy4yLTUuMS04LjFjLTMuNi0wLjgtNy4yLDEuNS04LDUuMWMtMC44LDMuNiwxLjUsNy4yLDUuMSw4CglDMjM5LjMsMTM4LDI0Mi45LDEzNS43LDI0My43LDEzMi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjM1LjUsMTYzLjVjMS40LTYuMS0yLjUtMTIuMS04LjUtMTMuNWMtNi4xLTEuNC0xMi4yLDIuNS0xMy41LDguNWMtMS40LDYuMSwyLjUsMTIuMSw4LjYsMTMuNQoJQzIyOCwxNzMuNSwyMzQuMSwxNjkuNiwyMzUuNSwxNjMuNXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwMC4xLDE0OS40YzEtNC41LTEuOC04LjktNi4yLTkuOWMtNC40LTEtOC45LDEuOC05LjksNi4zYy0xLDQuNCwxLjgsOC44LDYuMiw5LjgKCUMxOTQuNywxNTYuNiwxOTkuMSwxNTMuOCwyMDAuMSwxNDkuNHoiLz4KPHBhdGggY2xhc3M9InN0NCIgZD0iTTIxOC4yLDE0Ny4xYzEtNC42LTEuOC05LjItNi41LTEwLjJjLTQuNi0xLTkuMiwxLjgtMTAuMiw2LjVjLTEsNC42LDEuOSw5LjIsNi41LDEwLjIKCUMyMTIuNSwxNTQuNiwyMTcuMSwxNTEuNywyMTguMiwxNDcuMXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIxNS42LDE3MS44YzAuNy0zLjEtMS4zLTYuMy00LjQtN2MtMy4xLTAuNy02LjMsMS4zLTcsNC40Yy0wLjcsMy4xLDEuMyw2LjMsNC40LDcKCUMyMTEuOCwxNzYuOSwyMTQuOSwxNzUsMjE1LjYsMTcxLjh6Ii8+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xOTYuMiwxNTIuOGMxLjItNS4yLTIuMS0xMC40LTcuMy0xMS42Yy01LjItMS4yLTEwLjQsMi4xLTExLjYsNy40Yy0xLjIsNS4yLDIuMSwxMC41LDcuNCwxMS42CglDMTg5LjgsMTYxLjMsMTk1LDE1OCwxOTYuMiwxNTIuOHoiLz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTI5NS44LDc4LjNjLTIuMSwwLTMuOC0xLjctMy44LTMuOGMwLTIuMSwxLjctMy44LDMuOC0zLjhjMi4xLDAsMy44LDEuNywzLjgsMy44CglDMjk5LjYsNzYuNiwyOTcuOSw3OC4zLDI5NS44LDc4LjN6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNzEuNyw3NS45Yy0yLjksMC01LjItMi4zLTUuMi01LjJjMC0yLjksMi4zLTUuMiw1LjItNS4yYzIuOSwwLDUuMiwyLjMsNS4yLDUuMgoJQzI3Ni45LDczLjUsMjc0LjYsNzUuOSwyNzEuNyw3NS45eiIvPgo8cGF0aCBjbGFzcz0ic3Q0IiBkPSJNMjkyLDg4LjNjLTMuNywwLTYuNy0zLTYuNy02LjdjMC0zLjcsMy02LjcsNi43LTYuN2MzLjcsMCw2LjcsMyw2LjcsNi43QzI5OC43LDg1LjMsMjk1LjcsODguMywyOTIsODguM3oiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzNS40LDcxLjRjMC0zLjcsMy02LjcsNi43LTYuN2MzLjcsMCw2LjcsMyw2LjYsNi43YzAsMy43LTMsNi43LTYuNyw2LjZDMjM4LjQsNzguMSwyMzUuNCw3NS4xLDIzNS40LDcxLjR6IgoJLz4KPHBhdGggY2xhc3M9InN0MiIgZD0iTTI1My42LDEwLjZjMCwyLjEtMS43LDMuOC0zLjgsMy44Yy0yLjEsMC0zLjgtMS43LTMuOC0zLjhjMC0yLjEsMS43LTMuOCwzLjgtMy44CglDMjUxLjksNi45LDI1My42LDguNSwyNTMuNiwxMC42eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjg3LjksMzkuMWMwLTIuMSwxLjctMy44LDMuOC0zLjhjMi4xLDAsMy44LDEuNywzLjgsMy44YzAsMi4xLTEuNywzLjgtMy44LDMuOAoJQzI4OS42LDQyLjksMjg3LjksNDEuMiwyODcuOSwzOS4xeiIvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjY4LjYsNjIuMWMwLTIuOSwyLjMtNS4xLDUuMi01LjFjMi44LDAsNS4xLDIuMyw1LjEsNS4yYzAsMi44LTIuMyw1LjEtNS4yLDUuMQoJQzI3MC44LDY3LjMsMjY4LjUsNjUsMjY4LjYsNjIuMXoiLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTE4LjgsMTI1LjJjMC0yLjktMi4zLTUuMS01LjItNS4xYy0yLjgsMC01LjEsMi4zLTUuMSw1LjJjMCwyLjgsMi4zLDUuMSw1LjIsNS4xCglDMTYuNSwxMzAuMywxOC44LDEyOCwxOC44LDEyNS4yeiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTUuNywxMjAuNmMwLDQuMywzLjUsNy44LDcuOCw3LjhjNC4zLDAsNy44LTMuNSw3LjgtNy44YzAtNC4zLTMuNS03LjgtNy44LTcuOAoJQzE5LjIsMTEyLjgsMTUuNywxMTYuMywxNS43LDEyMC42eiIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMjY1LjMsMjEuMWMwLDMuNC0yLjgsNi4yLTYuMiw2LjJjLTMuNCwwLTYuMi0yLjgtNi4yLTYuMmMwLTMuNCwyLjgtNi4yLDYuMi02LjIKCUMyNjIuNSwxNC45LDI2NS4zLDE3LjcsMjY1LjMsMjEuMXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI2Mi41LDQyLjJjLTMuNi0zLjYtMy42LTkuNCwwLjEtMTNjMy42LTMuNiw5LjQtMy42LDEzLDAuMWMzLjYsMy42LDMuNiw5LjQtMC4xLDEzCglDMjcxLjksNDUuOCwyNjYuMSw0NS44LDI2Mi41LDQyLjJ6Ii8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNjYuMSw4LjNjMCwyLjEtMS43LDMuOC0zLjgsMy44Yy0yLjEsMC0zLjgtMS43LTMuOC0zLjhjMC0yLjEsMS43LTMuOCwzLjgtMy44QzI2NC40LDQuNSwyNjYuMSw2LjIsMjY2LjEsOC4zCgl6Ii8+CjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0yNzYuMSwxMi4xYzAsMy43LTMsNi43LTYuNyw2LjdjLTMuNywwLTYuNy0zLTYuNy02LjdjMC0zLjcsMy02LjcsNi43LTYuN0MyNzMuMSw1LjQsMjc2LjEsOC40LDI3Ni4xLDEyLjF6Ii8+CjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNDMuNyw3LjNjLTEuNSwxLjUtMy45LDEuNS01LjMsMGMtMS41LTEuNS0xLjUtMy45LDAtNS4zYzEuNS0xLjUsMy44LTEuNSw1LjMsMAoJQzI0NS4yLDMuNCwyNDUuMiw1LjgsMjQzLjcsNy4zeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjMzLDE1LjdjLTIuMSwwLTMuOC0xLjctMy44LTMuOGMwLTIuMSwxLjctMy44LDMuOC0zLjhjMi4xLDAsMy44LDEuNywzLjgsMy44QzIzNi44LDE0LDIzNS4xLDE1LjcsMjMzLDE1Ljd6IgoJLz4KPHBhdGggY2xhc3M9InN0MSIgZD0iTTI0OS45LDM1LjVjLTIuOSwwLTUuMS0yLjMtNS4xLTUuMmMwLTIuOCwyLjMtNS4xLDUuMi01LjFjMi44LDAsNS4xLDIuMyw1LjEsNS4yCglDMjU1LDMzLjIsMjUyLjcsMzUuNSwyNDkuOSwzNS41eiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTkxLjcsNjdjMC0yLjksMi4zLTUuMiw1LjItNS4yYzIuOSwwLDUuMiwyLjMsNS4yLDUuMmMwLDIuOS0yLjMsNS4yLTUuMiw1LjJDMTk0LDcyLjIsMTkxLjcsNjkuOSwxOTEuNyw2N3oiCgkvPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjE4LDQ4LjljMC0yLjksMi4zLTUuMSw1LjItNS4xYzIuOCwwLDUuMSwyLjMsNS4xLDUuMmMwLDIuOC0yLjMsNS4xLTUuMiw1LjFDMjIwLjMsNTQsMjE4LDUxLjcsMjE4LDQ4Ljl6Ii8+Cjwvc3ZnPgo=') no-repeat right bottom;
  background-size: 225px;
  h3 { margin-bottom: 0; }
`;
/* eslint-enable */

const FeedLabel = styled.h3`
  background-color: ${COLORS.grayMedium};
  padding: 8px 10px 6px;
  margin: 0;
`;
const FeedItem = styled.div`
  border: 2px solid ${COLORS.grayLight};
  border-radius: ${UTILITIES.borderRadius};
  padding: 22px 19px 10px;
  margin-bottom: 20px;
  position: relative;
  span {
    position: absolute;
    top: -15px;
    left: -13px;
  }
  h4 {
    font-size: 2rem;                                           
    color: ${COLORS.primary};
    text-align: center;
  }
  h4, p {
    margin: 0;
  }
`;
const DonationInfo = styled.div`
  h3, h4 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
  }
`;
const CauseLabel = styled.p`
  font-size: ${TYPOGRAPHY.fontSizeSmall};
  color: ${COLORS.grayDark};
  text-transform: uppercase;
  margin: 0 0 -${UTILITIES.spacingUnit}px 0;
`;
const ImgItem = styled.li`
  background-color: ${COLORS.grayMedium};
  border-radius: ${UTILITIES.borderRadius};
  border: 1px solid rgba(0,0,0,.1);
  box-shadow: 2px 3px 3px 0 rgba(0,0,0,.1);
  margin: 1%;
  width: 31%;
  list-style: none;
  cursor: pointer;
`;

const Fundraising = (props: FundraisingProps) => {
  const [height, getHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    getHeight(ref.current.clientHeight);
  });

  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
    page: props.theme.page,
  };
  const StyledBox = styled(Box)`
    ${ItemProps => ItemProps.name === 'HeaderImage' && css`
      border: none;
      padding: 0;
      background-color: transparent;
    `}
    ${ItemProps => ItemProps.name === 'PageInfo' && css` 
      color: ${COLORS.white};
      a, h2 { color: ${COLORS.white}; }
      span + span { margin-left: ${UTILITIES.spacingUnit}px; }
    `}
    ${ItemProps => ItemProps.name === 'CauseInfo' && css`
      ${CauseInfoBG};
      padding-bottom: ${UTILITIES.spacingUnit * 14}px;
      padding-right: ${UTILITIES.spacingUnit * 5}px;
    `}
    @media (min-width: ${BREAKPOINT.desktop}) {
      ${ItemProps => (ItemProps.name === 'PageInfo' || ItemProps.name === 'Story' ||
        ItemProps.name === 'CauseInfo' || ItemProps.name === 'PhotoUpload') && css`
        width: 56%;
        align-self: flex-end;
      `}
      ${ItemProps => (ItemProps.name === 'FundraiserInfo' || ItemProps.name === 'LatestUpdates') && css`
        width: 41%;
      `}
      ${ItemProps => ItemProps.name === 'PageInfo' && css` order: 3; `}
      ${ItemProps => ItemProps.name === 'FundraiserInfo' && css` order: 1; `}
      ${ItemProps => ItemProps.name === 'Story' && css` order: 4; `}
      ${ItemProps => ItemProps.name === 'LatestUpdates' && css` order: 2; `}
      ${ItemProps => ItemProps.name === 'CauseInfo' && css` order: 5; `}
      ${ItemProps => ItemProps.name === 'PhotoUpload' && css` order: 6; `}
    }
  `;
  const StatusBar = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: ${UTILITIES.spacingUnit}px ${UTILITIES.spacingUnit * 2}px;
  `;
  const StyledButton = styled(Button)`
    min-width: 140px;
  `;
  const ImgList = styled(Flex)`
    padding: 0;
    margin: 0;
  `;
  const FeedNav = styled(Flex)`
    justify-content: flex-end;
  `;
  const Tab = styled(Flex)`
    text-align: center;
    cursor: pointer;
    margin: ${UTILITIES.spacingUnit * 2}px 0 ${UTILITIES.spacingUnit * 4}px;
    span { margin: 0 auto; }
    p { margin-top: ${UTILITIES.spacingUnit * 2}px; margin-bottom: 0; }
    div {
      width: 50%;
      min-width: 80px;
      padding: ${UTILITIES.spacingUnit * 2}px 2px;
      border-bottom: 3px solid transparent;
      text-align: center;
      margin: 0 2px;
     }
    div:nth-child(1) { border-bottom: 3px solid ${COLORS.primary}; }
    div:nth-child(2) { border-bottom: 3px solid ${COLORS.tertiary}; }
  `;
  const PopOverContent = (
    <React.Fragment>
      <Button icon="facebookSquare" appearance="link" css="color: #4267b2" size="large" />
      <Button icon="twitterSquare" appearance="link" css="color: #1da1f2" size="large" />
      <Button icon="whatsappSquare" appearance="link" css="color: #4dc247" size="large" />
      <Button icon="messengerSquare" appearance="link" css="color: #288ef8" size="large" />
      <Button icon="linkedin" appearance="link" css="color: #0077b5" size="large" />
      <Button icon="envelopeSquare" appearance="link" css="color: #00b6ed" size="large" />
    </React.Fragment>
  );
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <StatusBar name="StatusBar" bgColor="primary">
          <PopOver position="right" overlay={PopOverContent}>
            <StyledButton icon="share" appearance="secondary">Share page</StyledButton>
          </PopOver>
          <StyledButton appearance="primary">Donate</StyledButton>
        </StatusBar>
        <div>
          <img
            src="https://cruk-fws-images-prod.s3.eu-west-1.amazonaws.com/bf36dd21-3c5d-4023-a590-c31faf509578_1552409036949.jpg"
            width="100%"
            alt="header cover"
          />
        </div>
        <Content getHeight={parseFloat(height) + 750}>
          <StyledBox name="PageInfo" bgColor="primary">
            <Heading h2>
              <span role="img" aria-label="Triathlon">🏊 🚴 🏃</span>
              to raise as much <span role="img" aria-label="money">💰</span> as I can to beat 🥊 cancer
            </Heading>
            <div>
              <span><Icon name="eventName" color={COLORS.white} size="14px" /></span>
              <span>2018 Outlaw Triathlon</span>
            </div>
            <div>
              <span><Icon name="calendar" color={COLORS.white} size="14px" /></span>
              <span>13 Jun 2019 - 29 Jul 2019</span>
            </div>
            <div>
              <span><Icon name="team" color={COLORS.white} size="21px" /></span>
              <span>A member of <a href="/team">Pete&apos;s team</a></span>
            </div>
          </StyledBox>
          <StyledBox name="FundraiserInfo">
            <Heading h1>
              Pete&apos;s Outlaw
              <span role="img" aria-label="Triathlon"> 🏊 🚴 🏃</span>
              Triathlon
            </Heading>
            <UserBlock
              name="Sam Smith"
              avatarUrl="https://cruk-fws-images-prod.s3.eu-west-1.amazonaws.com/24723281-286a-4759-a6cb-375a15cf31e1_1560868437339.jpg"
            />
            <Totaliser total="100" target="500" giftAid="20" />
            <Button appearance="primary" full>Donate</Button>
            <PopOver position="bottom" overlay={PopOverContent} css="display: block;">
              <Button icon="share" appearance="secondary" full>Share page</Button>
            </PopOver>
            <p>Donating through this page is simple, fast and totally secure. Your details are
              safe with Cancer Research UK
            </p>
          </StyledBox>
          <StyledBox name="Story">
            <Heading h3>Story</Heading>
            <p>
              .Cancer survival rates have doubled over the past 40 years. Consistent progress is being made but
              improvements to technology and ground-breaking work offer new opportunities to find different ways
              to prevent, diagnose and treat cancer and improve survival rates even further. Help Cancer
              Research UK improve results even faster.
            </p>
          </StyledBox>
          <StyledBox name="LatestUpdates">
            <div ref={ref}>
              <div>
                <Heading h2>Latest updates</Heading>
                <FeedLabel h3>Filter by</FeedLabel>
                <Tab>
                  <Box>
                    <Badge><Icon name="poundSign" /></Badge>
                    <p>Donations (1)</p>
                  </Box>
                  <Box>
                    <Badge bgColor="tertiary"><Icon name="comment" /></Badge>
                    <p>Posts (9)</p>
                  </Box>
                </Tab>
                <div>
                  <FeedItem>
                    <Badge><Icon name="poundSign" size="23px" /></Badge>
                    <UserBlock
                      name="Sam Smith"
                      size="large"
                      extra={<React.Fragment><Icon name="clock" /> 2 years ago</React.Fragment>}
                      avatarUrl="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/modules/cruk_online_fundraising/images/hero_desktop.jpg"
                    />
                    <Heading h4>£20.00</Heading>
                    <FeedNav>
                      <PopOver position="bottom" overlay={PopOverContent}>
                        <Button icon="share" appearance="link" css={`color: ${COLORS.secondary}`}>Share</Button>
                      </PopOver>
                    </FeedNav>
                  </FeedItem>
                  <FeedItem>
                    <Badge bgColor="tertiary"><Icon name="comment" size="23px" /></Badge>
                    <UserBlock
                      name="Simon Simon"
                      size="large"
                      extra={<React.Fragment><Icon name="clock" /> a year ago</React.Fragment>}
                      avatarUrl="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/modules/cruk_online_fundraising/images/hero_desktop.jpg"
                    />
                    <Heading h4>£2.00</Heading>
                    <p>Another £2 to my second favourite colleague!</p>
                    <FeedNav>
                      <PopOver position="bottom" overlay={PopOverContent}>
                        <Button icon="share" appearance="link" css={`color: ${COLORS.secondary}`}>Share</Button>
                      </PopOver>
                    </FeedNav>
                  </FeedItem>
                  <Button icon="chevronRight" appearance="link" css={`color: ${COLORS.secondary}`} size="small">Load more</Button>
                </div>
              </div>
              <DonationInfo name="DonationInfo">
                <Heading h3><span>Total raised</span><span>£20.00</span></Heading>
                <Heading h4><span>Online</span><span>£20.00</span></Heading>
                <Heading h4><span>Offline</span><span>£20.00</span></Heading>
                <p>With Cancer Research UK Giving Pages more of the money raised goes towards beating cancer sooner. Aside from the credit and debit card fees, every penny donated goes to Cancer Research UK.
                </p>
                <p>All donations made to this page will automatically be transferred to Cancer Research UK.</p>
              </DonationInfo>
            </div>
          </StyledBox>
          <StyledBox name="CauseInfo">
            <UserBlock
              name=" "
              size="large"
              extra={
                <React.Fragment>
                  <CauseLabel>Cause</CauseLabel><Heading h3>All Cancer Types</Heading>
                </React.Fragment>
              }
              avatarUrl="https://fundraise.cancerresearchuk.org/profiles/cruk_fundraising/modules/cruk_online_fundraising/images/hero_desktop.jpg"
            />
            <p>
              Cancer survival rates have doubled over the past 40 years. Consistent progress is being made but
              improvements to technology and ground-breaking work offer new opportunities to find different ways
              to prevent, diagnose and treat cancer and improve survival rates even further. Help Cancer Research
              UK improve results even faster.
            </p>
          </StyledBox>
          <StyledBox name="PhotoUpload">
            <Heading h3>My Photos</Heading>
            <ImgList>
              <ImgItem>
                <img
                  alt="😆😅😂"
                  src="https://cruk-fws-images-prod.s3.eu-west-1.amazonaws.com/523042cb-b3bf-4f3d-9189-a7012d3eaf4c_1551269236872.jpg"
                  title="😆😅😂"
                />
              </ImgItem>
              <ImgItem>
                <img
                  alt="😆😅😂"
                  src="https://cruk-fws-images-prod.s3.eu-west-1.amazonaws.com/523042cb-b3bf-4f3d-9189-a7012d3eaf4c_1551269236872.jpg"
                  title="😆😅😂"
                />
              </ImgItem>
            </ImgList>
          </StyledBox>
          {props.children}
        </Content>
      </PageWrapper>
    </ThemeProvider>
  );
};

export default withTheme(Fundraising);
