import { Formik, Form, Field } from "formik";

function Task2() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleChange }) => (
        <Form>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />

          <br /><br />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />

          <br /><br />

          <button type="submit">
            Login
          </button>

        </Form>
      )}
    </Formik>
  );
}

export default Task2;