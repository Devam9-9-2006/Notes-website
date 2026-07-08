import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Pin,
  Star,
  Archive,
  Trash2,
  RotateCcw,
} from "lucide-react";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  note: Yup.string().required("Note is required"),
});

function NoteForm({ addNote }) {
  const initialValues = {
    title: "",
    note: "",
    favorite: false,
    archive: false,
    trash: false,
  };

  const handleSubmit = (values, { resetForm }) => {
    const newNote = {
      id: Date.now(),
      title: values.title,
      note: values.note,
      favorite: values.favorite,
      archive: values.archive,
      trash: values.trash,
    };

    console.log(newNote); // Check the saved data

    addNote(newNote);

    resetForm();
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-3xl rounded-2xl border border-gray-700 bg-[#232427] shadow-xl">

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, resetForm }) => (
            <Form className="p-6">

              {/* Title */}
              <div className="flex justify-between items-center">
                <Field
                  name="title"
                  placeholder="Title"
                  className="w-full bg-transparent text-white text-2xl outline-none"
                />

                <Pin className="text-gray-400" />
              </div>

              <ErrorMessage
                name="title"
                component="p"
                className="text-red-500 text-sm mt-2"
              />

              {/* Note */}
              <Field
                as="textarea"
                rows="6"
                name="note"
                placeholder="Take a note..."
                className="w-full mt-5 bg-transparent text-white resize-none outline-none"
              />

              <ErrorMessage
                name="note"
                component="p"
                className="text-red-500 text-sm mt-2"
              />

              {/* Status Buttons */}
              <div className="flex gap-3 flex-wrap mt-6">

                {/* Favorite */}
                <button
                  type="button"
                  onClick={() => {
                    setFieldValue("favorite", !values.favorite);
                    setFieldValue("archive", false);
                    setFieldValue("trash", false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    values.favorite
                      ? "bg-yellow-500 text-black"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  <Star size={18} />
                  Favorite
                </button>

                {/* Archive */}
                <button
                  type="button"
                  onClick={() => {
                    setFieldValue("archive", !values.archive);
                    setFieldValue("favorite", false);
                    setFieldValue("trash", false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    values.archive
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  <Archive size={18} />
                  Archive
                </button>

                {/* Trash */}
                <button
                  type="button"
                  onClick={() => {
                    setFieldValue("trash", !values.trash);
                    setFieldValue("favorite", false);
                    setFieldValue("archive", false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    values.trash
                      ? "bg-red-600 text-white"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  <Trash2 size={18} />
                  Trash
                </button>

              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 mt-8">

                <button
                  type="button"
                  onClick={() => resetForm()}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg"
                >
                  <RotateCcw className="inline mr-2" size={18} />
                  Clear
                </button>

                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
                >
                  Save Note
                </button>

              </div>

            </Form>
          )}
        </Formik>

      </div>
    </div>
  );
}

export default NoteForm;