import axios from "axios";
import config from "../config";

const fetchAudio = async (text) => {
  const { data } = await axios({
    method: "post",
    url: `${config.APIUrl}/v1/synthesize`,
    params: {
      voice: "pt-BR_IsabelaVoice",
    },
    data: {
      text,
    },
    headers: {
      accept: "audio/mp3",
    },
    auth: {
      username: "apikey",
      password: config.APIKey,
    },
    responseType: "blob",
  });

  return data;
};

export default fetchAudio;
