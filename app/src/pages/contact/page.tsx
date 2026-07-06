import './contact.css'
import { Ref, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import ImageShell from '../../components/ImageShell/ImageShell';
import BackgroundImages from '../../components/backgroundImages/backgroundImages';
import RotatingSun from '../../components/rotatingSun/rotatingSun';
import Seo from '../../seo/Seo';
import { contactBreadcrumb } from '../../seo/structuredData';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_KEY } from '../../app-config';

export default function Contact() {
    const form: Ref<HTMLFormElement> | undefined = useRef(null);

    const sendEmail = (event: any) => {
        event.preventDefault();

        const interestInClass = form?.current?.getElementsByTagName('input')[0].checked
        if (!interestInClass && form?.current && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_KEY) {
            emailjs
                .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
                    publicKey: EMAILJS_KEY,
                })
                .then(
                    () => {
                        toast.success('Email has been sent. I\'ll reach out shortly!')
                    },
                    (error: any) => {
                        toast.error('FAILED...', error.text)
                    },
                );
        } else {
            toast.error('The form wasn\'t set up properly; please retry reloading.')
        }
    };

    return (
        <div className="contact-page">
            <Seo
                title="Contact | Rose Hips Dance"
                description="Have questions about belly dance or therapeutic movement classes at Rose Hips Dance in Ogden, Utah? Send Tiarra a message and she'll reach out shortly."
                path="/contact"
                jsonLd={contactBreadcrumb}
            />
            <BackgroundImages />
            <RotatingSun />
            <div className="contact-card">
                <p className="eyebrow">Questions?</p>
                <h1>Contact</h1>
                <div className="eyebrow">
                    <ImageShell
                        src="star"
                        alt="star"
                        width={35}
                        height={35}
                    />
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <label>Are you interested in this class?</label>
                    <input type="checkbox" name="class_interest" />
                    <input type="text" name="name" placeholder='Name' required={true} />
                    <input type="email" name="email" placeholder='Email' required={true} />
                    <textarea name="message" placeholder='Message' required={true} />
                    <button type="submit" className='gold'> Send </button>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                transition={Bounce}
            />
        </div>
    )
}