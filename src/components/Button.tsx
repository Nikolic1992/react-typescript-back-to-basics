// ✅ Button COMPONENT
// A reusable button component that uses Bootstrap styling
// Accepts custom label, click handler, and optional color

interface Props {
  children: string; // Button label text
  onClick: () => void; // Function to call when the button is clicked
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"; // Optional Bootstrap color (default is 'primary')
}

function Button({ children, onClick, color = "primary" }: Props) {
  return (
    <button className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
