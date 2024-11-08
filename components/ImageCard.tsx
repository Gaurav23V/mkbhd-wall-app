import { Wallpaper } from "@/hooks/useWallpapers";
import { Image, StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export function ImageCard({wallpaper}: {
    wallpaper: Wallpaper
}) {
    const theme = useColorScheme() ?? 'light';
    return <View>
        <Image source={{uri: wallpaper.url}} style={styles.image}/>
        <View style={styles.labelContainer}>
            <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
            <Ionicons 
                name={'heart'}
                size={18}
                color={theme==='light' ? Colors.light.icon : Colors.dark.icon}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
        height: 200,
        borderRadius: 20,
    },
    label: {
        color: 'white'
    },
    labelContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
    }
})