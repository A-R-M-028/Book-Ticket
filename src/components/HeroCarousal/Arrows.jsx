export const NextArrow = (Props) => {
  // props -> {className, style, onClick} =  props
  return (
    <>
      <div
        className={Props.className}
        onClick={Props.onClick}
        style={{ ...Props.style, backgroundColor: "black" }}
      />
    </>
  );
};

export const PrevArrow = (Props) => {
  // const {className, style, onClick} =  props
  return (
    <>
      <div
        className={Props.className}
        onClick={Props.onClick}
        style={{ ...Props.style, backgroundColor: "black", }}
      />
    </>
  );
};
