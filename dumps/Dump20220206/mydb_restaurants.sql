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
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurants` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `restaurantName` varchar(45) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `ratingRestaurant` int(1) unsigned zerofill DEFAULT NULL,
  `priceRestaurant` int(1) unsigned zerofill DEFAULT NULL,
  `category` varchar(20) DEFAULT NULL,
  `picture` varchar(1024) DEFAULT NULL,
  `contact` int DEFAULT NULL,
  `openingHours` varchar(1024) DEFAULT NULL,
  `description` varchar(10000) DEFAULT NULL,
  `address` varchar(1024) DEFAULT NULL,
  `longtitude` decimal(10,8) DEFAULT NULL,
  `latitude` decimal(11,8) DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=ascii;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (1,'MacDonald\'s','Compass One',3,4,'Fast Food','https://www.incimages.com/uploaded_files/image/1920x1080/getty_1026535662_2000133316537670495_415913.jpg',63863601,'Sunday 7am-11pm Monday 7am-11pm Tuesday 7am-11pm Wednesday 7am-11pm Thursday 7am-11pm Friday 7am-11pm Saturday 7am-11pm','Back in 1954, a man named Ray Kroc discovered a small burger restaurant in California, and wrote the first page of our history. From humble beginnings as a small restaurant, we\'re proud to have become one of the world\'s leading food service brands with more than 36,000 restaurants in more than 100 countries. From adding more balanced options to our Happy Meal, to serving up fresh beef Quarter Pounder burgers that are cooked when you order, we\'re always finding ways to show our commitment to our customers and our food. ','1 Sengkang Square #B1-13 Compass One, 545078',1.39247350,103.89529787),(2,'Burger King','Waterway Point',3,3,'Fast Food','https://d3nuqriibqh3vw.cloudfront.net/h7cxwvbstcznsibyjza1_uqn8puv3lfggtvdl7ikxfm.jpg?7Kd5xpqgobP16r1EbzJrhCXatMASwNrr',68024297,'Sunday    8am-10pm Monday    8am-10pm Tuesday   8am-10pm Wednesday 8am-10pm Thursday  8am-10pm Friday    8am-11pm Saturday  8am-11pm','Every day, more than 11 million guests visit Burger King restaurants around the world. And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food. Founded in 1954, Burger King is the second largest fast food hamburger chain in the world. The original Home of the Whopper, our commitment to premium ingredients, signature recipes, and family-friendly dining experiences is what has defined our brand for more than 50 successful years.','83 Punggol Central, #01-26 Waterway Point East Wing, Singapore 828761',1.40675402,103.90215302),(3,'Saizeriya','White Sands',2,4,'Italian','https://hungryghost.sg/wp-content/uploads/2021/12/Saizeriya-Restaurant-Front.jpg',63854234,'Sunday 11am-10pm Monday 11am-10pm Tuesday 11am-10pm Wednesday 11am-10pm Thursday 11am-10pm Friday 11am-10pm Saturday 11am-10pm','At Saizeriya, we know that variety is a key part of a restaurant\'s appeal. We aim for excellence by providing a wide variety of choices to our valued diners. For all occasions, whether busy times or as an occasional luxury, Saizeriya is dedicated to providing top-quality meals, taking into consideration the diversity of lifestyles and preferences. We at Saizeriya position ourselves as a \"Casual Italian Restaurant\" that welcomes repeated visits with family members, friends, couples, and more, throughout their daily lives. We will continue to bring you the Italian style food culture, and to delight you on all occasions.','1 Pasir Ris Central Street 3, #03-11/12/13, White Sands, Singapore 518457',1.37247705,103.94934082),(4,'Din Tai Fung','Tampiness Mall',4,2,'Chinese','https://dintaifung.com.sg/wp-content/uploads/2020/03/Din-Tai-Fung-Paragon-B1-03.jpg',67870998,'Sunday 7am-11pm Monday 7am-11pm Tuesday 7am-11pm Wednesday 7am-11pm Thursday 7am-11pm Friday 7am-11pm Saturday 7am-11pm','Din Tai Fung\'s Xiao Long Bao became so popular that Mr. Yang phased out his oil business and turned Din Tai Fung into the full-fledged restaurant that it is today. With a menu boasting far more than just Xiao Long Bao, the brand has won many awards-including the coveted Michelin star at its Hong Kong branch-and has become an internationally beloved brand, offering a taste of Taiwan to the United States, Japan, South Korea, Singapore, China, Hong Kong, Indonesia, Malaysia, Australia, Europe, and Thailand.','4 Tampines Central 5, 02-01 Tampines Mall, Singapore 529510',1.35269296,103.94519043),(5,'Genki Sushi','Orchard Central',4,2,'Japanese','https://tastymonial.files.wordpress.com/2017/10/20170928_1956131566613974.jpg',69572724,'Sunday    8am-10pm Monday    8am-10pm Tuesday   8am-10pm Wednesday 8am-10pm Thursday  8am-10pm Friday    8am-11pm Saturday  8am-11pm','A subsidiary of Maxim\'s Group Hong Kong, Genki Sushi Singapore operates a total of 17 outlets island-wide, with more to come. Focusing on Kaiten (revolving) sushi, a concept pioneered by the brand\'s founder Fumio Saito, Genki Sushi prides itself on offering quality and contemporary Japanese cuisine at an excellent value.With the latest technologies and innovations, Genki Sushi Singapore intelligently delivers food to diners at their tables via a Kousoku Train system which is greatly adored by all Genki fans. Integrated seamlessly with our BYOD (Bring Your Own Device) ordering system, dining at Genki Sushi Singapore is truly a unique unconventional experience.','181 Orchard Road 04-30 Central, Orchard, 238896',1.30097997,103.83917236);
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
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
