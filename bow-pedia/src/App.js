import { useEffect, useState } from "react";
import MainCharacters from "./components/MainCharacters";
import LogoBOW from "./images/zlogo.png";
import Wall1 from "./images/wall1.jpg";
import Wall3 from "./images/wall3.jpg";
import "./App.css";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  //todo UseStates
  const [value, setValue] = useState("");
  const [showAllCreatures, setShowAllCreatures] = useState(false);
  const [foodcreatures, setFoodCreatures] = useState([]);
  const [nonfoodcreatures, setNonFoodCreatures] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [monsters, setMonsters] = useState([]);
  const [isfiltered, setIsFiltered] = useState(false);
  const [categories, setCategories] = useState([]);
  const [ischequed, setIsChequed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  /*sleccionar personaje para mostrar su info en el div about*/
  const [selectedCharacterInfo, setSelectedCharacterInfo] = useState("");
  const [selectedCharacterName, setSelectedCharacterName] = useState("");
  const [selectedCharacterPersonality, setSelectedCharacterPersonality] = useState("");
  const [selectedCharacterLocations, setSelectedCharacterLocations] = useState("");
  const [selectedCharacterDrop, setSelectedCharacterDrop] = useState("");
  const [selectedCharactercookingEff, setSelectedCharacterCookingEff] = useState("");
  const [selectedHeartsRecovered, setSelectedHeartsRecovered] = useState("");
  const [selectedItemAttack, setSelectedItemAttack] = useState("");
  const [selectedItemDefense, setSelectedItemDefense] = useState("");
  const [aboutFixed, setAboutFixed] = useState(false);

  // Llamada api all creatures and food/non-food
  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2/category/creatures")
      .then((response) => response.json())
      .then((data) => {
        setFoodCreatures(data.data.food);
        setNonFoodCreatures(data.data.non_food);
      })
      .catch((error) => console.log(error));
  }, []);

  // Llamada api equipment
  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2/category/equipment")
      .then((response) => response.json())
      .then((data) => setEquipment(data.data))
      .catch((error) => console.log(error));
  }, []);

  // Llamada api materials
  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2/category/materials")
      .then((response) => response.json())
      .then((data) => setMaterials(data.data))
      .catch((error) => console.log(error));
  }, []);

  // Llamada api monsters
  useEffect(() => {
    fetch("https://botw-compendium.herokuapp.com/api/v2/category/monsters")
      .then((response) => response.json())
      .then((data) => setMonsters(data.data))
      .catch((error) => console.log(error));
  }, []);

  //*todo Funciones

  // Función que se activa al hacer clic en el checkbox
  function handleCheck(categoryAdded) {
    if (categories.includes(categoryAdded)) {
      setCategories(categories.filter((cat) => cat !== categoryAdded));
    } else {
      setCategories([...categories, categoryAdded]);
    }
    setIsFiltered(false);
    setIsChequed(true); //cambia su valor si un checkbox está clicado

    if (categoryAdded === "all-creatures") {
      setShowAllCreatures(!showAllCreatures);
    }
  }

  // Función que se activa con el botón para aplicar filtros
  function HandleButtonFilter() {
    if (ischequed && categories.length > 0) {
      //si hay algún checkbox clicado se cambia isfiltered a true
      setIsFiltered(true);
    }
  }

  //funcion para cuando se interactúa con el input
  function HandleChange(e) {
    setValue(e.target.value);
  }

  //funcion para dejar fijo el div about
  function handleClick() {
    setAboutFixed(!aboutFixed);
  }

  //*todo return
  return (
    <div className="App-container">
      {/* Header */}
      <div className="header">
        <div className="header-left">
          <img src={LogoBOW} className="LogoBow" alt="logobow" />
          <h5>
            <a href="#">Home</a>
          </h5>
          <h5>
            <a href="#">Zelda games</a>
          </h5>
          <h5>
            <a href="https://en.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild">Botw wiki</a>
          </h5>
          <h5>
            <a href="https://store.nintendo.es/es?_gl=1*1pg9kyf*_ga*Nzk3MTUyMTIwLjE2ODQ5MjY0OTE.*_ga_H3TKQGSCJ6*MTY4NDkyNjQ5MS4xLjEuMTY4NDkyNjUyNC4wLjAuMA..">
              Nintendo store
            </a>
          </h5>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search by name" onChange={HandleChange} />
        </form>
      </div>
      <div className="General-container">
        {/* Sidebar */}
        <div className="sidebar">
          <h3>Hyrule Compendium</h3>
          <h4>Categories</h4>
          {/* Main Characters checkbox */}
          <div className="checkbox-main-characters">
            <span>
              <input type="checkbox" onChange={() => handleCheck("main-characters")} />
            </span>
            <h5>Main Characters</h5>
          </div>
          {/* Secondary Characters checkbox */}
          <div className="checkbox-secondary-characters">
            <span>
              <input type="checkbox" onChange={() => handleCheck("secondary-characters")} />
            </span>
            <h5>Other Characters</h5>
          </div>
          {/* All creatures checkbox */}
          <div className="checkbox-all-creatures">
            <span>
              <input type="checkbox" onChange={() => handleCheck("all-creatures")} />
            </span>
            <h5>All Creatures</h5>
          </div>
          {/* Creatures food checkbox */}
          <div className="checkbox-food-creatures">
            <span>
              <input type="checkbox" onChange={() => handleCheck("food-creatures")} />
            </span>
            <h5>Food Creatures</h5>
          </div>
          {/* Creatures non-food checkbox */}
          <div className="checkbox-nonfood-creatures">
            <span>
              <input type="checkbox" onChange={() => handleCheck("nonfood-creatures")} />
            </span>
            <h5>Non-Food Creatures</h5>
          </div>
          {/* Monsters checkbox */}
          <div className="checkbox-monsters">
            <span>
              <input type="checkbox" onChange={() => handleCheck("monsters")} />
            </span>
            <h5>Monsters</h5>
          </div>
          {/* Equipment checkbox */}
          <div className="checkbox-equipment">
            <span>
              <input type="checkbox" onChange={() => handleCheck("equipment")} />
            </span>
            <h5>Equipment</h5>
          </div>
          {/* Materials checkbox */}
          <div className="checkbox-materials">
            <span>
              <input type="checkbox" onChange={() => handleCheck("materials")} />
            </span>
            <h5>Materials</h5>
          </div>

          {/* Boton aplicar filtros */}
          <div className="apply-filter">
            <button onClick={HandleButtonFilter}>Apply Filters</button>
          </div>
          <MusicPlayer />
        </div>
        <main className="main-container">
          {/* Imagen grande */}
          <div className="great-image-container">
            <img src={Wall3} alt="link and zelda" />

            {/* About container */}
            <div className={isHovered || aboutFixed ? "about-container fixed" : "about-container-hidden"}>
              <div className="name">
                <h4>Name:</h4>
                <h4 className="whiteColor">{selectedCharacterName}</h4>
              </div>
              <div className="info">
                <h4>Description:</h4>
                <h4 className="whiteColor">{selectedCharacterInfo}</h4>
              </div>
              {categories.includes("main-characters") && (
                <div className="personality">
                  <h4>Personality:</h4>
                  <h4 className="whiteColor">{selectedCharacterPersonality}</h4>
                </div>
              )}

              <div className="common_locations">
                <h4>Common Locations:</h4>
                <h4 className="whiteColor">{selectedCharacterLocations}</h4>
              </div>
              {!categories.includes("main-characters") &&
                !categories.includes("food-creatures") &&
                !categories.includes("nonfood-creatures") &&
                !categories.includes("equipment") && (
                  <div className="drops">
                    <h4>Drops:</h4>
                    <h4 className="whiteColor">{selectedCharacterDrop}</h4>
                  </div>
                )}

              {categories.includes("food-creatures") && (
                <div className="hearts-recovered">
                  <h4>Hearts Recovered:</h4>
                  <h4 className="whiteColor">{selectedHeartsRecovered}</h4>
                </div>
              )}
              {categories.includes("food-creatures") && (
                <div className="cooking-effect">
                  <h4>Cooking Effect:</h4>
                  <h4 className="whiteColor">{selectedCharactercookingEff}</h4>
                </div>
              )}
              {categories.includes("equipment") && (
                <div className="equipment">
                  <h4>Attack:</h4>
                  <h4 className="whiteColor">{selectedItemAttack}</h4>
                </div>
              )}
            </div>
          </div>
          <div className="all-img-container">
            <>
              {/* Listado Main Characters */}
              {MainCharacters.map((character) => {
                return (isfiltered &&
                  categories.includes("main-characters") &&
                  character.name.toLowerCase().includes(value.toLowerCase())) ||
                  (!isfiltered && value !== "" && character.name.toLowerCase().includes(value.toLowerCase())) ? (
                  <div
                    className={"main-characters"}
                    key={character.id}
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setSelectedCharacterName(character.name);
                      setSelectedCharacterInfo(character.description);
                      setSelectedCharacterPersonality(character.personality);
                      setSelectedCharacterLocations(character.common_locations);
                    }}
                    onMouseLeave={() => {
                      if (!aboutFixed) {
                        setIsHovered(false);
                        setSelectedCharacterName("");
                        setSelectedCharacterInfo("");
                        setSelectedCharacterPersonality("");
                        setSelectedCharacterLocations("");
                      }
                    }}
                    onClick={() => handleClick()} // fijar el div about
                  >
                    <img src={character.image} alt="img_creature" />
                    <h5>{character.name.charAt(0).toUpperCase() + character.name.slice(1)}</h5>
                  </div>
                ) : null;
              })}
            </>
            <>
              {/* Listado Creatures Food */}
              {foodcreatures.map((creature) => {
                const isVisible =
                  (isfiltered &&
                    categories.includes("food-creatures") &&
                    creature.name.toLowerCase().includes(value.toLowerCase())) ||
                  (isfiltered && showAllCreatures) ||
                  (!isfiltered && value !== "" && creature.name.toLowerCase().includes(value.toLowerCase()));

                return isVisible ? (
                  <div
                    className="food-ceratures"
                    key={creature.id}
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setSelectedCharacterName(
                        creature.name.charAt(0).toUpperCase() + creature.name.slice(1).toLowerCase()
                      );
                      setSelectedCharacterInfo(creature.description);
                      if (creature.common_locations && creature.common_locations.length > 0) {
                        setSelectedCharacterLocations(creature.common_locations.join(", "));
                      } else {
                        setSelectedCharacterLocations("All over Hyrule");
                      }
                      setSelectedCharacterCookingEff(
                        creature.cooking_effect.charAt(0).toUpperCase() + creature.cooking_effect.slice(1).toLowerCase()
                      );
                      setSelectedHeartsRecovered(creature.hearts_recovered);
                    }}
                    onMouseLeave={() => {
                      if (!aboutFixed) {
                        setIsHovered(false);
                        setSelectedCharacterName("");
                        setSelectedCharacterInfo("");
                        setSelectedCharacterLocations("");
                        setSelectedCharacterCookingEff("");
                        setSelectedHeartsRecovered("");
                      }
                    }}
                    onClick={handleClick} // Cambio aquí
                  >
                    <img src={creature.image} alt="img_creature" />
                    <h5>{creature.name.charAt(0).toUpperCase() + creature.name.slice(1)}</h5>
                  </div>
                ) : null;
              })}
            </>
            <>
              {/* Listado Creatures Non-Food */}
              {nonfoodcreatures.map((creature) => {
                return (isfiltered &&
                  categories.includes("nonfood-creatures") &&
                  creature.name.toLowerCase().includes(value.toLowerCase())) ||
                  (isfiltered && showAllCreatures) ||
                  (!isfiltered && value !== "" && creature.name.toLowerCase().includes(value.toLowerCase())) ? (
                  <div
                    className="nonfood-creatures"
                    key={creature.id}
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setSelectedCharacterName(
                        creature.name.charAt(0).toUpperCase() + creature.name.slice(1).toLowerCase()
                      );
                      setSelectedCharacterInfo(creature.description);
                      setSelectedCharacterLocations(creature.common_locations.join(" ,"));
                    }}
                    onMouseLeave={() => {
                      if (!aboutFixed) {
                        setIsHovered(false);
                        setSelectedCharacterName("");
                        setSelectedCharacterInfo("");
                        setSelectedCharacterLocations("");
                      }
                    }}
                    onClick={handleClick} // Cambio aquí
                  >
                    <img src={creature.image} alt="img_creature" />
                    <h5>{creature.name.charAt(0).toUpperCase() + creature.name.slice(1)}</h5>
                  </div>
                ) : null;
              })}
            </>
            <>
              {/* Listado Monsters */}
              {monsters.map((monster) => {
                return (isfiltered &&
                  categories.includes("monsters") &&
                  monster.name.toLowerCase().includes(value.toLowerCase())) ||
                  (!isfiltered && value !== "" && monster.name.toLowerCase().includes(value.toLowerCase())) ? (
                  <div
                    className="monsters"
                    key={monster.id}
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setSelectedCharacterName(
                        monster.name.charAt(0).toUpperCase() + monster.name.slice(1).toLowerCase()
                      );
                      setSelectedCharacterInfo(monster.description);
                      if (monster.drops && monster.drops.length > 0) {
                        setSelectedCharacterDrop(
                          monster.drops
                            .map((drop) => drop.charAt(0).toUpperCase() + drop.slice(1).toLowerCase())
                            .join(", ")
                        );
                      } else {
                        setSelectedCharacterDrop("Nothing");
                      }
                      if (monster.common_locations && monster.common_locations.length > 0) {
                        setSelectedCharacterLocations(monster.common_locations.join(", "));
                      } else {
                        setSelectedCharacterLocations("All over Hyrule");
                      }
                    }}
                    onMouseLeave={() => {
                      if (!aboutFixed) {
                        setIsHovered(false);
                        setSelectedCharacterName("");
                        setSelectedCharacterInfo("");
                        setSelectedCharacterPersonality("");
                        setSelectedCharacterLocations("");
                      }
                    }}
                    onClick={handleClick} // Cambio aquí
                  >
                    <img src={monster.image} alt="img_monster" />
                    <h5>{monster.name.charAt(0).toUpperCase() + monster.name.slice(1)}</h5>
                  </div>
                ) : null;
              })}
            </>
            <>
              {/* Listado Equipment */}
              {equipment.map((item) => {
                return (isfiltered &&
                  categories.includes("equipment") &&
                  item.name.toLowerCase().includes(value.toLowerCase())) ||
                  (!isfiltered && value !== "" && item.name.toLowerCase().includes(value.toLowerCase())) ? (
                  <div
                    className="equipment"
                    key={item.id}
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setSelectedCharacterName(item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase());
                      setSelectedCharacterInfo(item.description);
                      setSelectedCharacterLocations(item.common_locations.join(" ,"));
                      setSelectedItemAttack(item.attack);
                      setSelectedItemDefense(item.defense);
                    }}
                    onMouseLeave={() => {
                      if (!aboutFixed) {
                        setIsHovered(false);
                        setSelectedCharacterName("");
                        setSelectedCharacterInfo("");
                        setSelectedCharacterLocations("");
                        setSelectedItemAttack("");
                        setSelectedItemDefense("");
                      }
                    }}
                    onClick={handleClick} // Cambio aquí
                  >
                    <img src={item.image} alt="img_equipment" />
                    <h5>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h5>
                  </div>
                ) : null;
              })}
            </>
            <>
              {/* Listado Materials */}
              {materials.map((item) => {
                return (isfiltered &&
                  categories.includes("materials") &&
                  item.name.toLowerCase().includes(value.toLocaleLowerCase())) ||
                  (!isfiltered && value !== "" && item.name.toLowerCase().includes(value.toLowerCase())) ? (
                  <div
                    className="materials"
                    key={item.id}
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setSelectedCharacterName(item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase());
                      setSelectedCharacterInfo(item.description);
                      setSelectedCharacterLocations(item.common_locations.join(" ,"));
                    }}
                    onMouseLeave={() => {
                      if (!aboutFixed) {
                        setIsHovered(false);
                        setSelectedCharacterName("");
                        setSelectedCharacterInfo("");
                        setSelectedCharacterLocations("");
                        setSelectedItemAttack("");
                        setSelectedItemDefense("");
                      }
                    }}
                    onClick={handleClick} // Cambio aquí
                  >
                    <img src={item.image} alt="img_material" />
                    <h5>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h5>
                  </div>
                ) : null;
              })}
            </>
          </div>
        </main>
      </div>
    </div>
  );
}
export default App;
