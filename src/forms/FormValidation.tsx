// Importing useForm and FieldValues from react-hook-form to manage form logic and typing
import { useForm, type FieldValues } from "react-hook-form";

// Defining the structure of form data using TypeScript interface
interface FormData {
  name: string;
  age: number;
}

function FormValidation() {
  // Destructuring useForm hook to access:
  // - register: connects input elements to the form
  // - handleSubmit: wraps the submit handler with validation logic
  // - formState.errors: contains validation errors for each field
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // Function called on successful form submission (passes validation)
  function onFormSubmit(data: FieldValues) {
    console.log(data); // Logging the form data
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // Registering "name" input with validation:
          // - required: field must not be empty
          // - minLength: must be at least 3 characters
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          placeholder="Form Validation"
          type="text"
          className="form-control"
        />
        {/* Conditionally showing validation error messages for "name" field */}
        {errors.name?.type === "required" && (
          <p className="text-danger">Name field is required.</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            Name must be at least 3 characters long.
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Age
        </label>
        <input
          // Registering "age" input without validation
          {...register("age", { required: true })}
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

export default FormValidation;
