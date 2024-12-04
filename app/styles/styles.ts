import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  textContainer: {
    width: '90%',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    textAlign: 'left',
  },
  inputContainer: {
    width: '90%',
    marginTop: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordInputContainer: {
    position: 'relative',
    paddingBottom: 10,
  },
  passwordInput: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingRight: 40,
    fontSize: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
  link: {
    color: '#1877F2',
    textAlign: 'center',
    fontSize: 16,
    textDecorationLine: 'none',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
    width: '90%',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  registerContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    fontSize: 16,
    textAlign: 'center',
  },
  faceIdButton: {
    marginTop: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  faceIdImage: {
    width: 40,
    height: 40,
  },
  socialButton: {
    marginTop: 20,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  socialImage1: {
    width: 305,  
    height: 54,
    resizeMode: "contain",
  },
  socialImage2: {
    width: 345,
    height: 54,
    resizeMode: "contain",
  },
});

export default styles;
