import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

interface DownloadPictureProps {
  pictureOpen: boolean;
  setPictureOpen: (open: boolean) => void;
}

export const DownloadPicture: React.FC<DownloadPictureProps> = ({ pictureOpen, setPictureOpen }) => {
  // Reference for the BottomSheet
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Define the snap points for the BottomSheet
  const snapPoints = useMemo(() => ['85%' , '100%'], []);

  // Effect to handle opening and closing the BottomSheet
  useEffect(() => {
    if (pictureOpen) {
      bottomSheetRef.current?.snapToIndex(0);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [pictureOpen]);

  // Callback function when the BottomSheet index changes
  const handleSheetChanges = useCallback(
    (index: number) => {
      console.log('handleSheetChanges', index);
      if (index === -1) {
        setPictureOpen(false);
      }
    },
    [setPictureOpen]
  );

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{height: 0}}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
});