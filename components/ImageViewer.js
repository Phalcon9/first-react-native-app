import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";
const PlaceholderImage = require('../assets/images/background-image.png');

export default function ImageViewer({ selectedImage }) {
    const imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : PlaceholderImage;
    return (
        <View>
            <Image source={imageSource} style={style.image} />
       
        </View>

    )
}
const style = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
})