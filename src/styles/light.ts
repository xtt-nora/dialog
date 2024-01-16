//默认主题
const lightBase = {
  $light1: '#FFFFFF',
  $light2: '#F7F8FA',
  $light3: ' #EBECF1',
  $light4: ' #DFE1E5',
  $light5:  '#DFE1E5',
  $light6:  '#000000',
  $light7:  '#818594',
  $re:'red'
}

const lightThemeOverrides = {
  common: {
    textColorBase: lightBase.$light6,
    color: lightBase.$re
  },
  Button: {
    textColor: lightBase.$light6
  },
}
export { lightThemeOverrides }