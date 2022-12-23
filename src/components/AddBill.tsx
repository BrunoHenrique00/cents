import { ReactNode } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useBottomSheet } from '../contexts/BottomSheetContext';

const AddBill = ({ children }: { children?: ReactNode }) => {
  const { handleSnapPress } = useBottomSheet();

  return (
    <TouchableOpacity
      style={{ top: -30, justifyContent: 'center', alignItems: 'center' }}
      onPress={handleSnapPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          paddingTop: 10,
          backgroundColor: 'green',
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default AddBill;
