
import './App.css';
import logo from './Assets/logo-new.png';

import {Container, Row, Col, Carousel, Form, FloatingLabel, Button } from 'react-bootstrap';

import * as Icon from 'react-bootstrap-icons';

import up from './Assets/Asset 3.svg';
import down from './Assets/Asset 4.svg';

import services from './Assets/services.png';

import portfolio1 from './Assets/portfolio-1.jpg';
import portfolio2 from './Assets/portfolio-2.jpg';
import portfolio3 from './Assets/portfolio-3.jpg';
import portfolio4 from './Assets/portfolio-4.jpg';
import portfolio5 from './Assets/portfolio-5.jpg';

import quoteStart from './Assets/quote-start.png';
import quoteEnd from './Assets/quote-end.png';

import phone from './Assets/phone.svg';
import email from './Assets/email.svg';
import insta from './Assets/insta.svg';
import pinterest from './Assets/pinterest.svg';





/*const primaryNav = document.querySelector(".primary-navigation");
const navToggles = document.querySelector(".mobile-nav-toggle");



  navToggles.addEventListener('click' , () => {
    const visibility = primaryNav.getAttribute('data-visible');
  //console.log(visibility);
  
  if(visibility === "false"){
    primaryNav.setAttribute("data-visible" , true);
  }
  else if(visibility === "true"){
    primaryNav.setAttribute("data-visible" , false);
}

});*/
 function App() {

  function setnav(){
    const primaryNav = document.querySelector(".mobile-nav");
    const navToggle = document.querySelector(".mobile-nav-toggle");

    const visibility = primaryNav.getAttribute('data-visible');
    if(visibility === "false"){
      primaryNav.setAttribute("data-visible" , true);
      navToggle.setAttribute("aria-expanded", true);
      document.querySelector("body").style.overflow='hidden';
     
      
    }
    else if(visibility === "true"){
      primaryNav.setAttribute("data-visible" , false);
      navToggle.setAttribute("aria-expanded", false);
      document.querySelector("body").style.overflow='auto';
      }
  }









 

  return (
    <div className="App">

  {/* ---------- HERO section  ---------- */}

     <div className="hero" id="home">
      <header className='nav primary-header flex'>
        <div className='logo-bg'>
          <img src={logo} alt="logo" className='logo'/>
        </div>

  <button  className="mobile-nav-toggle" aria-controls='primary-navigation'  
      aria-expanded="false"  onClick={setnav}><span></span></button>
    <nav>
      <ul className='lg-nav flex'>
        <li><a href="home">HOME</a></li>
        <li><a href="#about" >ABOUT US</a></li>
        <li><a href="#services" >OUR SERVICES</a></li>
        <li><a href="#portfolio" >PORTFOLIOS</a></li>
        <li><a href="#contact" >CONTACT</a></li>
        <li><a href="#faq" >FAQs</a></li>
      </ul>

      <ul id='primary-navigation'  data-visible="false" className='mobile-nav flex'>
        <li><a href="home"><Icon.House className='me-2'/>HOME</a></li>
        <li><a href="#about" onClick={setnav}><Icon.Person className='me-2' />ABOUT US</a></li>
        <li><a href="#services" onClick={setnav}><Icon.BagHeart className='me-2'/>OUR SERVICES</a></li>
        <li><a href="#portfolio" onClick={setnav}><Icon.Briefcase className='me-2'/>PORTFOLIOS</a></li>
        <li><a href="#contact" onClick={setnav}><Icon.TelephoneForward className='me-2'/>CONTACT</a></li>
        <li><a href="#faq" onClick={setnav}><Icon.QuestionSquare className='me-2'/>FAQs</a></li>
        
        <div className='mobile-nav-footer align-items-center'>
          <a href="https://www.instagram.com/shaadi.mein.zarooor.aana/?igshid=YmMyMTA2M2Y%3D" className='mb-3' target="blank" onClick={setnav}><Icon.Instagram className='me-2' width={20} height={20}/>Instagram</a>
          <a href="https://in.pinterest.com/digitalinvitationsmza/" target="blank" onClick={setnav}><Icon.Pinterest className='me-2' width={20} height={20}/>Pinterest</a>
        </div>
      </ul>
      

    </nav>
    </header>

     </div>

       {/* ---------- ABOUT US section  ---------- */}
<section id='about'>
    <Container className='about mt-5'>
      <Row className="text-center justify-content-center" data-aos="fade-up" data-aos-duration="500">
       
        <Col xs={10} md={5} >
        <img src={up} alt="upper"/>
        <h1>ABOUT US</h1>
        <img src={down} alt="upper"/>
        </Col>
        <h1 className='authentic'>Wedding Invites For You !!</h1>
</Row>
      </Container>

      <div className='about-data mt-3 text-center py-4' >
        <Container>
        <p className='p-0' data-aos="zoom-in" data-aos-duration="600">The world is going digital, so are the invites.
             Come, Let’s design a customised e-invite for your special event and mark it
        </p>
        </Container>
      </div>
      </section>
     

  {/* ---------- OUR SERVICES section  ---------- */}

  <section id="services">
  <Container className='services mt-5'>
      <Row className="text-center justify-content-center">
        <Col xs={10} md={5} data-aos="fade-up" data-aos-duration="500">
          <img src={up} alt="upper"/>
          <h1>OUR SERVICES</h1>
          <img src={down} alt="upper"/>
        </Col>
      </Row>
    </Container>  

    <div className='services-data py-4 mt-3'>
      <Container>
      <Row className="d-flex align-items-center" data-aos="zoom-in" data-aos-duration="600">
        <Col md={6} className="mb-4 mb-md-0">
          <img src={services} alt="service" className='img-fluid'/>
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <div>
            <h2 className=' mb-4 mb-md-5'><Icon.ChatLeftHeart className='me-3'/>E-INVITES/VIDEO INVITES</h2>
            <h2 className='mb-4 mb-md-5'><Icon.PostcardHeart className='me-3'/>PDF/JPEG INVITES</h2>
            <h2 className='mb-4 mb-md-0'><Icon.FiletypeGif className='me-3'/>GIF INVITES</h2>
          </div>
        </Col>
      </Row>
      </Container>
    </div>    
  </section>

  {/* ---------- PORTFOLIO section  ---------- */}

  <section id="portfolio">
  <Container className='portfolio mt-5'>
      <Row className="text-center justify-content-center">
        <Col xs={10} md={5} data-aos="fade-up" data-aos-duration="500">
          <img src={up} alt="upper"/>
          <h1>PORTFOLIO</h1>
          <img src={down} alt="upper"/>
        </Col>
      </Row>

      <Row className="mt-3 g-3 justify-content-center">
        <Col md={4}>
          <img src={portfolio1} alt="portfolio-1" className='img-fluid' data-aos="fade-up" data-aos-duration="400"/>
        </Col>
        <Col md={4}>
          <img src={portfolio2} alt="portfolio-2" className='img-fluid' data-aos="fade-up" data-aos-duration="500"/>
        </Col>
        <Col md={4}>
          <img src={portfolio3} alt="portfolio-3" className='img-fluid' data-aos="fade-up" data-aos-duration="600"/>
        </Col>
        <Col md={6}>
          <img src={portfolio4} alt="portfolio-4" className='img-fluid w-100' data-aos="fade-up" data-aos-duration="700"/>
        </Col>
        <Col md={6}>
          <img src={portfolio5} alt="portfolio-5" className='img-fluid w-100' data-aos="fade-up" data-aos-duration="800"/>
        </Col>
        
      </Row>
   

    </Container> 


    </section> 

    {/* ---------- Reviews section  ---------- */}

  <section id="reviews">
    <Container className='reviews mt-5'>
      <Row className="text-center justify-content-center">
        <Col xs={10} md={5} data-aos="fade-up" data-aos-duration="500">
          <img src={up} alt="upper"/>
          <h1>REIVIEWS</h1>
          <img src={down} alt="upper"/>
        </Col>
      </Row>
    </Container>

    <div className='reviews-data pt-5 pb-4 mt-3'>
    <Carousel >
      <Carousel.Item >
      <Container>  
        <Row className='justify-content-center text-center'>
            <Col xs={8} md={11} className="p-0">
              <img src={quoteStart} alt="quoteStart" className='img-fluid'/>
            <p data-aos="zoom-in" data-aos-duration="800">I got a wedding invite created from Shadi Mein Jarooor Aana.  They are utterly professional individuals. They assisted me in getting the precise invitation I desired. All the updates I requested from them were made. Excellent services in every way. Will without a doubt suggest them to everyone for their excellent service and helpful attitude.</p>
            <img src={quoteEnd} alt="quoteEnd" className='img-fluid mb-5'/>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>

      <Carousel.Item >
        <Container> 
          <Row className='justify-content-center text-center'>
            <Col xs={8} md={11}>
            <img src={quoteStart} alt="quoteStart" className='img-fluid'/>
            <p>Love the e-invitations; such a wonderful method to send out invitations, and the executives are so pleasant to interact with. Thanks to the Shaadi Mein Zarooor Aana team, I received a gorgeous wedding invitation.</p>
            <img src={quoteEnd} alt="quoteEnd" className='img-fluid mb-5'/>
            </Col>
          </Row>
        </Container>
       </Carousel.Item>

       <Carousel.Item >
        <Container> 
          <Row className='justify-content-center text-center'>
            <Col xs={8} md={11}>
            <img src={quoteStart} alt="quoteStart" className='img-fluid'/>
            <p>This is the most creative and excellent invitation card company I have ever seen. I personally used this for my birthday party and am really delighted. An excellent product that offers great value. Thank you for this wonderful stuff.
            </p>
            <img src={quoteEnd} alt="quoteEnd" className='img-fluid mb-5'/>
            </Col>
          </Row>
        </Container>
       </Carousel.Item>

       <Carousel.Item>
        <Container> 
          <Row className='justify-content-center text-center'>
            <Col xs={8} md={11}>
            <img src={quoteStart} alt="quoteStart" className='img-fluid'/>
            <p>Excellent service, fantastic designs. Full satisfaction of all needs, one stop shop for all your invitation necessities. I appreciate your help.</p>
            <img src={quoteEnd} alt="quoteEnd" className='img-fluid mb-5'/>
            </Col>
          </Row>
        </Container>
       </Carousel.Item>

       <Carousel.Item>
        <Container> 
          <Row className='justify-content-center text-center'>
            <Col xs={8} md={11}>
            <img src={quoteStart} alt="quoteStart" className='img-fluid'/>
            <p>They created the perfect wedding invitation that I was looking for. They have a kind and expert staff. Loved their work and the way they handled things. Highly advised. Do try them out.</p>
            <img src={quoteEnd} alt="quoteEnd" className='img-fluid mb-5'/>
            </Col>
          </Row>
        </Container>
       </Carousel.Item>


      </Carousel>
      </div>
  </section>

{/* ------- FAQs SECTION --------------------- */}
  <section id="faq">
    <Container className='faq mt-5'>
      <Row className="text-center justify-content-center">
        <Col xs={10} md={5} data-aos="fade-up" data-aos-duration="500">
          <img src={up} alt="upper"/>
          <h1>FAQs</h1>
          <img src={down} alt="upper"/>
        </Col>
      </Row>

      <Row className="mt-3 justify-content-center">
        <Col md={12}>
        <div className="accordion" id="accordionExample">
      <div className="accordion-item">
    <h5 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      What are the charges of the Invitation?
      </button>
    </h5>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p><Icon.ArrowRight className='me-2'/>Charges varies based on your design and work involved, you can select the template of your choice and send us the query for the estimate.</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h5 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      How many changes are allowed after the approval draft?
      </button>
    </h5>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p><Icon.ArrowRight className='me-2'/>Only two changes are allowed after the final approval draft.</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h5 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Do you make PDF invites?
      </button>
    </h5>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p><Icon.ArrowRight className='me-2'/>Yes we do make PDF invites, and you can add multiple pages in your invite with additional per page cost.</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h5 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Can the changes be done after the Final Delivery?
      </button>
    </h5>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p><Icon.ArrowRight className='me-2'/>After Final Delivery any change is chargeable which is subjected to type of change.</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h5 className="accordion-header" id="headingFive">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      Does the invitation comes for both sides (Bride + Groom)?
      </button>
    </h5>
    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p><Icon.ArrowRight className='me-2'/>No, invite for both sides is treated as 2 different orders if you select 2 different designs.
        However, if the same design is selected for both sides then the 2nd invite will be charged at a discounted price.</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h5 className="accordion-header" id="headingSix">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      Can you remove Branding from the Final Invites?
      </button>
    </h5>
    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p><Icon.ArrowRight className='me-2'/>All the final invites come with our branding at the end. Additional fee is charged to get it removed, as it comes with a cost of promotion.</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h5 className="accordion-header" id="headingSeven">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
      How many pages are there in E-invites?
      </button>
    </h5>
    <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p><Icon.ArrowRight className='me-2'/>E-invites can be a one pager or you can have multiple pages depending on your requirement.</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h5 className="accordion-header" id="headingEight">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
      What language you use to make invitations?
      </button>
    </h5>
    <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p><Icon.ArrowRight className='me-2'/>We make invites in English, Hindi & Marathi.</p>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h5 className="accordion-header" id="headingNine">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
      Do you print invites?
      </button>
    </h5>
    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p><Icon.ArrowRight className='me-2'/>Our products are for digital use only and we don’t do the printing.</p>
      </div>
    </div>
  </div>

</div>
        </Col>
      </Row>
    </Container>
</section>

{/* ------- CONTACT SECTION --------------------- */}
<section id="contact">
    <Container className='contact mt-5'>
      <Row className="text-center justify-content-center">
        <Col xs={10} md={5} data-aos="fade-up" data-aos-duration="500">
          <img src={up} alt="upper"/>
          <h1>CONTACT</h1>
          <img src={down} alt="upper"/>
        </Col>
      </Row>

      <Row className="justify-content-center mt-3 mb-3">
        <Col md={3} className="text-center">
          <img src={logo} className="contact-logo img-fluid mb-3 mb-md-0" alt="contact-logo" data-aos="zoom-in" data-aos-duration="600"/>
        </Col>
        </Row>


        <Row className="mb-5">
          <Col md={6} className="text-center">
            <Form action='./Assets/contact.php' method="post" role="form">
            
               <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                  className="mb-3">
                  <Form.Control type="name" name="name" placeholder="name"/>
              </FloatingLabel>
              <FloatingLabel
                  controlId="floatingInput"
                  label="Mobile Number"
                  className="mb-3">
                  <Form.Control type="tel" name="mobile" placeholder="Mobile Number"/>
              </FloatingLabel>
              <FloatingLabel
                  controlId="floatingInput"
                  label="Email"
                  className="mb-3">
                  <Form.Control type="email" name="email" placeholder="name@example.com"/>
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                name="message"
                style={{ height: '100px' }}/>
               </FloatingLabel>
              <Button type="submit">Send</Button>
            </Form>
          </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-duration="600">
          <div>
            <div className='d-flex align-items-center'>
            <img src={phone}  className="contact-icon me-2" alt="Phone Svg Icon"/>
            <h3>+91 80876 79744</h3>
          </div>
          <div className='d-flex align-items-center mt-3'>
            <img src={email}  className="contact-icon me-2" alt="Eamil Svg Icon"/>
            <h3>info@digitalinvitations.co.in</h3>
          </div>
          <div>
            <a href="https://www.instagram.com/shaadi.mein.zarooor.aana/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" className='d-flex align-items-center mt-3'>
              <img src={insta}  className="contact-icon me-2" alt="Eamil Svg Icon"/>
              <h3>@digitalinvitations</h3></a>
          </div>
          <div>
            <a href="https://www.instagram.com/shaadi.mein.zarooor.aana/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" className='d-flex align-items-center mt-3'>
              <img src={pinterest}  className="contact-icon me-2" alt="Eamil Svg Icon"/>
              <h3>@digitalinvitations</h3></a>
          </div>
          </div>
          </Col>
      </Row>
      </Container>
</section>


  <footer className="text-center"><h4>&copy; Digital Invitations | 2022</h4></footer>
    </div>

    
  );
}

export default App;

