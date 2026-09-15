export const parts = [
  {
    id: "cpu",
    name: "Prozessor",
    short: "CPU",
    icon: "◈",
    color: "coral",
    role: "Das Gehirn",
    text: "Berechnet Befehle und sorgt dafür, dass Programme schnell reagieren.",
    fact: "Mehr Kerne helfen beim gleichzeitigen Arbeiten mit vielen Aufgaben.",
  },
  {
    id: "gpu",
    name: "Grafikkarte",
    short: "GPU",
    icon: "▦",
    color: "blue",
    role: "Der Bildmacher",
    text: "Erzeugt Bilder, Videos und 3D-Welten für deinen Bildschirm.",
    fact: "Gaming braucht besonders viel Grafikleistung.",
  },
  {
    id: "ram",
    name: "Arbeitsspeicher",
    short: "RAM",
    icon: "▤",
    color: "mint",
    role: "Der Schreibtisch",
    text: "Hält aktuell benötigte Daten bereit, damit die CPU sie schnell erreicht.",
    fact: "RAM ist nur aktiv, solange der PC eingeschaltet ist.",
  },
  {
    id: "ssd",
    name: "SSD-Speicher",
    short: "SSD",
    icon: "▥",
    color: "yellow",
    role: "Das Bücherregal",
    text: "Speichert Programme, Fotos und dein Betriebssystem dauerhaft.",
    fact: "SSDs sind leise und schneller als alte Festplatten.",
  },
  {
    id: "board",
    name: "Mainboard",
    short: "BOARD",
    icon: "⌁",
    color: "purple",
    role: "Die Hauptstraße",
    text: "Verbindet alle Teile miteinander und verteilt Daten und Strom.",
    fact: "Alle Bauteile werden am Mainboard angeschlossen.",
  },
  {
    id: "psu",
    name: "Netzteil",
    short: "PSU",
    icon: "⚡",
    color: "orange",
    role: "Die Energiequelle",
    text: "Wandelt Strom aus der Steckdose für die Bauteile um.",
    fact: "Ein Netzteil sollte genug Watt für alle Teile liefern.",
  },
];

export const questions = [
  {
    question: "Welches Bauteil ist das „Gehirn“ des PCs?",
    options: ["Netzteil", "Prozessor", "SSD"],
    answer: 1,
  },
  {
    question: "Was speichert Dateien dauerhaft?",
    options: ["Arbeitsspeicher", "Grafikkarte", "SSD"],
    answer: 2,
  },
  {
    question: "Wofür ist die Grafikkarte besonders wichtig?",
    options: ["Bilder und 3D", "Strom umwandeln", "Teile verbinden"],
    answer: 0,
  },
  {
    question: "Welche Aufgabe hat das Mainboard?",
    options: [
      "Es verbindet die Bauteile",
      "Es speichert Fotos",
      "Es kühlt den PC",
    ],
    answer: 0,
  },
  {
    question:
      "Was passiert mit dem Inhalt des RAM, wenn der PC ausgeschaltet wird?",
    options: [
      "Er wird gelöscht",
      "Er wird auf die SSD kopiert",
      "Er bleibt immer erhalten",
    ],
    answer: 0,
  },
  {
    question: "Welches Bauteil liefert den Komponenten elektrische Energie?",
    options: ["Das Netzteil", "Das Mainboard", "Die Grafikkarte"],
    answer: 0,
  },
  {
    question: "Warum ist eine SSD praktisch?",
    options: [
      "Sie speichert Daten dauerhaft",
      "Sie erzeugt Bilder",
      "Sie ersetzt das Netzteil",
    ],
    answer: 0,
  },
  {
    question: "Wo wird der Prozessor normalerweise eingesetzt?",
    options: ["Auf dem Mainboard", "Im Netzteil", "Auf der SSD"],
    answer: 0,
  },
  {
    question: "Was bedeutet die Abkürzung CPU?",
    options: [
      "Central Processing Unit",
      "Computer Power Utility",
      "Central Picture Unit",
    ],
    answer: 0,
  },
  {
    question: "Was bedeutet die Abkürzung RAM?",
    options: [
      "Random Access Memory",
      "Rapid Audio Module",
      "Render And Monitor",
    ],
    answer: 0,
  },
  {
    question: "Was sollte ein Netzteil mindestens passend liefern?",
    options: [
      "Genug Watt für alle Bauteile",
      "Möglichst wenig Strom",
      "Nur Energie für die SSD",
    ],
    answer: 0,
  },
  {
    question: "Welche Komponente ist besonders wichtig für flüssiges Gaming?",
    options: ["Die Grafikkarte", "Das Gehäuse", "Das Netzteilkabel"],
    answer: 0,
  },
  {
    question: "Was ist ein Anschluss auf dem Mainboard?",
    options: [
      "Eine Stelle zum Verbinden eines Bauteils",
      "Ein gespeichertes Programm",
      "Ein Lüftergeräusch",
    ],
    answer: 0,
  },
  {
    question: "Warum sollte ein Netzteil Leistungsreserve haben?",
    options: [
      "Damit Lastspitzen und spätere Upgrades möglich sind",
      "Damit der RAM schneller wird",
      "Damit die SSD mehr Speicherplatz bekommt",
    ],
    answer: 0,
    level: "Fortgeschritten",
  },
  {
    question: "Was muss beim CPU-Kauf zum Mainboard passen?",
    options: ["Der CPU-Sockel", "Die SSD-Größe", "Die Gehäusefarbe"],
    answer: 0,
    level: "Fortgeschritten",
  },
  {
    question: "Welche Aussage zu DDR4 und DDR5 stimmt?",
    options: [
      "Ein Mainboard unterstützt normalerweise nur eine Generation",
      "DDR4 und DDR5 lassen sich immer mischen",
      "DDR5 ist eine Grafikkarten-Schnittstelle",
    ],
    answer: 0,
    level: "Fortgeschritten",
  },
  {
    question:
      "Was muss eine leistungsstarke Grafikkarte zusätzlich zum PCIe-Slot haben?",
    options: [
      "Passende Stromanschlüsse vom Netzteil",
      "Einen CPU-Sockel",
      "DDR5-RAM",
    ],
    answer: 0,
    level: "Fortgeschritten",
  },
];

