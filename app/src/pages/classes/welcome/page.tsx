'use client'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import BackgroundImages from '../../../components/backgroundImages/backgroundImages';
import ImageShell from '../../../components/ImageShell/ImageShell';
import RotatingSun from '../../../components/rotatingSun/rotatingSun';
import './welcome.css'
import { useEffect } from 'react';
import RegisteredClassDisplay from './RegisteredClassDisplay/RegisteredClassDisplay';

export default function Welcome() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()

    const registeredClasses = searchParams.get('classes')?.split(',')

    useEffect(() => {
        if (!registeredClasses || registeredClasses?.length === 0) {
            navigate('/')
        }
    })

    return (
        <div className="welcome-page">
            <BackgroundImages />
            <RotatingSun />
            <div className="welcome-card">
                <p className="eyebrow">You're Registered</p>
                <h1>Welcome!</h1>
                <div className="eyebrow">
                    <ImageShell
                        src="star"
                        alt="star"
                        width={35}
                        height={35}
                    />
                </div>

                <p>I'm excited to be a part of your healing journey and look forward to getting to know you.</p>

                <h2 className='eyebrow'>Next Steps</h2>
                <p>Save the following information (if you loose it; no worries, you can always reach out via our <Link to='/contact'>Contact Page</Link>).</p>

                <div>
                    {registeredClasses?.map((nameOfClass: string, index: number) => {
                        return <RegisteredClassDisplay key={index} nameOfClass={nameOfClass} />
                    })}
                </div>

                <p>But, if you have further questions, please don't hesitate to reach out at <Link to='/contact'>Contact Page</Link></p>
                <p>Otherwise, I'll see you in class!</p>
            </div>
        </div>
    )
}