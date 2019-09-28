import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';

const App = () => {
  const [activePanel, setActivePanel] = useState('map-view');
  const [fetchedUser, setUser] = useState(null);
  const [location, setLocation] = useState([55.798, 49.106]);
  const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
  
  const fetchLocation = () => {
    connect
      .sendPromise('VKWebAppGetGeodata')
      .then(data => {
        console.log('latitude', data.lat);
        setLocation([data.lat, data.lon])
      })
      .catch(error => {
        console.log('error', error)
      });
  }

  useEffect(() => {
    connect.subscribe(({ detail: { type, data }}) => {
      if (type === 'VKWebAppUpdateConfig') {
        const schemeAttribute = document.createAttribute('scheme');
        schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    setPopout(null);
    async function fetchData() {
      const user = await connect.sendPromise('VKWebAppGetUserInfo');
      const loc = await connect.send()
      setUser(user);
      setPopout(null);
    }
    fetchData();
    fetchLocation();

  }, []);

  const go = e => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <View activePanel={activePanel} popout={popout}>
      <Home id='home' fetchedUser={fetchedUser} go={go} />
    </View>
  );
}

export default App;
