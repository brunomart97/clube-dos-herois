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
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: theme.colors.blackOne
  },
  imageBackground: {
    width: '100%',
    height: '80%',
    position: "absolute",
    right: 0,
    top: '30%',
    opacity: .15
  },
  headerTop: {
    width: '100%',
    height: 150,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20
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
    fontFamily: theme.fonts.poppins500,
    fontSize: 15,
    color: theme.colors.darkGray
  },
  bloodRequest: {
    fontFamily: theme.fonts.poppins500,
    fontSize: 15,
    color: theme.colors.darkGray
  },
  headerBottom: {
    width: '100%',
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  name: {
    fontFamily: theme.fonts.poppins500,
    fontSize: 25,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: theme.colors.white
  },
  age: {
    fontFamily: theme.fonts.poppins500,
    fontSize: 15,
    color: theme.colors.darkGray
  },
  levelHero: {
    fontFamily: theme.fonts.poppins500,
    fontSize: 15,
    color: theme.colors.darkGray
  },
  //Bottom
  subcontainerBottom: {
    width: '90%',
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: theme.colors.blackOne
  }
});