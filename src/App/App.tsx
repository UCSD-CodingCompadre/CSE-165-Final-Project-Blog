import {Navbar} from "../Components/Navbar";
import Jeff from '../Assets/06_LifeSaver_Jefferson.jpeg'
import "../Styles/App.css";

function App() {
  return (
    <>
     <Navbar />
      <div 
      className="hero bg-base-200 w-full"
      >
        <div className="flex-col main text-center"
        >
          <img src={Jeff}
          className="max-w-sm rounded-lg shadow-2xl" 
          />

          <h1 
          className="text-5xl  font-bold py-6"
          >
            Lifesaver Project Proposal
          </h1>
          <p 
          className="py-6">
            Aila <br />
            Skyler Goh, A16909482, sjgoh@ucsd.edu<br />
            Chris Chen, A16390641, chc033@ucsd.edu<br />
            Raul Uriostegui, A15019690, rurioste@ucsd.edu<br />
            Dominic Li, A17019660, dyli@ucsd.edu
          </p>
          <p 
          className="py-6">
            Our project is an AR application that will be built using the Unity game engine. In the project, the user will be guided on how to deal with heart attacks, drug overdoses, drug-induced psychosis, and snake bites. The background of this application revolves around a man named Jeff who is visiting the Burning Man festival.
          </p>
          <p 
          className="py-6">
            Selection - Raycasting <br />
            Manipulation - Raycasting + InputStateProperties <br />
            Wayfinding - Arrow + Local coordinates <br />
            Travel - Touch Controllers + InputStateProperties <br />
            System Control - 3D menus, pop-ups, and visual aids  <br />
            Symbolic Input - Virtual keyboard 
          </p>
          <p 
          className="py-6">
            The creative aspect of this project is how we will use a minigame to show the user how to perform CPR. Another creative aspect is the use of highlighting objects using image tracking in AR. The design of our 3D menus and their overall layout showcases our creative UI skills. Lastly, the way we incorporate all of the technical features demonstrates our creativity as VR developers using Unity. 
          </p>
          <a 
          href="/FinalProjectProposal.pdf" 
          className="btn btn-primary" 
          download
          >
          Download PDF
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
