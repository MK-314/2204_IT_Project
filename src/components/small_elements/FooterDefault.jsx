import styled from 'styled-components/native'

const FooterDefault = styled.View`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: ${props => (props.hidden ? '0%' : '100%')};
  position: absolute;
  left: 0;
  bottom: 30px;
  min-height: 100px;
  z-index: 1;
  overflow: hidden;
`
export { FooterDefault }
