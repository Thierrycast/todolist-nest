import yup from "./settings";

const schemaRegisterUser = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(5),
});

const schemaUpdateUser = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  password: yup.string().min(5),
});

export { schemaRegisterUser, schemaUpdateUser };
