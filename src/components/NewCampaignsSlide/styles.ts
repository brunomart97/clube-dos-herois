import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    height: 170,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: 20
  },
  title: {
    fontFamily: theme.fonts.poppins500,
    fontSize: 20,
    color: theme.colors.darkGray,
    marginLeft: 20,
    marginBottom: 10
  },
  subcontainer: {
    height: 130,
    paddingLeft: 20
  }
});