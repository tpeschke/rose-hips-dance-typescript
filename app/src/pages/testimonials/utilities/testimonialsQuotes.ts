export interface TestimonialInfo {
    id: string,
    author: string,
    fullQuote: string[],
    pullQuote: string[]
}

const testimonialQuotes: TestimonialInfo[] = [
    {
        id: 'Shannon-Charlson',
        author: 'Shannon Charlson',
        fullQuote: [
            "Tiarra is not only an exceptional dancer, she is also patient, and intuitive to your somatic needs. ",
            "Tiarra teaches you not only dance moves, but breaks down how to make them as controlled as possible. Tiarra truly wants to make you shine.",
            "She is very knowledgeable of the human body, Tiarra not only guides you in moves, she helps find accommodations if you have some mobility issues. ",
            "Another wonderful quality Tiarra possesses is she is warm and welcoming. Not all teachers know how to make you feel a sense of belonging, but Tiarra encourages a sense of community.",
            "I have worked with many dance teachers over the years, and Tiarra is one of the best I have had the pleasure to learn from."
        ],
        pullQuote: [
            "Tiarra truly wants to make you shine.",
            "[...]",
            "Not all teachers know how to make you feel a sense of belonging, but Tiarra encourages a sense of community.",
            "I have worked with many dance teachers over the years, and Tiarra is one of the best I have had the pleasure to learn from."
        ]
    }, {
        id: 'Dayah-Salgado',
        author: 'Dayah Salgado',
        fullQuote: [
            "I've known Tiarra as a dancer and teacher for over a decade. She is very knowledgeable and passionate about her work and it shows through her focus on wellness and the individual. She's prompt, courteous, and thoughtful to all participants, and creates a calm and welcoming environment 😊",
            "I really love the weekly movement class! It's a great low-impact activity where connection with your breath and body is the focus and it helps ground me for the day to be present like that. Modifiers for moves allow you to go at your own pace, encouraging you to listen to your body and respect your limitations. I can highly recommend this class as a way to get in touch with both mind and body!"
        ],
        pullQuote: [
            "She is very knowledgeable and passionate about her work and it shows through her focus on wellness and the individual. She's prompt, courteous, and thoughtful to all participants, and creates a calm and welcoming environment 😊"
        ]
    }, {
        id: 'Stephanie-Salazar',
        author: 'Stephanie Salazar',
        fullQuote: [
            "If I still lived in Utah I'd be back in Tiarra’s class! She creates such a liberating and safe space to come alive in. I'm excited for all who find their way home in her class"
        ],
        pullQuote: [
            "If I still lived in Utah I'd be back in Tiarra’s class! She creates such a liberating and safe space to come alive in. I'm excited for all who find their way home in her class"
        ]
    }, {
        id: 'Suzanne Richardson',
        author: 'Suzanne Richardson',
        fullQuote: [
            "I highly recommend Tiarra Anaya! She is one of the best dance teachers I have ever danced with. She is always very prepared, professional and organized. It is obvious she puts a lot of time and effort into planning each of her classes.",
            "I love how she has her students start in a circle and gives them an open ended question to answer while doing warm up moves. There is no pressure. It's a fun way to get to know one another and foster a sense of community. After the circle, she will often drill basic belly dance moves which helps solidify them as well as creating an opportunity for questions students might have. For the remainder of class, she will teach a choreography which is also helpful in solidifying the moves but is also a sort of reward for working hard in the class. She will usually end class with the \"dancer's prayer\"  as a  cool down.",
            "If a dancer applies themselves in her classes, they will gain a strong belly dance foundation, proper technique, fun choreography and have a great time while learning it!"
        ],
        pullQuote: [
            "I highly recommend Tiarra Anaya! She is one of the best dance teachers I have ever danced with."
        ]
    }
]

export default testimonialQuotes