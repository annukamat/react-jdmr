import React, { Component } from 'react';
import { Button, container } from 'react-bootstrap';
import GridLayout from 'react-grid-layout';

import './home.css';

class Home extends Component {
  render() {
    return (
      <>
        <div className="homepage">
          <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
            <div key="a" data-grid={{ x: 0, y: 16, w: 4, h: 20, static: true }}>
              <div className="container">
                <h1>NOTICE</h1>
                <marquee direction="up">
                  <p>this is sample text</p>
                  <p>this is sample text</p>
                  <p>this is sample text</p>
                  <p>this is sample text</p>
                  <p>this is sample text</p>
                  <p>this is sample text</p>
                  <p>this is sample text</p>
                </marquee>
              </div>
            </div>
            <div
              key="b"
              data-grid={{
                x: 3,
                y: 16,
                w: 5,
                h: 1,
                minW: 30,
                maxW: 90,
                static: true,
              }}
            >
              <container>
                <div classNameName="wrapper row2">
                  <div id="container" className="clear">
                    <div id="about-us" className="clear">
                      <div id="about-intro" className="clear">
                        <h2>About Us</h2>
                        <img src="images/demo/960x340.gif" alt="" />
                        <p>
                          In sed neque id libero pretium luctus. Vivamus
                          faucibus. Ut vitae elit. In hac habitasse platea
                          dictumst. Proin et nisl ac orci tempus luctus. Aenean
                          lacinia justo at nisi. Vestibulum sed eros sit amet
                          nisl lobortis commodo. Suspendisse nulla. Vivamus ac
                          lorem. Aliquam pulvinar purus at felis. Quisque
                          convallis nulla id ipsum. Praesent vitae urna. Fusce
                          blandit nunc nec mi. Praesent vestibulum hendrerit
                          ante.
                        </p>
                        <p>
                          Vivamus accumsan. Donec molestie pede vel urna.
                          Curabitur eget sem ornare felis gravida vestibulum.Sed
                          pulvinar, tellus in venenatis vehicula, lorem magna
                          dignissim erat, in accumsan ante lorem sit amet lorem.
                        </p>
                      </div>
                      <div id="team">
                        <h2>Our Team</h2>
                        <ul className="clear">
                          <li className="one_third first">
                            <div className="figure">
                              <img
                                src="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm5.jpg"
                                alt=""
                              />
                              <div className="figcaption">
                                <p className="team_name">Name</p>
                                <p className="team_title">Job Title</p>
                                <p className="team_description">
                                  Vestassapede et donec ut est liberos sus et
                                  eget sed eget. Quisqueta habitur augue magnisl
                                  magna phas ellus sagit titor ant curabi
                                  turpis.
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="one_third">
                            <div className="figure">
                              <img
                                src="https://www.team.gsamdani.com/wp-content/uploads/2016/05/tm5.jpg"
                                alt=""
                              />
                              <div className="figcaption">
                                <p className="team_name">Name</p>
                                <p className="team_title">Job Title</p>
                                <p className="team_description">
                                  Vestassapede et donec ut est liberos sus et
                                  eget sed eget. Quisqueta habitur augue magnisl
                                  magna phas ellus sagit titor ant curabi
                                  turpis.
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </container>
            </div>
            <div key="c" data-grid={{ x: 8, y: 16, w: 1, h: 2, static: true }}>
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FKolkata&amp;src=YW5udWthbWF0MjFAZ21haWwuY29t&amp;src=MmN0dDU2bmF1OWQ2NzBvcGE2YTVwMGw2YWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y2xhc3Nyb29tMTA4MDc1MDYwOTc2NTEzMDkwMjEyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y2xhc3Nyb29tMTEyMzg1ODEyMDgyMTM2ODM5MjQ5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=Y2xhc3Nyb29tMTA3MjExOTQxMjkxMDEyMzgzOTczQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=Y2xhc3Nyb29tMTE0MjQ4NTA0ODk1Mjk2NTAwODYyQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23039BE5&amp;color=%23F4511E&amp;color=%2333B679&amp;color=%23007b83&amp;color=%230B8043&amp;color=%23202124&amp;color=%230047a8&amp;color=%237627bb"
                style={{ border: 'solid 0px #777' }}
                width="400"
                height="300"
                frameborder="0"
                scrolling="no"
              ></iframe>{' '}
            </div>
          </GridLayout>
        </div>
      </>
    );
  }
}

export default Home;
