import {IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import { camera, trash, close } from 'ionicons/icons';


const Tab1: React.FC = () => {

  const { photos, takePhoto } = usePhotoGallery();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>FunCam</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonGrid>
    <IonRow>
      {photos.map((photo, index) => (
        <IonCol size="6" key={photo.filepath}>
          <IonImg src={photo.webviewPath} />
        </IonCol>
      ))}
    </IonRow>
  </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
