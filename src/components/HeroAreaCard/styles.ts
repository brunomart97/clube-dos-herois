import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 200,
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingRight: 40,
    paddingBottom: 20,
    paddingLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    elevation: 2
  },
  title: {
    fontFamily: theme.fonts.poppins600,
    fontSize: 18,
    color: theme.colors.darkGray,
    lineHeight: 25
  }
});