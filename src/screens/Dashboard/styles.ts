import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { AnyStyledComponent } from "styled-components";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: flex-start;
`

export const UserWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  // cima-baixo esquerda-direita
`

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`
export const User = styled.View`
margin-left: 17px;
`
export const UserGreenting = styled.Text`
color: ${({ theme }) => theme.colors.shape};
font-size: ${RFValue(18)}px;
font-family: ${({ theme }) => theme.fonts.regular};
`
export const UserName = styled.Text`
font-size: ${RFValue(18)}px;
color: ${({ theme }) => theme.colors.shape};
font-family: ${({ theme }) => theme.fonts.bold};
`
export const Icon = styled(Feather as unknown as AnyStyledComponent)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(24)}px;
`;