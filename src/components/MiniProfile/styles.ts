import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.red
  },
  subcontainer: {
    width: '100%',
    height: 90,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  // Left
  left: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  nameContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  greeting: {
    fontFamily: theme.fonts.poppins300,
    fontSize: 20,
    color: theme.colors.white,
    marginRight: 6
  },
  username: {
    fontFamily: theme.fonts.poppins600,
    fontSize: 20,
    color: theme.colors.white
  },
  levelContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  levelText: {
    fontFamily: theme.fonts.poppins300,
    fontSize: 15,
    color: theme.colors.white,
    marginRight: 6
  },
  levelNumber: {
    fontFamily: theme.fonts.poppins600,
    fontSize: 15,
    color: theme.colors.white,
    marginRight: 6
  },
  levelIcon: {
    marginTop: -3
  },
  //Right
  right: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 100
  },
  //Bottom
  bottom: {
    width: '100%',
    height: 30,
    borderTopLeftRadius: 50,
    backgroundColor: theme.colors.white
  }
});