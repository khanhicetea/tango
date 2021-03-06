import * as React from 'react';
import * as RN from 'react-native';
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { TabBarBottom as _TabBarBottom } from 'react-navigation';

const {
  default: styled,
  withTheme,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

// FIXME: wait for this syntax to be available: styled(RN.View)<Props>`...`
const View = props => <RN.View {...props} />;

export const Circle = styled(View as React.SFC<{ mastered: boolean }>)`
  background-color: ${({ theme, mastered }) =>
    mastered ? theme.masteredColor : theme.circleBackgroundColor};
  width: 20px;
  height: 20px;
  border-radius: 20px;
`;

export const ProgressBar = styled(View as React.SFC<{ width: string }>)`
  height: 20;
  width: ${props => props.width};
  background-color: ${props => props.theme.masteredColor};
`;

export const CardEditTitle = styled(RN.Text)`
  font-weight: bold;
  font-size: 20;
  color: ${props => props.theme.mainColor};
`;

export const CardEditInputView = styled(RN.View)`
  background-color: ${props => props.theme.bgTextInput};
  color: ${props => props.theme.mainColor};
  margin-top: 5;
  margin-bottom: 10;
  height: 100px;
`;

export const BodyText = styled(RN.Text)`
  color: ${({ theme }) => theme.mainColor};
  font-size: 16px;
  padding: 0 5px;
`;

export const MainText = styled(RN.Text)`
  color: ${({ theme }) => theme.titleColor};
  font-size: 18px;
`;

export const Container = styled(RN.View)`
  flex: 1;
  background-color: ${({ theme }) => theme.mainBackgroundColor};
  padding-top: 20; /* space for ios status bar */
  padding-left: 10px;
  padding-right: 10px;
`;

export const DeckCard = styled(RN.View)`
  padding: 15px;
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  border-style: solid;
  border-color: ${({ theme }) => theme.cardBorderColor};
  border-width: 1px;
`;

export const DeckTitle = styled(RN.Text)`
  color: ${({ theme }) => theme.mainColor};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const CardCategory = styled(RN.Text)`
  border-width: 1px;
  border-color: ${({ theme }) => theme.titleColor};
  color: ${({ theme }) => theme.mainColor};
  font-weight: bold;
  font-size: 16px;
  border-radius: 10px;
  padding: 5px;
`;

export const SettingsItem = styled(RN.View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  padding: 10px;
  border-bottom-width: 1px;
  border-style: solid;
`;

export const SettingsText = styled(RN.Text)`
  color: ${({ theme }) => theme.mainColor};
  font-size: 16;
`;

export const CardCard = styled(RN.View)`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.cardBackgroundColor};
  border-style: solid;
  border-bottom-width: 1px;
`;

export const CardTitle = styled(RN.Text)`
  color: ${({ theme }) => theme.mainColor};
  font-size: 13px;
`;

export const SideControl = styled(RN.TouchableOpacity)`
  top: 0;
  width: 100;
  z-index: 1;
  position: absolute;
  background-color: rgba(0, 0, 0, 0);
`;

export const CardViewDetail = styled(RN.Text)`
  font-size: 25;
  color: ${({ theme }) => theme.mainColor};
  text-align: center;
`;

// If you use flex:1, height will be out of screen ...
export const CardContainer = styled(RN.View)`
  background-color: ${({ theme }) => theme.cardBackgroundColor};
`;

export const TabBarBottom = styled(_TabBarBottom)`
  background-color: ${({ theme }) => theme.cardBackgroundColor};
`;

export const Button = withTheme<RN.ButtonProperties & { theme: Theme }>(
  ({ theme, ...rest }) => <RN.Button {...rest} color={theme.mainColor} />
);
