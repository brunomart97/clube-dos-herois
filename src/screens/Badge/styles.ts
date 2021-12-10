import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  header: {
    width: '100%',
    height: 90,
    display: 'flex',
    backgroundColor: theme.colors.white
  },
  backButton: {
    width: '30%',
    height: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    borderBottomRightRadius: 20,
    backgroundColor: theme.colors.red
  }
});