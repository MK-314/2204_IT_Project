// REACT:
import React, { useState } from 'react'
import { Text, Image, StyleSheet } from 'react-native'
// STYLED:
import styled from 'styled-components/native'
// SESSION STORAGE:
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ContainerDefault } from '../components/small_elements/ContainerDefault'
import { RowOfElements } from '../components/small_elements/RowOfElements'
import NavIcons from '../components/NavIcons'
import { FooterDefault } from '../components/small_elements/FooterDefault'
import { ConstantsRecipe } from '../../constants'
import { MainHeader } from '../components/small_elements/MainHeader'

const CustomRow = styled(RowOfElements)`
  margin-top: 40px;
  margin-left: 25px;
  justify-content: flex-start;
  /* background-color: aqua; */
`
const AvatarBox = styled.View`
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 30px;
`
const AvatarImg = styled.Image`
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 30px;
`
const NameText=styled(MainHeader)`
  display: flex;
  flex: 1;
  margin-left: 35px;
  flex-wrap: wrap;
`

const ProfileScreen = ({ navigation }) => {
  return (
    <ContainerDefault>
      <CustomRow>
        <AvatarBox style={styles.elementShadow}>
          <AvatarImg
            source={{
              uri:
                'https://www.baytekent.com/wp-content/uploads/2016/12/facebook-default-no-profile-pic1.jpg'
            }}
          />
        </AvatarBox>
          <NameText>Mike Mike Mike Mike </NameText>
      </CustomRow>
      <FooterDefault>
        <NavIcons
          iconName='profile'
          toScreen={screen => {
            navigation.navigate(screen)
          }}
        />
      </FooterDefault>
    </ContainerDefault>
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

export default ProfileScreen
