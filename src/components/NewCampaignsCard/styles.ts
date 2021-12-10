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
    backgroundColor: theme.colors.lightGray,
    elevation: 2
  },
  // Left
  left: {
    width: 60,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 100
  },
  //Right
  right: {

  },
  name: {
    fontFamily: theme.fonts.poppins600,
    fontSize: 18,
    color: theme.colors.darkGray,
    lineHeight: 25
  }
});