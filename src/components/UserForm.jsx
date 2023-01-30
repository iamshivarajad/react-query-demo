import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UserForm = ({ user, submitText, submitAction }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: user || {},
  });

  const navigate = useNavigate();

  return (
    <div>
      <form onSubmit={handleSubmit(submitAction)}>
        {user && (
          <section className="field">
            <label htmlFor="id">User Id</label>
            <input type="text" name="id" value={user.id} disabled />
          </section>
        )}

        <section className="field">
          <div>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              {...register("first_name", { required: true })}
            />
            <span className="errors">
              {errors.first_name && "First name is required"}
            </span>
          </div>
          <div>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" {...register("last_name", { required: true })} />
            <span className="errors">
              {errors.last_name && "Last name is required"}
            </span>
          </div>
        </section>

        <section className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <span className="errors">
            {errors.email &&
              errors.email.type === "required" &&
              "Email is required"}
            {errors.email &&
              errors.email.type === "pattern" &&
              "Provide a valid email address"}
          </span>
        </section>

        <section className="field">
          <label htmlFor="gender">Gender</label>
          <select {...register("gender", { required: true })}>
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <span className="errors">
            {errors.gender && "Gender is required"}
          </span>
        </section>

        <div>
          <button type="submit"> {submitText} </button>
          <button type="button" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;