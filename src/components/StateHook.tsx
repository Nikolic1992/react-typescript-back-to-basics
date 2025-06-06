import { useState } from "react";

// ✅ This component demonstrates how useState works under the hood.
// It also shows the difference between using state vs. regular variables in React.

function StateHook() {
  // ✅ useState creates state variables that persist between renders.
  // Even though declared inside the function, these values are preserved across re-renders.

  // This state controls visibility, initially set to false.
  const [isVisible, setIsVisible] = useState(false);

  // This state represents an approval status, initially true.
  const [isApproved, setIsApproved] = useState(true);

  // ❌ Regular variable (not state): resets to 0 every time the component re-renders.
  // It's scoped to this function call, so its value is lost after each render.
  let count = 0;

  // ✅ Click handler
  function handleClick() {
    // React schedules a state update — this is asynchronous.
    // The value of `isVisible` won’t update immediately after this line.
    setIsVisible(true);

    // Regular variable gets incremented — but this value is not persistent.
    count++;

    // This will log the **previous** value of `isVisible` (before the update),
    // because the update hasn't been applied yet.
    console.log("isVisible:", isVisible);
    console.log("count:", count);
  }

  return <button onClick={handleClick}>Click</button>;
}

export default StateHook;

// 🔍 Notes on useState best practices:

// ✅ React batches state updates asynchronously for better performance.
//    You won’t see the updated value immediately after calling a setter function.

// ✅ State is stored outside of the component's scope.
//    React keeps the state alive even when your function re-runs on re-render.

// ❌ Avoid using normal variables like `let count = 0` for anything dynamic.
//    They get reset every time the component re-renders.

// ⚠️ Always place hooks (e.g., useState, useEffect) at the top level of the component.
//    Never call them conditionally, in loops, or inside nested functions.

// ✅ Best practices for managing state:

// 🔹 Avoid redundant state variables:
//    Don’t create multiple pieces of state for values that change together.

// 🔹 Group related state variables:
//    If two or more state values always update together, combine them in an object.
//    Example:
//    const [flags, setFlags] = useState({ isVisible: false, isApproved: true });

// 🔹 Avoid deeply nested state:
//    Keep your state flat. Deeply nested objects are harder to update immutably and lead to bugs.
//    Instead of deeply nested trees, consider flattening your state or using multiple smaller states.
