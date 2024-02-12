import "./App.css";
import Actors from "./components/Actors";
import Condition from "./components/Condition";
import Header from "./components/Header";
import Singer from "./components/Singer";
import TernaryOperator from "./components/TernaryOperator";
import BookStore from "./components/booksStore/BookStore";
function App() {
  const actors = [
    "Shakib Khan",
    "Bapp raj",
    "Salman khan",
    "Arfan Nisho",
    "Annto Jolil",
  ];

  const singers = [
    { id: 1, name: "Dr Mahfuzur", age: 65 },
    { id: 2, name: "Runa laila", age: 55 },
    { id: 3, name: "Shuvro Dev", age: 63 },
    { id: 4, name: "Pritom", age: 26 },
    { id: 5, name: "Asif Akber", age: 45 },
    { id: 6, name: "Eva Rahman", age: 37 },
  ];

  return (
    <>
      <Header task="Learn React" date="12/Feb/2024" />
      {/* Conditionali Task */}
      <Condition task="Learn HTML & CSS" isDone={true}></Condition>
      <Condition task="Learn JavaScript" isDone={true}></Condition>
      <Condition task="Leran React" isDone={false}></Condition>
      <TernaryOperator task="Leran React" isDone={true}></TernaryOperator>
      <TernaryOperator task="Leran React" isDone={true}></TernaryOperator>
      <TernaryOperator task="Leran React" isDone={false}></TernaryOperator>
      {/* Actors Component Start */}
      {actors.map((actorName) => (
        <Actors actor={actorName} key={actorName.id}></Actors>
      ))}{" "}
      {/* Actors Component End */}
      {singers.map((singerdetelise) => (
        <Singer singer={singerdetelise} key={singerdetelise.id}></Singer>
      ))}
      <BookStore></BookStore>
    </>
  );
}

export default App;
