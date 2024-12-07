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

export function CustomModal({
  modalVisible,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) {
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
            source={require('./../assets/images/modalCODIGo.png')}
            style={styles.logo}
          />

          <Text style={styles.messageText}>Código reenviado com sucesso!</Text>

          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fechar</Text>
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
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  messageText: {
    fontSize: 18,
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
