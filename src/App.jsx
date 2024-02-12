import "./App.css";
import Actors from "./components/Actors";
import Condition from "./components/Condition";
import Header from "./components/Header";
import Singer from "./components/Singer";
import TernaryOperator from "./components/TernaryOperator";
import BookStore from "./components/booksStore/BookStore";
import MovieStore from "./components/movieCompomonents/MovieStore";
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

  const books = [
    { id: 1, name: "Physics", price: 65 },
    { id: 2, name: "Math", price: 55 },
    { id: 3, name: "Shuvro Dev", price: 63 },
    { id: 4, name: "Pritom", price: 26 },
    { id: 5, name: "Asif Akber", price: 45 },
    { id: 6, name: "Eva Rahman", price: 37 },
  ];

  const allMovies = [
    {
      id: 1,
      movieName: "Inception",
      releaseDate: "2010-07-16",
      actor: "Leonardo DiCaprio",
    },
    {
      id: 2,
      movieName: "The Godfather",
      releaseDate: "1972-03-24",
      actor: "Marlon Brando",
    },
    {
      id: 3,
      movieName: "Pulp Fiction",
      releaseDate: "1994-10-14",
      actor: "John Travolta",
    },
    {
      id: 4,
      movieName: "The Dark Knight",
      releaseDate: "2008-07-18",
      actor: "Christian Bale",
    },
    {
      id: 5,
      movieName: "Forrest Gump",
      releaseDate: "1994-07-06",
      actor: "Tom Hanks",
    },
    {
      id: 6,
      movieName: "The Shawshank Redemption",
      releaseDate: "1994-10-14",
      actor: "Tim Robbins",
    },
    {
      id: 7,
      movieName: "Schindler's List",
      releaseDate: "1993-12-15",
      actor: "Liam Neeson",
    },
    {
      id: 8,
      movieName: "Titanic",
      releaseDate: "1997-12-19",
      actor: "Leonardo DiCaprio",
    },
    {
      id: 9,
      movieName: "Avatar",
      releaseDate: "2009-12-18",
      actor: "Sam Worthington",
    },
    {
      id: 10,
      movieName: "The Matrix",
      releaseDate: "1999-03-31",
      actor: "Keanu Reeves",
    },
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
      <BookStore book_data={books}></BookStore>
      <MovieStore movies={allMovies}></MovieStore>
    </>
  );
}

export default App;
