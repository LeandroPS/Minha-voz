import axios from "axios";
import config from "../config";
import convertBlobToBase64 from "../utils/convertBlobToBase64";

const fetchAudio = async (text) => {
  try {
    const { data } = await axios.post(
      `${config.APIUrl}/v1/synthesize`,
      {
        text,
        voice: "pt-BR_IsabelaVoice",
        accept: "audio/mp3",
      },
      {
        auth: {
          username: "apikey",
          password: config.APIKey,
        },
        responseType: "blob",
      }
    );

    return await convertBlobToBase64(data);
  } catch (error) {
    console.error(error.message);
  }
};

export default fetchAudio;
