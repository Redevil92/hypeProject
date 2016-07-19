-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Lug 19, 2016 alle 23:34
-- Versione del server: 5.6.29-log
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_polifamily`
--
CREATE DATABASE IF NOT EXISTS `my_polifamily` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `my_polifamily`;

-- --------------------------------------------------------

--
-- Struttura della tabella `assistenza`
--

CREATE TABLE IF NOT EXISTS `assistenza` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `MaxiCategoria` varchar(100) NOT NULL,
  `Categoria` varchar(100) NOT NULL,
  `SottoCategoria` varchar(100) NOT NULL,
  `Descrizione` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=110 ;

--
-- Dump dei dati per la tabella `assistenza`
--

INSERT INTO `assistenza` (`id`, `MaxiCategoria`, `Categoria`, `SottoCategoria`, `Descrizione`) VALUES
(1, 'Gestione linea e servizi', 'Fisso', 'Fatture e Pagamenti', 'Come leggere la fattura dalla linea fissa'),
(2, 'Gestione linea e servizi', 'Fisso', 'Fatture e Pagamenti', 'Come pagare la fattura dalla linea fissa'),
(3, 'Gestione linea e servizi', 'Fisso', 'Attivare e disattivare servizi telefonici', 'Disattivare i servizi di linea fissa'),
(4, 'Gestione linea e servizi', 'Fisso', 'Attivare e disattivare servizi telefonici', 'Gli elenchi telefonici a casa tua'),
(5, 'Gestione linea e servizi', 'Mobile', 'Gestione della tua Sim', 'Tutto sulla tua Sim'),
(6, 'Gestione linea e servizi', 'Mobile', 'Gestione della tua Sim', 'Passaggio da Abbonamento a Ricaricabile'),
(7, 'Gestione linea e servizi', 'Mobile', 'Attivare/disattivare servizi a contenuto (CSP) e telefonici', 'Servizi a valore aggiunto SMS/MMS/Internet'),
(8, 'Gestione linea e servizi', 'Mobile', 'Attivare/disattivare servizi a contenuto (CSP) e telefonici', 'LoSai e ChiamaOra di TIM'),
(9, 'Gestione linea e servizi', 'Mobile', 'Gestione della linea mobile all''estero', 'All''estero con TIM'),
(10, 'Gestione linea e servizi', 'Mobile', 'Gestione della linea mobile all''estero', 'Verifica il credito residuo mentre sei all''estero'),
(11, 'Gestione linea e servizi', 'Mobile', 'Tutti i modi per ricaricare', 'Tutti i modi per ricaricare'),
(12, 'Gestione linea e servizi', 'Mobile', 'Tutti i modi per ricaricare', 'Ricarica+'),
(13, 'Gestione linea e servizi', 'Passa a TIM', 'Nuova Smart per casa e mobile', 'TIM smart'),
(14, 'Gestione linea e servizi', 'Passa a TIM', 'Passare in TIM con una linea mobile', 'Come entrare in TIM con la tua linea mobile'),
(15, 'Gestione linea e servizi', 'Passa a TIM', 'Passare in TIM con una linea mobile', 'Credito e portabilità in TIM'),
(16, 'Gestione linea e servizi', 'Cosa puoi fare online', 'MyTIM Fisso', 'MyTIM Fisso - gestione linea'),
(17, 'Gestione linea e servizi', 'Cosa puoi fare online', 'MyTIM Fisso', 'Come registrarsi a MyTIM Fisso'),
(18, 'Gestione linea e servizi', 'Cosa puoi fare online', 'MyTIM Mobile', 'MyTIM Mobile (gestione linea)'),
(19, 'Gestione linea e servizi', 'Cosa puoi fare online', 'MyTIM Mobile', 'Accesso a MyTIM Mobile per sim inserite in allarme'),
(20, 'Gestione linea e servizi', 'Cosa puoi fare online', 'Ricarica online', 'Ricarica veloce'),
(21, 'Gestione linea e servizi', 'Cosa puoi fare online', 'Ricarica online', 'Come funziona il servizio Passepartout di TIM'),
(22, 'Gestione linea e servizi', 'Cosa puoi fare online', 'Acquisti online', 'Acquisti e tempi di spedizione'),
(23, 'Gestione linea e servizi', 'Cosa puoi fare online', 'Acquisti online', 'Scopri come ottenere la fattura'),
(24, 'Controllo costi e pagamenti', 'Fisso', 'Fatture e Pagamenti', 'Come leggere la fattura della linea fissa'),
(25, 'Controllo costi e pagamenti', 'Fisso', 'Fatture e Pagamenti', 'Come pagare la fattura della linea fissa'),
(26, 'Controllo costi e pagamenti', 'Mobile', 'Ricaricabile', 'Verifica credito residuo e bonus disponibili per i clienti Prepagati'),
(27, 'Controllo costi e pagamenti', 'Mobile', 'Ricaricabile', 'Dettaglio delle chiamate per clienti Ricaricabili'),
(28, 'Controllo costi e pagamenti', 'Mobile', 'Abbonamento', 'Scopri come consultare i consumi della tua linea con abbonamento'),
(29, 'Controllo costi e pagamenti', 'Mobile', 'Abbonamento', 'Modalità di pagamento della fattura linea mobile'),
(30, 'Controllo costi e pagamenti', 'Mobile', 'Per navigare in Internet', 'Tariffa base per navigare da Smartphone, PC e Tablet - Flat Day'),
(31, 'Controllo costi e pagamenti', 'Mobile', 'Per navigare in Internet', 'Soglia di protezione e blocco del traffico dati'),
(32, 'Controllo costi e pagamenti', 'Mobile', 'Offerte rateizzate', 'Le rateizzazioni: gli SMS informativi ed il recesso anticipato'),
(33, 'Controllo costi e pagamenti', 'Mobile', 'Offerte rateizzate', 'Cambio carta di credito offerte rateizzate su Ricaricabile'),
(34, 'Controllo costi e pagamenti', 'Cosa puoi fare online', 'MyTIM Fisso', 'MyTIM Fisso (controllo costi)'),
(35, 'Controllo costi e pagamenti', 'Cosa puoi fare online', 'MyTIM Fisso', 'Il mio conto online'),
(36, 'Controllo costi e pagamenti', 'Cosa puoi fare online', 'MyTIM Mobile', 'MyTIM Mobile (controllo costi)'),
(37, 'Controllo costi e pagamenti', 'Cosa puoi fare online', 'MyTIM Mobile', 'Verifica online il tuo traffico'),
(38, 'Supporto tecnico e configurazione', 'Smartphone e Tablet', 'Servizi per e dal tuo smartphone', 'Assistenza tecnica specializzata con SOSsmartphone'),
(39, 'Supporto tecnico e configurazione', 'Smartphone e Tablet', 'Servizi per e dal tuo smartphone', 'Buono sconto per cambio telefono'),
(40, 'Supporto tecnico e configurazione', 'Smartphone e Tablet', 'Configurare la posta', 'Configurazione Mail su iPhone'),
(41, 'Supporto tecnico e configurazione', 'Smartphone e Tablet', 'Configurare la posta', 'Configurazione Mail su iPad'),
(42, 'Supporto tecnico e configurazione', 'Smartphone e Tablet', 'Configurazioni e manuali', 'Connettersi a Internet col telefonino'),
(43, 'Supporto tecnico e configurazione', 'Smartphone e Tablet', 'Configurazioni e manuali', 'TIM Mail - Password dimenticata o altri problemi di accesso'),
(44, 'Supporto tecnico e configurazione', 'Linea Telefonica', 'Guida ai servizi telefonici', 'Memotel'),
(45, 'Supporto tecnico e configurazione', 'Linea Telefonica', 'Guida ai servizi telefonici', 'Avviso di chiamata'),
(46, 'Supporto tecnico e configurazione', 'Linea Telefonica', 'Problemi Linea Telefonica', 'Non chiamo e non ricevo telefonate'),
(47, 'Supporto tecnico e configurazione', 'Linea Telefonica', 'Problemi Linea Telefonica', 'Ricevo ma non chiamo'),
(48, 'Supporto tecnico e configurazione', 'Linea Telefonica', 'Linea ISDN', 'Come gestire le chiamate entranti'),
(49, 'Supporto tecnico e configurazione', 'Linea Telefonica', 'Linea ISDN', 'Come riassegnare i numeri'),
(50, 'Supporto tecnico e configurazione', 'ADSL e Fibra', 'Fibra', 'Prima installazione'),
(51, 'Supporto tecnico e configurazione', 'ADSL e Fibra', 'Fibra', 'Modem Fibra'),
(52, 'Supporto tecnico e configurazione', 'ADSL e Fibra', 'Modem ADSL', 'ADSL2+ Wi-Fi N - DA2210'),
(53, 'Supporto tecnico e configurazione', 'ADSL e Fibra', 'Modem ADSL', 'ADSL2+ Wi-Fi N'),
(54, 'Supporto tecnico e configurazione', 'ADSL e Fibra', 'Ripetitore Wi-Fi', 'Powerline Adapter'),
(55, 'Supporto tecnico e configurazione', 'ADSL e Fibra', 'Risorse di rete', 'Velocità di allineamento del modem'),
(56, 'Supporto tecnico e configurazione', 'ADSL e Fibra', 'Risorse di rete', 'Network Management'),
(57, 'Supporto tecnico e configurazione', 'Posta', 'Guida TIM Mail', 'Gestione Posta'),
(58, 'Supporto tecnico e configurazione', 'Posta', 'Guida TIM Mail', 'Gestione Rubrica'),
(59, 'Supporto tecnico e configurazione', 'Posta', 'Username e Password', 'Registrazione'),
(60, 'Supporto tecnico e configurazione', 'Posta', 'Username e Password', 'Recupera Username e Password'),
(61, 'Supporto tecnico e configurazione', 'Posta', 'Configurazione casella di posta', 'Parametri TIM Mail'),
(62, 'Supporto tecnico e configurazione', 'Posta', 'Configurazione casella di posta', 'Mail sul PC'),
(63, 'Supporto tecnico e configurazione', 'Posta', 'Problemi di posta', 'Non invio mail'),
(64, 'Supporto tecnico e configurazione', 'Posta', 'Problemi di posta', 'Non voglio ricevere alcuni messaggi'),
(65, 'Supporto tecnico e configurazione', 'Decoder e TV', 'TIMvision', 'Decoder TIMvision'),
(66, 'Supporto tecnico e configurazione', 'Decoder e TV', 'TIMvision', 'TIMvision da TV - Errori a video'),
(67, 'Supporto tecnico e configurazione', 'Decoder e TV', 'TIM SKY', 'Caratteristiche TIM SKY'),
(68, 'Supporto tecnico e configurazione', 'Decoder e TV', 'TIM SKY', 'Installazione decoder My Sky HD'),
(69, 'Supporto tecnico e configurazione', 'Decoder e TV', 'Premium Online', 'Caratteristiche del servizio'),
(70, 'Supporto tecnico e configurazione', 'Decoder e TV', 'Premium Online', 'Associazione dispositivi'),
(71, 'Supporto tecnico e configurazione', 'Decoder e TV', 'Domande e Risposte', 'Problemi visione contenuti'),
(72, 'Supporto tecnico e configurazione', 'Decoder e TV', 'Domande e Risposte', 'Video di assistenza'),
(73, 'Supporto tecnico e configurazione', 'Navigazione', 'Impostazioni per la navigazione', 'Configurazione DNS'),
(74, 'Supporto tecnico e configurazione', 'Navigazione', 'Impostazioni per la navigazione', 'Configurazione browser'),
(75, 'Supporto tecnico e configurazione', 'Navigazione', 'Problemi di navigazione', 'Non mi connetto ad Internet'),
(76, 'Supporto tecnico e configurazione', 'Navigazione', 'Problemi di navigazione', 'Cade la connessione'),
(77, 'Supporto tecnico e configurazione', 'Sicurezza PC', 'Total Security', 'Requisiti minimi e software supportati'),
(78, 'Supporto tecnico e configurazione', 'Sicurezza PC', 'Total Security', 'Installazione e aggiornamento del software'),
(79, 'Supporto tecnico e configurazione', 'Sicurezza PC', 'Antivirus', 'Requisiti minimi e software supportati'),
(80, 'Supporto tecnico e configurazione', 'Sicurezza PC', 'Antivirus', 'Installazione e aggiornamento del software'),
(81, 'Supporto tecnico e configurazione', 'Sicurezza PC', 'Navigare sicuri', 'Phishing: difenditi dalle e-mail e dagli SMS sospetti!'),
(82, 'Supporto tecnico e configurazione', 'Sicurezza PC', 'Navigare sicuri', 'Navigare sicuri'),
(83, 'Supporto tecnico e configurazione', 'Sicurezza PC', 'Sicurezza Posta', 'Phishing'),
(84, 'Supporto tecnico e configurazione', 'Sicurezza PC', 'Sicurezza Posta', 'Virus'),
(85, 'Smart Life', 'TIMgames', 'Scopri TIMgames', 'Cos''è TIMgames'),
(86, 'Smart Life', 'TIMgames', 'Scopri TIMgames', 'Tutti i modi per abbonarsi'),
(88, 'Smart Life', 'TIMgames', 'Dispositivi', 'Come accedere a TIMgames'),
(89, 'Smart Life', 'TIMgames', 'Dispositivi', 'Conoscere l''App TIMgames'),
(90, 'Smart Life', 'TIMgames', 'Gestione del servizio', 'Come vedere i propri abbonamenti'),
(91, 'Smart Life', 'TIMgames', 'Gestione del servizio', 'Come disattivare un abbonamento'),
(92, 'Smart Life', 'TIMmusic', 'Scopri TIMmusic', 'Cos''è TIMmusic'),
(93, 'Smart Life', 'TIMmusic', 'Scopri TIMmusic', 'Tutti i modi per acquistare'),
(94, 'Smart Life', 'TIMmusic', 'Dispositivi per TIMmusic', 'APP per smartphone e tablet'),
(95, 'Smart Life', 'TIMmusic', 'Dispositivi per TIMmusic', 'PC'),
(96, 'Smart Life', 'TIMmusic', 'Gestione del servizio', 'Come fare se ascolto 30 sec / non viene riconosciuto l’abbonamento?'),
(97, 'Smart Life', 'TIMmusic', 'Gestione del servizio', 'Come fare se non si caricano i brani?'),
(98, 'Smart Life', 'TIMreading', 'Scopri TIMreading', 'Cos''è TIMreading'),
(99, 'Smart Life', 'TIMreading', 'Scopri TIMreading', 'Tutti i modi per acquistare'),
(100, 'Smart Life', 'TIMreading', 'Dispositivi per TIMreading', 'Dove leggere'),
(101, 'Smart Life', 'TIMreading', 'Dispositivi per TIMreading', 'App TIMreading'),
(102, 'Smart Life', 'TIMreading', 'Gestione del servizio', 'Registrazione al servizio'),
(103, 'Smart Life', 'TIMreading', 'Gestione del servizio', 'Come disattivare un abbonamento'),
(104, 'Smart Life', 'TIMvision', 'Scopri TIMvision', 'Cos''è TIMvision'),
(105, 'Smart Life', 'TIMvision', 'Scopri TIMvision', 'Tutti i modi per abbonarsi'),
(106, 'Smart Life', 'TIMvision', 'Dispositivi per TIMvision', 'Dove posso vedere TIMvision'),
(107, 'Smart Life', 'TIMvision', 'Dispositivi per TIMvision', 'Decoder'),
(108, 'Smart Life', 'TIMvision', 'Gestione del servizio', 'Registrazione al servizio'),
(109, 'Smart Life', 'TIMvision', 'Gestione del servizio', 'Recupero username e password di registrazione');

-- --------------------------------------------------------

--
-- Struttura della tabella `highlights`
--

CREATE TABLE IF NOT EXISTS `highlights` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Logo` varchar(50) NOT NULL,
  `Descrizione` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dump dei dati per la tabella `highlights`
