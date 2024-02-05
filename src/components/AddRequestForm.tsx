import { Button, Col, Row, Form as BSForm, Alert } from "react-bootstrap";
import {
  Formik,
  Form,
  Field,
  FormikHelpers,
  FieldProps,
} from "formik";
import { Address, NewRequest } from "../types";
import * as Yup from "yup";
import classNames from "classnames";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import addressService from "../services/AddressService";
import AddressSearchInput from "./AddressSearchInput";

export interface AddRequestFormProps {
  onSubmit: (values:NewRequest, actions:FormikHelpers<NewRequest>) => void;
}


const schema = Yup.object().shape({
    shipFromId: Yup.number(),
    shipFromName: Yup.string().min(3, 'Min length is 3').required("Required"),
    shipFromStreet1: Yup.string().min(3, 'Min length is 3').required("Required"),
    shipFromCity: Yup.string().min(3, 'Min length is 3').required("Required"),
    shipFromState: Yup.string().required("Required"),
    shipFromZip: Yup.string().min(3, 'Min length is 3').required("Required"),
    shipToId: Yup.number(),
    shipToName: Yup.string().min(3, 'Min length is 3').required("Required"),
    shipToStreet1: Yup.string().min(3, 'Min length is 3').required("Required"),
    shipToCity: Yup.string().min(3, 'Min length is 3').required("Required"),
    shipToState: Yup.string().required("Required"),
    shipToZip: Yup.string().min(3, 'Min length is 3').required("Required"),
    notes: Yup.string(),
});

