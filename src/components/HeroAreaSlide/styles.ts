import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: theme.fonts.poppins500,
    fontSize: 20,
    color: theme.colors.darkGray,
    marginLeft: 20,
    marginBottom: 10
  },
  subcontainer: {
    height: 210,
    paddingLeft: 20
  }
});