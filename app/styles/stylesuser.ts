import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  logo: {
    width: 141,
    height: 40,
    marginTop: 50,
  },
  profileImage: {
    width: 104,
    height: 104,
    marginTop: 30,
  },
  userText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20,
    textAlign: 'center',
  },
  inputField: {
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#000',
  },
  button: {
    width: '70%',
    height: 50,
    backgroundColor: '#5500FF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
