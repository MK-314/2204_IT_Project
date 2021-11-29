import styled from 'styled-components/native'
import { ConstantsRecipe, HightUnit, WidthUnit } from '../../../constants'
import { Dimensions } from 'react-native'
import { RowOfElements } from './RowOfElements'
const { width, height } = Dimensions.get('window')


const AvatarImg = styled.Image`
  position: absolute;
  width: ${width * WidthUnit * 140}px;
  height: ${height * HightUnit * 140}px;
  border-radius: 30px;
`

export { AvatarImg }
