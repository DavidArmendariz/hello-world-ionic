import React, { useState } from 'react';
import {
  IonButton,
  IonToast,
  IonIcon,
  IonApp,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import { play as playIcon } from 'ionicons/icons';

function App() {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={handleClick}>
          <IonIcon icon={playIcon} slot="start" />
          Click Me
        </IonButton>
        <IonToast isOpen={showToast} message="Hello world!" />
      </IonContent>
    </IonApp>
  );
}

export default App;