export const advancedTopics = [
  {
    number: "01",
    label: "STROMVERSORGUNG",
    title: "Wie viel Leistung braucht der PC?",
    text: "Addiere die ungefähre Leistungsaufnahme von CPU und GPU und plane Reserve ein. Entscheidend ist die Wattzahl des Netzteils, nicht eine selbst berechnete Spannung.",
    tip: "Prüfe die Herstellerangaben und wähle ein qualitativ gutes Netzteil mit etwa 20 bis 30 Prozent Reserve.",
    color: "purple",
  },
  {
    number: "02",
    label: "CPU-SOCKEL",
    title: "Passt der Prozessor aufs Mainboard?",
    text: "Eine CPU passt nur in den passenden Sockel. Intel- und AMD-Prozessoren verwenden unterschiedliche Plattformen, und auch innerhalb einer Marke wechseln die Sockel.",
    tip: "Vergleiche immer den CPU-Sockel mit der Mainboard-Angabe und prüfe zusätzlich die unterstützte BIOS-Version.",
    color: "pink",
  },
  {
    number: "03",
    label: "ARBEITSSPEICHER",
    title: "Wie viel RAM ist sinnvoll?",
    text: "Für einfache Aufgaben reichen oft 16 GB. Spiele, kreative Programme und viele gleichzeitig geöffnete Apps profitieren von 32 GB oder mehr.",
    tip: "Achte auf die maximale RAM-Kapazität, die Anzahl der Steckplätze und Dual-Channel mit passenden Modulen.",
    color: "green",
  },
  {
    number: "04",
    label: "GRAFIKKARTE",
    title: "Slot und Stromanschlüsse prüfen",
    text: "Die meisten Grafikkarten nutzen einen PCIe-x16-Steckplatz. Zusätzlich brauchen leistungsstarke Modelle eigene PCIe-Stromkabel vom Netzteil.",
    tip: "Prüfe Steckplatz, Gehäuselänge, Netzteil-Leistung und die passenden 6-, 8- oder neuen 12V-2x6-Anschlüsse.",
    color: "blue",
  },
  {
    number: "05",
    label: "DDR4 ODER DDR5",
    title: "RAM-Generationen nicht mischen",
    text: "DDR4 und DDR5 sehen ähnlich aus, sind aber elektrisch und mechanisch nicht kompatibel. Ein Mainboard unterstützt normalerweise nur eine Generation.",
    tip: "Kaufe RAM erst, nachdem du im Mainboard-Handbuch geprüft hast, ob DDR4 oder DDR5 benötigt wird.",
    color: "yellow",
  },
  {
    number: "06",
    label: "KOMPATIBILITÄT",
    title: "Vor dem Kauf alles abgleichen",
    text: "Ein guter PC ist ein Zusammenspiel aus Sockel, RAM, Anschlüssen, Platz und Kühlung. Einzelne starke Teile machen noch keinen passenden Build.",
    tip: "Nutze eine Kompatibilitätsliste und prüfe CPU, Mainboard, RAM, GPU, Netzteil, Kühler und Gehäuse gemeinsam.",
    color: "black",
  },
];
