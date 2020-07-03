import React from "react";
import { Formik } from "formik";
import { schema } from "../Validation/Utility/formvalidation"

import {
    Form,
    FormGroup,
    Label,
    Input,
} from "reactstrap";

const Personalform = (props) => {
    return (
        <div className="container">
            <Formik
                initialValues={{
                    species: "",
                    rarity: "",
                    notes: "",
                    picture: "",
                }}
                onSubmit={(values, actions) => {
                    props.save(values)
                    console.log(values);

                }}

                validationSchema={schema}
            >
                {({
                    touched,
                    errors,
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                    setFieldValue,
                    isSubmitting,
                }) => (
                        <div className="row d-flex justify-content-center">
                            <Form className="h-80 w-50 bg-light p-3 col-md-6 m-5 shadow space">
                                <h1>Enter the following details</h1>
                                <FormGroup>
                                    <div>
                                        <div className="mt-4"><Label for="exampleName">Species</Label>
                                            <Input
                                                type="text"
                                                value={values.species}
                                                name="species"
                                                placeholder="Enter name of species"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {touched.species && errors.species && (
                                                <span
                                                    className="text-danger col-md-12 text-left mb-2"
                                                    style={{ fontSize: 12 }}
                                                >
                                                    {errors.species}
                                                </span>
                                            )}
                                            <div class="css-msoou6"></div>

                                        </div>
                                    </div>


                                    <div className="mt-4">
                                        <Label for="exampleSelect">Rarity</Label>
                                        <Input type="select" name="rarity" id="exampleSelect" onChange={handleChange}
                                            onBlur={handleBlur} value={values.rarity}>
                                            <option value="">Select any one</option>
                                            <option value="Common">Common</option>
                                            <option value="Rare">Rare</option>
                                            <option value="Extreamly Rare">Extreamly Rare</option>

                                        </Input>

                                        {touched.rarity && errors.rarity && (
                                            <span
                                                className="text-danger col-md-12 text-left mb-2"
                                                style={{ fontSize: 12 }}
                                            >
                                                {errors.rarity}
                                            </span>
                                        )}

                                    </div>
                                    <div className="mt-4 mb-4 ">
                                        <Label for="exampleDate">Notes</Label>
                                        <Input

                                            type="textarea"
                                            value={values.notes}
                                            name="notes"
                                            placeholder="Add notes"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {touched.notes && errors.notes && (
                                            <span
                                                className="text-danger col-md-12 text-left mb-2"
                                                style={{ fontSize: 12 }}
                                            >
                                                {errors.notes}
                                            </span>
                                        )}
                                    </div>

                                    <Input
                                        type="file"
                                        name="picture"

                                        accept="image/*"
                                        onChange={(event) => {
                                            setFieldValue("picture", event.currentTarget.files[0]);
                                        }}
                                    />
                                    {touched.picture && values.picture && (
                                        <img
                                            src={URL.createObjectURL(values.picture)}
                                            alt="no pic"
                                            height="200"
                                        />
                                    )}
                                </FormGroup>
                                <button type="button" className="bg-primary" onClick={handleSubmit} >Save</button>
                                <button type="button" className="bg-danger ml-5" onClick={handleReset} >Cancel</button>
                            </Form>
                        </div>
                    )}
            </Formik>
        </div>
    );
};
export default Personalform;
