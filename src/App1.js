import logo from './logo.svg';
import './App.css';
import rahul from "./rahul.JPG"

function Header(props){
  console.log(props);
  return(
    <header>
      <h1>{props.name}'s Project</h1> 
    </header>
  );
}

function Main(props){
  return(
    <section>
      <p>This is a Rahul's First {props.adjective} Project in React.js</p> 
      <img 
        src={rahul} 
        height={200}
        alt="Here is a picture of rahul"
      />
      <ul style={{ textAlign: 'left' }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}> {dish.title} </li>
        ))}
      </ul>
    </section>
  );
}
  function Footer(props){
    console.log(props);
    return(
      <footer>
        <p>Copyright {props.year}</p> 
      </footer>
   );
 }

const dishes = [
  "Daal-Bhaat",
  "Sandwitch",
  "Khichdi",
  "Mag"
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish}));

function App1() {
  return (
    <div className="App">
     <Header name="Rahul" />
     <Main adjective="Amazing" dishes={dishObjects}/>
     <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App1;
