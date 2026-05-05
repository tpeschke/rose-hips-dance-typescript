import './ImageShell.css'
import star from '../../assets/star.png'
import portrait from '../../assets/portrait.jpg'
import sun from '../../assets/sun.png'
import bellyDanceForTheSoul from '../../assets/classesImages/bellyDanceForTheSoul.jpg'

type SrcOptions = 'star' | 'portrait' | 'sun' | ClassOptions

type ClassOptions = 'bellyDanceForTheSoul'

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
            case 'portrait':
                return portrait
            case 'sun':
                return sun
            case 'bellyDanceForTheSoul':
                return bellyDanceForTheSoul
        }
    }

    return (
        <img src={getImage(src)} alt={alt} width={width} height={height} />
    )
}