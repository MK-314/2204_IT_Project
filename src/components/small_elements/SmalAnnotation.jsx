import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../../constants'
import { H1Text } from './H1Text'
const { width, height } = Dimensions.get('window')

const SmalAnnotation = styled(H1Text)`
  margin-top: ${height * HightUnit * 7}px;
  margin-bottom: ${height * HightUnit * 10}px;
  margin-right: ${width * WidthUnit * 55}px;
  font-size: ${height * HightUnit * 12}px;
  color: #774747;
`

export { SmalAnnotation }
