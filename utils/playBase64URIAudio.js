import { Audio } from "expo-av";

const playBase64URIAudio = async (base64URI) => {
  const { sound } = await Audio.Sound.createAsync({
    uri: base64URI,
  });
  await sound.playAsync();
};

export default playBase64URIAudio;
