import {
  IonContent,
  IonSlides,
  IonSlide,
  IonPage,
  IonBadge,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
} from "@ionic/react";
import React from "react";
import PsychologistCard from "../components/PsychologistCard";
import "./Home.css";
import man from "../img/man.png";
import woman from "../img/woman.png";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonSlides pager={false} options={slideOpts}>
          <IonSlide>
            <PsychologistCard name="Имя" img={man}/>
          </IonSlide>
          <IonSlide>
            <PsychologistCard name="Елена Шимановская" img={woman}/>
          </IonSlide>
        </IonSlides>

        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Create Idea</h1>
              <IonNote>Run Idea by Brandy</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5 Days
            </IonBadge>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;

// <IonHeader>
//   <IonToolbar>
//     <IonTitle>Blank</IonTitle>
//   </IonToolbar>
// </IonHeader>
// <IonHeader collapse="condense">
//   <IonToolbar>
//     <IonTitle size="large">Blank</IonTitle>
//   </IonToolbar>
// </IonHeader>
// <ExploreContainer />

// import ExploreContainer from "../components/ExploreContainer";
