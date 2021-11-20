import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window')

const FooterDefault = styled.View`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: ${props => (props.hidden ? '0%' : '100%')};
  position: absolute;
  left: 0;
  bottom: ${height * 0.0012875 * 30}px;
  min-height: ${height * 0.0012875 * 100}px;
  z-index: 1;
  overflow: hidden;
`
export { FooterDefault }
