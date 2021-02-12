import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";

const playBase64URIAudio = async (base64String) => {
  try {
    const uri = `${FileSystem.cacheDirectory}/bliu.mp3`;

    await FileSystem.writeAsStringAsync(uri, base64String.split("base64,")[1], {
      encoding: FileSystem.EncodingType.Base64,
    });

    await Audio.setAudioModeAsync({
      playsInSilentModeIOS: true,
    });

    const { sound } = await Audio.Sound.createAsync({
      uri,
    });
    await sound.playAsync();
  } catch (error) {
    console.error(error);
  }
};

export default playBase64URIAudio;
