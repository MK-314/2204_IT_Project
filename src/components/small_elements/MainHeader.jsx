import styled from 'styled-components/native'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../../constants'
import { Dimensions } from 'react-native'
import { RowOfElements } from './RowOfElements'
const { width, height } = Dimensions.get('window')

const MainHeader = styled.Text`
  display: flex;
  font-size:  ${height * HightUnit * 35}px;
  font-style: italic;
  font-weight: bold;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
  z-index: 1;
`
const WhiteRow = styled(RowOfElements)`
  background-color: ${ConstantsRecipe.gray2};
  border-radius: 20px;
  max-width: ${width * WidthUnit * 250}px;
  position: absolute;
  bottom:  ${height * HightUnit * 40}px;
  left: ${width * WidthUnit * 10}px;
  z-index: 1;
`

export { MainHeader }
export { WhiteRow }
