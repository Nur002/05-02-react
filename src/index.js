import ReactDOM from "react-dom"

import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import Todo from "./to-do/todo"


// const nav = <nav>Hello!</nav>
// const header = <header>{nav}</header>
// const main = <main><h1>HELLO</h1></main>
// const footer = <footer></footer>



// const Header = () => {
//   return <header></header>
// }

// const Main = () => {
//   return <main><h1>HELLO</h1></main>
// }

// const Footer = () => {
//   return <footer></footer>
// }


ReactDOM.render(
  <div>
    <Header/>
    <Main/>
    <Footer/>
    <Todo/>
  </div>

, document.getElementById("root"))  