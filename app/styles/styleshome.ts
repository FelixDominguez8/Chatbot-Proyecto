import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  logo: {
    width: 140,
    height: 60,
    resizeMode: 'contain',
  },
  profileButton: {
    width: 45,
    height: 45,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  subText: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
  },
  chatButton: {
    backgroundColor: '#5500FF',
    borderRadius: 30,
    paddingVertical: 8,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  chatButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  viewAll: {
    fontSize: 16,
    color: '#5500FF',
  },
  carousel: {
    marginTop: 10,
    marginBottom: 10,
  },
  carouselContent: {
    paddingHorizontal: 20,
    height: 40,
  },
  carouselItem: {
    backgroundColor: '#E6E6E6', 
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10, 
    alignItems: 'center',
  },
  carouselItemText: {
    color: '#A6A6A6', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  carruselHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  promptsHeader: {
    marginTop: 30,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  suggestedButton: {
    backgroundColor: '#5500FF',
    borderRadius: 30,
    paddingVertical: 8,
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  suggestedButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
