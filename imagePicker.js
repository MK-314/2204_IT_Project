import * as ImagePicker from 'expo-image-picker'

const pickImage = () => {
    return new Promise(async(res, rej) => {
        let status = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status.granted) {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1
            })
            res(result)
        }
    })
}

export { pickImage }