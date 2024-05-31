import {Navbar} from "../Components/Navbar";
import Jeff from '../Assets/06_LifeSaver_Jefferson.jpeg'
import Proof1 from '../Assets/Proof.png';
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
          className="rounded-lg shadow-2xl" 
          />

          <h1 
          className="text-5xl  font-bold py-6"
          >
            Blog Entry #1 Lifesaver Project Proposal
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
          Download Proposal PDF
          </a>

          <h1 
          className="text-5xl  font-bold py-6"
          >
            Blog Entry #2 Update on Progress
          </h1>
          <p 
          className="py-6">
            Since our last entry we met with the design team from DSGN 160. <br />
            During this meeting we documentated an outline on how their ideas can be implemented with our project requirements. <br />
            The document can be downloaded below.  <br />
            We started working on the application itself by creating the scene for Jeff and the backpack that will spawn the medical supplies needed. <br />
            Below is a screenshot of the scene so far. 
          </p>
          <a 
          href="/FinalProjectOutline.pdf" 
          className="btn btn-primary" 
          download
          >
          Download Outline PDF
          </a>
          <img 
          alt="Screenshot of work"
          className="py-6 rounded-lg shadow-2xl"
          src={Proof1}  
          />
        </div>
      </div>
    </>
  );
}

export default App;
