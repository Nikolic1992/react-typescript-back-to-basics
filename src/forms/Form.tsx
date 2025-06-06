import { useRef, type FormEvent } from "react";

function Form() {
  // Creating a ref to access the value of the "name" input directly
  // This avoids re-renders caused by state updates
  const nameRef = useRef<HTMLInputElement>(null);

  // Creating a ref for the "age" input
  // Both refs are initialized with null to prevent runtime errors before mounting
  const ageRef = useRef<HTMLInputElement>(null);

  // Creating an object to hold form values after submission
  const person = { name: "", age: 0 };

  function handleSubmit(event: FormEvent) {
    // Preventing the default form behavior (page refresh on submit)
    event.preventDefault();

    // Ensuring both input refs are available before accessing their values
    if (nameRef.current !== null && ageRef.current !== null) {
      // Accessing current values from the input fields via refs
      person.name = nameRef.current.value;

      // Converting the string value from the number input into an integer
      person.age = parseInt(ageRef.current.value);

      // Logging the collected data to the console
      console.log(person.name, person.age);
    }
  }

  return (
    // The form consists of two inputs: one for name and one for age
    // Both inputs are uncontrolled and accessed via refs
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // Assigning the ref to access this input's value later
          ref={nameRef}
          id="name"
          placeholder="Simple Form"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // Assigning the ref to access this input's value later
          ref={ageRef}
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

export default Form;