export function AddRequestForm({ onSubmit }: AddRequestFormProps) {
  const initialValues: NewRequest = {
    shipFromId: undefined,
    shipFromName: "",
    shipFromStreet1: "",
    shipFromStreet2: "",
    shipFromCity: "",
    shipFromState: "",
    shipFromZip: "",
    shipToId: undefined,
    shipToName: "",
    shipToStreet1: "",
    shipToStreet2: "",
    shipToCity: "",
    shipToState: "",
    shipToZip: "",
    notes: undefined,
  };
  return (
    <div id="AddRequestForm">
      <Row>
        <Col>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                validateOnChange={true}
                onSubmit={onSubmit}
            >
            {(formikProps) => {
                const { errors, touched, isSubmitting, isValid, dirty, setFieldValue, setFieldError, setFieldTouched } = formikProps;

                const ShipFromFieldChange = (address:Address) => {
                    console.log('ShipFromFieldChange', address)
                    setFieldValue('shipFromId', address.id);
                    setFieldTouched('shipFromId', true);
                    setFieldError('shipFromId', undefined);
                    setFieldTouched('shipFromId', true);
                    setFieldValue("shipFromName", address.name);
                    setFieldTouched('shipFromName', true);
                    setFieldError('shipFromName', undefined);
                    setFieldTouched('shipFromName', true);
                    setFieldValue("shipFromStreet1", address.street1);
                    setFieldTouched('shipFromStreet1', true);
                    setFieldError('shipFromStreet1', undefined);
                    setFieldTouched('shipFromStreet1', true);
                    setFieldValue("shipFromStreet2", address.street2 || '');
                    setFieldTouched('shipFromStreet2', true);
                    setFieldError('shipFromStreet2', undefined);
                    setFieldTouched('shipFromStreet2', true);
                    setFieldValue("shipFromCity", address.city);
                    setFieldTouched('shipFromCity', true);
                    setFieldError('shipFromCity', undefined);
                    setFieldTouched('shipFromCity', true);
                    setFieldValue("shipFromState", address.state);
                    setFieldTouched('shipFromState', true);
                    setFieldError('shipFromState', undefined);
                    setFieldTouched('shipFromState', true);
                    setFieldValue("shipFromZip", address.zip);
                    setFieldTouched('shipFromZip', true);
                    setFieldError('shipFromZip', undefined);
                    setFieldTouched('shipFromZip', true);
                }
  
                const ShipToFieldChange = (address:Address) => {
                    console.log('ShipToFieldChange', address)
                    setFieldValue('shipToId', address.id);
                    setFieldTouched('shipToId', true);
                    setFieldError('shipToId', undefined);
                    setFieldTouched('shipToId', true);
                    setFieldValue("shipToName", address.name);
                    setFieldTouched('shipToName', true);
                    setFieldError('shipToName', undefined);
                    setFieldTouched('shipToName', true);
                    setFieldValue("shipToStreet1", address.street1);
                    setFieldTouched('shipToStreet1', true);
                    setFieldError('shipToStreet1', undefined);
                    setFieldTouched('shipToStreet1', true);
                    setFieldValue("shipToStreet2", address.street2 || '');
                    setFieldTouched('shipToStreet2', true);
                    setFieldError('shipToStreet2', undefined);
                    setFieldTouched('shipToStreet2', true);
                    setFieldValue("shipToCity", address.city);
                    setFieldTouched('shipToCity', true);
                    setFieldError('shipToCity', undefined);
                    setFieldTouched('shipToCity', true);
                    setFieldValue("shipToState", address.state);
                    setFieldTouched('shipToState', true);
                    setFieldError('shipToState', undefined);
                    setFieldTouched('shipToState', true);
                    setFieldValue("shipToZip", address.zip);
                    setFieldTouched('shipToZip', true);
                    setFieldError('shipToZip', undefined);
                    setFieldTouched('shipToZip', true);
                }

                return (
                    <Form>
                        <Row>
                            <Col>
                                {Object.keys(errors).length > 0 &&
                                    <Alert variant='danger'>
                                        <ul>
                                            {Object.keys(errors).map((key) => {
                                                const errorKey = key as keyof NewRequest;
                                                return <li key={key}>Field '{key}' is {errors[errorKey]}</li>
                                            })}
                                        </ul>
                                    </Alert>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Row>
                                    <Col>
                                        <BSForm.Group className='mb-4'>
                                            <BSForm.FloatingLabel controlId="shipFromName" label="Ship From Name">
                                                <Field
                                                    name="shipFromName"
                                                    component={AddressSearchInput}
                                                    handleOnChange={ShipFromFieldChange}
                                                />
                                            </BSForm.FloatingLabel>
                                            {(touched.shipFromName && errors.shipFromName) &&
                                            <BSForm.Control.Feedback type="invalid">
                                                {errors.shipFromName}
                                            </BSForm.Control.Feedback>
                                            }
                                        </BSForm.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <BSForm.Group className='mb-4'>
                                            <BSForm.FloatingLabel controlId="floatingInputGrid" label="Address Line 1">
                                                <Field
                                                    id="shipFromStreet1"
                                                    name="shipFromStreet1"
                                                    type="text"
                                                    className={classNames('form-control form-control-lg', {
                                                        'is-valid': (touched.shipFromStreet1 && !errors.shipFromStreet1),
                                                        'is-invalid': (touched.shipFromStreet1 && errors.shipFromStreet1)
                                                    })}
                                                />
                                            </BSForm.FloatingLabel>
                                            {(touched.shipFromStreet1 && errors.shipFromStreet1) &&
                                            <BSForm.Control.Feedback type="invalid">
                                                {errors.shipFromStreet1}
                                            </BSForm.Control.Feedback>
                                            }                                            
                                        </BSForm.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <BSForm.Group className='mb-4'>
                                            <BSForm.FloatingLabel controlId="floatingInputGrid" label="Address Line 2">
                                                <Field
                                                    id="shipFromStreet2"
                                                    name="shipFromStreet2"
                                                    type="text"
                                                    className={classNames('form-control form-control-lg', {
                                                        'is-valid': (touched.shipFromStreet2 && !errors.shipFromStreet2),
                                                        'is-invalid': (touched.shipFromStreet2 && errors.shipFromStreet2)
                                                    })}
                                                />
                                            </BSForm.FloatingLabel>
                                            {(touched.shipFromStreet2 && errors.shipFromStreet2) &&
                                            <BSForm.Control.Feedback type="invalid">
                                                {errors.shipFromStreet2}
                                            </BSForm.Control.Feedback>
                                            }                            
                                        </BSForm.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <BSForm.Group className='mb-4'>
                                            <BSForm.FloatingLabel controlId="floatingInputGrid" label="City">
                                                <Field
                                                    id="shipFromCity"
                                                    name="shipFromCity"
                                                    type="text"
                                                    className={classNames('form-control form-control-lg', {
                                                        'is-valid': (touched.shipFromCity && !errors.shipFromCity),
                                                        'is-invalid': (touched.shipFromCity && errors.shipFromCity)
                                                    })}
                                                />
                                            </BSForm.FloatingLabel>
                                            {(touched.shipFromCity && errors.shipFromCity) &&
                                            <BSForm.Control.Feedback type="invalid">
                                                {errors.shipFromCity}
                                            </BSForm.Control.Feedback>
                                            }                            
                                        </BSForm.Group>
                                    </Col>
                                    <Col md={4}>
                                        <BSForm.Group className='mb-4'>
                                            <BSForm.FloatingLabel controlId="floatingInputGrid" label="State">
                                                <Field
                                                    id="shipFromState"
                                                    name="shipFromState"
                                                    type="text"
                                                    className={classNames('form-control form-control-lg', {
                                                        'is-valid': (touched.shipFromState && !errors.shipFromState),
                                                        'is-invalid': (touched.shipFromState && errors.shipFromState)
                                                    })}
                                                />
                                            </BSForm.FloatingLabel>
                                            {(touched.shipFromState && errors.shipFromState) &&
                                            <BSForm.Control.Feedback type="invalid">
                                                {errors.shipFromState}
                                            </BSForm.Control.Feedback>
                                            }                            
                                        </BSForm.Group>
                                    </Col>
                                    <Col md={4}>
                                        <BSForm.Group className='mb-4'>
                                            <BSForm.FloatingLabel controlId="floatingInputGrid" label="Zip Code">
                                                <Field
                                                    id="shipFromZip"
                                                    name="shipFromZip"
                                                    type="number"
                                                    className={classNames('form-control form-control-lg', {
                                                        'is-valid': (touched.shipFromZip && !errors.shipFromZip),
                                                        'is-invalid': (touched.shipFromZip && errors.shipFromZip)
                                                    })}
                                                />
                                            </BSForm.FloatingLabel>
                                            {(touched.shipFromZip && errors.shipFromZip) &&
                                            <BSForm.Control.Feedback type="invalid">
                                                {errors.shipFromZip}
                                            </BSForm.Control.Feedback>
                                            }                            
                                        </BSForm.Group>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6}>
                                <Row>
                                    <Col>
                                        <BSForm.Group className='mb-4'>
                                            <BSForm.FloatingLabel controlId="shipToName" label="Ship To Name">
                                                <Field
                                                    name="shipToName"
                                                    component={AddressSearchInput}
                                                    handleOnChange={ShipToFieldChange}
                                                />
                                            </BSForm.FloatingLabel>
                                            {(touched.shipToName && errors.shipToName) &&
                                            <BSForm.Control.Feedback type="invalid">
                                                {errors.shipToName}
                                            </BSForm.Control.Feedback>
                                            }                            
                                        </BSForm.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <BSForm.Group className='mb-4'>
                                            <BSForm.FloatingLabel controlId="floatingInputGrid" label="Address Line 1">
                                                <Field
                                                    id="shipToStreet1"
                                                    name="shipToStreet1"
                                                    type="text"
                                                    className={classNames('form-control form-control-lg', {
                                                        'is-valid': (touched.shipToStreet1 && !errors.shipToStreet1),
                                                        'is-invalid': (touched.shipToStreet1 && errors.shipToStreet1)
                                                    })}
                                                />
                                            </BSForm.FloatingLabel>
                                            {(touched.shipToStreet1 && errors.shipToStreet1) &&
                                            <BSForm.Control.Feedback type="invalid">
                                                {errors.shipToStreet1}
                                            </BSForm.Control.Feedback>
                                            }                            
                                        </BSForm.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <BSForm.Group className='mb-4'>
                                            <BSForm.FloatingLabel controlId="floatingInputGrid" label="Address Line 2">
                                                <Field
                                                    id="shipToStreet2"
                                                    name="shipToStreet2"
                                                    type="text"
                                                    className={classNames('form-control form-control-lg', {
                                                        'is-valid': (touched.shipToStreet2 && !errors.shipToStreet2),
                                                        'is-invalid': (touched.shipToStreet2 && errors.shipToStreet2)
                                                    })}
                                                />
                                            </BSForm.FloatingLabel>
                                            {(touched.shipToStreet2 && errors.shipToStreet2) &&
                                            <BSForm.Control.Feedback type="invalid">
                                                {errors.shipToStreet2}
                                            </BSForm.Control.Feedback>
                                            }                            
                                        </BSForm.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <BSForm.Group className='mb-4'>
                                            <BSForm.FloatingLabel controlId="floatingInputGrid" label="City">
                                                <Field
                                                    id="shipToCity"
                                                    name="shipToCity"
                                                    type="text"
                                                    className={classNames('form-control form-control-lg', {
                                                        'is-valid': (touched.shipToCity && !errors.shipToCity),
                                                        'is-invalid': (touched.shipToCity && errors.shipToCity)
                                                    })}
                                                />
                                            </BSForm.FloatingLabel>
                                            {(touched.shipToCity && errors.shipToCity) &&
                                            <BSForm.Control.Feedback type="invalid">
                                                {errors.shipToCity}
                                            </BSForm.Control.Feedback>
                                            }                            
                                        </BSForm.Group>
                                    </Col>
                                    <Col md={4}>
                                        <BSForm.Group className='mb-4'>
                                            <BSForm.FloatingLabel controlId="floatingInputGrid" label="State">
                                                <Field
                                                    id="shipToState"
                                                    name="shipToState"
                                                    type="text"
                                                    className={classNames('form-control form-control-lg', {
                                                        'is-valid': (touched.shipToState && !errors.shipToState),
                                                        'is-invalid': (touched.shipToState && errors.shipToState)
                                                    })}
                                                />
                                            </BSForm.FloatingLabel>
                                            {(touched.shipToState && errors.shipToState) &&
                                            <BSForm.Control.Feedback type="invalid">
                                                {errors.shipToState}
                                            </BSForm.Control.Feedback>
                                            }                            
                                        </BSForm.Group>
                                    </Col>
                                    <Col md={4}>
                                        <BSForm.Group className='mb-4'>
                                            <BSForm.FloatingLabel controlId="floatingInputGrid" label="Zip Code">
                                                <Field
                                                    id="shipToZip"
                                                    name="shipToZip"
                                                    type="number"
                                                    className={classNames('form-control form-control-lg', {
                                                        'is-valid': (touched.shipToZip && !errors.shipToZip),
                                                        'is-invalid': (touched.shipToZip && errors.shipToZip)
                                                    })}
                                                />
                                            </BSForm.FloatingLabel>
                                            {(touched.shipToZip && errors.shipToZip) &&
                                            <BSForm.Control.Feedback type="invalid">
                                                {errors.shipToZip}
                                            </BSForm.Control.Feedback>
                                            }                            
                                        </BSForm.Group>
                                    </Col>
                                </Row>
    
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <BSForm.Group className='mb-4'>
                                    <BSForm.FloatingLabel controlId="floatingInputGrid" label="Notes">
                                        <Field
                                            id="notes"
                                            name="notes"
                                            type="textarea"
                                            className={classNames('form-control form-control-lg', {
                                                'is-valid': (touched.notes && !errors.notes),
                                                'is-invalid': (touched.notes && errors.notes)
                                            })}
                                        />
                                    </BSForm.FloatingLabel>
                                    {(touched.notes && errors.notes) &&
                                    <BSForm.Control.Feedback type="invalid">
                                        {errors.notes}
                                    </BSForm.Control.Feedback>
                                    }                            
                                </BSForm.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button
                                    type='submit'
                                    variant='primary'
                                    size='lg'
                                    disabled={isSubmitting || !isValid || !dirty}
                                >
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                )
            }}
            </Formik>
        </Col>
      </Row>
    </div>
  );
}
