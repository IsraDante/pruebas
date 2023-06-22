import Button from "./Componentes/Button";
import TextArea from "./Componentes/TextArea";
import { useEffect, useState } from "react";
import Score from "./Componentes/Score";
import ResetButton from "./Componentes/ResetButton";
import "./App.css";
import Cabecera from "./Componentes/Cabecera";
import Jan from "./Imagenes/Jan.jpg";
import Ken from "./Imagenes/Ken.jpg";
import Pon from "./Imagenes/Pon.jpg";

function App() {
  const [playerChoice, setplayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [winnerSet, setWinnerSet] = useState("¡Empezamos!");
  const [scorePC, setScorePC] = useState(0);
  const [scorePlayer, setScorePlayer] = useState(0);
  const [winnerMessage, setWinnerMessage] = useState("");
  const [selectedButtonImage, setSelectedButtonImage] = useState(null);
  const [selectedPCButtonImage, setSelectedPCButtonImage] = useState(null);
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  //setear la elección del jugador
  function handleChoice(choice) {
    showIcons();
    setClicked(true);
    setWinnerMessage("");
    setWinnerSet("");
    setplayerChoice(choice);
    getComputerChoice();
  }

  //setear al ganador de la ronda
  useEffect(() => {
    if (playerChoice && computerChoice) {
      getWinnerSet();
    }
  }, [playerChoice, computerChoice]);

  //setear la elección de la máquina
  function getComputerChoice() {
    let resultado = Math.floor(Math.random() * 3);
    let ComputerChoice;
    if (resultado === 0) {
      ComputerChoice = "Piedra";
      setSelectedPCButtonImage(Jan);
    }
    if (resultado === 1) {
      ComputerChoice = "Papel";
      setSelectedPCButtonImage(Pon);
    }
    if (resultado === 2) {
      ComputerChoice = "Tijeras";
      setSelectedPCButtonImage(Ken);
    }
    return setComputerChoice(ComputerChoice);
  }

  //setear el ganador del Set
  function getWinnerSet() {
    //array de las palabras a mostrar
    let words = ["Jan...", "Ken...", "Pon!"];
    //variable wordIndex y la inicializamos en 0. Esta variable nos ayudará a recorrer el array words.
    let wordIndex = 0;
    //crear un intervalo que se ejecuta cada 1000 milisegundos
    let intervalId = setInterval(() => {
      //Actualizamos el estado winnerSet con la palabra actual en el array words
      setWinnerSet(words[wordIndex]);
      wordIndex++;

      //limpiamos el intevalo al terminar
      if (wordIndex >= words.length) {
        clearInterval(intervalId);

        //variable donde se almacena el texto
        let winnerText;
        if (
          (computerChoice === "Piedra" && playerChoice === "Tijeras") ||
          (computerChoice === "Papel" && playerChoice === "Piedra") ||
          (computerChoice === "Tijeras" && playerChoice === "Papel")
        ) {
          winnerText = `Eliges ${playerChoice} y la computadora elige ${computerChoice}. ¡La computadora suma un punto!`;
          setTimeout(() => {
            setScorePC((prevScore) => prevScore + 1);
          }, 1000);
        } else if (computerChoice === playerChoice) {
          winnerText = `Eliges ${playerChoice} y la computadora elige ${computerChoice}. ¡Hay un empate!`;
        } else {
          winnerText = `Eliges ${playerChoice} y la computadora elige ${computerChoice}. ¡Sumas un punto!`;
          setTimeout(() => {
            setScorePlayer((prevScore) => prevScore + 1);
          }, 1000);
        }
        //setTimeout para actualizar winnerSet con el texto del ganador después de un segundo adicional.
        setTimeout(() => setWinnerSet(winnerText), 1000);
        setClicked(false);
      }
    }, 1000);
  }

  //terminar el juego
  useEffect(() => {
    endGame();
  }, [scorePlayer, scorePC]);

  function endGame() {
    if (scorePC === 3 || scorePlayer === 3) {
      if (scorePlayer > scorePC) {
        setWinnerMessage(
          `Eliges ${playerChoice} y la computadora elige ${computerChoice}.¡Felicidades! ¡Has ganado el juego!`
        );
      } else {
        setWinnerMessage(
          `Eliges ${playerChoice} y la computadora elige ${computerChoice}. ¡Vaya, parece que te han ganado!`
        );
      }
    }
  }

  //resetear el juego
  function resetGame() {
    setScorePC(0);
    setScorePlayer(0);
    setWinnerMessage("");
    setWinnerSet("¡Empezamos!");
    setplayerChoice("");
    setComputerChoice("");
    setVisible(false);
  }

  //mostrar o no mostrar los iconos elegidos en la jugada
  function showIcons() {
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
    }, 4020);
  }

  return (
    <div className="App">
      <Cabecera />
      <TextArea
        text={scorePC >= 3 || scorePlayer >= 3 ? winnerMessage : winnerSet}
        imagenPC={selectedPCButtonImage}
        imagenPl={selectedButtonImage}
        className={visible ? "iconito-resultado" : "iconito-resultado-invisible"}
      />
      <div className="score-container">
        <Score ScoreName="Player" Score={scorePlayer} />
        <Score ScoreName="PC" Score={scorePC} />
      </div>
      <div className="contenedor-botones">
        <Button
          handleChoice={() => {
            handleChoice("Piedra");
            setSelectedButtonImage(Jan);
          }}
          className={scorePC >= 3 || scorePlayer >= 3 || clicked ? "boton-eleccion-disabled" : "boton-eleccion"}
          disabled={scorePC >= 3 || scorePlayer >= 3 || clicked}
          imagen={Jan}
        />
        <Button
          handleChoice={() => {
            handleChoice("Papel");
            setSelectedButtonImage(Pon);
          }}
          className={scorePC >= 3 || scorePlayer >= 3 || clicked ? "boton-eleccion-disabled" : "boton-eleccion"}
          disabled={scorePC >= 3 || scorePlayer >= 3 || clicked}
          imagen={Pon}
        />
        <Button
          handleChoice={() => {
            handleChoice("Tijeras");
            setSelectedButtonImage(Ken);
          }}
          className={scorePC >= 3 || scorePlayer >= 3 || clicked ? "boton-eleccion-disabled" : "boton-eleccion"}
          disabled={scorePC >= 3 || scorePlayer >= 3 || clicked}
          imagen={Ken}
        />
      </div>
      <ResetButton
        resetGame={resetGame}
        className={scorePC >= 3 || scorePlayer >= 3 ? "boton-reset" : "boton-reset-invisible"}
      />
    </div>
  );
}

export default App;
