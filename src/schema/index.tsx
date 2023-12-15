import * as Yup from "yup";

const validationLoginSchema = ():Yup.ObjectSchema<any> => {
    return Yup.object().shape({
        username: Yup.string().required("This field is required"),
        password: Yup.string().required("This field is required"),
    });
}

const validationRegisterSchema = ():Yup.ObjectSchema<any> => {
    return Yup.object().shape({
      firstname: Yup.string()
        .test(
          "len",
          "Firstname must be between 1 and 50 characters.",
          (val: any) =>
            val &&
            val.toString().length >= 1 &&
            val.toString().length <= 50
        )
        .required("This field is required!"),
      lastname: Yup.string()
        .test(
          "len",
          "Lastname must be between 1 and 50 characters.",
          (val: any) =>
            val &&
            val.toString().length >= 1 &&
            val.toString().length <= 50
        )
        .required("This field is required!"),
      username: Yup.string()
        .test(
          "len",
          "The username must be between 3 and 20 characters.",
          (val: any) =>
            val &&
            val.toString().length >= 3 &&
            val.toString().length <= 20
        )
        .required("This field is required!"),
      email: Yup.string()
        .email("This is not a valid email.")
        .required("This field is required!"),
      password: Yup.string()
        .test(
          "len",
          "The password must be between 6 and 40 characters.",
          (val: any) =>
            val &&
            val.toString().length >= 6 &&
            val.toString().length <= 40
        )
        .required("This field is required!"),
    });
}

export {
    validationLoginSchema,
    validationRegisterSchema
}