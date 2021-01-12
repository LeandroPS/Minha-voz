import React, { useState } from "react";
import styled from "styled-components/native";
import styles from "../../../styles";

// const Wrapper = styled.TouchableOpacity`
//   flex: 1;
// `;

// const Text = styled.Text``;

// const TextInput = styled.TextInput``;

// const NewFavorite = ({}) => {
//   const [editable, setEditable] = useState(false);

//   return (
//     <Wrapper onPress={() => setEditable(true)}>
//       {editable ? (
//         <>
//           <Text>+</Text>
//           <TextInput />
//         </>
//       ) : (
//         <Text>+ Adicionar Favorito</Text>
//       )}
//     </Wrapper>
//   );
// };

const NewFavorite = styled.TextInput`
  border-radius: 20px;
  margin-top: ${styles["spacing-2"]};
  padding: ${styles["spacing-3"]} ${styles["spacing-3"]};
  font-size: ${styles["font-sizing-3"]};
  border-width: 1px;
  border-color: ${styles["color-secondary-button"]};
`;

NewFavorite.defaultProps = {
  placeholder: "+ Adicionar Favorito",
};

export default NewFavorite;
