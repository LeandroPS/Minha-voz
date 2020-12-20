const convertBlobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;

    reader.readAsDataURL(blob);
  });
};

export default convertBlobToBase64;
