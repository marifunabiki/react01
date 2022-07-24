
// // App.jsx

// const App = () => {
//   return (
//     <>
//       <h1>react app</h1>
//     </>
//   );
// };
// export default App;

// App.jsx

// // 🔽 追加（App.jsx 内で使用するためにコンポーネントを呼び出す）
// import { ActionButton } from "./components/ActionButton";

// const App = () => {
//   return (
//     <>
//       <h1>react app</h1>
//       <ActionButton />
//     </>
//   );
// };
// export default App;

// App.jsx

// import { ActionButton } from "./components/ActionButton";

// // const App = () => {
// //   return (
// //     // 🔽 編集（コンポーネントに props を設定）
// //     <>
// //       <h1>react app</h1>
// //       <ActionButton text="おみくじをひく" />
// //     </>
// //   );
// // };
// // export default App;

// // App.jsx

// import { ActionButton } from "./components/ActionButton";

// const App = () => {
//   return (
//     <>
//       <h1>react app</h1>
//       <ActionButton text="おみくじをひく" />
//       <ActionButton text="じゃんけんをする" />
//     </>
//   );
// };
// export default App;

// App.jsx

// 🔽 追加
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Omikuji } from "./pages/Omikuji";
// import { Janken } from "./pages/Janken";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <h1>react app</h1>
//       <Routes>
//         <Route path="/omikuji" element={<Omikuji />} />
//         <Route path="/janken" element={<Janken />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
// export default App;

// App.jsx

  // 🔽 Link を追加
  // import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
  // import { Omikuji } from "./pages/Omikuji";
  // import { Janken } from "./pages/Janken";

  // const App = () => {
  //   return (
  //     <BrowserRouter>
  //       <h1>react app</h1>
  //       {/* 🔽 追加 */}
  //       <ul>
  //         <li>
  //           <Link to="/omikuji">おみくじ</Link>
  //         </li>
  //         <li>
  //           <Link to="/janken">じゃんけん</Link>
  //         </li>
  //       </ul>
  //       <hr />
  //       <Routes>
  //         <Route path="/omikuji" element={<Omikuji />} />
  //         <Route path="/janken" element={<Janken />} />
  //       </Routes>
  //     </BrowserRouter>
  //   );
  // };
  // export default App;

// App.jsx

// 🔽 追加
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Omikuji } from "./pages/Omikuji";
// import { Janken } from "./pages/Janken";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <h1>react app</h1>
//       <Routes>
//         <Route path="/omikuji" element={<Omikuji />} />
//         <Route path="/janken" element={<Janken />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
// export default App;
// App.jsx

// 🔽 Link を追加
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";

const App = () => {
  return (
    <BrowserRouter>
      <h1>react app</h1>
      {/* <div style="background:url('main_image01.jpg'); ">
      </div> */}
      {/* 🔽 追加 */}
      <ul>
        <li>
          <Link to="/omikuji">おみくじ</Link>
        </li>
        <li>
          <Link to="/janken">じゃんけん</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
      </Routes>
      
    </BrowserRouter>
  );
};
export default App;