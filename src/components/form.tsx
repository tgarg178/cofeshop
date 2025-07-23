import React, { FC } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

// import axios from 'axios';
import { toast } from 'react-hot-toast';
import emailjs from 'emailjs-com';


interface Props {
    page?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChanges?: any;
    placeholder?: string;
}

const EnquiryForm: FC<Props> = ({  onChanges, placeholder, }) => {




// eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = async (values: any, { resetForm }: any) => {
        try {
            toast.loading('Processing');
            await emailjs.send("service_01ispk6", "template_tuey7rr", values,"FEguMM7ZerdBCdRrs");
            toast.dismiss();
            toast.success('Thank you. We will get back to you.');
            resetForm();
            onChanges();

            // }
        } catch (error) {
            toast.error('try again later!');
            console.error('Error submitting form:', error);
        }
    };

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                contact_number: '',
                project: '',
                location: '',
                message: '',
            }}
            // validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >

            <Form>
                <div className="mb-3">
                    <Field type="text" name="name" placeholder="Enter Name" className="form-control" required />
                    <ErrorMessage name="name" component="div" className="error text-danger" />
                </div>
                <div className="mb-3">
                    <Field type="email" name="email" placeholder="Enter Email" className="form-control" required />
                    <ErrorMessage name="email" component="div" className="error text-danger" />
                </div>
                <div className="mb-3">
                    <Field type="text" name="contact_number" placeholder="Enter Contact Number" className="form-control" required />
                    <ErrorMessage name="contact_number" component="div" className="error text-danger" />
                </div>
                <div className="mb-3">
                    <Field type="text" name="project" placeholder={placeholder ? (`Enter ${placeholder}`) : ("Enter Project")} className="form-control" />
                    <ErrorMessage name="project" component="div" className="error text-danger" />
                </div>
                <div className="mb-3">
                    <Field type="text" name="location" placeholder="Enter Location" className="form-control" />
                    <ErrorMessage name="location" component="div" className="error text-danger" />
                </div>
                <div className="mb-3">
                    <Field as="textarea" name="message" placeholder="Enter Message" className="form-control" />
                    <ErrorMessage name="message" component="div" className="error text-danger" />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn backgoundoramge text-white">
                        Submit
                    </button>
                </div>
            </Form>
        </Formik>
    );
};

export default EnquiryForm;