--

INSERT INTO `highlights` (`id`, `Logo`, `Descrizione`) VALUES
(1, '"glyphicon glyphicon-earphone"', 'Attivazione linea fissa'),
(2, '"glyphicon glyphicon-phone"', 'Tutto sulla tua SIM'),
(3, '"glyphicon glyphicon-credit-card"', 'Tutti i modi per ricaricare'),
(4, '"glyphicon glyphicon-thumbs-up"', 'Come entrare in TIM con la tua linea mobile'),
(5, '"glyphicon glyphicon-euro"', 'Verifica il tuo credito residuo'),
(6, '"glyphicon glyphicon-envelope"', 'TIM Mail - Password dimenticata o altri problemi d''accesso'),
(7, '"glyphicon glyphicon-flash"', 'Fibra - Prima installazione'),
(8, '"glyphicon glyphicon-wrench"', 'Configurazione browser e DNS'),
(9, '"glyphicon glyphicon-home"', 'Caratteristiche TIM SKY'),
(10, '"glyphicon glyphicon-music"', 'Cos''è TIM Music');

-- --------------------------------------------------------

--
-- Struttura della tabella `modem_networking`
--

CREATE TABLE IF NOT EXISTS `modem_networking` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(30) NOT NULL,
  `Marca` varchar(20) NOT NULL,
  `Prezzo` double NOT NULL,
  `PrezzoAbbonamento` float NOT NULL,
  `inOmaggio` tinyint(1) NOT NULL,
  `Descrizione` text NOT NULL,
  `DescrizioneVeloce` text NOT NULL,
  `img_path` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dump dei dati per la tabella `modem_networking`
