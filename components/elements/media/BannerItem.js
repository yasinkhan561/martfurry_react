import React from 'react';
import Link from 'next/link';
import { baseUrl } from '../../../repositories/Repository';

const BannerItem = ({ source }) => {
    console.log('source', source)
    const cdn = "http://470608-1492144-1-raikfcquaxqncofqfm.stackpathdns.com/public/"
    if (source) {
        return (
            <Link href="/shop">
                <a>
                    <img src={`${cdn}/${source.photo}`} alt="martfury" />
                </a>
            </Link>
        );
    } else {
        return (
            <Link href="/shop">
                <a>
                    <a className="ps-collection">
                        <img src="/static/img/not-found.jpg" alt="martfury" />
                    </a>
                </a>
            </Link>
        );
    }
};

export default BannerItem;
