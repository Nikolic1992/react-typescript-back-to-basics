import { useEffect, useRef } from "react";

/**
 * Component demonstrating basic usage of the useEffect hook
 *
 * useEffect is used for managing "side effects" in React functional components.
 * Side effects are operations that affect things outside the component scope, such as:
 * - DOM manipulation
 * - API calls
 * - Setting up timers/intervals
 * - Focusing elements
 * - Subscribing to external data sources
 */
function useEffectHook() {
  // useRef hook creates a reference to a DOM element
  // This reference will persist across component re-renders without causing re-renders itself
  // The generic <HTMLInputElement> specifies the type of DOM element we're referencing
  const ref = useRef<HTMLInputElement>(null);

  /**
   * useEffect hook executes AFTER the component has been rendered to the DOM
   *
   * Why do we use useEffect here?
   * - Without useEffect, the focus code would run during the render phase
   * - This could cause issues because the DOM element might not be available yet
   * - useEffect ensures the side effect runs after the DOM has been updated
   *
   * Important notes about this useEffect:
   * - No dependency array is provided, so it runs after EVERY render
   * - This includes the initial render AND every subsequent re-render
   * - In most cases, you'd want to add a dependency array to control when it runs
   */
  useEffect(() => {
    // Side effect: Focus the input element
    // We check if ref.current exists to avoid null reference errors
    // ref.current will be null if the component hasn't mounted yet or if the ref isn't attached
    if (ref.current) {
      // Focus the input element - this is a DOM manipulation side effect
      ref.current.focus();
    }

    // Note: This effect has no cleanup function and no dependencies
    // For better performance, consider adding an empty dependency array []
    // to run this effect only once after the initial render
  });

  /**
   * Alternative approaches you might consider:
   *
   * 1. Run only once after initial mount:
   * useEffect(() => {
   *   if (ref.current) {
   *     ref.current.focus();
   *   }
   * }, []); // Empty dependency array = run once after mount
   *
   * 2. Run when specific values change:
   * useEffect(() => {
   *   if (ref.current) {
   *     ref.current.focus();
   *   }
   * }, [someVariable]); // Run when someVariable changes
   *
   * 3. With cleanup function:
   * useEffect(() => {
   *   if (ref.current) {
   *     ref.current.focus();
   *   }
   *
   *   return () => {
   *     // Cleanup function runs before the next effect or component unmount
   *     console.log('Cleaning up previous effect');
   *   };
   * }, []);
   */

  return (
    <div>
      {/* 
        The ref prop connects our useRef reference to this actual DOM element
        Once this input is rendered, ref.current will point to this HTML input element
      */}
      <input
        ref={ref}
        type="text"
        className="form-control"
        placeholder="This input will be focused automatically"
      />
    </div>
  );
}

export default useEffectHook;
