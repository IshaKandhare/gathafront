
import Card from 'react-bootstrap/Card';
import carrier from "../Database/carrier.png";
import "./Jcards.css"
import { Link } from "react-router-dom";

function Jcards() {
  const cardStyles = {
    width: '18rem',
    height: '350px',
    opacity: '0.9',
    position: 'relative',
  };

  const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    
    transition: 'background-color 0.3s ease',
    zIndex: 1, // Ensure the overlay is above the card content
    opacity: 0, // Start with zero opacity to make the overlay invisible
  };

  return (
    <>
    <div style={{display:'flex', backgroundImage: `url(${carrier})`, width:'100%', height: '500px', backgroundRepeat: 'no-repeat', marginLeft:'10px', backgroundSize:'cover'}}>

    
      <div style={{ display: 'flex', width: '100%', height: '500px', marginLeft: '10px', position: 'relative' }}>
        <div style={{ display: 'flex', marginTop: '55px', marginLeft: '150px'}}>
        <Link to="/articles" style={{textDecoration:"None"}}>
          {['Light'].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ ...cardStyles }}
              className="mb-2"
              onMouseOver={(e) => { e.currentTarget.querySelector('.overlay').style.backgroundColor = 'black'; e.currentTarget.querySelector('.overlay').style.opacity = '0.5'; }}
              onMouseOut={(e) => { e.currentTarget.querySelector('.overlay').style.backgroundColor = 'transparent'; e.currentTarget.querySelector('.overlay').style.opacity = '0'; }}
            >
              <div className="overlay" style={{ ...overlayStyles }}></div>
              
              <Card.Body>
                
                <Card.Title>Articles </Card.Title>
                <Card.Text>
                Dive into our captivating articles, where each word is a spark igniting your curiosity and fueling your quest for knowledge. Uncover insights, embrace innovation, and redefine possibilities with every turn of the page.
                </Card.Text>
               
              </Card.Body>
            </Card>
          ))}
</Link>

<Link to="/news" style={{textDecoration:"None"}}>
{['Light'].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ ...cardStyles }}
              className="mb-2"
              onMouseOver={(e) => { e.currentTarget.querySelector('.overlay').style.backgroundColor = 'black'; e.currentTarget.querySelector('.overlay').style.opacity = '0.5'; }}
              onMouseOut={(e) => { e.currentTarget.querySelector('.overlay').style.backgroundColor = 'transparent'; e.currentTarget.querySelector('.overlay').style.opacity = '0'; }}
            >
              <div className="overlay" style={{ ...overlayStyles }}></div>
             
              <Card.Body>
                <Card.Title> News </Card.Title>
                <Card.Text>
                Stay updated with our dynamic News Hub, delivering breaking stories that matter. From global events to local insights, we've got you covered. Dive into the headlines, stay informed, and be part of the dialogue shaping our shared narrative. 
                </Card.Text>
                
              </Card.Body>
            </Card>
          ))}
</Link>


<Link to="/contact" style={{textDecoration:"None"}}>
{['Light'].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
              style={{ ...cardStyles }}
              className="mb-2"
              onMouseOver={(e) => { e.currentTarget.querySelector('.overlay').style.backgroundColor = 'black'; e.currentTarget.querySelector('.overlay').style.opacity = '0.5'; }}
              onMouseOut={(e) => { e.currentTarget.querySelector('.overlay').style.backgroundColor = 'transparent'; e.currentTarget.querySelector('.overlay').style.opacity = '0'; }}
            >
              <div className="overlay" style={{ ...overlayStyles }}></div>
             
              <Card.Body>
                <Card.Title>Contact </Card.Title>
                <Card.Text>
                Got something on your mind? We're all ears! Whether it's feedback, collaboration opportunities, or simply a hello, reach out to us via email. Let's inspire change together. Ready to take the first step?
                </Card.Text>
            
              </Card.Body>
            </Card>
          ))}
   </Link >
          {/* Repeat the same structure for Jobs and News cards */}
        </div>
      </div>
      </div>
    </>
  );
}

export default Jcards;
