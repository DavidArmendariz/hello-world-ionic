import React, { useState } from 'react';
import { IonButton, IonToast, IonIcon } from '@ionic/react';
import { play as playIcon } from 'ionicons/icons';

function App() {
  const [showToast, setShowToast] = useState(false);
  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1500);
  };

  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <IonButton onClick={handleClick}>
          <IonIcon icon={playIcon} slot="start" />
          Click Me
        </IonButton>
        <IonToast isOpen={showToast} message="Hello world!" />
      </main>
    </div>
  );
}

export default App;
