import { Stack, Link, Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RootLayout() {
    return <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Slot />
            </View>
            <View style={styles.navigation}>
                <Link href={'/'}>
                    <Text>For You</Text>
                </Link>
                <Link href={'/explore'}>
                    <Text>Explore</Text>
                </Link>
                <Link href={'/account'}>
                    <Text>Account</Text>
                </Link>
            </View>
        </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',
        backgroundColor: 'white',
    },
});
