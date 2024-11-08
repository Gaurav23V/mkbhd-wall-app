import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { Image, StyleSheet, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function explore() {
  const wallpaper = useWallpapers();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        headerBackgroundColor={{ dark: "black", light: "white" }}
        headerImage={
          <Image
            style={{ flex: 1 }}
            source={{
              uri: wallpaper[0]?.url ?? "",
            }}
          />
        }
      >
        <ThemedView style={styles.container}>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpaper}
              renderItem={({ item }) => <ImageCard wallpaper={item} />}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
          <ThemedView style={styles.innerContainer}>
            <FlatList
              data={wallpaper}
              renderItem={({ item }) => <ImageCard wallpaper={item} />}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
})