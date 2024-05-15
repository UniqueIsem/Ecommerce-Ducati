import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const GearCarousel = () => {
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
            <div className='carousel-header'>
                <div className='carousel-title' id='gear-title'>
                    <h1>DRIVING GEAR</h1>
                </div>
                <div className='show-all-container'>
                    <a className='link-show-all-moto'>Show All...</a>
                </div>
            </div>
            <Carousel responsive={responsive}>
                <div className='carousel-gear-card'>
                    <a className='carousel-link' href=''>
                        <img className='carousel-gear-img' id='panigale' src='https://media.ducati.com/EPCResources/GRAPHICS/immagini_apparel/4F/4F43AA7674A57BEF1DB9E9B959FDC2BB.png' width={100} height={100}></img>
                        <h2 id='panigaleTitle'>Ducati Corse C6</h2>
                        <p id='panigaleDescription'>Mono entero racing</p>
                        <p id='panigalePrice'>$39,589 MXN</p>
                    </a>
                </div>
                <div className='carousel-gear-card'>
                    <a className='carousel-link' href=''>
                        <img className='carousel-gear-img' id='panigale' src='https://media.ducati.com/EPCResources/GRAPHICS/immagini_apparel/AE/AEDB9AC42DA6337AB6989A27DC48DD51.png' width={200} height={200}></img>
                        <h2 id='panigaleTitle'>Corse V6</h2>
                        <p id='panigaleDescription'>Casco integralk</p>
                        <p id='panigalePrice'>$29,000 MXN</p>
                    </a>
                </div>
                <div className='carousel-gear-card'>
                    <a className='carousel-link' href=''>
                        <img className='carousel-gear-img' id='panigale' src='https://media.ducati.com/EPCResources/GRAPHICS/immagini_apparel/64/644F78820BE5BAFAFB94EB3DF4F31964.png' width={200} height={200}></img>
                        <h2 id='panigaleTitle'>Ducati Corse V6 Arir - Botas racing</h2>
                        <p id='panigaleDescription'>Las botas Ducati Corse V6 Air, con un diseño al más puro estilo racing, representan lo más alto de la gama en términos de prestaciones y seguridad. </p>
                        <p id='panigalePrice'>$14,490 MXN</p>
                    </a>
                </div>
                <div className='carousel-gear-card'>
                    <a className='carousel-link' href=''>
                        <img className='carousel-gear-img' id='panigale' src='https://media.ducati.com/EPCResources/GRAPHICS/immagini_apparel/B9/B98B8DEAB44CF413DEB2A6881C7856EF.png' width={200} height={200}></img>
                        <h2 id='panigaleTitle'>Ducati Corse C5 - Guantes de piel</h2>
                        <p id='panigaleDescription'>Guantes exclusivos, desarrollados en colaboración con Dainese, especificos para el uso en pista.</p>
                        <p id='panigalePrice'>$10,900 MXN</p>
                    </a>
                </div>
                <div className='carousel-gear-card'>
                    <a className='carousel-link' href=''>
                        <img className='carousel-gear-img' id='panigale' src='https://media.ducati.com/EPCResources/GRAPHICS/immagini_apparel/1B/1BA49BB1432A9DA4477303961BD96F3F.png' width={200} height={200}></img>
                        <h2 id='panigaleTitle'>Ducati Corse C6 - Chaqueta de piel</h2>
                        <p id='panigaleDescription'>Máximas prestaciones con la exclusiva chaqueta Ducati Corse C6 diseñada por Aldo Drudi y confeccionada por Dainese en exclusiva para Ducati.</p>
                        <p id='panigalePrice'>$18,389 MXN</p>
                    </a>
                </div>
                <div className='carousel-gear-card'>
                    <a className='carousel-link' href=''>
                        <img className='carousel-gear-img' id='panigale' src='https://media.ducati.com/EPCResources/GRAPHICS/immagini_apparel/56/5618269AFE643EB70678362C932D4303.png' width={200} height={200}></img>
                        <h2 id='panigaleTitle'>Replica Bagnaia - Casco integral</h2>
                        <p id='panigaleDescription'>Ponte en la piel del grandísimo piloto Pecco Bagnaia y lleva el casco Replica Bagnaia de derivación racing para un uso deportivo.</p>
                        <p id='panigalePrice'>$19,900 MXN</p>
                    </a>
                </div>
                <div className='carousel-gear-card'>
                    <a className='carousel-link' href=''>
                        <img className='carousel-gear-img' id='panigale' src='https://media.ducati.com/EPCResources/GRAPHICS/immagini_apparel/2C/2CCA048AE592EA6A635F03E266242A59.png' width={200} height={200}></img>
                        <h2 id='panigaleTitle'>Atacama C2 - Chaqueta de tela</h2>
                        <p id='panigaleDescription'>Súbete a tu moto y vive tu deseo de aventura con la exclusiva chaqueta diseñada por Aldo Drudi y fabricada por Spidi con el valioso apoyo de los probadores de Ducati.</p>
                        <p id='panigalePrice'>$17,390 MXN</p>
                    </a>
                </div>
                

            </Carousel>
        </div>
    )
}
