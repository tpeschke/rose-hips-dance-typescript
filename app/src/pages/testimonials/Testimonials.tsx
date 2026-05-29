import BackgroundImages from '../../components/backgroundImages/backgroundImages'
import ImageShell from '../../components/ImageShell/ImageShell'
import './Testimonials.css'
import testimonialQuotes, { TestimonialInfo } from './utilities/testimonialsQuotes'

export default function Testimonials() {
    const petals = [
        {
            left: "8%",
            animationDuration: "9s",
            animationDelay: "0s",
        },
        {
            left: "13%",
            animationDuration: "9s",
            animationDelay: "7s",
        },
        {
            left: "18%",
            animationDuration: "12s",
            animationDelay: "2s",
        },
        {
            left: "23%",
            animationDuration: "11s",
            animationDelay: "8s",
        },
        {
            left: "28%",
            animationDuration: "8s",
            animationDelay: "4s",
        },
        {
            left: "61%",
            animationDuration: "7s",
            animationDelay: "10s",
        },
        {
            left: "72%",
            animationDuration: "11s",
            animationDelay: "1s",
        },
        {
            left: "77%",
            animationDuration: "6s",
            animationDelay: "9s",
        },
        {
            left: "85%",
            animationDuration: "7s",
            animationDelay: "3s",
        },
        {
            left: "89%",
            animationDuration: "8s",
            animationDelay: "4s",
        },
        {
            left: "92%",
            animationDuration: "13s",
            animationDelay: "5s",
        },
    ];

    return (
        <div className='testimonials'>
            <div className="petal-shell">
                {petals.map((petal, index) => {
                    return <div key={index} className="petal" style={petal}></div>;
                })}
            </div>
            <BackgroundImages />
            <div className='testimonial-card-shell'>
                {testimonialQuotes.map((testimonial, index) => <TestimonialShell key={testimonial.author} isOdd={index % 2 === 1} {...testimonial} />)}
            </div>
        </div>
    )
}

function TestimonialShell({ id, author, fullQuote, isOdd }: TestimonialInfo & { isOdd: boolean }) {

    return (
        <div id={id} className={'testimonial-card' + (isOdd ? ' odd' : '')}>
            <h1>{author}</h1>
            <div className="middle-divider">
                <ImageShell
                    src="star"
                    alt="star"
                    width={35}
                    height={35}
                />
                <div className='gold-divider'></div>
            </div>
            <div className='full-quote-shell'>
                {fullQuote.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
        </div>
    )
}