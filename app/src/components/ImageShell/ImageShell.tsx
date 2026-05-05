import './ImageShell.css'
import star from '../../assets/star.png'
import portrait from '../../assets/portrait.jpg'

interface Props {
    src: string,
    alt: string,
    width: number
    height: number
}

export default function ImageShell({ src, alt, width, height }: Props) {

    function getImage(src: string) {
        switch (src) {
            case 'star':
                return star
            case 'portrait':
                return portrait
            default:
                return ''
        }
    }

    return (
        <img src={getImage(src)} alt={alt} width={width} height={height} />
    )
}