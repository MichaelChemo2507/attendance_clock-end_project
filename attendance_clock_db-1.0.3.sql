-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 26, 2023 at 04:36 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `attendance_clock_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `Employee_id` int(250) NOT NULL,
  `FirstName` varchar(50) NOT NULL,
  `LastName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`Employee_id`, `FirstName`, `LastName`) VALUES
(2, 'moshe cohen', ''),
(3, 'zion amar', ''),
(4, 'nati pinyan', '');

-- --------------------------------------------------------

--
-- Table structure for table `employees_clock`
--

CREATE TABLE `employees_clock` (
  `id` int(250) NOT NULL,
  `Employee_id` int(250) NOT NULL,
  `Entry_time` datetime NOT NULL,
  `Exit_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees_clock`
--

INSERT INTO `employees_clock` (`id`, `Employee_id`, `Entry_time`, `Exit_time`) VALUES
(2, 2, '2023-09-24 00:00:00', '2023-09-24 16:20:10'),
(3, 2, '2023-09-24 00:00:00', '2023-09-24 16:00:00'),
(4, 3, '2023-09-24 10:00:00', '2023-09-24 16:00:00'),
(5, 4, '2023-09-24 10:00:00', '2023-09-24 16:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`Employee_id`);

--
-- Indexes for table `employees_clock`
--
ALTER TABLE `employees_clock`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Employees_clock_fk0` (`Employee_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `Employee_id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `employees_clock`
--
ALTER TABLE `employees_clock`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employees_clock`
--
ALTER TABLE `employees_clock`
  ADD CONSTRAINT `Employees_clock_fk0` FOREIGN KEY (`Employee_id`) REFERENCES `employees` (`Employee_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
