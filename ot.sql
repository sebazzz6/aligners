-- --------------------------------------------------------
-- Host:                         192.168.0.83
-- Versión del servidor:         5.7.36-log - MySQL Community Server (GPL)
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para innovali_innovaligners
DROP DATABASE IF EXISTS `innovali_innovaligners`;
CREATE DATABASE IF NOT EXISTS `innovali_innovaligners` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `innovali_innovaligners`;

-- Volcando estructura para tabla innovali_innovaligners.agenda
DROP TABLE IF EXISTS `agenda`;
CREATE TABLE IF NOT EXISTS `agenda` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(150) COLLATE utf8_spanish_ci DEFAULT NULL,
  `body` text COLLATE utf8_spanish_ci NOT NULL,
  `url` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `class` varchar(45) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'event-important',
  `start` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `end` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `inicio_normal` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `final_normal` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `inicio_normal` (`inicio_normal`),
  UNIQUE KEY `final_normal` (`final_normal`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Volcando datos para la tabla innovali_innovaligners.agenda: ~0 rows (aproximadamente)

-- Volcando estructura para tabla innovali_innovaligners.evento
DROP TABLE IF EXISTS `evento`;
CREATE TABLE IF NOT EXISTS `evento` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `start` date NOT NULL,
  `color` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

-- Volcando datos para la tabla innovali_innovaligners.evento: ~6 rows (aproximadamente)
REPLACE INTO `evento` (`id`, `title`, `start`, `color`) VALUES
	(13, 'EVENTO 0001', '2021-11-10', '#dd0e0e'),
	(15, 'EVENTO 0002', '2021-11-13', '#4414f0'),
	(16, 'EVENTO 003', '2021-11-06', '#000000'),
	(17, 'evento 08', '2021-11-16', '#0ce5e9'),
	(18, 'EVENTO 08', '2021-11-19', '#ecfd08'),
	(20, 'test', '2022-06-23', '#000000');

-- Volcando estructura para tabla innovali_innovaligners.events
DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `start_event` datetime NOT NULL,
  `end_event` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.events: ~3 rows (aproximadamente)
REPLACE INTO `events` (`id`, `title`, `start_event`, `end_event`) VALUES
	(1, 'test', '2022-05-31 00:00:00', '2022-06-01 00:00:00'),
	(2, 'testing', '2022-06-19 09:30:00', '2022-06-19 10:00:00'),
	(3, 'Test', '2022-06-20 09:00:00', '2022-06-20 09:30:00');

-- Volcando estructura para tabla innovali_innovaligners.events_demo
DROP TABLE IF EXISTS `events_demo`;
CREATE TABLE IF NOT EXISTS `events_demo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bdo` varchar(300) NOT NULL,
  `email` varchar(300) NOT NULL,
  `title` varchar(255) NOT NULL,
  `color` varchar(20) DEFAULT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `t_stamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=237 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla innovali_innovaligners.events_demo: ~13 rows (aproximadamente)
REPLACE INTO `events_demo` (`id`, `bdo`, `email`, `title`, `color`, `start`, `end`, `status`, `t_stamp`) VALUES
	(220, 'bnec', 'bench@gmail.com', 'sample appointment', '#008000', '2019-08-29 09:05:00', '2019-08-29 09:10:00', 1, '2019-08-29 12:56:24'),
	(221, '', '', 'sample', '#FF0000', '2019-08-29 00:00:00', '2019-08-30 00:00:00', NULL, '2019-08-29 12:57:52'),
	(223, '', '', 'meeting with client', '##FF8C00', '2019-08-22 00:00:00', '2019-08-23 00:00:00', NULL, '2019-08-29 12:58:08'),
	(224, '', '', 'meeting with employee', '#008000', '2019-08-29 00:00:00', '2019-08-30 00:00:00', NULL, '2019-08-29 12:58:19'),
	(225, '', '', 'meeting with managers', '#008000', '2019-08-29 00:00:00', '2019-08-30 00:00:00', NULL, '2019-08-29 12:58:31'),
	(226, '', '', 'meeting with executives', '#008000', '2019-08-29 00:00:00', '2019-08-30 00:00:00', NULL, '2019-08-29 12:58:40'),
	(227, '', '', 'Sample', '#008000', '2019-08-21 12:00:00', '2019-08-21 13:00:00', NULL, '2019-08-30 06:45:49'),
	(228, '', '', 'QWEQWE', '##FF8C00', '2019-08-01 00:00:00', '2019-08-02 00:00:00', NULL, '2019-08-30 06:58:41'),
	(230, '', '', 'QWEW', '#FF8C00', '2019-08-09 00:00:00', '2019-08-10 00:00:00', NULL, '2019-08-30 06:59:26'),
	(231, '', '', 'EWEW', '#FF0000', '2019-08-14 00:00:00', '2019-08-15 00:00:00', NULL, '2019-08-30 06:59:56'),
	(232, '', '', 'QWEWEW', '##FF8C00', '2019-08-16 00:00:00', '2019-08-17 00:00:00', NULL, '2019-08-30 07:00:02'),
	(233, '', '', 'bench', '#008000', '2019-08-07 09:00:00', '2019-08-08 12:00:00', NULL, '2019-08-30 07:00:55'),
	(234, '', '', 'S', '##FF8C00', '2019-08-06 00:00:00', '2019-08-07 00:00:00', NULL, '2019-08-30 07:00:59');

-- Volcando estructura para tabla innovali_innovaligners.member_rss
DROP TABLE IF EXISTS `member_rss`;
CREATE TABLE IF NOT EXISTS `member_rss` (
  `member_id` int(11) NOT NULL AUTO_INCREMENT,
  `member_first` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(300) NOT NULL,
  `role` varchar(30) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.member_rss: ~8 rows (aproximadamente)
REPLACE INTO `member_rss` (`member_id`, `member_first`, `username`, `password`, `email`, `role`, `status`) VALUES
	(5, 'user', 'user', 'user', 'braquino@primus.com.ph', 'user', 1),
	(6, 'admin', 'admin', 'admin', '', 'admin', 1),
	(7, 'amara', 'amara', 'amara', 'amara@gmail.com', 'user', 1),
	(8, 'ETTALUCOD', 'ETTALUCOD', 'ETTALUCOD', '', 'admin', 1),
	(9, 'asberceles', 'asberceles', 'asberceles', 'braquino@primus.com.ph', 'user', 1),
	(10, 'sbborja', 'sbborja', 'sbborja', 'sbborja@primus.com.ph', 'user', 1),
	(11, 'bnec', 'bench', 'bench', 'bench@gmail.com', '', 1),
	(12, 'bebeb', 'ebeb', 'ebeb', 'ebebe@gmail', 'user', 1);

-- Volcando estructura para tabla innovali_innovaligners.tblcargo
DROP TABLE IF EXISTS `tblcargo`;
CREATE TABLE IF NOT EXISTS `tblcargo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblcargo: ~3 rows (aproximadamente)
REPLACE INTO `tblcargo` (`id`, `nombre`) VALUES
	(1, 'Doctor'),
	(2, 'Administrador'),
	(3, 'Secretaria');

-- Volcando estructura para tabla innovali_innovaligners.tblcargopago
DROP TABLE IF EXISTS `tblcargopago`;
CREATE TABLE IF NOT EXISTS `tblcargopago` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblcargopago: ~0 rows (aproximadamente)

-- Volcando estructura para tabla innovali_innovaligners.tblclientes
DROP TABLE IF EXISTS `tblclientes`;
CREATE TABLE IF NOT EXISTS `tblclientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Clinica` varchar(100) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  `nombres` varchar(50) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `usuario` varchar(50) DEFAULT NULL,
  `pass` varchar(50) DEFAULT NULL,
  `cargo` int(11) DEFAULT NULL,
  `correo` text,
  `perfil` int(11) DEFAULT '5',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblclientes: ~1 rows (aproximadamente)
REPLACE INTO `tblclientes` (`id`, `Clinica`, `activo`, `nombres`, `apellidos`, `usuario`, `pass`, `cargo`, `correo`, `perfil`) VALUES
	(4, '3', 1, 'Sergio', 'Test', 'Test', 'adm123', 2, 'adm@clinicamanquehue.cl', 5);

-- Volcando estructura para tabla innovali_innovaligners.tblclientesusuarios
DROP TABLE IF EXISTS `tblclientesusuarios`;
CREATE TABLE IF NOT EXISTS `tblclientesusuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(50) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `cargo` int(11) DEFAULT NULL,
  `clinica` int(11) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  `correo` text,
  `pass` varchar(16) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblclientesusuarios: ~0 rows (aproximadamente)

-- Volcando estructura para tabla innovali_innovaligners.tblclinicas
DROP TABLE IF EXISTS `tblclinicas`;
CREATE TABLE IF NOT EXISTS `tblclinicas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clinica` varchar(50) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `comuna` int(11) DEFAULT NULL,
  `ciudad` int(11) DEFAULT NULL,
  `pais` int(11) DEFAULT NULL,
  `metodoPago` int(11) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblclinicas: ~1 rows (aproximadamente)
REPLACE INTO `tblclinicas` (`id`, `clinica`, `direccion`, `comuna`, `ciudad`, `pais`, `metodoPago`, `activo`, `telefono`) VALUES
	(3, 'Clinica Manquehue', 'La Capitania 80', 1, 1, 1, 1, 1, '69878969');

-- Volcando estructura para tabla innovali_innovaligners.tblcomunas
DROP TABLE IF EXISTS `tblcomunas`;
CREATE TABLE IF NOT EXISTS `tblcomunas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comuna` varchar(64) NOT NULL,
  `provincia_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=348 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla innovali_innovaligners.tblcomunas: 346 rows
/*!40000 ALTER TABLE `tblcomunas` DISABLE KEYS */;
REPLACE INTO `tblcomunas` (`id`, `comuna`, `provincia_id`) VALUES
	(1, 'Arica', 1),
	(2, 'Camarones', 1),
	(3, 'General Lagos', 2),
	(4, 'Putre', 2),
	(5, 'Alto Hospicio', 3),
	(6, 'Iquique', 3),
	(7, 'Camiña', 4),
	(8, 'Colchane', 4),
	(9, 'Huara', 4),
	(10, 'Pica', 4),
	(11, 'Pozo Almonte', 4),
	(12, 'Tocopilla', 5),
	(13, 'María Elena', 5),
	(14, 'Calama', 6),
	(15, 'Ollague', 6),
	(16, 'San Pedro de Atacama', 6),
	(17, 'Antofagasta', 7),
	(18, 'Mejillones', 7),
	(19, 'Sierra Gorda', 7),
	(20, 'Taltal', 7),
	(21, 'Chañaral', 8),
	(22, 'Diego de Almagro', 8),
	(23, 'Copiapó', 9),
	(24, 'Caldera', 9),
	(25, 'Tierra Amarilla', 9),
	(26, 'Vallenar', 10),
	(27, 'Alto del Carmen', 10),
	(28, 'Freirina', 10),
	(29, 'Huasco', 10),
	(30, 'La Serena', 11),
	(31, 'Coquimbo', 11),
	(32, 'Andacollo', 11),
	(33, 'La Higuera', 11),
	(34, 'Paihuano', 11),
	(35, 'Vicuña', 11),
	(36, 'Ovalle', 12),
	(37, 'Combarbalá', 12),
	(38, 'Monte Patria', 12),
	(39, 'Punitaqui', 12),
	(40, 'Río Hurtado', 12),
	(41, 'Illapel', 13),
	(42, 'Canela', 13),
	(43, 'Los Vilos', 13),
	(44, 'Salamanca', 13),
	(45, 'La Ligua', 14),
	(46, 'Cabildo', 14),
	(47, 'Zapallar', 14),
	(48, 'Papudo', 14),
	(49, 'Petorca', 14),
	(50, 'Los Andes', 15),
	(51, 'San Esteban', 15),
	(52, 'Calle Larga', 15),
	(53, 'Rinconada', 15),
	(54, 'San Felipe', 16),
	(55, 'Llaillay', 16),
	(56, 'Putaendo', 16),
	(57, 'Santa María', 16),
	(58, 'Catemu', 16),
	(59, 'Panquehue', 16),
	(60, 'Quillota', 17),
	(61, 'La Cruz', 17),
	(62, 'La Calera', 17),
	(63, 'Nogales', 17),
	(64, 'Hijuelas', 17),
	(65, 'Valparaíso', 18),
	(66, 'Viña del Mar', 18),
	(67, 'Concón', 18),
	(68, 'Quintero', 18),
	(69, 'Puchuncaví', 18),
	(70, 'Casablanca', 18),
	(71, 'Juan Fernández', 18),
	(72, 'San Antonio', 19),
	(73, 'Cartagena', 19),
	(74, 'El Tabo', 19),
	(75, 'El Quisco', 19),
	(76, 'Algarrobo', 19),
	(77, 'Santo Domingo', 19),
	(78, 'Isla de Pascua', 20),
	(79, 'Quilpué', 21),
	(80, 'Limache', 21),
	(81, 'Olmué', 21),
	(82, 'Villa Alemana', 21),
	(83, 'Colina', 22),
	(84, 'Lampa', 22),
	(85, 'Tiltil', 22),
	(86, 'Santiago', 23),
	(87, 'Vitacura', 23),
	(88, 'San Ramón', 23),
	(89, 'San Miguel', 23),
	(90, 'San Joaquín', 23),
	(91, 'Renca', 23),
	(92, 'Recoleta', 23),
	(93, 'Quinta Normal', 23),
	(94, 'Quilicura', 23),
	(95, 'Pudahuel', 23),
	(96, 'Providencia', 23),
	(97, 'Peñalolén', 23),
	(98, 'Pedro Aguirre Cerda', 23),
	(99, 'Ñuñoa', 23),
	(100, 'Maipú', 23),
	(101, 'Macul', 23),
	(102, 'Lo Prado', 23),
	(103, 'Lo Espejo', 23),
	(104, 'Lo Barnechea', 23),
	(105, 'Las Condes', 23),
	(106, 'La Reina', 23),
	(107, 'La Pintana', 23),
	(108, 'La Granja', 23),
	(109, 'La Florida', 23),
	(110, 'La Cisterna', 23),
	(111, 'Independencia', 23),
	(112, 'Huechuraba', 23),
	(113, 'Estación Central', 23),
	(114, 'El Bosque', 23),
	(115, 'Conchalí', 23),
	(116, 'Cerro Navia', 23),
	(117, 'Cerrillos', 23),
	(118, 'Puente Alto', 24),
	(119, 'San José de Maipo', 24),
	(120, 'Pirque', 24),
	(121, 'San Bernardo', 25),
	(122, 'Buin', 25),
	(123, 'Paine', 25),
	(124, 'Calera de Tango', 25),
	(125, 'Melipilla', 26),
	(126, 'Alhué', 26),
	(127, 'Curacaví', 26),
	(128, 'María Pinto', 26),
	(129, 'San Pedro', 26),
	(130, 'Isla de Maipo', 27),
	(131, 'El Monte', 27),
	(132, 'Padre Hurtado', 27),
	(133, 'Peñaflor', 27),
	(134, 'Talagante', 27),
	(135, 'Codegua', 28),
	(136, 'Coínco', 28),
	(137, 'Coltauco', 28),
	(138, 'Doñihue', 28),
	(139, 'Graneros', 28),
	(140, 'Las Cabras', 28),
	(141, 'Machalí', 28),
	(142, 'Malloa', 28),
	(143, 'Mostazal', 28),
	(144, 'Olivar', 28),
	(145, 'Peumo', 28),
	(146, 'Pichidegua', 28),
	(147, 'Quinta de Tilcoco', 28),
	(148, 'Rancagua', 28),
	(149, 'Rengo', 28),
	(150, 'Requínoa', 28),
	(151, 'San Vicente de Tagua Tagua', 28),
	(152, 'Chépica', 29),
	(153, 'Chimbarongo', 29),
	(154, 'Lolol', 29),
	(155, 'Nancagua', 29),
	(156, 'Palmilla', 29),
	(157, 'Peralillo', 29),
	(158, 'Placilla', 29),
	(159, 'Pumanque', 29),
	(160, 'San Fernando', 29),
	(161, 'Santa Cruz', 29),
	(162, 'La Estrella', 30),
	(163, 'Litueche', 30),
	(164, 'Marchigüe', 30),
	(165, 'Navidad', 30),
	(166, 'Paredones', 30),
	(167, 'Pichilemu', 30),
	(168, 'Curicó', 31),
	(169, 'Hualañé', 31),
	(170, 'Licantén', 31),
	(171, 'Molina', 31),
	(172, 'Rauco', 31),
	(173, 'Romeral', 31),
	(174, 'Sagrada Familia', 31),
	(175, 'Teno', 31),
	(176, 'Vichuquén', 31),
	(177, 'Talca', 32),
	(178, 'San Clemente', 32),
	(179, 'Pelarco', 32),
	(180, 'Pencahue', 32),
	(181, 'Maule', 32),
	(182, 'San Rafael', 32),
	(183, 'Curepto', 33),
	(184, 'Constitución', 32),
	(185, 'Empedrado', 32),
	(186, 'Río Claro', 32),
	(187, 'Linares', 33),
	(188, 'San Javier', 33),
	(189, 'Parral', 33),
	(190, 'Villa Alegre', 33),
	(191, 'Longaví', 33),
	(192, 'Colbún', 33),
	(193, 'Retiro', 33),
	(194, 'Yerbas Buenas', 33),
	(195, 'Cauquenes', 34),
	(196, 'Chanco', 34),
	(197, 'Pelluhue', 34),
	(198, 'Bulnes', 35),
	(199, 'Chillán', 35),
	(200, 'Chillán Viejo', 35),
	(201, 'El Carmen', 35),
	(202, 'Pemuco', 35),
	(203, 'Pinto', 35),
	(204, 'Quillón', 35),
	(205, 'San Ignacio', 35),
	(206, 'Yungay', 35),
	(207, 'Cobquecura', 36),
	(208, 'Coelemu', 36),
	(209, 'Ninhue', 36),
	(210, 'Portezuelo', 36),
	(211, 'Quirihue', 36),
	(212, 'Ránquil', 36),
	(213, 'Treguaco', 36),
	(214, 'San Carlos', 37),
	(215, 'Coihueco', 37),
	(216, 'San Nicolás', 37),
	(217, 'Ñiquén', 37),
	(218, 'San Fabián', 37),
	(219, 'Alto Biobío', 38),
	(220, 'Antuco', 38),
	(221, 'Cabrero', 38),
	(222, 'Laja', 38),
	(223, 'Los Ángeles', 38),
	(224, 'Mulchén', 38),
	(225, 'Nacimiento', 38),
	(226, 'Negrete', 38),
	(227, 'Quilaco', 38),
	(228, 'Quilleco', 38),
	(229, 'San Rosendo', 38),
	(230, 'Santa Bárbara', 38),
	(231, 'Tucapel', 38),
	(232, 'Yumbel', 38),
	(233, 'Concepción', 39),
	(234, 'Coronel', 39),
	(235, 'Chiguayante', 39),
	(236, 'Florida', 39),
	(237, 'Hualpén', 39),
	(238, 'Hualqui', 39),
	(239, 'Lota', 39),
	(240, 'Penco', 39),
	(241, 'San Pedro de La Paz', 39),
	(242, 'Santa Juana', 39),
	(243, 'Talcahuano', 39),
	(244, 'Tomé', 39),
	(245, 'Arauco', 40),
	(246, 'Cañete', 40),
	(247, 'Contulmo', 40),
	(248, 'Curanilahue', 40),
	(249, 'Lebu', 40),
	(250, 'Los Álamos', 40),
	(251, 'Tirúa', 40),
	(252, 'Angol', 41),
	(253, 'Collipulli', 41),
	(254, 'Curacautín', 41),
	(255, 'Ercilla', 41),
	(256, 'Lonquimay', 41),
	(257, 'Los Sauces', 41),
	(258, 'Lumaco', 41),
	(259, 'Purén', 41),
	(260, 'Renaico', 41),
	(261, 'Traiguén', 41),
	(262, 'Victoria', 41),
	(263, 'Temuco', 42),
	(264, 'Carahue', 42),
	(265, 'Cholchol', 42),
	(266, 'Cunco', 42),
	(267, 'Curarrehue', 42),
	(268, 'Freire', 42),
	(269, 'Galvarino', 42),
	(270, 'Gorbea', 42),
	(271, 'Lautaro', 42),
	(272, 'Loncoche', 42),
	(273, 'Melipeuco', 42),
	(274, 'Nueva Imperial', 42),
	(275, 'Padre Las Casas', 42),
	(276, 'Perquenco', 42),
	(277, 'Pitrufquén', 42),
	(278, 'Pucón', 42),
	(279, 'Saavedra', 42),
	(280, 'Teodoro Schmidt', 42),
	(281, 'Toltén', 42),
	(282, 'Vilcún', 42),
	(283, 'Villarrica', 42),
	(284, 'Valdivia', 43),
	(285, 'Corral', 43),
	(286, 'Lanco', 43),
	(287, 'Los Lagos', 43),
	(288, 'Máfil', 43),
	(289, 'Mariquina', 43),
	(290, 'Paillaco', 43),
	(291, 'Panguipulli', 43),
	(292, 'La Unión', 44),
	(293, 'Futrono', 44),
	(294, 'Lago Ranco', 44),
	(295, 'Río Bueno', 44),
	(297, 'Osorno', 45),
	(298, 'Puerto Octay', 45),
	(299, 'Purranque', 45),
	(300, 'Puyehue', 45),
	(301, 'Río Negro', 45),
	(302, 'San Juan de la Costa', 45),
	(303, 'San Pablo', 45),
	(304, 'Calbuco', 46),
	(305, 'Cochamó', 46),
	(306, 'Fresia', 46),
	(307, 'Frutillar', 46),
	(308, 'Llanquihue', 46),
	(309, 'Los Muermos', 46),
	(310, 'Maullín', 46),
	(311, 'Puerto Montt', 46),
	(312, 'Puerto Varas', 46),
	(313, 'Ancud', 47),
	(314, 'Castro', 47),
	(315, 'Chonchi', 47),
	(316, 'Curaco de Vélez', 47),
	(317, 'Dalcahue', 47),
	(318, 'Puqueldón', 47),
	(319, 'Queilén', 47),
	(320, 'Quellón', 47),
	(321, 'Quemchi', 47),
	(322, 'Quinchao', 47),
	(323, 'Chaitén', 48),
	(324, 'Futaleufú', 48),
	(325, 'Hualaihué', 48),
	(326, 'Palena', 48),
	(327, 'Lago Verde', 49),
	(328, 'Coihaique', 49),
	(329, 'Aysén', 50),
	(330, 'Cisnes', 50),
	(331, 'Guaitecas', 50),
	(332, 'Río Ibáñez', 51),
	(333, 'Chile Chico', 51),
	(334, 'Cochrane', 52),
	(335, 'O\'Higgins', 52),
	(336, 'Tortel', 52),
	(337, 'Natales', 53),
	(338, 'Torres del Paine', 53),
	(339, 'Laguna Blanca', 54),
	(340, 'Punta Arenas', 54),
	(341, 'Río Verde', 54),
	(342, 'San Gregorio', 54),
	(343, 'Porvenir', 55),
	(344, 'Primavera', 55),
	(345, 'Timaukel', 55),
	(346, 'Cabo de Hornos', 56),
	(347, 'Antártica', 56);
/*!40000 ALTER TABLE `tblcomunas` ENABLE KEYS */;

-- Volcando estructura para tabla innovali_innovaligners.tblestados
DROP TABLE IF EXISTS `tblestados`;
CREATE TABLE IF NOT EXISTS `tblestados` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblestados: ~7 rows (aproximadamente)
REPLACE INTO `tblestados` (`id`, `nombre`) VALUES
	(1, 'Solicitado'),
	(2, 'En Proceso'),
	(3, 'Citado'),
	(4, 'Reunión'),
	(5, 'Fin Reunión'),
	(6, 'Aprobado'),
	(7, 'Fabricación');

-- Volcando estructura para tabla innovali_innovaligners.tblestadosot
DROP TABLE IF EXISTS `tblestadosot`;
CREATE TABLE IF NOT EXISTS `tblestadosot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblestadosot: ~0 rows (aproximadamente)
REPLACE INTO `tblestadosot` (`id`, `nombre`) VALUES
	(1, 'Guardado');

-- Volcando estructura para tabla innovali_innovaligners.tblexamenes
DROP TABLE IF EXISTS `tblexamenes`;
CREATE TABLE IF NOT EXISTS `tblexamenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ot` int(11) DEFAULT NULL,
  `tipo` int(11) DEFAULT NULL,
  `ruta` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblexamenes: ~0 rows (aproximadamente)

-- Volcando estructura para tabla innovali_innovaligners.tblformulario
DROP TABLE IF EXISTS `tblformulario`;
CREATE TABLE IF NOT EXISTS `tblformulario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ot` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblformulario: ~0 rows (aproximadamente)

-- Volcando estructura para tabla innovali_innovaligners.tblmetodopago
DROP TABLE IF EXISTS `tblmetodopago`;
CREATE TABLE IF NOT EXISTS `tblmetodopago` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblmetodopago: ~2 rows (aproximadamente)
REPLACE INTO `tblmetodopago` (`id`, `nombre`) VALUES
	(1, 'Transferencia'),
	(2, 'TransBank');

-- Volcando estructura para tabla innovali_innovaligners.tblot
DROP TABLE IF EXISTS `tblot`;
CREATE TABLE IF NOT EXISTS `tblot` (
  `ot` int(11) NOT NULL AUTO_INCREMENT,
  `fechaIngreso` datetime DEFAULT CURRENT_TIMESTAMP,
  `usuarioIngreso` int(11) DEFAULT NULL,
  `tipoOt` int(11) DEFAULT NULL,
  `cargoPago` int(11) DEFAULT NULL,
  `nombrePac` varchar(50) DEFAULT NULL,
  `apellidoPac` varchar(50) DEFAULT NULL,
  `rutPac` varchar(50) DEFAULT NULL,
  `fechaNacPac` varchar(50) DEFAULT NULL,
  `arc` int(11) DEFAULT '0',
  `alineacionSup` int(11) DEFAULT '0',
  `alineacionMan` int(11) DEFAULT '0',
  `nivelacionSup` int(11) DEFAULT '0',
  `nivelacionSupText` varchar(50) DEFAULT NULL,
  `nivelacionInf` int(11) DEFAULT '0',
  `nivelacionInfText` varchar(50) DEFAULT NULL,
  `strSup` int(11) DEFAULT '0',
  `strSupText` varchar(50) DEFAULT '0',
  `strInf` int(11) DEFAULT '0',
  `strInfText` varchar(50) DEFAULT '0',
  `expSup` int(11) DEFAULT '0',
  `expSupText` varchar(50) DEFAULT NULL,
  `expInf` int(11) DEFAULT '0',
  `expInfText` varchar(50) NOT NULL,
  `rrdSup` int(11) DEFAULT '0',
  `rrdSupText` varchar(50) DEFAULT '0',
  `rrdInf` int(11) DEFAULT '0',
  `rrdInfText` varchar(50) DEFAULT '0',
  `ppdSup` int(11) DEFAULT '0',
  `ppdSupText` varchar(50) DEFAULT '0',
  `ppdInf` int(11) DEFAULT '0',
  `ppdInfText` varchar(50) DEFAULT '0',
  `extSup` int(11) DEFAULT '0',
  `extSupText` varchar(50) DEFAULT '0',
  `extInf` int(11) DEFAULT '0',
  `extInfText` varchar(50) DEFAULT '0',
  `intSup` int(11) DEFAULT '0',
  `intSupText` varchar(50) DEFAULT '0',
  `intInf` int(11) DEFAULT '0',
  `intInfText` varchar(50) DEFAULT '0',
  `cerrarEspSup` int(11) DEFAULT '0',
  `cerrarEspSupText` varchar(50) DEFAULT '0',
  `cerrarEspInf` int(11) DEFAULT '0',
  `cerrarEspInfText` varchar(50) DEFAULT '0',
  `cerrarLMSup` int(11) DEFAULT '0',
  `cerrarLMSupText` varchar(50) DEFAULT '0',
  `cerrarLMInf` int(11) DEFAULT '0',
  `cerrarLMInfText` varchar(50) DEFAULT '0',
  `obs` text,
  `estado` int(11) DEFAULT NULL,
  PRIMARY KEY (`ot`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblot: ~1 rows (aproximadamente)
REPLACE INTO `tblot` (`ot`, `fechaIngreso`, `usuarioIngreso`, `tipoOt`, `cargoPago`, `nombrePac`, `apellidoPac`, `rutPac`, `fechaNacPac`, `arc`, `alineacionSup`, `alineacionMan`, `nivelacionSup`, `nivelacionSupText`, `nivelacionInf`, `nivelacionInfText`, `strSup`, `strSupText`, `strInf`, `strInfText`, `expSup`, `expSupText`, `expInf`, `expInfText`, `rrdSup`, `rrdSupText`, `rrdInf`, `rrdInfText`, `ppdSup`, `ppdSupText`, `ppdInf`, `ppdInfText`, `extSup`, `extSupText`, `extInf`, `extInfText`, `intSup`, `intSupText`, `intInf`, `intInfText`, `cerrarEspSup`, `cerrarEspSupText`, `cerrarEspInf`, `cerrarEspInfText`, `cerrarLMSup`, `cerrarLMSupText`, `cerrarLMInf`, `cerrarLMInfText`, `obs`, `estado`) VALUES
	(6, '2022-07-05 18:27:31', 4, 1, NULL, 'Seba', 'Zeta', '', '', 2, 0, 0, 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', '', 1);

-- Volcando estructura para tabla innovali_innovaligners.tblpacientes
DROP TABLE IF EXISTS `tblpacientes`;
CREATE TABLE IF NOT EXISTS `tblpacientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(50) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `rut` int(11) DEFAULT NULL,
  `dv` int(11) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `centro` int(11) DEFAULT NULL,
  `fechaNacimiento` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblpacientes: ~0 rows (aproximadamente)

-- Volcando estructura para tabla innovali_innovaligners.tblperfiles
DROP TABLE IF EXISTS `tblperfiles`;
CREATE TABLE IF NOT EXISTS `tblperfiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `nivel` int(11) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblperfiles: ~5 rows (aproximadamente)
REPLACE INTO `tblperfiles` (`id`, `nombre`, `nivel`, `activo`) VALUES
	(1, 'Administrador', 1, 1),
	(2, 'Gerente Sucursal', 2, 1),
	(3, 'Laboratorio', 3, 1),
	(4, 'Recepcion', 4, 1),
	(5, 'cliente', 5, 1);

-- Volcando estructura para tabla innovali_innovaligners.tblprovincias
DROP TABLE IF EXISTS `tblprovincias`;
CREATE TABLE IF NOT EXISTS `tblprovincias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `provincia` varchar(64) NOT NULL,
  `region_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=57 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla innovali_innovaligners.tblprovincias: 56 rows
/*!40000 ALTER TABLE `tblprovincias` DISABLE KEYS */;
REPLACE INTO `tblprovincias` (`id`, `provincia`, `region_id`) VALUES
	(1, 'Arica', 1),
	(2, 'Parinacota', 1),
	(3, 'Iquique', 2),
	(4, 'El Tamarugal', 2),
	(5, 'Tocopilla', 3),
	(6, 'El Loa', 3),
	(7, 'Antofagasta', 3),
	(8, 'Chañaral', 4),
	(9, 'Copiapó', 4),
	(10, 'Huasco', 4),
	(11, 'Elqui', 5),
	(12, 'Limarí', 5),
	(13, 'Choapa', 5),
	(14, 'Petorca', 6),
	(15, 'Los Andes', 6),
	(16, 'San Felipe de Aconcagua', 6),
	(17, 'Quillota', 6),
	(18, 'Valparaiso', 6),
	(19, 'San Antonio', 6),
	(20, 'Isla de Pascua', 6),
	(21, 'Marga Marga', 6),
	(22, 'Chacabuco', 7),
	(23, 'Santiago', 7),
	(24, 'Cordillera', 7),
	(25, 'Maipo', 7),
	(26, 'Melipilla', 7),
	(27, 'Talagante', 7),
	(28, 'Cachapoal', 8),
	(29, 'Colchagua', 8),
	(30, 'Cardenal Caro', 8),
	(31, 'Curicó', 9),
	(32, 'Talca', 9),
	(33, 'Linares', 9),
	(34, 'Cauquenes', 9),
	(35, 'Diguillín', 10),
	(36, 'Itata', 10),
	(37, 'Punilla', 10),
	(38, 'Bio Bío', 11),
	(39, 'Concepción', 11),
	(40, 'Arauco', 11),
	(41, 'Malleco', 12),
	(42, 'Cautín', 12),
	(43, 'Valdivia', 13),
	(44, 'Ranco', 13),
	(45, 'Osorno', 14),
	(46, 'Llanquihue', 14),
	(47, 'Chiloé', 14),
	(48, 'Palena', 14),
	(49, 'Coyhaique', 15),
	(50, 'Aysén', 15),
	(51, 'General Carrera', 15),
	(52, 'Capitán Prat', 15),
	(53, 'Última Esperanza', 16),
	(54, 'Magallanes', 16),
	(55, 'Tierra del Fuego', 16),
	(56, 'Antártica Chilena', 16);
/*!40000 ALTER TABLE `tblprovincias` ENABLE KEYS */;

-- Volcando estructura para tabla innovali_innovaligners.tblregiones
DROP TABLE IF EXISTS `tblregiones`;
CREATE TABLE IF NOT EXISTS `tblregiones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `region` varchar(64) NOT NULL,
  `abreviatura` varchar(4) NOT NULL,
  `capital` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla innovali_innovaligners.tblregiones: 16 rows
/*!40000 ALTER TABLE `tblregiones` DISABLE KEYS */;
REPLACE INTO `tblregiones` (`id`, `region`, `abreviatura`, `capital`) VALUES
	(1, 'Arica y Parinacota', 'AP', 'Arica'),
	(2, 'Tarapacá', 'TA', 'Iquique'),
	(3, 'Antofagasta', 'AN', 'Antofagasta'),
	(4, 'Atacama', 'AT', 'Copiapó'),
	(5, 'Coquimbo', 'CO', 'La Serena'),
	(6, 'Valparaiso', 'VA', 'valparaíso'),
	(7, 'Metropolitana de Santiago', 'RM', 'Santiago'),
	(8, 'Libertador General Bernardo O\'Higgins', 'OH', 'Rancagua'),
	(9, 'Maule', 'MA', 'Talca'),
	(10, 'Ñuble', 'NB', 'Chillán'),
	(11, 'Biobío', 'BI', 'Concepción'),
	(12, 'La Araucanía', 'IAR', 'Temuco'),
	(13, 'Los Ríos', 'LR', 'Valdivia'),
	(14, 'Los Lagos', 'LL', 'Puerto Montt'),
	(15, 'Aysén del General Carlos Ibáñez del Campo', 'AI', 'Coyhaique'),
	(16, 'Magallanes y de la Antártica Chilena', 'MG', 'Punta Arenas');
/*!40000 ALTER TABLE `tblregiones` ENABLE KEYS */;

-- Volcando estructura para tabla innovali_innovaligners.tblreuniones
DROP TABLE IF EXISTS `tblreuniones`;
CREATE TABLE IF NOT EXISTS `tblreuniones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblreuniones: ~0 rows (aproximadamente)

-- Volcando estructura para tabla innovali_innovaligners.tbltipoot
DROP TABLE IF EXISTS `tbltipoot`;
CREATE TABLE IF NOT EXISTS `tbltipoot` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tbltipoot: ~3 rows (aproximadamente)
REPLACE INTO `tbltipoot` (`id`, `tipo`, `activo`) VALUES
	(1, 'Fabricación Modelos', 1),
	(2, 'Retiros Modelo', 1),
	(3, 'Paciente Scan', 1);

-- Volcando estructura para tabla innovali_innovaligners.tblusuarios
DROP TABLE IF EXISTS `tblusuarios`;
CREATE TABLE IF NOT EXISTS `tblusuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombres` varchar(50) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `usuario` varchar(50) DEFAULT NULL,
  `pass` varchar(50) DEFAULT NULL,
  `correo` text,
  `perfil` int(11) DEFAULT NULL,
  `activo` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

-- Volcando datos para la tabla innovali_innovaligners.tblusuarios: ~1 rows (aproximadamente)
REPLACE INTO `tblusuarios` (`id`, `nombres`, `apellidos`, `usuario`, `pass`, `correo`, `perfil`, `activo`) VALUES
	(4, 'Sebastian', 'Zuniga', 'szuniga', 'adm123', 'test@test.cl', 1, 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
