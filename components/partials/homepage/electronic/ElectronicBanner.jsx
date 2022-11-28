import React, { Component } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { connect } from 'react-redux';
import BannerItem from '../../../elements/media/BannerItem';

class ElectronicBanner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { banners, promotions } = this.props;
        console.log('banners', banners)
        const carouselSettings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
        };

        return (
            <section className="ps-home-banner">
                <div className="container">
                    <div className="ps-section__left">
                        {banners !== null ? (
                            <Slider
                                {...carouselSettings}
                                className="ps-carousel">
                                {banners.map((item) => (
                                    <BannerItem source={item} key={item.id} />
                                ))}
                            </Slider>
                        ) : (
                            <h1>Empty</h1>
                        )}
                    </div>
                    <div className="ps-section__right">
                        
                        <Link href="/shop">
                            <a className="ps-collection">
                                <img
                                    src={promotions.length>0 ? `//470608-1492144-1-raikfcquaxqncofqfm.stackpathdns.com/public/${promotions[0].photo}`:""}
                                    alt="martfury"
                                />
                            </a>
                        </Link>
                        <Link href="/shop">
                            <a className="ps-collection">
                                <img
                                    src={promotions.length>0 ? `//470608-1492144-1-raikfcquaxqncofqfm.stackpathdns.com/public/${promotions[1].photo}`:""}
                                    alt="martfury"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect((state) => state.media)(ElectronicBanner);
