-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema savinsum
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `SavinSum` ;

-- -----------------------------------------------------
-- Schema savinsum
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `savinsum` DEFAULT CHARACTER SET utf8 ;
USE `savinsum` ;

-- -----------------------------------------------------
-- Table `savinsum`.`genre`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `savinsum`.`genre` (
  `idGenre` INT NOT NULL,
  `genre_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idGenre`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `savinsum`.`game`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `savinsum`.`game` (
  `idGame` INT NOT NULL AUTO_INCREMENT,
  `game_name` VARCHAR(45) NULL DEFAULT NULL,
  `rating` VARCHAR(45) NULL DEFAULT NULL,
  `developer` VARCHAR(45) NULL DEFAULT NULL,
  `description` VARCHAR(1000) NULL DEFAULT NULL,
  `Image_link` VARCHAR(45) NULL DEFAULT NULL,
  `idGenre` INT NOT NULL,
  `msrp` FLOAT NULL DEFAULT NULL,
  `walmartID` VARCHAR(45) NULL,
  `targetID` VARCHAR(45) NULL,
  `amazonID` VARCHAR(45) NULL,
  PRIMARY KEY (`idGame`, `idGenre`),
  INDEX `fk_Game_Genre1_idx` (`idGenre` ASC) VISIBLE,
  CONSTRAINT `fk_Game_Genre1`
    FOREIGN KEY (`idGenre`)
    REFERENCES `savinsum`.`genre` (`idGenre`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `savinsum`.`platform`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `savinsum`.`platform` (
  `idPlatform` INT NOT NULL,
  `Platform` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPlatform`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `savinsum`.`game_has_platform`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `savinsum`.`game_has_platform` (
  `idGames` INT NOT NULL,
  `idPlatform` INT NOT NULL,
  `release_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`idGames`, `idPlatform`),
  INDEX `fk_Game_has_Platform_Platform1_idx` (`idPlatform` ASC) VISIBLE,
  INDEX `fk_Game_has_Platform_Game1_idx` (`idGames` ASC) VISIBLE,
  CONSTRAINT `fk_Game_has_Platform_Game1`
    FOREIGN KEY (`idGames`)
    REFERENCES `savinsum`.`game` (`idGame`),
  CONSTRAINT `fk_Game_has_Platform_Platform1`
    FOREIGN KEY (`idPlatform`)
    REFERENCES `savinsum`.`platform` (`idPlatform`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `savinsum`.`price_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `savinsum`.`price_history` (
  `idPrice` INT NOT NULL AUTO_INCREMENT,
  `price_date` DATE NOT NULL,
  `price` FLOAT NULL DEFAULT NULL,
  `idGames` INT NOT NULL,
  `store` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPrice`),
  INDEX `fk_Price_History_Games1_idx` (`idGames` ASC) VISIBLE,
  CONSTRAINT `fk_Price_History_Games1`
    FOREIGN KEY (`idGames`)
    REFERENCES `savinsum`.`game` (`idGame`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


/* 
Salvatore Tornetto

SavinSum database insert statements
*/
INSERT INTO genre VALUES
('1', 'Sandbox'),
('2', 'Shooter'),
('3', 'RPG'),
('4', 'Action-adventrue'),
('5', 'Racing'),
('6', 'Strategy'),
('7', 'Battle Royale');

-- Insert Statements
INSERT INTO game VALUES  
('1', 'Minecraft', '5', 'Mojang Studios', "Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off the dangerous mobs. Scale craggy mountains, unearth elaborate caves, and mine large ore veins. Discover lush cave and dripstone cave biomes. Light up your world with candles to show what a savvy spelunker and master mountaineer you are!",
	'/images/minecraft.jpg', '1', '29.99', '802115980', '53662394', 'B07D13QGXM'),
('2', 'Fortnite', '4.5', 'Epic Games', "Fortnite is the free, always evolving, multiplayer game where you and your friends battle to be the last one standing or collaborate to create your dream Fortnite world. Play both Battle Royale and Fortnite Creative for FREE. Download now and jump into the action. This download also gives you a path to purchase the Save the World co-op PvE campaign.",
	'/images/fortnite.jpg', '7', '0.00', 'na', 'na', 'na'),
('3', 'GTA V', '4.8', "Rockstar", "When a young street hustler, a retired bank robber, and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government, and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody — least of all each other.",
	'/images/gtav.jpg', '1', '29.99', 'na', 'na', 'na'),
('4', 'Overwatch', '3.9', 'Blizzard', "Overwatch assigns players into two teams of six, with each player selecting from a large roster of characters, known as 'heroes', with unique abilities. Teams work to complete map-specific objectives within a limited period of time.",
	'/images/overwatch.jpg', '2', '39.99', '335828834', 'na', 'B07XF98TFK'),
('5', 'Skyrim', '5', 'Bethesda', "A  quest to defeat Alduin the World-Eater, a dragon who is prophesied to destroy the world. Over the course of the game, the player completes quests and develops the character by improving skills. The game continues the open-world tradition of its predecessors by allowing the player to travel anywhere in the game world at any time, and to ignore or postpone the main storyline indefinitely.",
	'/images/skyrim.jpg', '3', '59.99', '829171723', '79237758', 'B075NFTX36'),
('6', 'Pokemon: Legends Arceus' , '4.1', 'GameFreak', 'You’ll need to catch, survey, and research wild Pokémon in a long-gone era of the Sinnoh region to create and complete the region’s first Pokédex.',
	'/images/pokemon-legends-arceus.jpg', '4', '59.99', '890161998', '83617997', 'B0914YGQSH'),
('7', 'Kirby and the Forgotten Land' , '4.5', 'HAL Laboratory', 'Float off on an all-new adventure as the powerful puffball, Kirby. Explore in 3D stages as you discover a mysterious world with abandoned structures from a past civilization—like a shopping mall?! Copy enemies’ abilities like the new Drill and Ranger and use them to attack, explore your surroundings, and save the kidnapped Waddle Dees from the ferocious Beast Pack alongside the mysterious Elfilin. Hope you’re hungry for an unforgettable adventure!',
	'/images/kirby.jpg', '4', '59.99', '703058186', '84738068', 'B09H221SH4');

INSERT INTO platform VALUES
('1', 'PC'),
('2', 'Xbox'),
('3', 'Playstation'),
('4', 'Mobile'),
('5', 'VR'),
('6', 'Nintendo Switch');

INSERT INTO game_has_platform VALUES
('1', '1', '2011-11-18'),
('1', '2', '2011-11-18'),
('1', '3', '2011-11-18'),
('1', '4', '2011-11-18'),
('2', '1', '2017-07-21'),
('2', '2', '2017-07-21'),
('2', '3', '2017-07-21'),
('2', '4', '2017-07-21'),
('3', '1', '2013-09-13'),
('3', '2', '2013-09-13'),
('3', '3', '2013-09-13'),
('4', '1', '2016-05-03'),
('4', '2', '2016-05-03'),
('4', '3', '2016-05-03'),
('5', '2', '2011-11-10'),
('5', '3', '2011-11-10'),
('6', '6', '2022-1-28');


INSERT INTO price_history VALUES
-- Minecraft
(DEFAULT, '2011-11-18', 29.99, '1', 'Target'),
(DEFAULT, '2011-11-18', 29.99, '1', 'Amazon'),
(DEFAULT, '2011-11-18', 29.99, '1', 'Walmart'),
(DEFAULT, '2022-03-24', '24.99', '1', 'Amazon'),

-- Fortnite
(DEFAULT, '2017-07-21', '00.00', '2', 'Target'),
(DEFAULT, '2017-07-21', '00.00', '2', 'Amazon'),
(DEFAULT, '2017-07-21', '00.00', '2', 'Walmart'),

-- GTA V
(DEFAULT, '2013-09-13', '59.99', '3', 'Amazon'),
(DEFAULT, '2013-09-13', '59.99', '3', 'Target'),
(DEFAULT, '2013-09-13', '59.99', '3', 'Walmart'),
(DEFAULT, '2022-03-24', '29.99', '3', 'Walmart'),
(DEFAULT, '2022-04-20', '29.99', '3', 'Amazon'),
(DEFAULT, '2022-03-24', '29.99', '3', 'Target'),
(DEFAULT, '2022-04-04', '19.99', '3', 'Target'),

-- Overwatch
(DEFAULT, '2016-05-03', '39.99', '4', 'Amazon'),
(DEFAULT, '2016-05-03', '39.99', '4', 'Walmart'),
(DEFAULT, '2016-05-03', '39.99', '4', 'Target'),
(DEFAULT, '2020-07-23', '19.99', '4', 'Amazon'),
(DEFAULT, '2022-05-04', '34.78', '4', 'Amazon'),

-- Skyrim
(DEFAULT, '2011-11-10', '54.98', '5', 'Amazon'),
(DEFAULT, '2011-11-10', '59.99', '5', 'Target'),
(DEFAULT, '2011-11-10', '49.94', '5', 'Walmart'),
(DEFAULT, '2022-05-04', '54.85', '5', 'Amazon'),
(DEFAULT, '2022-05-04', '59.99', '5', 'Target'),
(DEFAULT, '2022-05-04', '49.94', '5', 'Walmart'),
 
-- Pokemon Legends Arceus
(DEFAULT, '2022-1-28', '59.99', '6', 'Target'),
(DEFAULT, '2022-1-28', '54.90', '6', 'Walmart'),
(DEFAULT, '2022-1-28', '59.99', '6', 'Amazon'),
(DEFAULT, '2022-05-04', '59.99', '6', 'Target'),
(DEFAULT, '2022-05-04', '49.99', '6', 'Walmart'),
(DEFAULT, '2022-05-04', '58.59', '6', 'Amazon'),

-- Kirby Forgotten land
(DEFAULT, '2022-05-04', '59.99', '7', 'Target'),
(DEFAULT, '2022-05-04', '53.99', '7', 'Walmart'),
(DEFAULT, '2022-05-04', '54.99', '7', 'Amazon');
