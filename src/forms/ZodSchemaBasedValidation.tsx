// Importing useForm and FieldValues from react-hook-form to handle form logic and data typing
import { useForm, type FieldValues } from "react-hook-form";

// Importing Zod for schema validation
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Defining the validation schema using Zod
// Each field includes custom error messages for better user feedback
const schema = z.object({
  name: z.string().min(3, { message: "Enter minmimum 3 characters." }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be at least 18." }),
});

// Instead of defining an interface manually,
// we infer the TypeScript type directly from the Zod schema
type FormData = z.infer<typeof schema>;

function ZodSchemaBasedValidation() {
  // Initializing the form using useForm with Zod validation via zodResolver
  // Provides:
  // - register: connects form inputs
  // - handleSubmit: manages submission and triggers validation
  // - errors: stores validation error messages
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // Callback triggered after successful validation
  function onFormSubmit(data: FieldValues) {
    // Logging submitted form data
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // Registering the "name" input with validation from Zod schema
          {...register("name")}
          id="name"
          placeholder="ZOD SCHEMA CONTROL"
          type="text"
          className="form-control"
        />
        {/* Showing validation error for "name" if it exists */}
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Age
        </label>
        <input
          // Registering the "age" input and parsing the value as a number
          {...register("age", { valueAsNumber: true })}
          id="name"
          type="text"
          className="form-control"
        />
        {/* Showing validation error for "age" if it exists */}
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>

      {/* If the form is not filled out properly, the button will be disabled. */}
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ZodSchemaBasedValidation;
