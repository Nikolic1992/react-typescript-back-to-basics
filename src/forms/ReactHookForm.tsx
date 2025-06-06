// import { useState, type FormEvent } from "react";

// Impoting useForm from react-hook-form to manage form state
import { useForm, type FieldValues } from "react-hook-form";

function ReactHookForm() {
  // Using useForm hook to manage form state without manually handling state
  // This hook provides methods to register inputs, handle form submission, and manage validation
  const { register, handleSubmit } = useForm();

  // We do not need to manage state manually here, as react-hook-form handles it for us
  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });

  // The person object is not needed here, as we will use the data from the form submission directly
  // function handleSubmit(event: FormEvent) {
  //   event.preventDefault();
  //   console.log(person.name, person.age);
  // }

  function onFormSubmit(data: FieldValues) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // Using register to register the input with react-hook-form
          {...register("name")}
          // We do not need to handle onChange manually, as react-hook-form will manage it
          // onChange={(event) =>
          //   setPerson({ ...person, name: event.target.value })
          // }
          // value={person.name}
          id="name"
          placeholder="React Hook Form"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          // We do not need to handle onChange manually, as react-hook-form will manage it
          // onChange={(event) =>
          //   setPerson({ ...person, age: parseInt(event.target.value) })
          // }
          // value={person.age}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}
export default ReactHookForm;
