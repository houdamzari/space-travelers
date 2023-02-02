import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Missions from '../components/Missions/Missions';
import store from '../redux/store';

describe('Test Missions components', () => {
  test('Should match with snapshot', () => {
    const missions = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>
      )
      .toJSON();

    expect(missions).toMatchSnapshot();
  });
});
