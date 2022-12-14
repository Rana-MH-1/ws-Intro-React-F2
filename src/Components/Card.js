/*import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button' */
import image from '../image.png'
import {Card,Button} from 'react-bootstrap'
const Cardd = ()=>{
    return(
        <div>
<Card style={{ width: '18rem', margin:'0 auto' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Eya</Card.Title>
        <Card.Text>
          I am a Full Stack JS Student
        </Card.Text>
        <Button variant="primary">More details</Button>
      </Card.Body>
    </Card>
        </div>
    )
}

export default Cardd