// REACT:
import React from 'react'
import { StyleSheet } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { RowOfElements } from '../small_elements/RowOfElements'
import { HightUnit, NoPostsYet, WidthUnit } from '../../../constants'
import { AvatarBox } from '../small_elements/AvatarBox'
import { AvatarImg } from '../small_elements/AvatarImg'
// SESSION STORAGE:
//
const { width, height } = Dimensions.get('window')

const AvatarBoxCustomized = styled(AvatarBox)`
  width: ${width * WidthUnit * 300}px;
  height: ${height * HightUnit * 350}px;
  /* border-radius: 50px; */
`
const AvatarImgCustomized = styled(AvatarImg)`
  width: ${width * WidthUnit * 300}px;
  height: ${height * HightUnit * 350}px;
  /* border-radius: 50px; */
`
const NoPosts = () => {
  return (
    <RowOfElements>
      <AvatarBoxCustomized style={styles.elementShadow}>
        <AvatarImgCustomized source={{ uri: NoPostsYet }} />
      </AvatarBoxCustomized>
    </RowOfElements>
  )
}
const styles = StyleSheet.create({
  elementShadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 2
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 17
  }
})
export default NoPosts
