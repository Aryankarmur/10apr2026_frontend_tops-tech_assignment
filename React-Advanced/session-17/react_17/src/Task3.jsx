import { Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({

  email: Yup.string()
    .email("Invalid Email")
    .required("Email is Required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is Required"),

});

function Task3() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        values,
        handleChange,
        errors,
        touched,
      }) => (
        <Form>

          <input
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
          />

          {touched.email && errors.email && (
            <p>{errors.email}</p>
          )}

          <br />

          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
          />

          {touched.password && errors.password && (
            <p>{errors.password}</p>
          )}

          <br />

          <button type="submit">
            Login
          </button>

        </Form>
      )}
    </Formik>
  );
}

export default Task3;