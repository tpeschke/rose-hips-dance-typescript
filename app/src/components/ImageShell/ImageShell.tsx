import './ImageShell.css'
import star from '../../assets/star.png'
import portrait from '../../assets/homeImages/portrait.jpg'
import philosophy from '../../assets/homeImages/philosophyPic.jpeg'
import sun from '../../assets/sun.png'
import bellyDanceForTheSoul from '../../assets/classesImages/bellyDanceForTheSoul.jpg'
import morningMovement from '../../assets/classesImages/morningMovement.jpg'
import venmo from '../../assets/venmoQR.jpg'

type SrcOptions = 'star' | 'sun' | 'portrait' | 'philosophy' | 'venmo' | ClassOptions

export type ClassOptions = 'bellyDanceForTheSoul' | 'morningMovement'

interface Props {
    src: SrcOptions,
    alt: string,
    width: number
    height: number
}

export default function ImageShell({ src, alt, width, height }: Props) {

    function getImage(src: SrcOptions) {
        switch (src) {
            case 'star':
                return star
            case 'sun':
                return sun
            case 'portrait':
                return portrait
            case 'philosophy':
                return philosophy
            case 'bellyDanceForTheSoul':
                return bellyDanceForTheSoul
            case 'morningMovement':
                return morningMovement
            case 'venmo':
                return venmo
        }
    }

    return (
        <img src={getImage(src)} alt={alt} width={width} height={height} />
    )
}