import React from 'react';
import $ from '../jquery';
import './piramids.css';
import '../components/product_list/product-list.css';
import '../App.css'

const Piramids = ({ children }) => {
    $(document).on('mousemove', function (e) {

        $('.night').css('top', e.pageY - $('.night').height() / 2);
    });


    return (
        <div className='piramiddiv'>
            <div className="layout piramiddiv">
                <div className="night piramiddiv"></div>
                <div className='productListMain piramiddiv'></div>
                <div>{children}</div>
                <div className="pyramid piramiddiv">
                    <div className="p1 piramiddiv"><div className="shadow"></div></div>
                    <div className="p2 piramiddiv"><div className="shadow"></div></div>
                    <div className="p3 piramiddiv"><div className="shadow"></div></div>
                </div>
                <div className="ground piramiddiv"></div>
            </div>
        </div>
    );
}

export default Piramids;