--

INSERT INTO `modem_networking` (`ID`, `Nome`, `Marca`, `Prezzo`, `PrezzoAbbonamento`, `inOmaggio`, `Descrizione`, `DescrizioneVeloce`, `img_path`) VALUES
(1, 'Car Pack 4G', 'TIM', 0, 0, 0, '', '', 'DEVICE_TIM_Pack_WiFi_Car.png'),
(2, 'Chiavetta TIM 42.2', 'TIM', 0, 0, 0, '', '', 'DEVICE_chiavetta_internet_42.2-1.jpg'),
(3, 'Modem Fibra', 'TIM', 0, 0, 0, '', '', 'DEVICE_modem_fibra_tim_01.png'),
(4, 'Modem Wi-Fi 42.2', 'TIM', 0, 0, 0, '', '', 'DEVICE_modem_42.2_230x230.png'),
(5, 'Modem Wi-Fi 4GPLUS', 'TIM', 0, 0, 0, '', '', 'DEVICE_modem_wifi_4g_230x230.png'),
(6, 'Modem Wi-Fi ADSL', 'TIM', 69, 0, 1, 'Tecnologia				ADSL/ADSL2 ; velocità fino a 20 Mbps down/1 Mbps up\r\n \r\nWi-Fi					Wi-Fi 802.11 b/g/n; velocità di trasferimento fino a 300Mbps\r\n \r\nInterfacce				Interfacce USB alta velocità (480 Mbit/s) ad alta potenza (500 mA), 1\r\n					porta connettore tipo A Interfaccia Wi-FiStandard IEEE 802.11n. \r\n					Interfaccia radio 2.4Ghz, 2 antenne, velocità di trasmissione teorica 300\r\n					Mbps\r\n \r\n*Protezione Wireless*			WPA, WPA-PSK, WEP - Supporto Wi-Fi Protected Setup - Controllo di\r\n					accesso\r\n \r\nFunzioni avanzate 			Funzionalità di routing avanzate (DHCP server, NAT, NAPT, Virtual Server)\r\n					- Firewall - Condivisione Hard Disk e Stampante USB\r\n \r\nAssistenza tecnica			2 anni di garanzia sul prodotto\r\n \r\nContenuto della confezione		Guida di installazione; CD autoinstallante (compatibile con Windows 7,\r\n					Vista, XP- MacOS 10.3); 1 filtro ADSL 2 ; 1 cavo Telefonico; 1 cavo\r\n					Ethernet\r\n \r\nNote:\r\n(1) La tecnologia Wi-Fi 802.11n migliora le prestazioni rispetto ai prodotti della generazione precedente 802.11b/g di Telecom Italia. Per utilizzare la rete senza fili è necessario disporre di un computer con interfaccia Wi-Fi. Le prestazioni effettive possono variare a seconda del computer, della distanza, della velocità di connessione ADSL e di altri fattori.\r\n(2) I valori sono misurati nei laboratori Telecom Italia. Per maggiori informazioni [www.telecomitalia.com/sostenibilita].\r\n \r\nPer qualsiasi informazione aggiuntiva non esitare a consultare la sezione [assistenza](Assistenza_SupportoTecnico) del nostro sito', 'Navigazione senza fili più veloce\r\nConnessione di vari dispositivi\r\nInstallazione no problem\r\nFunzione Eco per risparmio energetico', 'DEVICE_modem-adsl-new.png'),
(7, 'Plus 900', 'Tecnoware', 0, 0, 0, '', '', 'DEVICE_era_plus_900_tecnoware.png'),
(8, 'Powerline Adapter', 'TIM', 0, 0, 0, '', '', 'DEVICE_repeater_powerline_adapter.png'),
(9, 'Repeater Wi-Fi AC750', 'ZyXEL', 0, 0, 0, '', '', 'DEVICE_repeater-zyxel-ac750.png');

-- --------------------------------------------------------

--
-- Struttura della tabella `offertemobile`
--

