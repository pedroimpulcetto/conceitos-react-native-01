import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9F9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  box: {
    margin: 10,
    height: 50,
    backgroundColor: '#737373',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  button: {
    margin: 20,
    backgroundColor: '#F8C471',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    color: '#737373',
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    margin: 10,
    backgroundColor: '#ABB2B9',
    height: 60,
    borderRadius: 5,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    paddingLeft: 20,
  },
});

export default styles;
