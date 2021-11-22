import styled from 'styled-components/native'
import { ConstantsRecipe } from '../../../constants'
import { RowOfElements } from './RowOfElements'

const MainHeader = styled.Text`
  display: flex;
  font-size: 35px;
  font-style: italic;
  font-weight: bold;
  color: ${ConstantsRecipe.green};
  text-shadow: ${ConstantsRecipe.text_shadow};
  z-index: 1;
`
const WhiteRow = styled(RowOfElements)`
  background-color: ${ConstantsRecipe.gray2};
  border-radius: 20px;
  max-width: 250px;
  position: absolute;
  bottom: 40px;
  left: 10px;
  z-index: 1;
`

export { MainHeader }
export { WhiteRow }
