import styled from 'styled-components/native'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../../constants'
import { Dimensions } from 'react-native'
import { RowOfElements } from './RowOfElements'
const { width, height } = Dimensions.get('window')

const TextNumber = styled.Text`
  position: absolute;
  top: ${height * HightUnit * 20}px;
  right: ${width * WidthUnit * 170}px;
  font-size: ${height * HightUnit * 35}px;
  font-weight: bold;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
  z-index: 1;
`

export { TextNumber }
