import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { SwitchGallery } from 'react-custom-product'
import { productAtom } from '../../lib/store';
import Code from '../ui/code/Code';



export default function SwitchGalleryExample() {

  const [product] = useAtom(productAtom)
  const [showCaseImages, setShowCaseImages] = useState<string[]>([])

  const inner = `
export default function SwitchGalleryExample() {

  const showCaseImages = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '...'
  ]

  return <SwitchGallery
    images={showCaseImages}
    cssImage={{
      backgroundSize: ${product === 'store' ? 'contain' : 'cover'},
    }}
  />
}
`;

  useEffect(() => {
    let quantity = 0

    if (product === 'autos') {
      quantity = 4 
    } else if (product === 'store') {
      quantity = 4
    }
    setShowCaseImages(Array.from(Array(quantity).keys()).map(v => {
      if (product === 'autos') {
        return `/${product}/gallery/${v + 1}.webp`
      } else if (product === 'store') {
        return `/${product}/gallery/${v + 1}.png`
      }
      return ''
    }
    ))
  }, [product])

  return (
    <div className="flex flex-col lg:flex-row h-full example relative">
      <h1 className='right-10'>SwitchGallery</h1>
      <div className='actions left-10 text-[14px] md:text-xs'>
      </div>
      <div className="lg:w-1/2 flex justify-center mt-10 order-2 lg:order-1">
        <Code inner={inner} />
      </div>
      <div className="lg:w-full h-80 overflow-hidden flex justify-center order-1 lg:order-2">
        <SwitchGallery
          images={showCaseImages}
          cssImage={{
            backgroundSize: product === 'store' ? 'contain' : 'cover',
            backgroundPosition: product === 'store' ? 'center' : ''
          }}
          cssImageSelector={{
            height: product === 'store' ? '100px' : 'auto',
          }}
          cssImageSelectorContainer={{
            justifyContent: product === 'store' ? 'center' : '',
            background: product === 'store' ? 'white' : ''
          }}
        />
      </div>
    </div>
  );
}