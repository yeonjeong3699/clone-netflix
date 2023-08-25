import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; //페이지 이동 처리 api / 설치방법 : yarn add react-router-dom

import App from './App';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import VideoDetail from './pages/VideoDetail';
import DetailPage from './component/DetailPage';

const router = createBrowserRouter([
  {
    path: `${process.env.PUBLIC_URL}`,
    element: <App />,
    errorElement: <NotFound />,
    children: [
      /*
      <children>
      중첩 라우터 children으로 연결 내부에 있는 파일은 부모 요소의 링크를 기준으로 한다.
      내부에 children으로 작성하게 되면 중첩 url을 생략할 수 있어 문법이 간결해진다.
      */
      { path: 'videos', element: <Videos /> },
      { path: 'videos/:keyword', element: <Videos /> }, //검색으로 나오는 결과물
      { path: 'videos/watch/:videoId', element: <VideoDetail /> },
      // { path: '/movie/:movieId', element: <DetailPage /> }

    ]
  },
  {
    path: '/movie/:movieId',
    element: <DetailPage />,
    errorElement: <NotFound />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* createBrowserRouter와 세트. 연결시켜주는 역할 */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
