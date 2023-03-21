import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { SetupStore } from './Redux/store';

const store = SetupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


// Для работы Redux оборачиваем все приложение в Provider и как параметр прокидываем туда наш store для того что бы в любой компоненте была возможность получить любые данные