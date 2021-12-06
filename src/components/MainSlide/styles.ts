import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 330,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: theme.fonts.poppins500,
    fontSize: 20,
    color: theme.colors.darkGray,
    marginLeft: 20
  },
  subcontainer: {
    minHeight: 250,
    maxHeight: 250,
    paddingLeft: 20
  }
});