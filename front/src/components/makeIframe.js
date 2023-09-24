function MyIframe({src, title}) {
  return (
    <iframe
      src={src}
      title={title}
      frameborder="0"
      width="560"
      height="315" 
    >
    </iframe>
  );
}

export default MyIframe;
