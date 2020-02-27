export default function Icon({ w, h, color, rotate, loc }) {
  const style = () => {
    if (loc === "leftSmall") {
      return {
        position: "absolute",
        top: "0.05em",
        left: "0em"
      };
    }
    if (loc === "rightSmall") {
      return {
        position: "absolute",
        bottom: "0.475em",
        right: "0em"
      };
    }
    if (loc === "left") {
      return {
        position: "absolute",
        top: "-.2em",
        left: "-.5em"
      };
    }
    if (loc === "right") {
      return {
        position: "absolute",
        bottom: "-.3em",
        right: "-.6em"
      };
    }
  };

  return (
    <svg
      aria-hidden="true"
      width={w}
      height={h}
      viewBox="0 0 100 100"
      style={style()}
    >
      <path
        fill="none"
        transform={rotate}
        style={{
          WebkitTransformOrigin: "50%50%",
          MsTransformOrigin: "50%50%",
          transformOrigin: "50%50%"
        }}
        stroke={color}
        strokeWidth="8"
        d="M10 10L90 10 90 90"
      ></path>
    </svg>
  );
}
