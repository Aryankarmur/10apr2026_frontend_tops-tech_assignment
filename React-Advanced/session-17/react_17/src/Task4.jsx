import { Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({

  playlistName: Yup.string()
    .required("Playlist Name is Required"),

  description: Yup.string(),

  genre: Yup.string()
    .required("Genre is Required"),

});

function Task4() {
  return (
    <Formik
      initialValues={{
        playlistName: "",
        description: "",
        genre: "",
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
            name="playlistName"
            placeholder="Playlist Name"
            value={values.playlistName}
            onChange={handleChange}
          />

          {touched.playlistName &&
            errors.playlistName && (
              <p>{errors.playlistName}</p>
            )}

          <br /><br />

          <textarea
            name="description"
            placeholder="Description"
            value={values.description}
            onChange={handleChange}
          />

          <br /><br />

          <select
            name="genre"
            value={values.genre}
            onChange={handleChange}
          >
            <option value="">
              Select Genre
            </option>

            <option value="Pop">
              Pop
            </option>

            <option value="Rock">
              Rock
            </option>

            <option value="Hip Hop">
              Hip Hop
            </option>

            <option value="Jazz">
              Jazz
            </option>
          </select>

          {touched.genre &&
            errors.genre && (
              <p>{errors.genre}</p>
            )}

          <br /><br />

          <button type="submit">
            Create Playlist
          </button>

        </Form>
      )}
    </Formik>
  );
}

export default Task4;