import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import StateHook from "./components/StateHook";
import Objects from "./components/Objects";
import Form from "./forms/Form";
import ControlledForm from "./forms/ControlledForm";
import ReactHookForm from "./forms/ReactHookForm";
import FormValidation from "./forms/FormValidation";
import ZodSchemaBasedValidation from "./forms/ZodSchemaBasedValidation";
import Arrays from "./components/Arrays";

// ✅ MAIN APPLICATION COMPONENT
// This is the root component of your app.
// It combines reusable components: ListGroup, Alert, and Button.

function App() {
  // ✅ State to control the visibility of the Alert component
  const [toggleAlert, setToggleAlert] = useState(false);

  // ✅ Sample data: array of city names
  const items = ["Sydney", "Brisbane", "Melbourne", "Perth", "Adelaide"];

  // ✅ Called when a city is selected from the ListGroup
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // ✅ Toggles the visibility of the Alert
  function handleToggleAlert() {
    setToggleAlert(!toggleAlert);
  }

  return (
    // ✅ Bootstrap container centers content and adds spacing
    <div className="container mt-5">
      {/* ✅ Vertical layout using Flexbox:
          - d-flex: turns the container into a Flexbox
          - flex-column: stacks children vertically
          - gap-4: adds spacing between children */}
      <div className="d-flex flex-column gap-4">
        {/* ✅ ListGroup shows the list of cities with a heading */}
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />

        {/* ✅ Conditionally render the Alert when toggleAlert is true */}
        {toggleAlert && (
          <Alert onClose={handleToggleAlert}>
            Hello <span className="bg-white px-1">World</span>
          </Alert>
        )}

        {/* ✅ Button that toggles the Alert on click */}
        <Button color="danger" onClick={handleToggleAlert}>
          CLICK ME
        </Button>
        <StateHook />
        <Objects />
        <Arrays />

        {/* ✅ Various form examples */}
        <Form />
        <ControlledForm />
        <ReactHookForm />
        <FormValidation />
        <ZodSchemaBasedValidation />
      </div>
    </div>
  );
}

export default App;
