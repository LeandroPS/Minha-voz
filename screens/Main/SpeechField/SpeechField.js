import styled from "styled-components/native";
import styles from "../../../styles";

const SpeechField = styled.TextInput`
  padding: ${styles["spacing-4"]} 0;
  font-size: ${styles["font-sizing-6"]};

  align-content: flex-start;
  color: ${styles["color-text"]};
  min-height: 300px;
  margin-bottom: ${styles["spacing-4"]};
`;

SpeechField.defaultProps = {
  textAlignVertical: "top",
  multiline: true,
  placeholder: "Digite seu texto aqui e depois clique no botão 'play'",
  placeholderTextColor: styles["color-placeholder"],
};

export default SpeechField;
