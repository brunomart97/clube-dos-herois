import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 20,
  },
  saveButton: {
    height: 50,
    lineHeight: 50,
    paddingHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: theme.colors.red,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: theme.fonts.poppins500,
    fontSize: 18,
    marginLeft: 10,
    paddingTop: 3,
    color: theme.colors.white
  }
});