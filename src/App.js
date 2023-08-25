import Header from './component/Header';
import GlobalStyle from './styled/GlobalStyle';
import { Outlet, Routes, Route } from 'react-router-dom'; //중첩 라우팅을 사용하여 children으로 링크를 설정했다면 컴포넌트 내에서도 중첩 라우팅을 children과 같은 개념으로 구조를 작성할 수 있게 해주는 훅
import MainVideo from './component/MainVideo';
import Action from './component/Action';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './store/reducers'
import thunk from 'redux-thunk';
import Comedy from './component/Comedy';
import DetailPage from './component/DetailPage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
    <>
      <GlobalStyle /> {/*reset css 사용*/}
      <Header />
      <MainVideo />
      <Outlet />
      <Provider store={store}>
        <Action />
        {/* <Comedy /> */}
        
      </Provider>

      {/* <Routes>
        <Route path="/movie/:movieId" element={<DetailPage/>} />
      </Routes> */}
    </>
  );
}

export default App;
