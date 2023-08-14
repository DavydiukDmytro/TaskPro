const importAll = r => {
  const images = {};
  r.keys().forEach(key => (images[key] = r(key)));
  return images;
};

const images = importAll(
  require.context(
    '../../assets/images/backgroundlmg/main',
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default images;
