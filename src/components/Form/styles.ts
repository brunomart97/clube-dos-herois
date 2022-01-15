import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingBottom: 10
  },
  title: {
    fontFamily: theme.fonts.poppins500,
    fontSize: 20,
    color: theme.colors.darkGray,
  },
  input: {
    height: 50,
    lineHeight: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontFamily: theme.fonts.poppins400,
    fontSize: 20,
    backgroundColor: theme.colors.lightGray
  }
});