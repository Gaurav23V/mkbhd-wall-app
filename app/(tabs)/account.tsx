import { DownloadPicture } from '@/components/BottomSheet';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function Account() {
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Account Page</Text>
      <Button
        title="Open Bottom Sheet"
        onPress={() => {
          setPictureOpen(true);
        }}
      />
      {/* Always render the DownloadPicture component */}
      <DownloadPicture
        pictureOpen={pictureOpen}
        setPictureOpen={setPictureOpen}
      />
    </SafeAreaView>
  );
}