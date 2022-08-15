-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `idRestaurant` int NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `comment` text,
  `ratingReview` int DEFAULT NULL,
  `priceReview` int DEFAULT NULL,
  `restaurantReview` varchar(45) DEFAULT NULL,
  `usernameReview` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`_id`),
  KEY `idUser_idx` (`idUser`),
  KEY `idRestaurants_idx` (`idRestaurant`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (4,26,1,'Thur, 3 Feb 2022','Mac Average food',2,2,'MacDonald\'s','Jordan'),(5,26,2,'Thur, 3 Feb 2022','Burger King Average food',3,2,'Burger King','Jordan'),(7,26,4,'Thur, 3 Feb 2022','Din Tai Fung Average food',5,3,'Din Tai Fung','Jordan'),(8,26,5,'Thur, 3 Feb 2022','Genki sushi Average food',3,2,'Genki Sushi','Jordan'),(17,25,1,'Thur, 3 Feb 2022','Food needs improvement',3,4,'MacDonald\'s','SeanneRepublic'),(18,28,2,'Fri, 3 Feb 2022','Affordable but average food',2,4,'Burger King','kiran'),(19,27,4,'Fri, 3 Feb 2022','very pricey but good ',4,5,'Din Tai Fung','ryan'),(21,30,3,'Fri, 3 Feb 2022','Decent for its price',2,5,'Saizeriya','John');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-06 23:44:40
