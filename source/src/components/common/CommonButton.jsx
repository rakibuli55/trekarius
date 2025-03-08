function CommonButton({ text, type = "fill", bgColor }) {
  const hoverColor = bgColor === "#1687C7" ? "#FF7701" : "#1687C7";
  return (
    <button
      className={`py-3 px-6 custom-xs:py-[10px] custom-xs:px-5 custom-xl:py-[10px] rounded-[12px] text-base custom-xs:text-sm font-semibold border duration-200 ease-in-out`}
      style={{
        backgroundColor: type === "fill" ? bgColor : "transparent",
        color: type === "fill" ? "white" : bgColor,
        border: `2px solid ${bgColor}`,
      }}
      onMouseEnter={(e) => {
        if (type === "fill") {
          e.target.style.backgroundColor = hoverColor;
          e.target.style.color = '#fff';
          e.target.style.borderColor = '#fff';
        } 
        if (type === "border") {
          e.target.style.backgroundColor = hoverColor;
          e.target.style.color = '#fff';
          e.target.style.borderColor = '#fff';
        }
      }}
      onMouseLeave={(e) => {
        if (type === "fill") {
          e.target.style.backgroundColor = bgColor;
          e.target.style.color = "white";
          e.target.style.borderColor = 'transparent';
        } 
        
        if (type === "border") {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = bgColor;
          e.target.style.borderColor = bgColor;
        }
      }}
    >
      {text}
    </button>
  );
}

export default CommonButton;
