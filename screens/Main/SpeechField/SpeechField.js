import styled from "styled-components/native";
import styles from "../../../styles";

const SpeechField = styled.TextInput`
  padding: ${styles["spacing-4"]};
  font-size: ${styles["font-sizing-3"]};
`;

SpeechField.defaultProps = {
  multiline: true,
  placeholder: "Digite seu texto aqui e depois clique no botão 'falar'",
};

export default SpeechField;
