import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 120,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingRight: 35,
    paddingBottom: 20,
    paddingLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: theme.colors.blackOne,
    elevation: 2
  },
  // Left
  left: {
    width: '30%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 100
  },
  //Right
  right: {
    width: '70%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: 15
  },
  name: {
    fontFamily: theme.fonts.poppins500,
    fontSize: 18,
    color: theme.colors.fluorescentRed,
    lineHeight: 20
  },
  city: {
    maxWidth: '100%',
    fontFamily: theme.fonts.poppins300,
    fontSize: 12,
    color: theme.colors.white,
    lineHeight: 15
  },
  date: {
    fontFamily: theme.fonts.poppins300,
    fontSize: 12,
    color: theme.colors.white,
    lineHeight: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 50,
    backgroundColor: theme.colors.blackTwo
  }
});