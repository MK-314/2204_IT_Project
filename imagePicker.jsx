import * as ImagePicker from 'expo-image-picker'

const pickImage = () => {
  return new Promise((res, rej) => {
    ImagePicker.requestMediaLibraryPermissionsAsync()
      .then(status => {
        if (status.granted) {
          ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
          })
            .then(result => {
              res(result)
            })
            .catch(e => {
              alert(e)
            })
        }
      })
      .catch(e => {
        alert(e)
      })
  })
}

export { pickImage }
