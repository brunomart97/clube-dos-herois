import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  // Top
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: theme.colors.white
  },
  subcontainerTop: {
    width: '90%',
    height: 300,
    borderRadius: 30,
    backgroundColor: theme.colors.blackOne
  },
  headerTop: {
    width: '100%',
    height: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.blackTwo
  },
  headerTopRight: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  bloodType: {
    fontFamily: theme.fonts.poppins500,
    fontSize: 50,
    lineHeight: 60,
    color: theme.colors.fluorescentRed
  },
  bloodDonation: {
    fontFamily: theme.fonts.poppins300,
    fontSize: 15,
    color: theme.colors.white
  },
  bloodRequest: {
    fontFamily: theme.fonts.poppins300,
    fontSize: 15,
    color: theme.colors.white
  },
  //Bottom
  subcontainerBottom: {
    width: '90%',
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: 30,
    backgroundColor: theme.colors.blackTwo
  }
});