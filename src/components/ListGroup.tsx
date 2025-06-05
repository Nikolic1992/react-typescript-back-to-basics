import { useState } from "react";

// ✅ COMPONENT PURPOSE:
// This ListGroup component displays a list of items with an optional heading.
// When an item is clicked, it becomes highlighted and triggers a callback function passed from the parent.

// ✅ STATE vs PROPS:
// - Props are read-only values passed to this component from its parent (e.g., items, heading, onSelectItem).
// - State is local and used to track which item is currently selected (selectedIndex).

// ✅ Type definition for the component's props
interface Props {
  items: string[]; // An array of strings to display as list items
  heading?: string; // Optional heading text to display above the list
  onSelectItem: (item: string) => void; // Function to call when an item is selected
}

// ✅ Functional React component
function ListGroup({ items, heading, onSelectItem }: Props) {
  // selectedIndex stores the index of the currently selected item (-1 means nothing is selected by default)
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      {/* Display the heading if it's provided */}
      <h1>{heading}</h1>

      {/* If there are no items, show a message instead of an empty list */}
      {items.length === 0 && <p>No items found</p>}

      {/* Render the list of items */}
      <ul className="list-group">
        {/* Loop through each item and render it as a <li> element */}
        {items.map((item, index) => (
          <li
            // Add the "active" class if this item is selected
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // Use the item as a unique key (make sure items are unique!)
            key={item}
            // When an item is clicked:
            // 1. Update the selected index
            // 2. Notify the parent component of the selected item
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
