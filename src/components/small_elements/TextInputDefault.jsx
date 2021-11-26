import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../../constants'
import { RowOfElements } from './RowOfElements'
const { width, height } = Dimensions.get('window')

const TextInputSt = styled.TextInput`
  position: absolute;
  padding-left:  ${width * WidthUnit * 20}px;
  background-color: ${ConstantsRecipe.white};
  width: 100%;
  height: ${height * HightUnit * 50}px;
  border-radius: 100px;
`
const TextInputStShadow = styled(RowOfElements)`
  margin-top: ${height * HightUnit * 15}px;
  padding-left: ${width * WidthUnit * 20}px;
  width: 80%;
  height: ${height * HightUnit * 50}px;
  border-radius: 100px;
`
export { TextInputSt }
export { TextInputStShadow }
