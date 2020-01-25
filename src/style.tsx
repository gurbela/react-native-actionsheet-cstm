import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.4,
  },
  backdropBtn: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    marginHorizontal: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  shadow: {
    shadowColor: 'rgba(255, 255, 255, 0.0)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleContainer: {
    backgroundColor: '#fff',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  title: {
    marginVertical: 10,
    alignSelf: 'center',
  },
  btnContainer: {
    backgroundColor: '#fff',
  },
  btnContainerBorder: {
    borderColor: '#e1e4e8',
    borderBottomWidth: 2,
  },
  lastBtnContainer: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  btnText: {
    fontSize: 20,
    letterSpacing: 0.5,
    alignSelf: 'center',
    marginVertical: 18,
    color: '#3880ff',
  },
  cancelContainer: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  cancelText: {
    color: '#3880ff',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
