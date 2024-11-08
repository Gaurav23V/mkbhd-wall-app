

import React from 'react';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';


const account: React.FC = () => {
    const router = useRouter();
    return (
        <SafeAreaView>
            <Text>Accountr Screen</Text>
            <Button
                title="Go to accountInfo"
                onPress={() => router.push('/(nobottombar)/accountinfo')}
            />
        </SafeAreaView>
    );
};

export default account;
