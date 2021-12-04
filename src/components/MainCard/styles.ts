import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 190,
    height: 220,
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingRight: 35,
    paddingBottom: 20,
    paddingLeft: 20,
    marginRight: 20,
    borderRadius: 30
  },
  title: {
    fontFamily: theme.fonts.poppins600,
    fontSize: 20,
    color: theme.colors.darkGray
  },
  icon: {
    
  }
});