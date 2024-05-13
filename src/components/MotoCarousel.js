import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const MotoCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='carousel-container'>
      <Carousel responsive={responsive}>
        <div className='carousel-card'>
          <a className='carousel-link' href=''>
            <img id='panigale' src='https://images.ctfassets.net/x7j9qwvpvr5s/6Vy7PTvkJpSb4eQBJTDsvi/ad005023bb347bf0e6003da5797aa9fd/PV2-Rd-MY22-Model-Preview-1050x650-v06.png' width={200} height={200}></img>
            <h2 id='panigaleTitle'>Ducati Panigale V4</h2>
            <p id='panigaleDescription'>Rojo Ducati con llantas negras
              Librea negro sobre negro</p>
            <p id='panigalePrice'>$432,600 MXN</p>
          </a>
        </div>
        <div className='carousel-card'>
          <a className='carousel-link' href=''>
            <img id='panigale' src='https://images.ctfassets.net/x7j9qwvpvr5s/4FTWbTAuoWs8QVIy54KHU2/291c35a9257e32d5d6f5b96475a8c74f/MTS-V4-PP-MY22-Model-Preview-1050x650-v06.png' width={200} height={200}></img>
            <h2 id='panigaleTitle'>Multistrada V4 Pikes Peak</h2>
            <p id='panigaleDescription'>Librea dedicada a "Pikes Peak" con llantas de radios negras</p>
            <p id='panigalePrice'>$676,900 MXN</p>
          </a>
        </div>
        <div className='carousel-card'>
          <a className='carousel-link' href=''>
            <img id='panigale' src='https://images.ctfassets.net/x7j9qwvpvr5s/1dL0ilx4g9eUV1NHfvLeHE/ca7707e59bab41e8a6181ce9f9a84aaf/SPIN_DIAVEL_V4_RED.01.png?w=1920&fm=webp&q=95' width={200} height={200}></img>
            <h2 id='panigaleTitle'>Diavel V4</h2>
            <p id='panigaleDescription'>Musculosa, deportiva, exagerada y elegante al mismo tiempo, capaz de magnetizar la atención en cualquier contexto.</p>
            <p id='panigalePrice'>$580,200 MXN</p>
          </a>
        </div>
        <div className='carousel-card'>
          <a className='carousel-link' href=''>
            <img id='panigale' src='https://images.ctfassets.net/x7j9qwvpvr5s/50ROz2HdOdYEKElMawlOLN/c75b0e2913143608033fb2360890f2d8/XDiavel-Nera-SM-MY22-Model-Preview-1050x650.png' width={200} height={200}></img>
            <h2 id='panigaleTitle'>XDiavel Nera</h2>
            <p id='panigaleDescription'>El diseño y la artesanía made in Italy se combinan con la tecnología y la innovación en una moto realizada por Ducati en colaboración con Poltrona Frau's Interiors.</p>
            <p id='panigalePrice'>$626,000 MXN</p>
          </a>
        </div>
        <div className='carousel-card'>
          <a className='carousel-link' href=''>
            <img id='panigale' src='https://images.ctfassets.net/x7j9qwvpvr5s/6PGHHlIyqxjiseChYKbodB/e5891a2b38879c3889646f2b57522a8e/DesertX-Rally-MY23-Model-Preview-1050x650.png' width={200} height={200}></img>
            <h2 id='panigaleTitle'>DesertX Rally</h2>
            <p id='panigaleDescription'>Descubre la aventura en las montañas del Atlas en el Rally DesertX.</p>
            <p id='panigalePrice'>$540,000 MXN</p>
          </a>
        </div>
        <div className='carousel-card'>
          <a className='carousel-link' href=''>
            <img id='panigale' src='https://images.ctfassets.net/x7j9qwvpvr5s/2TAgoHqGfb3JPR3zc28vur/a6968821b4a91dc948181f154b83aa8f/SF-V2-MY22-Model-Preview-1050x650-v06.png' width={200} height={200}></img>
            <h2 id='panigaleTitle'>Streetfighter V2</h2>
            <p id='panigaleDescription'>Rojo Ducati con llantas negras
              Librea negro sobre negro</p>
            <p id='panigalePrice'>$425,900 MXN</p>
          </a>
        </div>
        <div className='carousel-card'>
          <a className='carousel-link' href=''>
            <img id='panigale' src='https://images.ctfassets.net/x7j9qwvpvr5s/2fq6l551352ZeWxgCqIqEY/519209694da4e416e9a3e99784ebc7f3/Hypermotard-698-Mono-RVE-360_00.png?w=1920&fm=webp&q=95' width={200} height={200}></img>
            <h2 id='panigaleTitle'>Hypermotard 698 Mono</h2>
            <p id='panigaleDescription'>La primera Supermotard monocilíndrica de carretera de Ducati, nacida con un único objetivo: transmitir emoción, dominando la escena.</p>
            <p id='panigalePrice'>$319,900 MXN</p>
          </a>
        </div>

      </Carousel>
    </div>
  )
}