CREATE TABLE IF NOT EXISTS `offertemobile` (
  `NomeOfferta` varchar(30) NOT NULL,
  `DescrizioneVeloce` text NOT NULL,
  `AttivazioneInfo` text NOT NULL,
  `SmartphoneInfo` text NOT NULL,
  `Descrizione` text NOT NULL,
  `Immagine` varchar(30) NOT NULL,
  `ImmagineTel` varchar(30) NOT NULL,
  `Prezzo` varchar(30) NOT NULL,
  `ext` int(11) NOT NULL DEFAULT '13',
  PRIMARY KEY (`NomeOfferta`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `offertemobile`
--

INSERT INTO `offertemobile` (`NomeOfferta`, `DescrizioneVeloce`, `AttivazioneInfo`, `SmartphoneInfo`, `Descrizione`, `Immagine`, `ImmagineTel`, `Prezzo`, `ext`) VALUES
('TIM YOUNG', 'TIM Young è l''offerta Tim pensata per i giovani.\r\nHai meno di 30 anni e ti senti digital?\r\nAllora questa è l''offerta perfetta per te.', 'Se passi a TIM mantenendo il tuo numero o attivi una nuova linea e scegli di addebitare l’offerta su credito residuo, il costo di attivazione è di 3€.\r\nSe l’offerta viene attivata online il costo di attivazione e le prime 4 settimane sono gratis. \r\nPer i già clienti TIM è previsto un costo di attivazione di 19€.\r\n \r\nPer chi passa a TIM fino al 22/08/2016, mantenendo il proprio numero o attivando una nuova linea, il costo di attivazione di 19€ è gratuito se si sceglie di domiciliare i pagamenti dell’offerta su carta di credito o conto corrente, a condizione che l’offerta TIM Young&Music Digital venga mantenuta attiva per almeno 12 rinnovi (ciascun rinnovo, relativo alla disponibilità dei servizi inclusi nell’offerta, avviene ogni 4 settimane). In caso di recesso dall’offerta, prima della scadenza del suddetto periodo, è previsto l’addebito del contributo di attivazione dell’offerta, pari a 19€, posto in promozione gratuita all’attivazione dell’offerta stessa.\r\n \r\n \r\nPuoi attivare l''offerta :\r\n -direttamente online cliccando sul tasto ATTIVA, per clienti TIM. Per scoprire i vantaggi e le modalità dell’Attivazione online, consulta la Guida\r\nPresso i Negozi TIM\r\nPuoi attivare l''offerta su carta di credito, solo se sei un clienti già TIM:\r\n -presso i Negozi TIM.', 'Puoi arricchire la tua offerta abbinando uno smartphone alla tua promozione ad un prezzo agevolato.\r\nInfatti aggiungendo 20 euro al mese (con un vincolo di 30 mesi) puoi scegliere uno tra alcuni smartphone selezionati.\r\nScegli il device che fà per te.', 'Con questa promozione hai a disposizione 100 minuti e 3 GB 4G a soli 9 euro al mese.\r\nAscolta anche tutta la musica che vuoi con senza consumare i Giga del tuo abbonamento.\r\nIn più, se attivi l’offerta da Punto Vendita con addebito dei pagamenti su conto corrente o carta di credito, per te 5GB di Internet 4G ogni 28gg.', '"images/TimYoungInfo.png"', '"images/telefoniTimYoung.png"', '9 euro/mese', 13);

-- --------------------------------------------------------

--
-- Struttura della tabella `promozioni`
--

CREATE TABLE IF NOT EXISTS `promozioni` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Pagina` varchar(30) NOT NULL,
  `NomePromozione` varchar(30) NOT NULL,
  `Descrizione` text NOT NULL,
  `Prezzo` varchar(20) NOT NULL,
  `Immagine` varchar(30) NOT NULL,
  `Ordine` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dump dei dati per la tabella `promozioni`
--

INSERT INTO `promozioni` (`id`, `Pagina`, `NomePromozione`, `Descrizione`, `Prezzo`, `Immagine`, `Ordine`) VALUES
(1, 'Mobile', 'Internet Large', 'Scegli tra 4/5/10 GB di internet 4G', 'da 10 euro/mese', '"images/mobileLarge.png"', 7),
(2, 'Mobile', 'Internet Start', 'Fino a 2 GB di internet 4G', 'da 8 euro/mese', '"images/mobileStart.png"', 6),
(3, 'SmartLife', 'Pack Annuale Serie A TIM ', 'Se passi adesso a TIM in omaggio vivi i migliori momenti del Campionato 2015/2016 con tutte le notizie, i video-goal, le sintesi sul tuo Smartphone o Tablet e senza consumare GB. Attraverso l''unica App ufficiale della serie A TIM.', '', '"images/smartLifePackA.png"', 1),
(4, 'SmartLife', 'Per la Salute e il Benessere', 'Scopri come le tecnologie possano cambiare in meglio la salute e la forma fisica di ognuno di noi.\r\nLa tecnologia nel campo del benessere si è fatta veramente Smart.\r\nScopri tutte le ultime novità tecnologiche wearables ad un prezzo speciale per tutti i clienti TIM.', '', '"images/smartLifeSalute.png"', 2),
(5, 'Fisso', 'Solo Voce', 'La linea di casa TIM', '19 euro/mese', '"images/fissoSoloVoce.png"', 1),
(6, 'Mobile', 'TIM International 1000', '1000 minuti verso tutti e 3 GB ', 'da 15 euro/mese', '"images/mobileTimInt1000.png"', 4),
(7, 'Mobile', 'TIM international 200', '200 minuti verso Cina, Bangladesh ed India', 'da 5 euro/mese', '"images/mobileTimInt200.png"', 5),
(8, 'Mobile', 'TIM Over 60', 'Con TIM 60+ potrai beneficiare dei vantaggi che TIM riserva a te che hai un’età maggiore o uguale a 60 anni!\r\nChiami e navighi alla velocità della luce grazie al 4G di TIM, tutto in un’unica soluzione e a condizioni di prezzo agevolate!\r\n400 minuti, 1 GB di internet e assistenza 24 ore su 24 privilegiata ', 'da 12 euro/mese', '"images/mobileTimOver.png"', 3),
(9, 'FissoPiuMobile', 'TIM Smart Casa', 'Se non hai bisogno della ultravelocità della fibra o i collegamenti non sono ancora arrivati a casa tua questa promozione fà al caso tuo: internet fino a 20 mega, chiamate verso tutti i numeri fissi e mobile nazionali e SIM con attiva la promozione SMART MOBILE', 'da 19 euro/mese', '"images/fissoPiuMobileC.png"', 2),
(10, 'FissoPiuMobile', 'TIM Smart Fibra', 'Con TIM Smart Fibra navighi con la fibra ultraveloce di TIM, chiami tutti i numeri fissi e mobili nazionali e hai una SIM con 500 minuti + 2 GB 4G al mese', 'da 19 euro/mese', '"images/fissoPiuMobileFi.png"', 1),
(11, 'Mobile', 'TIM Start', 'Con TIM Special Start chiami e navighi alla velocità della luce grazie al 4G di TIM, tutto in un’unica soluzione.\nIn più, con TIM Special Start i tuoi minuti non scadono!\nQuelli che non consumi, li usi nei rinnovi successivi, quando vuoi.\n1000 minuti e 4 GB di internet 4G', 'da 19 euro/mese', '"images/mobileTimStart.png"', 2),
(12, 'FissoPiuMobile', 'TIM Unlimited', 'Con TIM Unlimited navighi con la fibra ultraveloce di TIM, chiami tutti i numeri fissi e mobile nazionali e hai una SIM con minuti, SMS, e internet 4G illimitati. ', 'da 49 euro/mese', '"images/fissoPiuMobileUnl.png"', 3),
(13, 'Mobile', 'TIM Young', 'Hai meno di 30 anni e ti senti Digital?\nFai il pieno di Giga, navigare alla velocità della luce e ascolta tutta la musica che vuoi in streaming illimitato sul tuo smartphone con TIMmusic senza consumare i tuoi GB!\n100 minuti, 3 GB a partire e TIMmusic incluso ', 'da 9 euro/mese', '"images/mobileTimYoung.png"', 1),
(14, 'Fisso', 'Voce e Fibra', 'Internet illimitato con fibra ottica e linea di casa', 'da 19,90/mese', '"images/fissoVoceEFibra.png"', 4),
(15, 'Fisso', 'Voce e Internet', 'Internet illimitato con connessione ADSL veloce (fino a 7 mega) e linea di casa', 'da 22,90 euro/mese', '"images/fissoVoceEAdsl.png"', 3),
(16, 'Fisso', 'Voce No Limit', 'La linea di casa TIM per parlare senza limiti', '29 euro/mese', '"images/fissoVoceNoLimit.png"', 2);

-- --------------------------------------------------------

--
-- Struttura della tabella `ricaricare`
--

CREATE TABLE IF NOT EXISTS `ricaricare` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Titolo` varchar(100) NOT NULL,
  `SottoTitolo` varchar(100) NOT NULL,
  `Descrizione` varchar(300) NOT NULL,
  `ext` int(11) NOT NULL DEFAULT '11',
  PRIMARY KEY (`id`),
  KEY `ext` (`ext`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=19 ;

--
-- Dump dei dati per la tabella `ricaricare`
--

INSERT INTO `ricaricare` (`id`, `Titolo`, `SottoTitolo`, `Descrizione`, `ext`) VALUES
(1, 'Ricaricare direttamente dal sito TIM', 'Ricarica online con autenticazione', 'Se sei registrato al sito puoi scegliere l''importo da ricaricare, inserire i dati della tua carta di credito e la ricarica è subito effettuata! (Circuiti abilitati: American Express, Diners, Aura, Visa, Mastercard, PayPal).', 11),
(2, 'Ricaricare direttamente dal sito TIM', 'Ricarica online senza autenticazione', 'Ricarica il tuo telefonino senza bisogno di registrarti al sito. Usa la tua carta di credito personale e la ricarica è fatta! (Circuiti abilitati: Visa, Mastercard, American Express, Diners, carta Aura e PayPal).', 11),
(3, 'I servizi per ricaricare', 'TIM Automatica', 'Pianifica le ricariche secondo le tue esigenze e liberati dal pensiero di ricaricare.', 11),
(4, 'I servizi per ricaricare', 'Banco TIM', 'Ricarica quando vuoi, semplicemente e direttamente dal tuo cellulare.', 11),
(5, 'I servizi per ricaricare', 'Passepartout', 'Ricarica e acquista sul sito TIM quello che vuoi, con la tua carta di credito in sicurezza.', 11),
(6, 'I servizi quando non puoi ricaricare', 'SOS Ricarica', 'Sei rimasto senza credito e devi fare una chiamata urgente? Chiedi a TIM di anticiparti subito 2€ di ricarica.', 11),
(7, 'I servizi quando non puoi ricaricare', 'Pay for me', 'Non hai più credito? Puoi chiamare lo stesso! Addebita il costo della chiamata al destinatario.', 11),
(8, 'I servizi quando non puoi ricaricare', 'Ti ricarico di TIM', 'Tuo figlio o qualcuno a cui tieni è rimasto senza credito? Ricaricalo utilizzando il credito del tuo telefonino!', 11),
(9, 'I servizi quando non puoi ricaricare', 'TIM Paghetta', 'Imposta una ricarica periodica, per non lasciare mai i tuoi figli senza credito.', 11),
(10, 'Ricarica con la tua banca o la tua carta di credito', 'PAGOBANCOMAT', 'Ricarica allo sportello ATM con il tuo Pagobancomat.', 11),
(11, 'Ricarica con la tua banca o la tua carta di credito', 'POSTAMAT E POSTEPAY', 'Ricarica allo sportello ATM con la tua carta Postepay e POSTAMAT.', 11),
(12, 'Ricarica con la tua banca o la tua carta di credito', 'Web banking', 'Ricarica comodamente utilizzando il tuo conto corrente on line.', 11),
(13, 'Ricarica con la tua banca o la tua carta di credito', 'Web carte di credito', 'Ricarica comodamente utilizzando il tuo conto corrente on line.', 11),
(14, 'Ricarica con la tua banca o la tua carta di credito', 'Call center carte di credito', 'Ricarica direttamente al telefono con la tua carta di credito.', 11),
(15, 'Ricarica nei punti vendita', 'Negozi TIM', 'Lasciati servire, chiedi la ricarica che vuoi e per chi vuoi tu. Trova il negozio più vicino a te!', 11),
(16, 'Ricarica nei punti vendita', 'Ricevitorie, tabaccherie e POSTIM', 'Lasciati servire, chiedi la ricarica che vuoi per chi vuoi tu!', 11),
(17, 'Ricarica nei punti vendita', 'Ricarica alla cassa', 'Ricarica alla cassa del supermercato o dei punti vendita specializzati autorizzati.', 11),
(18, 'Ricarica nei punti vendita', 'Ricaricard', 'La ricarica classica di sempre!', 11);

-- --------------------------------------------------------

--
-- Struttura della tabella `servizismartlife`
--

CREATE TABLE IF NOT EXISTS `servizismartlife` (
  `Pagina` varchar(30) NOT NULL,
  `TitoloArg` varchar(50) NOT NULL,
  `DescrizioneVeloce` text NOT NULL,
  `Descrizione` text NOT NULL,
  `Immagine` varchar(30) NOT NULL,
  `Ordine` int(11) NOT NULL,
  `Info` text NOT NULL,
  PRIMARY KEY (`TitoloArg`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `servizismartlife`
--

INSERT INTO `servizismartlife` (`Pagina`, `TitoloArg`, `DescrizioneVeloce`, `Descrizione`, `Immagine`, `Ordine`, `Info`) VALUES
('Casa&Famiglia', 'D-Link SmartHome', '', 'D-Link SmartHome Starter Kit ti offre la possibilità di impostare, controllare, monitorare e automatizzare la tua casa ovunque ti trovi.', '"images/D-LinkSmartHome.png"', 2, ''),
('ServiziAllaPersona', 'Firma Digitale', '', 'La fiducia che una firma digitale deve assicurare è ben superiore a quella della tradizionale firma manuale. Una chiave privata conosciuta solo dalla persona autorizzata a farne uso può servire persino a provarne l''identità. Si attendono sviluppi molto interessanti e TIM è in primo piano', '"images/firmaDigitale.png"', 3, ''),
('ServiziAllaPersona', 'Pagamenti', '', 'Scegli le carte di pagamento di Intesa Sanpaolo, UBI o Mediolanum: pagare è semplice e conveniente!', '"images/pagamenti.png"', 5, ''),
('Salute&Benessere', 'Polar Loop H7 HR', '', 'In abbinamento con Polar sensore frequenza Cardiaca. Per chi desidera misurare la propria attività 24 ore su 24 ed essere guidato al raggiungimento di obiettivi giornalieri\r\n ', '"images/polarLoop.png"', 2, ''),
('Salute&Benessere', 'Samsung Galaxy Gear S con SIM', '', 'Un elegante display Super AMOLED curvo per una vestibilità ottimale, schermate personalizzabili e cinturini intercambiabili per esprimere al meglio il proprio stile', '"images/samsungGalaxy.png"', 1, ''),
('TV&Entertainement', 'Serie A TIM', 'Il calcio è di chi lo ama', 'Vivi il meglio della Serie A TIM e i migliori momenti del Campionato 2015/2016\r\ncon tutte le notizie, i video-goal, le sintesi sul tuo Smartphone o Tablet\r\ne senza consumare GB. L’unica App ufficiale della Serie A TIM.\r\nScarica l’App e vivi la magia del calcio!\r\nScopri il Pack annualie SERIE A TIM.', '"images/serieATIM.png"', 2, 'L''App Serie A TIM è l’applicazione ufficiale del Campionato di Calcio di Serie A e per la stagione 2016/2017 continuerà ad essere il riferimento per tutti gli appassionati, con un modo nuovo e completo di seguire dove vuoi e in qualunque momento lo spettacolo del Campionato.   In esclusiva, potrai seguire ogni partita dove vuoi, non perdendo neanche un minuto di gioco grazie alla cronaca in tempo reale di tutte le gare, la disponibilità dei video di tutti i goal e le azioni salienti a pochi minuti dall’evento. Alla fine del primo tempo e della gara, avrai a disposizione gli highlight per rivivere tutte le emozioni, oltre alle innovative infografiche statistiche che arricchiranno la cronaca, aiutandoti a interpretare al meglio l''andamento dell''incontro. \nAccedi in qualsiasi momento a tutte le statistiche del Campionato, quando vuoi e in mobilità potrai rivedere tutti i goal del Campionato. Nella sezione “Top” hai anche una selezione delle migliori giocate della giornata. Grazie alle notifiche push in tempo reale, anche fuori casa o quando sei impegnato, avrai un canale sempre acceso sulla tua squadra del cuore e su tutta la Serie A.\n Personalizza gli aggiornamenti live, scegliendo una singola partita, videogoal, news o tutti i contenuti più accattivanti dell’App Serie A TIM.\n   Nell’App Serie A TIM trovi tutte le ultime notizie sul mondo del Calcio, anche quando sei in viaggio, con news sul Campionato italiano, ma anche su tutte le altre competizioni. Inoltre, puoi partecipare alla vita social grazie all’accesso diretto alla Fan Page Serie A TIM di Facebook e Serie A TIM su Twitter.   \nScarica l’App Serie A TIM e avrai il meglio del Calcio sul tuo smartphone o tablet . E se sei cliente TIM non consumi GB! Prima di abbonarti potrai provare gratuitamente i contenuti esclusivi e rimanere aggiornato con le news e le statistiche disponibili per tutti.'),
('ServiziAllaPersona', 'Servizi Alla Persona', '', 'Un nuovo approccio al mondo dell’ e-payment e dell’identità digitale. Potrai organizzare e gestire con semplicità e in tutta sicurezza i tuoi pagamenti digitali, il tuo archivio personale, custodire le password, le fatture, gli scontrini ed i referti medici.', '', 1, ''),
('ServiziAllaPersona', 'SIM', '', 'Dalla nascita del sistema di comunicazione radiomobile GSM, è la più promettente applicazione della tecnologia Smart Card. Garantisce la sicurezza di tutte le comunicazioni e garantirà in futuro l''identità personale. TIM è impegnata in primo piano sulle ricerche in questo campo', '"images/Sim.png"', 4, ''),
('Salute&Benessere', 'Tieni sotto controllo la tua salute', 'Scarica l''App Well Up, gratis per tutti i clienti TIM', 'Un''app gratuita per i clienti TIM sviluppata come fosse un diario personale, per disporre in ogni momento di tutte le informazioni sui controlli medici preventivi da effettuare periodicamente per sé e per tutta la famiglia.\r\n ', '"images/wellUp.png"', 3, ''),
('Casa&Famiglia', 'TIM Home Connect', 'Scarica l''App Well Up, gratis per tutti i clienti TIM', 'La soluzione ideale per gestire tutti i sistemi di domotica presenti nella tua casa, dalla semplice caldaia domestica, ai sistemi di protezione della casa, ai più avanzati sistemi di monitoraggio.', '"images/TimHomeConnect.png"', 3, ''),
('Casa&Famiglia', 'TIM Home Connect parte 2', 'In cosa consiste', 'TIM Home Connect è l’offerta pensata per essere utilizzata nei dispositivi di domotica presenti nella casa, la cui gestione prevede l''uso di una SIM\r\n \r\nCon Tim Home Connect infatti hai a disposizione minuti, MB e SMS da utilizzare per connettere e gestire il tuo antifurto, la tua caldaia o altri sistemi di domotica.', '"images/TimHomeConnect.png"', 4, ''),
('Casa&Famiglia', 'TIM Tag', 'TIMTag, è il dispositivo che ti informa sulla posizione del tuo amico a quattro zampe e delle cose a te più care. \r\nSegui in tempo reale i suoi spostamenti sul tuo smartphone senza perderlo mai di vista.', 'Con TIMTag hai un dispositivo di localizzazione GPS di ultima generazione, con 12 mesi di servizio TIMTag e una TIM Card inclusi e un'' App dedicata intuitiva e semplice da utilizzare!', '"images/TimTag.png"', 1, ''),
('TV&Entertainement', 'TIM TV', 'Divertimento senza limiti', 'Scopri il grande cinema, le serie più appassionanti, i cartoni animati più amati, lo sport e tanto altro ancora su TV, PC, tablet e smartphone.\r\nScopri tutti i servizi dedicati.', '"images/TIMTV.png"', 3, ''),
('TV&Entertainement', 'TIMmusic', 'La colonna sonora della tua vita', 'Ascolta milioni di brani in streaming, tutte le novità discografiche,\r\nanteprime esclusive e tante playlist di tutti i generi. Su smartphone\r\nsenza consumare GB, pc e tablet. Quando vuoi e quanto vuoi.', '"images/timMusic.png"', 1, ''),
('ServiziAllaPersona', 'Vita digitale o vita reale?', '', 'Accedere ai servizi, pagare per una sottoscrizione o per un acquisto, le transazioni digitali sono ormai parte della nostra vita quotidiana e si stanno via via diffondendo. L’affidabilità è una componente cruciale. Lo storage di denaro, oltre che di dati personali, può essere più comodo e anche più sicuro', '"images/vitaRealeODi.png"', 2, '');

-- --------------------------------------------------------

--
-- Struttura della tabella `smartphone`
--

CREATE TABLE IF NOT EXISTS `smartphone` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(20) NOT NULL,
  `Marca` varchar(20) NOT NULL,
  `Prezzo` double NOT NULL,
  `Descrizione` text NOT NULL,
  `PrezzoAbbonamento` double NOT NULL,
  `DescrizioneVeloce` text NOT NULL,
  `inPromozione` tinyint(1) NOT NULL,
  `img_path` varchar(50) NOT NULL,
  `small_img1` varchar(50) NOT NULL,
  `small_img2` varchar(50) NOT NULL,
  `small_img3` varchar(50) NOT NULL,
  `small_img4` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Nome` (`Nome`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dump dei dati per la tabella `smartphone`
--

INSERT INTO `smartphone` (`ID`, `Nome`, `Marca`, `Prezzo`, `Descrizione`, `PrezzoAbbonamento`, `DescrizioneVeloce`, `inPromozione`, `img_path`, `small_img1`, `small_img2`, `small_img3`, `small_img4`) VALUES
(1, 'Facile Smile', 'TIM', 0, '', 0, 'Design innovativo\r\nDisplay grafico a tre linee\r\nDisponibile In Rosso e Bianco\r\nVivavoce', 0, 'DEVICE_facile_smile_rosso.png', '', '', '', ''),
(2, 'G5 Titan', 'LG', 0, '', 0, 'Display IPS Full HD da 5.2"\r\nFotocamera principale 12MP\r\nPeso 144 grammi', 0, 'DEVICE_LG_G5-titan.png', '', '', '', ''),
(3, 'Galaxy A5', 'Samsung', 0, '', 0, 'Sistema Operativo Android 5.1.1\r\nDisplay Full HD SuperAMOLED 5.2\r\nProcessore Octa-Core 1.6 GHz', 0, 'DEVICE_SAMSUNG_GALAXY_A5_2016.png', '', '', '', ''),
(4, 'Galaxy S7 Edge', 'Samsung', 829, 'Sistema Operativo				Android 6.0\r\n \r\nTecnologia					4G cat.9/HSDPA42UMTS/EDGE/GPRS Frequenze:\r\n						850/900/1800/1900/2100\r\n \r\nConnettivita					Wi-Fi - Bluetooth - Micro USB - NFC\r\n \r\nGPS						Integrato\r\n \r\nDisplay						5.5” 16 Milioni colori Touch\r\n \r\nFotocamera					12 Mpixel/Flash\r\n \r\nMemoria Interna					32GB\r\n \r\nProcessore					OctaCore: (QuadCore 2.3 Ghz QuadCore 1.6 Ghz)\r\n \r\nFormato SIM					Nano\r\n \r\nVideo						Video Recorder&Playback\r\n \r\nMusica					MP3 Player\r\n \r\nIn dotazione					Caricabatteria - Cavo Dati MicroUSB - Auricolare stereo - Guida\r\n 						di riferimento rapido\r\n \r\nDimensioni				150,9x72,6x7,7 mm\r\n \r\nPeso						157 gr.\r\n \r\nAutonomia					Stand-by fino a TBD ore - Conversazione fino a TBD min\r\n \r\nNote\r\nLe prestazioni delle batterie dipendono da vari fattori tra cui la vicinanza delle antenne, lo stato delle batterie, la posizione geografica e il tipo di rete utilizzata.\r\n \r\nPer qualsiasi informazione aggiuntiva non esitare a consultare la sezione [assistenza](Assistenza_SupportoTecnico) del nostro sit', 20, 'Sistema Operativo Android 6.0\r\nDisplay 5.5"\r\nProcessore OctaCore', 1, 'DEVICE_SAMSUNG_GALAXY_s7-edge.png', 'PR_DEVICE_SAMSUNG_S7edge_front.jpg', 'PR_DEVICE_SAMSUNG_S7edge_back.jpg', 'PR_DEVICE_SAMSUNG_S7edge_side1.jpg', 'PR_DEVICE_SAMSUNG_S7edge_side2.jpg'),
(5, 'iPhone 6s', 'Apple', 0, '', 0, '4GPLUS\r\n3D Touch\r\niOS 9 e iCloud', 0, 'DEVICE_APPLE_IPHONE6s_Gld-1.png', '', '', '', ''),
(6, 'iPhone SE', 'Apple', 0, '', 0, 'Display Retina da 4" con \r\n   risoluzione di 1136x640 pixel" HD\r\nChip A9 con architettura a 64 bit\r\nFotocamera iSight da 12MP con \r\n   Focus Pixels e flash True Tone\r\nRegistrazione video 4K a 30fps\r\n   moviola a 240 fps', 1, 'DEVICE_APPLE_IPHONE_SE_spacegrey_01.png', '', '', '', ''),
(7, 'K8', 'LG', 0, '', 0, '4G LTE - NFC\r\nSistema Operativo Android 6\r\nDisplay 5”\r\nProcessore QuadCore 1.3 GHz', 0, 'DEVICE_LG-K8-4g-indigoblue.png', '', '', '', ''),
(8, 'P9', 'Huawei', 0, '', 0, 'Display IPS Full HD da 5.2’’ \r\nFotocamera principale 12MP \r\nPeso 144 grammi', 1, 'DEVICE_HUAWEY-P9-grey.png', '', '', '', ''),
(9, 'X Screen', 'LG', 0, '', 0, 'Sistema Operativo Android 6.0\r\nDisplay 4.93” + Display\r\n   secondario 1.76”\r\nProcessore Snapdragon™ 410\r\n   QuadCore 1.2 GHz', 0, 'DEVICE_LG_XSCREEN-black.png', '', '', '', '');

-- --------------------------------------------------------

--
-- Struttura della tabella `tablet`
--

CREATE TABLE IF NOT EXISTS `tablet` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(30) NOT NULL,
  `Marca` varchar(20) NOT NULL,
  `Prezzo` double NOT NULL,
  `Descrizione` text NOT NULL,
  `DescrizioneVeloce` text NOT NULL,
  `inPromozione` tinyint(1) NOT NULL,
  `PrezzoAbbonamento` double NOT NULL,
  `img_path` varchar(50) NOT NULL,
  `small_img1` varchar(50) NOT NULL,
  `small_img2` varchar(50) NOT NULL,
  `small_img3` varchar(50) NOT NULL,
  `small_img4` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dump dei dati per la tabella `tablet`
--

INSERT INTO `tablet` (`ID`, `Nome`, `Marca`, `Prezzo`, `Descrizione`, `DescrizioneVeloce`, `inPromozione`, `PrezzoAbbonamento`, `img_path`, `small_img1`, `small_img2`, `small_img3`, `small_img4`) VALUES
(1, 'Galaxy Tab 4 8', 'Samsung', 0, '', 'Display 8.0" (1280x800) 16M di colori  Sistema Operativo Android™ 4.4.2 KitKat', 0, 0, 'DEVICE_SAMSUNG-GALAXY-TAB-4-8-0-white-1.jpg', '', '', '', ''),
(2, 'Galaxy Tab A 9.7"', 'Samsung', 0, '', 'Sistema Operativo Android 5.0\r\nDisplay 9.7” TFT\r\nProcessore Snapdragon™ 410\r\n   QuadCore 1.2 GHz', 0, 0, 'DEVICE_SAMSUNG-GALAXY-TAB-a-9.7-white-1.jpg', '', '', '', ''),
(3, 'Galaxy Tab S2 9.7" LTE', 'Samsung', 0, '', 'Display 9.7” TFT, 2048x1536 \r\n   QXGA (4:3)\r\nSistema Operativo AndroidTM 5.0.2\r\nMemoria interna 32GB (espandibile\r\n   fino a 128GB)', 0, 0, 'DEVICE_SAMSUNG_GALAXY_TAB_S2_black-1.png', '', '', '', ''),
(4, 'iPad Air 2', 'Apple', 0, '', 'Wi-Fi + Cellular (4G LTE)\r\nDisplay Retina da 9,7" (diagonale)\r\nSistema Operativo iOS 8\r\nFotocamera iSight da 8 MP', 0, 0, 'DEVICE_APPLE_IPAD-air-2-silver-1.jpg', '', '', '', ''),
(5, 'iPad Air WI-FI + Cellular ', 'Apple', 0, '', 'Sistema Operativo iOS 7\r\nDisplay Retina da 9,7" (diagonale)\r\nChip A7 con coprocessore di \r\n   movimento M7\r\nFotocamera iSight da 5 MP', 0, 0, 'DEVICE_APPLE_IPAD_AIR-silver-1.jpg', '', '', '', ''),
(6, 'iPad mini 4', 'Apple', 0, '', 'Wi-Fi + Cellular (4G LTE)\r\nDisplay Retina 7.9” (2048x1536) Led IPS\r\nSistema Operativo IOS9 (Processore A8)\r\nFotocamera iSight 8Mpx e 1.2 Mpx', 0, 0, 'DEVICE_APPLE_IPAD_MINI-4-spgrey-1.png', '', '', '', ''),
(7, 'iPad Pro 9.7" 256GB', 'Apple', 1199, 'Sistema Operativo				iOS 9\r\n \r\nDisplay						Retina da 9,7” (diagonale) con True Tone e rivestimento\r\n						antiriflesso\r\n \r\nSensori						impronte digitali Touch ID\r\n \r\nProcessore					Chip A9X di terza generazione con architettura a 64 bit di\r\n						livello desktop\r\n \r\nFotocamera					iSight da 12MP con video a 4K\r\n \r\nVideocamera					FaceTime HD (foto da 5MP)\r\n \r\nConnettività					4G LTE Advanced1, Wi-Fi 802.11ac con tecnologia MIMO\r\n \r\nBatteria						Fino a 10 ore di autonomia 2\r\n \r\nNote\r\n1 Richiede un piano dati. La tecnologia 4G LTE è supportata solo in alcuni Paesi e solo da alcuni operatori. La velocità varia a seconda delle condizioni ambientali.\r\n2 La durata della batteria varia a seconda dell’uso e della configurazione. Vai su www.apple.com/it/batteries per saperne di più.\r\n \r\nPer qualsiasi informazione aggiuntiva non esitare a consultare la sezione [assistenza](Assistenza_SupportoTecnico) del nostro sito', 'Display Retina da 9,7" (diagonale) con True\r\n   Tone e rivestimento antiriflesso\r\nChip A9 con architettura a 64 bit di livello\r\n   desktop\r\nSensore di impronte digitali Touch ID\r\nFotocamera iSight da 12MP con video a 4K', 1, 20, 'DEVICE_APPLE_IPAD_97_spacegrey_01.png', 'PR_DEVICE_APPLE_IPAD_97_spacegrey_01.jpg', 'PR_DEVICE_APPLE_IPAD_97_spacegrey_02.jpg', 'PR_DEVICE_APPLE_IPAD_97_spacegrey_03.jpg', 'PR_DEVICE_APPLE_IPAD_97_spacegrey_04.jpg'),
(8, 'Mediapad T1 10 LTE', 'Huawei', 0, '', 'Display 9.6” PS\r\nSistema Operativo Android™ 4.4\r\nProcessore Snapdragon™ 200 \r\n   QuadCore 1.2 GHz', 0, 0, 'DEVICE_HUAWEY_MEDIAPAD-10-link-plus-1.jpg', '', '', '', ''),
(9, 'Pixi3 10', 'Alcatel ', 0, '', 'Display 10,1” ,1280x800\r\nAndroid 5.1\r\nConnetività Hsdpa 21 e chiamata voce\r\nDoppia fotocamera, 2 Mpxl + VGA', 0, 0, 'DEVICE_ALCATEL_pixi3-10.png', '', '', '', '');

-- --------------------------------------------------------

--
-- Struttura della tabella `tv_smartliving`
--

CREATE TABLE IF NOT EXISTS `tv_smartliving` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nome` varchar(30) NOT NULL,
  `Marca` varchar(20) NOT NULL,
  `Prezzo` double NOT NULL,
  `PrezzoAbbonamento` float NOT NULL,
  `Descrizione` text NOT NULL,
  `DescrizioneVeloce` text NOT NULL,
  `img_path` varchar(50) NOT NULL,
  `small_img1` varchar(50) NOT NULL,
  `small_img2` varchar(50) NOT NULL,
  `small_img3` varchar(50) NOT NULL,
  `small_img4` varchar(50) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dump dei dati per la tabella `tv_smartliving`
--

INSERT INTO `tv_smartliving` (`ID`, `Nome`, `Marca`, `Prezzo`, `PrezzoAbbonamento`, `Descrizione`, `DescrizioneVeloce`, `img_path`, `small_img1`, `small_img2`, `small_img3`, `small_img4`) VALUES
(1, 'Cassa MD 12', 'Nokia', 0, 0, '', 'Design ultra – compatto\r\nNFC incluso\r\nFino a 15 ore di riproduzione musicale\r\nGaranzia 24 mesi', 'DEVICE_NOKIA_MD-12_orange_230x230.png', '', '', '', ''),
(2, 'Galaxy Gear S', 'Samsung', 349, 0, 'Connettivita					HSDPA 21Mbps/UMTS/EDGE/GPRS - Wi-Fi - Bluetooth - \r\n						Micro USB\r\n \r\nFrequenze					2G: 900/1800 - 3G: 900/2100\r\n \r\nDisplay*						Touch da 2”\r\n \r\nFormato SIM					Nano\r\n \r\nMemoria interna					4GB\r\n \r\nAltro						Notifiche, Chiamate, SMS, S Health,Lettore musicale, Meteo,\r\n						Navigatore, Comandi vocali, Running.\r\n						Download ulteriori applicazioni tramite il Samsung Gear Apps\r\n \r\nIn dotazione:					Supporto per la carica Micro USB - Carica batteria - Guida di\r\n						riferimento rapido\r\n \r\nDimensioni					39,9 x 58,1 x 12,5 mm\r\n \r\nPeso						84 gr.\r\n \r\nBatteria						300mAh\r\n \r\nNote\r\n(*) Memoria interna: Parte della memoria interna indicata è utilizzata dal sistema operativo e dalle applicazioni preinstallate\r\n \r\nPer qualsiasi informazione aggiuntiva non esitare a consultare la sezione [assistenza](Assistenza_SupportoTecnico) del nostro sito', 'Orologio Multifunzione Intelligente\r\nDisplay 2” curved SuperAMOLED\r\nProcessore DualCore 1GHz\r\nCertificazione IP67', 'DEVICE_SAMSUNG_GALAXY_GEAR_S.jpg', 'PR_DEVICE_SAMSUNG_GALAXY-gear-s-1_0.jpg', 'PR_DEVICE_SAMSUNG_GALAXY-gear-s-2_0.jpg', 'PR_DEVICE_SAMSUNG_GALAXY-gear-s-1_0.jpg', 'PR_DEVICE_SAMSUNG_GALAXY-gear-s-2_0.jpg'),
(3, 'Gear VR', 'Samsung', 0, 0, '', 'Design ergonomico\r\nCompatibile Galaxy S7, S7 edge\r\n    Galaxy S6, S6 edge, S6 edge+\r\nTantissimi contenuti', 'DEVICE_GEAR_vr_3_230x230.png', '', '', '', ''),
(4, 'Smart Home Starter', 'D-Link', 0, 0, '', 'Servizio gratuito\r\nVisualizzazione da smartphone o\r\n   tablet delle riprese\r\nInvio notifiche su devices/e-mail\r\nPossibilità di impostare regole', 'DEVICE_DLinkHD_0.jpg', '', '', '', ''),
(5, 'Smart TV 50" + Soundbar ', 'Samsung', 0, 0, '', 'Ultra HD - 4K 3840 x 2160\r\nSoundbar HW-J250 inclusa\r\nTIMvision incluso', 'DEVICE_SAMSUNG_smart_tv.png', '', '', '', ''),
(6, 'TIMTag', 'TIM', 0, 0, '', 'Resistente all’acqua\nFornisce allarmi di movimento\n   (velocità, inerzia, crash)\nBatteria di lunga durata', 'DEVICE_timtag-newlogo.png', '', '', '', ''),
(7, 'TIMVision e ChromeCast', 'Google', 0, 0, '', 'Dispositivo: 51,9 x 51,9 x 13,49 mm\r\nAmpia gamma di SO supportati', 'DEVICE_CHROMECAST-1.jpg', '', '', '', ''),
(8, 'Videocamera Wi-Fi fissa', 'D-Link', 0, 0, '', 'Servizio gratuito PER SEMPRE\r\nVisualizzazione da smartphone\r\n    o tablet delle riprese\r\nNotifiche push instantanee\r\n   sull''APP in caso di intrusione', 'DEVICE_ipcam_fissa.png', '', '', '', ''),
(9, 'Watch Sport 38', 'Apple', 0, 0, '', 'Cassa in alluminio anodizzato color\r\n   argento, grigio siderale\r\nVetro rinforzato Ion-X\r\nDisplay Retina con Force Touch\r\nFondo in materiale composito', 'DEVICE_APPLE_WATCH38-black.png', '', '', '', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
