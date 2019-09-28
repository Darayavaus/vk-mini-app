import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

import './Home.css';

const Home = ({ id, location, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>Карта событий</PanelHeader>
    <YMaps>
      <Map className="map" defaultState={{center: [location.lat, location.lon], zoom: 9}}>
        <Placemark
          geometry={[location.lat, location.lon]}
          options={{preset: 'islands#redCircleDotIcon'}}
        />
      </Map>
    </YMaps>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  location: PropTypes.shape({
    lat: PropTypes.number,
    lon: PropTypes.number
  }),
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default Home;