import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: 141,
    height: 40,
    marginTop: 50,
    alignSelf: 'center',
  },
  divider: {
    width: '90%', // Puede ajustarse según el tamaño que quieras
    height: 1,
    backgroundColor: '#000',
    marginVertical: 20,
    alignSelf: 'center',
  },
  chatArea: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '70%',
    backgroundColor: '#F7F7F7',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    position: 'relative',
  },
  userBubble: {
    alignSelf: 'flex-end',
  },
  botBubble: {
    alignSelf: 'flex-start',
    position: 'relative',
    marginTop: 30,
  },
  botLogo: {
    position: 'absolute',
    top: -35,
    left: 0,
    width: 48,
    height: 29,
  },
  messageText: {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  input: {
    flex: 1,
    height: 45,
    borderRadius: 30,
    backgroundColor: '#F7F7F7',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Roboto',
  },
  sendIcon: {
    position: 'absolute',
    width: 20, // Ajusta el tamaño del ícono de enviar
    height: 20,
    top: 15, // Ajusta la posición del ícono de enviar dentro del círculo
    left: 15, // Ajusta la posición horizontal
  },
});

export default styles;

