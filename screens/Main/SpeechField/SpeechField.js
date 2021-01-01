import styled from "styled-components/native";
import styles from "../../../styles";

const SpeechField = styled.TextInput`
  padding: 0 ${styles["spacing-4"]} ${styles["spacing-4"]};
  margin-bottom: 20px;
  font-size: ${styles["font-sizing-4"]};
  flex: 1;
`;

SpeechField.defaultProps = {
  multiline: true,
  placeholder: "Digite seu texto aqui e depois clique no botão 'play'",
};

export default SpeechField;
