import { useState, type FormEvent } from "react";

function ControlledForm() {
  // Initializing state to hold form values (name and age)
  // This makes the inputs controlled by React – values depend on state
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  function handleSubmit(event: FormEvent) {
    // Preventing default form submission (which would reload the page)
    event.preventDefault();
    // Logging current state values to the console
    console.log(person.name, person.age);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // When input value changes, update the 'name' field in state
          // Using the spread operator to keep other state values unchanged
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          // Binding input value to state (controlled input)
          value={person.name}
          id="name"
          placeholder="Controlled Form"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // Updating 'age' in state on input change
          // Converting input value from string to number using parseInt
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          // Binding value to state for controlled behavior
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ControlledForm;
