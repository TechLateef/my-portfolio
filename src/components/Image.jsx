const Img = ({ url, title, alt }) => {
  return (
    <img
      className="object-contain h-full w-full"
      src={url}
      alt={alt}
      title={title}
    />
  );
};

export default Img;
