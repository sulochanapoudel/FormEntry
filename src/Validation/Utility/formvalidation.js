import * as Yup from "yup";

export const schema = Yup.object().shape({
  species: Yup.string()
    .min(3, "Too Short")
    .max(50, "Too long")
    .required("REQUIRED Field"),
  rarity: Yup.string()
    .oneOf(["Common", "Rare", "Extreamly Rare"])
    .required("REQUIRED Field"),
  notes: Yup.string()
    .min(3, "Too Short")
    .max(100, "Too long")
    .required("REQUIRED Field"),
});
