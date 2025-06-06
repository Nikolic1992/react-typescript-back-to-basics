import { useState } from "react";

function Arrays() {
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: "Bug 1",
      fixed: false,
    },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleBugClick = () => {
    // If we want to updated fixed to true for the bug with id 1
    // we can use map to create a new array with the updated bug
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  const handleClick = () => {
    // Add
    setTags([...tags, "tag4"]);
    // Remove
    setTags(tags.filter((tag) => tag !== "tag2"));
    // Update
    setTags(tags.map((tag) => (tag === "tag2" ? "updatedTag" : tag)));
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleBugClick}>Bug Click</button>
    </div>
  );
}

export default Arrays;
