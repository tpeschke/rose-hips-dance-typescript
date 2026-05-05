import './ImageShell.css'
import star from '../../assets/star.png'
import portrait from '../../assets/portrait.jpg'
import sun from '../../assets/sun.png'

type SrcOptions = 'star' | 'portrait' | 'sun'

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
        }
    }

    return (
        <img src={getImage(src)} alt={alt} width={width} height={height} />
    )
}