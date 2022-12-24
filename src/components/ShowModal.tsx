import { ReactNode, useState } from 'react';
import { Portal, Modal, Button, Provider } from 'react-native-paper';

interface ShowModalProps {
  children: ReactNode;
  label: string;
}

export default function ShowModal({ children, label }: ShowModalProps) {
  const [visible, setVisible] = useState(true);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: 'white', padding: 20 };
  return (
    <>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            {children}
          </Modal>
        </Portal>
      </Provider>
      <Button onPress={showModal}>{label}</Button>
    </>
  );
}
