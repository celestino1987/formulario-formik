import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./App.css";

function App() {
  const [isSent, setIsSent] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          opcion: "",
          sexo:""
        }}
        validate={(value) => {
          let errors = {};
          //validacion de nombre
          if (!value.nombre) {
            errors.nombre = "Debes introducir  un  nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value.nombre)) {
            errors.nombre = "El nombre solo puede tener letas y espacios";
          }
          //validacion correo
          if (!value.correo) {
            errors.correo = "Debes introducir un correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              value.correo
            )
          ) {
            errors.correo = "El correo no puede tener caracteres extraños ";
          }
          if(value.opcion===""){
              errors.opcion="Requerido";

          }
          if(value.sexo===""){
            errors.sexo="Requerido";
          }

          return errors;
        }}
        onSubmit={(value, { resetForm }) => {
          resetForm();
          console.log(value);
          setIsSent(true);
          setTimeout(() => setIsSent(false), 2000);
        }}
      >
        {({ errors }) => (
          //render Prop de formik (  values,
          // touched,
          // errors,
          // dirty,
          // isSubmitting,
          // handleChange,
          // handleBlur,
          // handleSubmit,
          // handleReset,)
          <Form className="formulario">
            <div>
              <label htmlFor="nombre"> Nombre </label>

              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="nombre"
              />
              <ErrorMessage
                name="nombre"
                component={() => <div className="error"> {errors.nombre}</div>}
              />
            </div>

            <div>
              <label htmlFor="correo"> correo </label>
              <Field
                type="email"
                id="correo"
                name="correo"
                placeholder="correo"
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error"> {errors.correo}</div>}
              />
            </div>
            <div>

            <label htmlFor="opcion"> Selecciona </label>
            <Field className="select" as="select"  name="opcion">
              <option value="">select </option>
              <option value="uno">uno</option>
              <option value="dos">dos</option>
              <option value="tres">tres</option>

            </Field>
            <ErrorMessage
                name="opcion"
                component={() => <div className="error"> {errors.opcion}</div>}
              />
            </div>
            <div>
              <label htmlFor="opcion"> <Field type="radio" name="sexo" value="hombre"/> Hombre </label>
                <label htmlFor="opcion"> <Field type="radio" name="sexo" value="mujer"/> Mujer </label>
                <ErrorMessage
                name="sexo"
                component={() => <div className="error"> {errors.sexo}</div>}
              />
           
            </div>
            <button type="submit"> Enviar</button>
            {isSent && <div className="exito">Formulario enviado con exito! </div>}
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;
