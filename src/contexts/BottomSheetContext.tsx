import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { createContext, ReactNode, useContext, useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import FormBill from '../components/FormBill';

interface BottomSheetProps {
  handleSnapPress: () => void;
  isOpen: boolean;
  closeBottomSheet: () => void;
}

const BottomSheet = createContext<BottomSheetProps>({} as BottomSheetProps);

const BottomSheetProvider = ({ children }: { children: ReactNode }) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [isOpen, setIsOpen] = useState(false);

  function handleSnapPress() {
    bottomSheetRef.current?.present();
    setIsOpen(true);
  }

  function closeBottomSheet() {
    bottomSheetRef.current?.close();
  }

  return (
    <BottomSheet.Provider value={{ handleSnapPress, isOpen, closeBottomSheet }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {children}
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetRef}
            snapPoints={['75%']}
            style={{ padding: 24 }}
            enablePanDownToClose={true}
          >
            <BottomSheetView>
              <FormBill />
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </BottomSheet.Provider>
  );
};

export default BottomSheetProvider;

export function useBottomSheet() {
  return useContext(BottomSheet);
}
