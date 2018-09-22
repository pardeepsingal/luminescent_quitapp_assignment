SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quizdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `question` varchar(300) DEFAULT NULL,
  `option1` varchar(30) DEFAULT NULL,
  `option2` varchar(30) DEFAULT NULL,
  `option3` varchar(30) DEFAULT NULL,
  `option4` varchar(30) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

insert into quizdb.questions (`question`,`option1`,`option2`,`option3`,`option4`) values ('Where is Statue of Liberty in the United States?', 'New York','Chicago','California','Pheonix');
insert into quizdb.questions (`question`,`option1`,`option2`,`option3`,`option4`) values ('Who is the Current President of United States of America?', 'Donald John Trump','James Monroe','Thomas Jefferson','John Tyler');
insert into quizdb.questions (`question`,`option1`,`option2`,`option3`,`option4`) values ('Philology is the', 'study of bones','study of muscles','study of architecture','science of languages');
insert into quizdb.questions (`question`,`option1`,`option2`,`option3`,`option4`) values ('The 2006 World Cup Football Tournament held in', 'France','China','Germany','India');
insert into quizdb.questions (`question`,`option1`,`option2`,`option3`,`option4`) values ('FFC stands for', 'Foreign Finance Corporation','Film Finance Corporation','Federation of Football Council','None');
insert into quizdb.questions (`question`,`option1`,`option2`,`option3`,`option4`) values ('Epsom (England) is the place associated with', 'Horse racing','Polo','Shooting','Snooker');
insert into quizdb.questions (`question`,`option1`,`option2`,`option3`,`option4`) values ('The unit of current is', 'ohm','watt','ampere','None');
insert into quizdb.questions (`question`,`option1`,`option2`,`option3`,`option4`) values ('The treaty which ushered in NATO, was signed by the member nations at', 'Geneva','London','Paris','Washington');
insert into quizdb.questions (`question`,`option1`,`option2`,`option3`,`option4`) values ('The ratio of width of our National flag to its length is', '3:5','2:3','2:4','3:4');
insert into quizdb.questions (`question`,`option1`,`option2`,`option3`,`option4`) values ('Dandia is a popular dance of', 'Punjab','Gujarat','Tamil Nadu','Maharashtra');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `fullname` varchar(10) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `userscores`
--

CREATE TABLE `userscores` (
  `fname` varchar(20) DEFAULT NULL,
  `noofquestions` varchar(10) DEFAULT NULL,
  `score` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
