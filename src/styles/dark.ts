//暗黑主题
const dark = {
  $dark1: '#1E1F22',
  $dark2: '#6F737A',
  $dark3:   '#393B40',
  $dark4:  '#43454A',
  $dark5:  '#CED0D6',
  $dark6:   '#DFE1E5',
  $dark7: ' #6F737A',
  $re: 'red'
}


const darkThemeOverrides = {
  common: {
    textColorBase: dark.$dark6
  },
  Button: {
    textColor: dark.$dark6
  },
}
export { darkThemeOverrides }