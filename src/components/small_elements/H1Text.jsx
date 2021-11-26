import styled from 'styled-components/native'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../../constants'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const H1Text = styled.Text`
  margin-top: ${height * HightUnit * 120}px;
  margin-bottom: ${height * HightUnit * 20}px;
  font-size: ${height * HightUnit * 50}px;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
`

export { H1Text }
