import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 120,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: theme.colors.blackOne,
    elevation: 2
  },
  // Left
  left: {
    width: '35%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.blackTwo
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
  },
  //Right
  right: {
    width: '65%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginLeft: 10
  },
  name: {
    fontFamily: theme.fonts.poppins500,
    fontSize: 18,
    color: theme.colors.white,
    lineHeight: 20
  },
  bloodType: {
    fontFamily: theme.fonts.poppins500,
    fontSize: 18,
    color: theme.colors.white,
    lineHeight: 23,
    padding: 5,
    borderRadius: 5,
    backgroundColor: theme.colors.fluorescentRed
  },
  city: {
    maxWidth: '100%',
    fontFamily: theme.fonts.poppins300,
    fontSize: 12,
    color: theme.colors.white,
    lineHeight: 15
  }
});