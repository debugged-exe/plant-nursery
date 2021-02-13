import React from 'react';
import img1 from './plant1.png';
import img2 from './plant2.png';
import img3 from './plant3.png';
import img4 from './plant4.png';
function gallery() {
    return (
        <section>
            <article className="cf">
                <div className="fl w-50 w-25-ns pa3">
                    <a href="https://www.amazon.com/BEYONCÉ-Beyonce/dp/B00KCOMBJC/ref=sr_1_2_twi_lp__3?s=music&ie=UTF8&qid=1480422067&sr=1-2&keywords=beyonce&tag=mrmrs01-20"
                       className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Beyoncé"
                              style={{backgroundImage: `url(${img1})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 w-25-ns pa3">
                    <a href="https://www.amazon.com/99-9-KAYTRANADA/dp/B01D9DBNX2/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480422105&sr=1-1&keywords=kaytranada+vinyl&tag=mrmrs01-20"
                       className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Kaytranada"
                              style={{backgroundImage:`url(${img2})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 w-25-ns pa3">
                    <a href="https://www.amazon.com/Woman-2LP-Set-Full-Album/dp/B01LX3E0ET/ref=sr_1_1?s=music&ie=UTF8&qid=1480422119&sr=1-1&keywords=justice&tag=mrmrs01-20"
                       className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Woman - Justice"
                              style={{backgroundImage:`url(${img3})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 w-25-ns pa3">
                    <a href="https://www.amazon.com/Skin-Flume/dp/B01DD5N35W/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480422133&sr=1-1&keywords=flume&tag=mrmrs01-20"
                       className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Skin - Flume"
                              style={{backgroundImage:`url(${img4})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 pa3">
                    <a href="https://www.amazon.com/Seat-at-Table-Solange/dp/B01LXP7I5N/ref=sr_tnr_p_1_195429011_1_twi_lp__3?s=music&ie=UTF8&qid=1480422087&sr=1-1&keywords=solange+seat+at+the+table&tag=mrmrs01-20"
                       className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Seat at Table Solange"
                              style={{backgroundImage:`url(${img1})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 w-25-ns pa3">
                    <a href="https://www.amazon.com/untitled-unmastered-LP-Kendrick-Lamar/dp/B01DET9BV2/ref=sr_1_3_twi_lp__3?s=music&ie=UTF8&qid=1480370912&sr=1-3&keywords=kendrick+lamar&tag=mrmrs01-20"
                       className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Untitled Unmastered - Kendrick Lamar"
                              style={{backgroundImage:`url(${img2})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-100 w-25-ns pa3">
                    <a href="https://www.amazon.com/Moon-Shaped-Pool-2-LP-Download/dp/B01FDF12UI/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480370971&sr=1-1&keywords=moon+shaped+pool&tag=mrmrs01-20"
                       className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Moon Shaped Pool 2"
                              style={{backgroundImage:`url(${img3})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 w-25-ns pa3">
                    <a href="https://www.amazon.com/Colour-Anything-2-LP/dp/B01F8674B8/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480371036&sr=1-1&keywords=color+in+anything&tag=mrmrs01-20"
                       className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Colour Anything 2"
                              style={{backgroundImage: `url(${img4})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
                <div className="fl w-50 w-25-ns pa3">
                    <a href="https://www.amazon.com/Good-Luck-Do-Your-Best/dp/B01C3IHINI/ref=sr_1_1_twi_lp__3?s=music&ie=UTF8&qid=1480371123&sr=1-1&keywords=good+luck+gold+panda&tag=mrmrs01-20"
                       className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span role="img" aria-label="Good Luck Do Your Best"
                              style={{backgroundImage:`url(${img1})`}}
                              className="bg-center cover aspect-ratio--object"></span>
                    </a>
                </div>
            </article>

        </section>);
}

export default gallery;