import type { ReactNode } from "react";

// ✅ COMPONENT PURPOSE:
// This Alert component is a simple reusable UI element for displaying alert messages or any custom content inside a styled box.

// ✅ WHAT IS ReactNode?
// ReactNode is a special type provided by React that represents anything that can be rendered in JSX.
// It includes:
// - string (e.g. "Hello")
// - number (e.g. 42)
// - JSX elements (e.g. <strong>Important</strong>)
// - fragments (<>...</>)
// - arrays of elements
// - null, undefined, or boolean (which React ignores in rendering)
//
// We use ReactNode here to allow the Alert component to accept any kind of valid React content as its child.

interface Props {
  children: ReactNode; // Content to display inside the alert
  onClose: () => void; // Callback when the close button is clicked
}

// ✅ Functional React component
function Alert({ children, onClose }: Props) {
  return (
    <div className="alert alert-warning alert-dismissible fade show">
      {children}
      {/* Close button that triggers onClose when clicked */}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default Alert;
