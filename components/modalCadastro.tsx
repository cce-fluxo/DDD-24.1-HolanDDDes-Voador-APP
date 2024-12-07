import { router } from 'expo-router';
import React, { PropsWithChildren } from 'react';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  Image,
  Modal as RNModal,
  Pressable,
} from 'react-native';

interface ModalProps {
  modalVisible: boolean;
  onClose: () => void;
}

const { width } = Dimensions.get('window');

export function ModalCadastro({
  modalVisible,
  onClose,
}: PropsWithChildren<ModalProps>) {
  const navigateToLogin = () => {
    router.push('/(auth)/login');
  };

  return (
    <RNModal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Image
            source={require('./../assets/images/modalCADASTRO.png')}
            style={styles.logo}
          />

          <Text style={styles.titleText}>Cadastro realizado!</Text>

          <Text style={styles.descriptionText}>
            Seja bem-vindo ao melhor aplicativo de hospedagem de hotéis!
          </Text>

          <Pressable onPress={navigateToLogin} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Continuar</Text>
          </Pressable>
        </View>
      </View>
    </RNModal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: width * 0.8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 258.55,
    height: 169.76,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: '#000',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: '#333',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#DC143B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
  },
});
