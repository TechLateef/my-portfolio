const Img = ({ url, title, alt }) => {
  return (
    <img
      className="object-contain h-full w-full hover:hover:scale-105 duration-300"
      src={url}
      alt={alt}
      title={title}
    />
  );
};

export default Img;
