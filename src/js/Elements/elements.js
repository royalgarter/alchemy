class Elements {
  constructor() {
    this.setDefaultElements();
  }

  add(id, name, imgExt, ukr, ru, final = false) {
    // if (id === undefined) throw new Error(`The Element's ID was not set.`);

    // if (this[id]) throw new Error(`An element with the following ID: "${id}" is already exists. Please set another ID for ${name} element`);
    this[id] = {};
    this[id].id = id;
    this[id].name = name;
    this[id].img = `./images/${name.toLowerCase().replace(/[ ]/g,"-")}.${imgExt}`;
    this[id].final = final ? true : false;
    this[id].ukr = ukr;
    this[id].ru = ru;
  }

  setDefaultElements() {
    this.add("Air$","Air","png","Повітря","Воздух");
    this.add("Earth$","Earth","png","Земля","Земля");
    this.add("Fire$","Fire","png","Вогонь","Огонь");
    this.add("Water$","Water","png","Вода","Вода");
  }

  isElementExists(id) {
    return Boolean(this[id]);
  }

  getElementById(id) {
    return this[id]
  }

  get defaultElements() {
    return [
      this["Air$"],
      this["Earth$"],
      this["Fire$"],
      this["Water$"]
    ]
  }
}

const ELEMENTS = new Elements();
ELEMENTS.add("Air$Fire$", "Energy", "png", "Енергія", "Энергия");
ELEMENTS.add("Air$Air$","Pressure","png", "Тиск", "Давление");
ELEMENTS.add("Air$Earth$","Dust","png", "Пил", "Пыль");
ELEMENTS.add("Earth$Fire$","Lava","png", "Лава", "Лава");
ELEMENTS.add("Air$Water$","Rain","png", "Дощ", "Дождь");
ELEMENTS.add("Earth$Water$","Mud","png", "Грязь", "Грязь");
ELEMENTS.add("Water$Water$","Sea","png", "Море", "Море");
ELEMENTS.add("Fire$Water$","Steam","png", "Пар", "Пар");
ELEMENTS.add("Air$Energy$","Wind","png", "Вітер", "Ветер");
ELEMENTS.add("Air$Lava$","Stone","png", "Камінь", "Камень");
ELEMENTS.add("Air$Pressure$","Atmosphere","png", "Атмосфера", "Атмосфера");
ELEMENTS.add("Air$Steam$","Cloud","png", "Хмара", "Облако");
ELEMENTS.add("Earth$Energy$","Earthquake","png", "Землетрус", "Землетрясение");
ELEMENTS.add("Dust$Fire$","Gunpowder","png", "Порох", "Порох");
ELEMENTS.add("Fire$Sea$","Salt","png", "Сіль", "Соль");
ELEMENTS.add("Earth$Lava$","Volcano","png", "Вулкан", "Вулкан");
ELEMENTS.add("Lava$Pressure$","Granite","png", "Граніт", "Гранит", "final");
ELEMENTS.add("Lava$Water$","Obsidian","png", "Обсидіан", "Обсидиан", "final");
ELEMENTS.add("Fire$Mud$","Brick","png", "Цегла", "Кирпич");
ELEMENTS.add("Earth$Rain$", "Plant", "png", "Рослина", "Растение");
ELEMENTS.add("Rain$Rain$", "Flood", "png", "Потоп", "Потоп", "final");
ELEMENTS.add("Sea$Sea$", "Ocean", "png", "Океан", "Океан");
ELEMENTS.add("Earth$Steam$", "Geyser", "png", "Гейзер", "Гейзер", "final");
ELEMENTS.add("Air$Cloud$", "Sky", "jpg", "Небо", "Небо");
ELEMENTS.add("Air$Stone$", "Sand", "png", "Пісок", "Песок");
ELEMENTS.add("Brick$Brick$", "Wall", "png", "Стіна", "Стена");
ELEMENTS.add("Cloud$Earth$", "Fog", "png", "Туман", "Туман");
ELEMENTS.add("Earth$Earthquake$", "Mountain", "png", "Гора", "Гора");
ELEMENTS.add("Cloud$Energy$", "Storm", "png", "Гроза", "Гроза", "final");
ELEMENTS.add("Fire$Stone$", "Metal", "png", "Метал", "Металл");
ELEMENTS.add("Fire$Gunpowder$", "Explosion", "png", "Вибух", "Взрыв");
ELEMENTS.add("Mud$Plant$", "Swamp", "png", "Болото", "Болото");
ELEMENTS.add("Earthquake$Ocean$", "Tsunami", "png", "Цунамі", "Цунами", "final");
ELEMENTS.add("Ocean$Volcano$", "Isle", "png", "Острів", "Остров");
ELEMENTS.add("Ocean$Wind$", "Wave", "png", "Хвиля", "Волна");
ELEMENTS.add("Cloud$Plant$", "Cotton", "png", "Бавовна", "Хлопок");
ELEMENTS.add("Earth$Plant$", "Grass", "png", "Трава", "Трава");
ELEMENTS.add("Fire$Plant$", "Tobacco", "png", "Тютюн", "Табак");
ELEMENTS.add("Ocean$Plant$", "Seaweed", "png", "Водорості", "Водоросли");
ELEMENTS.add("Plant$Plant$", "Garden", "png", "Сад", "Сад");
ELEMENTS.add("Plant$Stone$", "Moss", "png", "Мох", "Мох", "final");
ELEMENTS.add("Plant$Pressure$", "Coal", "png", "Вугілля", "Каменный уголь");
ELEMENTS.add("Energy$Volcano$", "Ash", "png", "Попіл", "Пепел");
ELEMENTS.add("Energy$Wind$", "Hurricane", "png", "Ураган", "Ураган", "final");
ELEMENTS.add("Air$Metal$", "Rust", "png", "Іржа", "Ржавчина");
ELEMENTS.add("Air$Wave$", "Sound", "png", "Звук", "Звук");
ELEMENTS.add("Energy$Explosion$", "Atomic bomb", "png", "Атомна бомба", "Атомная бомба", "final");
ELEMENTS.add("Explosion$Metal$", "Grenade", "png", "Граната", "Граната", "final");
ELEMENTS.add("Explosion$Sky$", "Fireworks", "png", "Феєрверк", "Фейерверк", "final");
ELEMENTS.add("Fire$Sand$", "Glass", "png", "Скло", "Стекло");
ELEMENTS.add("Fire$Sky$", "Sun", "png", "Сонце", "Солнце");
ELEMENTS.add("Fog$Grass$", "Dew", "png", "Роса", "Роса", "final");
ELEMENTS.add("Gunpowder$Metal$", "Bullet", "png", "Куля", "Пуля");
ELEMENTS.add("Isle$Isle$", "Archipelago", "png", "Архіпелаг", "Архипелаг", "final");
ELEMENTS.add("Coal$Metal$", "Steel", "png", "Сталь", "Сталь");
ELEMENTS.add("Energy$Metal$", "Electricity", "png", "Електрика", "Электричество");
ELEMENTS.add("Metal$Stone$", "Blade", "png", "Лезо", "Лезвие");
ELEMENTS.add("Mountain$Mountain$", "Mountain range", "png", "Гірський хребет", "Горный хребет");
ELEMENTS.add("Mountain$Water$", "River", "png", "Річка", "Река");
ELEMENTS.add("Ocean$Sand$", "Beach", "png", "Пляж", "Пляж");
ELEMENTS.add("Ocean$Sky$", "Horizon", "png", "Обрій", "Горизонт", "final");
ELEMENTS.add("Garden$Plant$", "Flower", "png", "Квітка", "Цветок");
ELEMENTS.add("Plant$Wall$", "Ivy", "png", "Плющ", "Плющ", "final");
ELEMENTS.add("Coal$Pressure$", "Diamond", "png", "Алмаз", "Алмаз");
ELEMENTS.add("Energy$Sand$", "Sandstorm", "png", "Піщана буря", "Песчаная буря", "final");
ELEMENTS.add("Mud$Sand$", "Clay", "png", "Клей", "Клей");
ELEMENTS.add("Plant$Sand$", "Cactus", "png", "Кактус", "Кактус", "final");
ELEMENTS.add("Sand$Sand$", "Desert", "png", "Пустеля", "Пустыни");
ELEMENTS.add("Sand$Swamp$", "Quicksand", "png", "Сипучий пісок", "Зыбучий песок", "final");
ELEMENTS.add("Sand$Wind$", "Dune", "png", "Дюна", "Дюна");
ELEMENTS.add("Sky$Stone$", "Moon", "png", "Місяць", "Луна");
ELEMENTS.add("Metal$Steam$", "Boiler", "png", "Паровий котел", "Паровой котел");
ELEMENTS.add("Sand$Stone$", "Sandstone", "png", "Пісковик", "Песчаник", "final");
ELEMENTS.add("Energy$Swamp$", "Life", "png", "Життя", "Жизнь");
ELEMENTS.add("Wall$Wall$", "House", "png", "Будинок", "Дом");
ELEMENTS.add("Garden$Water$", "Pond", "png", "Ставок", "Пруд");
ELEMENTS.add("Air$Life$", "Bird", "png", "Птах", "Птица");
ELEMENTS.add("Blade$Blade$", "Scissors", "png", "Ножиці", "Ножницы");
ELEMENTS.add("Blade$Electricity$", "Blender", "png", "Блендер", "Блендер");
ELEMENTS.add("Blade$Grass$", "Scythe", "png", "Коса", "Коса");
ELEMENTS.add("Blade$Metal$", "Sword", "png", "Меч", "Меч");
ELEMENTS.add("Clay$Life$", "Golem", "png", "Голем", "Голем", "final");
ELEMENTS.add("Desert$Stone$", "Pyramid", "png", "Піраміда", "Пирамида");
ELEMENTS.add("Desert$Water$", "Oasis", "png", "Оазис", "Оазис", "final");
ELEMENTS.add("Diamond$Metal$", "Ring", "png", "Кільце", "Кольцо", "final");
ELEMENTS.add("Earth$Life$", "Human", "png", "Людина", "Человек");
ELEMENTS.add("Electricity$Glass$", "Light bulb", "png", "Лампочка", "Лампочка");
ELEMENTS.add("Electricity$Metal$", "Wire", "png", "Дріт", "Провод");
ELEMENTS.add("Clay$Fire$", "Pottery", "png", "Кераміка", "Керамика");
ELEMENTS.add("Flower$Pond$", "Water lily", "png", "Латаття", "Водяная лилия", "final");
ELEMENTS.add("Flower$Sun$", "Sunflower", "png", "Соняшник", "Подсолнечник");
ELEMENTS.add("Glass$Glass$", "Glasses", "png", "Окуляри", "Очки");
ELEMENTS.add("Glass$Metal$", "Mirror", "png", "Люстерко", "Зеркало", "final");
ELEMENTS.add("Glass$Sky$", "Telescope", "png", "Телескоп", "Телескоп");
ELEMENTS.add("Grass$Sun$", "Hay", "png", "Сіно", "Сено");
ELEMENTS.add("House$House$", "Village", "png", "Село", "Деревня", "final");
ELEMENTS.add("House$Sky$", "Skyscraper", "png", "Хмарочос", "Небоскреб");
ELEMENTS.add("House$Wind$", "Windmill", "png", "Млин", "Мельница");
ELEMENTS.add("Life$Stone$", "Egg", "png", "Яйце", "Яйцо");
ELEMENTS.add("Bullet$Metal$", "Gun", "png", "Пістолет", "Пистолет");
ELEMENTS.add("Life$Metal$", "Robot", "png", "Робот", "Робот");
ELEMENTS.add("Metal$Sun$", "Gold", "png", "Золото", "Золото");
ELEMENTS.add("Mountain$River$", "Waterfall", "png", "Водоспад", "Водопад", "final");
ELEMENTS.add("Life$Ocean$", "Plankton", "png", "Планктон", "Планктон", "final");
ELEMENTS.add("Moon$Ocean$", "Tide", "png", "Хвиля", "Волна", "final");
ELEMENTS.add("Glass$Plant$", "Greenhouse", "png", "Теплиця", "Теплица", "final");
ELEMENTS.add("Plant$Sun$", "Oxygen", "png", "Кисень", "Кислород");
ELEMENTS.add("Rain$Sun$", "Rainbow", "png", "Радуга", "Радуга");
ELEMENTS.add("Metal$River$", "Bridge", "png", "Міст", "Мост", "final");
ELEMENTS.add("Glass$Sand$", "Time", "png", "Час", "Время");
ELEMENTS.add("Moon$Sky$", "Night", "png", "Ніч", "Ночь");
ELEMENTS.add("Sky$Sun$", "Day", "png", "День", "День");
ELEMENTS.add("Moon$Sun$", "Eclipse", "png", "Затемнення", "Затмение", "final");
ELEMENTS.add("Life$Swamp$", "Bacteria", "png", "Бактерії", "Бактерии");
ELEMENTS.add("River$Wall$", "Dam", "png", "Дамба", "Дамба");
ELEMENTS.add("Glass$Water$", "Aquarium", "png", "Акваріум", "Аквариум", "final");
ELEMENTS.add("Pond$Water$", "Lake", "png", "Озеро", "Озеро");
ELEMENTS.add("Bacteria$Glasses$", "Microscope", "png", "Мікроскоп", "Микроскоп", "final");
ELEMENTS.add("Beach$Glasses$", "Sunglasses", "png", "Сонцезахисні окуляри", "Солнцезащитные Очки", "final");
ELEMENTS.add("Beach$Bird$", "Seagull", "png", "Чайка", "Чайка", "final");
ELEMENTS.add("Bird$Earth$", "Ostrich", "png", "Страус", "Страус", "final");
ELEMENTS.add("Bird$Flower$", "Hummingbird", "png", "Колібрі", "Колибри", "final");
ELEMENTS.add("Bird$Hay$", "Nest", "png", "Гніздо", "Гнездо", "final");
ELEMENTS.add("Bird$House$", "Birdhouse", "png", "Шпаківня", "Скворечник", "final");
ELEMENTS.add("Bird$Lake$", "Duck", "png", "Качка", "Утка");
ELEMENTS.add("Bird$Metal$", "Airplane", "png", "Літак", "Самолет");
ELEMENTS.add("Bird$Rainbow$", "Peacock", "png", "Павич", "Павлин", "final");
ELEMENTS.add("Day$Night$", "Twilight", "png", "Сутінки", "Сумерки", "final");
ELEMENTS.add("Egg$Fire$", "Omelette", "png", "Омлет", "Омлет", "final");
ELEMENTS.add("Egg$Ocean$", "Hard roe", "png", "Ікра", "Икра");
ELEMENTS.add("Egg$Sand$", "Turtle", "png", "Черепаха", "Черепаха", "final");
ELEMENTS.add("Egg$Swamp$", "Lizard", "png", "Ящірка", "Ящерица");
ELEMENTS.add("Electricity$Oxygen$", "Ozone", "png", "Озон", "Озон", "final");
ELEMENTS.add("Electricity$Scythe$", "Lawn mower", "png", "Газонокосарка", "Газонокосилка", "final");
ELEMENTS.add("Electricity$Sword$", "Lightsaber", "png", "Світловий меч", "Световой меч");
ELEMENTS.add("Explosion$Glasses$", "Safety glasses", "png", "Захисні окуляри", "Защитные очки", "final");
ELEMENTS.add("Bird$Fire$", "Phoenix", "png", "Фенікс", "Феникс", "final");
ELEMENTS.add("Fire$Gun$", "Flamethrower", "png", "Вогнемет", "Огнемет", "final");
ELEMENTS.add("Glass$Rainbow$", "Prism", "png", "Призма", "Призма", "final");
ELEMENTS.add("Glasses$Water$", "Swim goggles", "png", "Окуляри для плавання", "Очки для плавания");
ELEMENTS.add("Blade$Gun$", "Bayonet", "png", "Штик", "Штык", "final");
ELEMENTS.add("Electricity$Gun$", "Taser", "png", "Електрошокер", "Электрошокер", "final");
ELEMENTS.add("Gunpowder$Wire$", "Dynamite", "png", "Динаміт", "Динамит", "final");
ELEMENTS.add("Hay$Hay$", "Hay bale", "png", "Стіг сіна", "Стог сена", "final");
ELEMENTS.add("Gold$House$", "Bank", "png", "Банк", "Банк", "final");
ELEMENTS.add("Hay$House$", "Barn", "png", "Амбар", "Амбар");
ELEMENTS.add("Bacteria$Human$", "Sickness", "png", "Хвороба", "Болезнь");
ELEMENTS.add("Bird$Human$", "Angel", "png", "Янгол", "Ангел");
ELEMENTS.add("Blade$Human$", "Blood", "png", "Кров", "Кровь");
ELEMENTS.add("Dust$Human$", "Allergy", "png", "Алергія", "Аллергия", "final");
ELEMENTS.add("Electricity$Human$", "Electrician", "png", "Електрик", "Электрик", "final");
ELEMENTS.add("Energy$Human$", "Wizard", "png", "Чарівник", "Волшебник");
ELEMENTS.add("Fire$Human$", "Fireman", "png", "Пожежник", "Пожарник");
ELEMENTS.add("Garden$Human$", "Gardener", "png", "Садовник", "Садовник", "final");
ELEMENTS.add("Glasses$Human$", "Nerd", "png", "Ботан", "Ботан");
ELEMENTS.add("Gun$Human$", "Corpse", "png", "Труп", "Труп");
ELEMENTS.add("Hay$Human$", "Scarecrow", "png", "Опудало", "Чучело");
ELEMENTS.add("House$Human$", "Family", "png", "Родина", "Семья");
ELEMENTS.add("Human$Human$", "Love", "png", "Любов, кохання", "Любовь");
ELEMENTS.add("Human$Moon$", "Astronaut", "png", "Астронавт", "Астронавт");
ELEMENTS.add("Human$Oxygen$", "Carbon dioxide", "png", "Вуглекислий газ", "Углекислый газ");
ELEMENTS.add("Human$Plant$", "Farmer", "png", "Фермер", "Фермер");
ELEMENTS.add("Human$Rain$", "Cold", "png", "Холод", "Холод");
ELEMENTS.add("Human$Robot$", "Cyborg", "png", "Кіборг", "Киборг", "final");
ELEMENTS.add("Human$Scythe$", "Grim reaper", "png", "Смерть", "Смерть", "final");
ELEMENTS.add("Human$Sound$", "Music", "png", "Музика", "Музыка");
ELEMENTS.add("Human$Wave$", "Surfer", "png", "Серфер", "Серфер");
ELEMENTS.add("Electricity$Light bulb$", "Light", "png", "Світло", "Свет");
ELEMENTS.add("Hay$Metal$", "Needle", "png", "Голка", "Игла");
ELEMENTS.add("Human$Metal$", "Tool", "png", "Інструмент", "Инструмент");
ELEMENTS.add("Light bulb$Metal$", "Lamp", "png", "Лампа", "Лампа");
ELEMENTS.add("Bird$Mountain$", "Eagle", "png", "Орел", "Орел", "final");
ELEMENTS.add("Bird$Night$", "Owl", "png", "Сова", "Сова", "final");
ELEMENTS.add("Night$Telescope$", "Star", "png", "Зірка", "Звезда");
ELEMENTS.add("Plant$Pottery$", "Vase", "png", "Ваза", "Ваза", "final");
ELEMENTS.add("Plant$Time$", "Tree", "png", "Дерево", "Дерево");
ELEMENTS.add("Life$Rainbow$", "Unicorn", "png", "Єдиноріг", "Единорог");
ELEMENTS.add("Rainbow$Rainbow$", "Double rainbow!", "png", "Подвійна веселка", "Двойная радуга", "final");
ELEMENTS.add("Skyscraper$Skyscraper$", "City", "png", "Місто", "Город");
ELEMENTS.add("Pressure$Sunflower$", "Oil", "png", "Нафта", "Нефть");
ELEMENTS.add("Human$Sword$", "Warrior", "png", "Воїн", "Воин", "final");
ELEMENTS.add("Stone$Sword$", "Excalibur", "png", "Екскалібур", "Экскалибур");
ELEMENTS.add("Electricity$Time$", "Clock", "png", "Годинники", "Часы");
ELEMENTS.add("House$Time$", "Ruins", "png", "Руїни", "Руины", "final");
ELEMENTS.add("Gun$Water$", "Water gun", "png", "Водний пістолет", "Водный пистолет", "final");
ELEMENTS.add("Rainbow$Water$", "Paint", "png", "Фарби", "Краски", "final");
ELEMENTS.add("Electricity$Windmill$", "Wind turbine", "png", "Вітряк", "Ветряк", "final");
ELEMENTS.add("Airplane$Astronaut$", "Spaceship", "png", "Космічний корабель", "Космический корабль", "final");
ELEMENTS.add("Airplane$Human$", "Pilot", "png", "Пілот", "Пилот");
ELEMENTS.add("Airplane$Ocean$", "Seaplane", "png", "Гідролітак", "Гидросамолет", "final");
ELEMENTS.add("Airplane$Robot$", "Drone", "png", "Дрон", "Дрон", "final");
ELEMENTS.add("Angel$Music$", "Harp", "png", "Арфа", "Арфа", "final");
ELEMENTS.add("Bird$City$", "Pigeon", "png", "Голуб", "Голубь", "final");
ELEMENTS.add("Bird$Corpse$", "Vulture", "png", "Стерв'ятник", "Стервятник", "final");
ELEMENTS.add("Bird$Farmer$", "Chicken", "png", "Курка", "Курица");
ELEMENTS.add("Bird$Scarecrow$", "Crow", "png", "Ворона", "Ворона", "final");
ELEMENTS.add("Bird$Unicorn$", "Pegasus", "png", "Пегас", "Пегас", "final");
ELEMENTS.add("Airplane$Blade$", "Helicopter", "png", "Гвинтокрил", "Вертолет", "final");
ELEMENTS.add("Blood$Ocean$", "Shark", "png", "Акула", "Акула", "final");
ELEMENTS.add("Boiler$Tool$", "Steam engine", "png", "Паровий двигун", "Паровой двигатель");
ELEMENTS.add("Carbon dioxide$Cold$", "Dry ice", "png", "Сухий лід", "Сухой лед", "final");
ELEMENTS.add("Bird$Clock$", "Cuckoo", "png", "Зозуля", "Кукушка", "final");
ELEMENTS.add("Clock$Sound$", "Alarm clock", "png", "Будильник", "Будильник", "final");
ELEMENTS.add("Clock$Sun$", "Sundial", "png", "Сонячний годинник", "Солнечные часы", "final");
ELEMENTS.add("Corpse$Earth$", "Grave", "png", "Могила", "Могила");
ELEMENTS.add("Corpse$Life$", "Zombie", "png", "Зомбі", "Зомби", "final");
ELEMENTS.add("Corpse$Pyramid$", "Mummy", "png", "Мумія", "Мумия", "final");
ELEMENTS.add("Corpse$Time$", "Bone", "png", "Кость", "Кость");
ELEMENTS.add("Cotton$Tool$", "Thread", "png", "Нитка", "Нить");
ELEMENTS.add("Earth$Farmer$", "Field", "png", "Поле", "Поле");
ELEMENTS.add("Clock$Egg$", "Egg timer", "png", "Таймер-яйце", "Таймер-яйцо", "final");
ELEMENTS.add("Duck$Egg$", "Duckling", "png", "Каченя", "Утенок", "final");
ELEMENTS.add("Egg$Oil$", "Mayonnaise", "png", "Майонез", "Майонез", "final");
ELEMENTS.add("Cold$Electricity$", "Fridge", "png", "Холодильник", "Холодильник", "final");
ELEMENTS.add("Corpse$Electricity$", "Frankenstein", "png", "Франкенштейн", "Франкенштейн", "final");
ELEMENTS.add("Electricity$Needle$", "Sewing machine", "png", "Швейна машина", "Швейная машина", "final");
ELEMENTS.add("Electricity$Nerd$", "Computer", "png", "Комп'ютер", "Компьютер");
ELEMENTS.add("Excalibur$Human$", "Monarch", "png", "Монарх", "Монарх", "final");
ELEMENTS.add("Explosion$Star$", "Super nova", "png", "супер нова", "Супер нова", "final");
ELEMENTS.add("Barn$Farmer$", "Farm", "png", "Ферма", "Ферма", "final");
ELEMENTS.add("Farmer$Life$", "Livestock", "png", "Худоба", "Скот");
ELEMENTS.add("Carbon dioxide$Fire$", "Fire extinguisher", "png", "Вогнегасник", "Огнетушитель", "final");
ELEMENTS.add("Flower$Love$", "Rose", "png", "Роза", "Роза", "final");
ELEMENTS.add("City$Fog$", "Smog", "png", "Зміг", "Смог");
ELEMENTS.add("Hard roe$Human$", "Caviar", "png", "Ікра", "Икра");
ELEMENTS.add("Hard roe$Time$", "Fish", "png", "Риба", "Рыба");
ELEMENTS.add("House$Sickness$", "Hospital", "png", "Лікарня", "Больница");
ELEMENTS.add("Blood$Human$", "Vampire", "png", "Вампір", "Вампир", "final");
ELEMENTS.add("Clock$Human$", "Watch", "png", "Годинники", "Часы", "final");
ELEMENTS.add("Human$Swim goggles$", "Swimmer", "png", "Плавець", "Пловец", "final");
ELEMENTS.add("Human$Tool$", "Engineer", "png", "Інженер", "Инженер");
ELEMENTS.add("Isle$Tree$", "Palm", "png", "Пальма", "Пальма");
ELEMENTS.add("Lamp$Lava$", "Lava lamp", "png", "Лавова лампа", "Лавовая лампа", "final");
ELEMENTS.add("Beach$Light$", "Lighthouse", "png", "Маяк", "Маяк", "final");
ELEMENTS.add("Light bulb$Tree$", "Christmas tree", "png", "Різдвяна ялинка", "Рождественская елка");
ELEMENTS.add("Human$Lightsaber$", "Jedi", "png", "Джедай", "Джедай");
ELEMENTS.add("Fire$Lizard$", "Dragon", "png", "Дракон", "Дракон");
ELEMENTS.add("Lizard$Rainbow$", "Chameleon", "png", "Хамелеон", "Хамелеон", "final");
ELEMENTS.add("Lizard$River$", "Alligator", "png", "Алігатор", "Аллигатор", "final");
ELEMENTS.add("Lizard$Time$", "Dinosaur", "png", "Динозавр", "Динозавр");
ELEMENTS.add("Moon$Star$", "Space", "png", "Космос", "Космос");
ELEMENTS.add("Ocean$Star$", "Starfish", "png", "Морська зірка", "Морская звезда", "final");
ELEMENTS.add("Ash$Oil$", "Soap", "png", "Мило", "Мыло", "final");
ELEMENTS.add("Farmer$Plant$", "Wheat", "png", "Пшоно", "Пшено");
ELEMENTS.add("Cold$Rain$", "Snow", "png", "Сніг", "Снег");
ELEMENTS.add("Sea$Unicorn$", "Narwhal", "png", "Нарвав", "Нарвал", "final");
ELEMENTS.add("Ocean$Sickness$", "Seasickness", "png", "Морська хвороба", "Морская болезнь", "final");
ELEMENTS.add("Blade$Star$", "Shuriken", "png", "Сюрікени", "Сюрикен");
ELEMENTS.add("Pressure$Star$", "Black hole", "png", "Чорна діра", "Черная дыра", "final");
ELEMENTS.add("Star$Star$", "Galaxy", "png", "Галактика", "Галактика", "final");
ELEMENTS.add("Stone$Tool$", "Statue", "png", "Статуя", "Статуя");
ELEMENTS.add("Sun$Tool$", "Solar cell", "png", "Сонячна батарея", "Солнечная батарея", "final");
ELEMENTS.add("Sun$Tree$", "Fruit", "png", "Фрукти", "Фрукты");
ELEMENTS.add("Hay$Tool$", "Pitchfork", "png", "Вила", "Вилы", "final");
ELEMENTS.add("Light$Tool$", "Flashlight", "png", "Ліхтарик", "Фонарик", "final");
ELEMENTS.add("Metal$Tool$", "Armor", "png", "Броня", "Броня");
ELEMENTS.add("Rain$Tool$", "Umbrella", "png", "Парасолька", "Зонтик");
ELEMENTS.add("Tool$Tree$", "Wood", "png", "Дерево", "Дерево");
ELEMENTS.add("Family$Tree$", "Family tree", "png", "Сімейне дерево", "Семейное дерево", "final");
ELEMENTS.add("Fire$Tree$", "Charcoal", "png", "Вугілля", "Уголь");
ELEMENTS.add("House$Tree$", "Treehouse", "png", "Будинок на дереві", "Дом на дереве", "final");
ELEMENTS.add("Pottery$Tree$", "Bonsai tree", "png", "Бонсай", "Бонсай", "final");
ELEMENTS.add("Tree$Tree$", "Forest", "png", "Ліс", "Лес");
ELEMENTS.add("Tree$Wind$", "Leaf", "png", "Лист", "Лист");
ELEMENTS.add("Carbon dioxide$Water$", "Soda", "png", "Газована вода", "Газировка", "final");
ELEMENTS.add("Cold$Water$", "Ice", "png", "Лід", "Лед");
ELEMENTS.add("Light$Wire$", "Optical fiber", "png", "Оптоволокно", "Оптоволокно", "final");
ELEMENTS.add("Glass$Wizard$", "Crystal ball", "png", "Кришталева куля", "Хрустальный шар");
ELEMENTS.add("Air$Dinosaur$", "Pterodactyl", "png", "Птеродактиль", "Птеродактиль", "final");
ELEMENTS.add("Airplane$Space$", "Rocket", "png", "Рокета", "Рокета", "final");
ELEMENTS.add("Bird$Snow$", "Penguin", "png", "Пінгвін", "Пингвин", "final");
ELEMENTS.add("Bird$Wood$", "Woodpecker", "png", "Дятел", "Дятел", "final");
ELEMENTS.add("Blade$Hospital$", "Scalpel", "png", "Скальпель", "Скальпель", "final");
ELEMENTS.add("Blade$Livestock$", "Meat", "png", "М'ясо", "Мясо");
ELEMENTS.add("Blade$Wood$", "Axe", "png", "Сокира", "Топор");
ELEMENTS.add("Armor$Bullet$", "Bulletproof vest", "png", "Бронежилет", "Бронежилет", "final");
ELEMENTS.add("Caviar$Seaweed$", "Sushi", "png", "Суші", "Суши", "final");
ELEMENTS.add("Bone$Chicken$", "Chicken wing", "png", "Куряче крило", "Куриное крыло", "final");
ELEMENTS.add("Cloud$Livestock$", "Sheep", "png", "Вівця", "Овца");
ELEMENTS.add("Computer$Computer$", "Internet", "png", "Інтернет", "Интернет", "final");
ELEMENTS.add("City$Dinosaur$", "Godzilla", "png", "Годзілла", "Годзилла", "final");
ELEMENTS.add("Dinosaur$Earth$", "Fossil", "png", "Викопне", "Ископаемое");
ELEMENTS.add("Earth$Space$", "Planet", "png", "Планета", "Планета");
ELEMENTS.add("Energy$Snow$", "Avalanche", "png", "Лавина", "Лавина", "final");
ELEMENTS.add("Engineer$Mountain$", "Tunnel", "png", "Тунель", "Тунель", "final");
ELEMENTS.add("Field$Fruit$", "Vegetable", "png", "Овочі", "Овощи");
ELEMENTS.add("Fire$Wood$", "Campfire", "png", "Багаття", "Костер");
ELEMENTS.add("Bird$Fish$", "Flying fish", "png", "Летюча риба", "Летучая рыба", "final");
ELEMENTS.add("Blood$Fish$", "Piranha", "png", "Піранья", "Пиранья", "final");
ELEMENTS.add("Electricity$Fish$", "Electric eel", "png", "Електричний вугор", "Электрический угорь", "final");
ELEMENTS.add("Fish$Sword$", "Swordfish", "png", "Риба меч", "Рыба-меч", "final");
ELEMENTS.add("Forest$Life$", "Wild animal", "png", "Дика тварина", "Дикое животное");
ELEMENTS.add("Blender$Fruit$", "Smoothie", "png", "Смузі", "Смузи", "final");
ELEMENTS.add("Energy$Fruit$", "Sugar", "png", "Цукор", "Сахар");
ELEMENTS.add("Fruit$Time$", "Alcohol", "png", "Алкоголь", "Алкоголь");
ELEMENTS.add("Fruit$Tree$", "Fruit tree", "png", "Фруктове дерево", "Фруктовое дерево");
ELEMENTS.add("Fruit$Water$", "Lemonade", "png", "Лимонад", "Лимонад", "final");
ELEMENTS.add("Garden$Statue$", "Gnome", "png", "Гном", "Гном", "final");
ELEMENTS.add("Glasses$Snow$", "Ski goggles", "png", "Лижні окуляри", "Лыжные очки", "final");
ELEMENTS.add("Grass$Livestock$", "Cow", "png", "Корова", "Корова");
ELEMENTS.add("Grave$Grave$", "Graveyard", "png", "Кладовище", "Кладбище");
ELEMENTS.add("Grave$Stone$", "Gravestone", "png", "Надгробок", "Надгробие", "final");
ELEMENTS.add("Hay$Livestock$", "Horse", "png", "Кінь", "Лошадь");
ELEMENTS.add("House$Ice$", "Igloo", "png", "Голку", "Иглу", "final");
ELEMENTS.add("Armor$Human$", "Knight", "png", "Лицар", "Рыцарь");
ELEMENTS.add("Christmas tree$Human$", "Santa", "png", "Санта", "Санта");
ELEMENTS.add("Fish$Human$", "Mermaid", "png", "Русалка", "Русалка", "final");
ELEMENTS.add("Hospital$Human$", "Doctor", "png", "Доктор", "Доктор");
ELEMENTS.add("Cloud$Ice$", "Hail", "png", "Град", "Град", "final");
ELEMENTS.add("Desert$Ice$", "Antarctica", "png", "Антарктида", "Антарктида");
ELEMENTS.add("Ice$Mountain$", "Glacier", "png", "Льодовик", "Ледник", "final");
ELEMENTS.add("Fire$Jedi$", "Darth vader", "png", "Дарт Вейдер", "Дарт Вейдер", "final");
ELEMENTS.add("Jedi$Swamp$", "Yoda", "png", "Майстер Йода", "Мастер Йода", "final");
ELEMENTS.add("Life$Space$", "Alien", "png", "Інопланетянин", "Инопланетянин");
ELEMENTS.add("Desert$Livestock$", "Camel", "png", "Верблюд", "Верблюд", "final");
ELEMENTS.add("Livestock$Mountain$", "Goat", "png", "Козел", "Козел");
ELEMENTS.add("Livestock$Mud$", "Pig", "png", "Свиня", "Свинья");
ELEMENTS.add("Metal$Wood$", "Hammer", "png", "Молоток", "Молоток", "final");
ELEMENTS.add("Ice$Ocean$", "Iceberg", "png", "Айсберг", "Айсберг");
ELEMENTS.add("Fruit$Palm$", "Coconut", "png", "Кокос", "Кокос");
ELEMENTS.add("Pilot$Umbrella$", "Parachute", "png", "Парашут", "Парашют", "final");
ELEMENTS.add("Fruit$Pressure$", "Juice", "png", "Сік", "Сок");
ELEMENTS.add("Rain$Smog$", "Acid rain", "png", "Кислотний дощ", "Кислотный дождь", "final");
ELEMENTS.add("Human$Shuriken$", "Ninja", "png", "Ніндзя", "Ниндзя", "final");
ELEMENTS.add("Crystal ball$Snow$", "Snow globe", "png", "Крижана куля", "Ледяной шар", "final");
ELEMENTS.add("Human$Snow$", "Snowman", "png", "Сніговик", "Снеговик");
ELEMENTS.add("Snow$Snow$", "Blizzard", "png", "Заметіль", "Метель", "final");
ELEMENTS.add("Snow$Surfer$", "Snowboard", "png", "Сноуборд", "Сноуборд");
ELEMENTS.add("House$Space$", "Space station", "png", "Космічна станція", "Космическая станция", "final");
ELEMENTS.add("Statue$Water$", "Fountain", "png", "Фонтан", "Фонтан", "final");
ELEMENTS.add("Steam engine$Water$", "Steamboat", "png", "Пароплав", "Пароход");
ELEMENTS.add("Space$Stone$", "Meteoroid", "png", "Метеороід", "Метеороид");
ELEMENTS.add("Ice$Sun$", "Puddle", "png", "Калюжа", "Лужа", "final");
ELEMENTS.add("Thread$Thread$", "Rope", "png", "Мотузка", "Веревка", "final");
ELEMENTS.add("Thread$Tool$", "Fabric", "png", "Тканина", "Ткань");
ELEMENTS.add("Tobacco$Wood$", "Pipe", "png", "Трубка", "Трубка");
ELEMENTS.add("Fish$Tool$", "Fishing rod", "png", "Вудка", "Удочка");
ELEMENTS.add("Tool$Wood$", "Wheel", "png", "Рульове колесо", "Рулевое колесо");
ELEMENTS.add("Wall$Wood$", "Fence", "png", "Забір", "Забор");
ELEMENTS.add("Chicken$Water$", "Chicken soup", "png", "Курячий суп", "Куриный суп", "final");
ELEMENTS.add("Leaf$Water$", "Tea", "png", "Чай", "Чай");
ELEMENTS.add("Water$Wood$", "Boat", "png", "Човен", "Лодка");
ELEMENTS.add("Stone$Wheat$", "Flour", "png", "Борошно", "Мука");
ELEMENTS.add("Wizard$Wood$", "Wand", "png", "Паличка", "Палочка", "final");
ELEMENTS.add("Charcoal$Wood$", "Pencil", "png", "Олівець", "Карандаш");
ELEMENTS.add("Corpse$Wood$", "Coffin", "png", "Труну", "Гроб", "final");
ELEMENTS.add("Hay$Wood$", "Broom", "png", "Мітла", "Метла");
ELEMENTS.add("House$Wood$", "Log cabin", "png", "Дерев'яний будиночок", "Бревенчатый домик", "final");
ELEMENTS.add("Life$Wood$", "Pinocchio", "png", "Піноккіо", "Пиноккио", "final");
ELEMENTS.add("Pressure$Wood$", "Paper", "png", "Папір", "Бумага");
ELEMENTS.add("Wind$Wood$", "Flute", "png", "Флейта", "Флейта", "final");
ELEMENTS.add("Airplane$Alien$", "Ufo", "png", "НЛО", "НЛО", "final");
ELEMENTS.add("Airplane$Paper$", "Paper airplane", "png", "Паперовий літачок", "Бумажный самолетик", "final");
ELEMENTS.add("Alcohol$Wheat$", "Beer", "png", "Пиво", "Пиво", "final");
ELEMENTS.add("Antarctica$Atmosphere$", "Aurora", "png", "Аврора", "Аврора", "final");
ELEMENTS.add("Axe$Electricity$", "Chainsaw", "png", "Бензопила", "Бензопила", "final");
ELEMENTS.add("Axe$Human$", "Lumberjack", "png", "Дроворуб", "Дровосек", "final");
ELEMENTS.add("Bird$Paper$", "Origami", "png", "Орігамі", "Оригами", "final");
ELEMENTS.add("Blade$Pencil$", "Pencil sharpener", "png", "Точилка", "Точилка", "final");
ELEMENTS.add("Blood$Fabric$", "Bandage", "png", "Пов'язка", "Повязка", "final");
ELEMENTS.add("Boat$Fabric$", "Sailboat", "png", "Вітрильний човен", "Парусная лодка");
ELEMENTS.add("Brick$Campfire$", "Fireplace", "png", "Камін", "Камин");
ELEMENTS.add("Campfire$Garden$", "Bbq", "png", "Барбекю", "Барбекю", "final");
ELEMENTS.add("Chicken$Wild animal$", "Fox", "png", "Лисиця", "Лиса", "final");
ELEMENTS.add("Coconut$Tool$", "Coconut milk", "png", "Кокосове молоко", "Кокосовое молоко", "final");
ELEMENTS.add("Cold$Tea$", "Iced tea", "png", "Чай з льодом", "Чай со льдом", "final");
ELEMENTS.add("Blade$Cow$", "Leather", "png", "Шкіра", "Кожа");
ELEMENTS.add("Cow$Human$", "Milk", "png", "Молоко", "Молоко");
ELEMENTS.add("Cow$Sea$", "Manatee", "png", "Ламантин", "Ламантин", "final");
ELEMENTS.add("Broom$Electricity$", "Vacuum cleaner", "png", "Порохотяг", "Пылесос");
ELEMENTS.add("Field$Fruit tree$", "Orchard", "png", "Фруктовий сад", "Фруктовый сад", "final");
ELEMENTS.add("Cow$Fire$", "Steak", "png", "Стейк", "Стейк", "final");
ELEMENTS.add("Fish$Horse$", "Seahorse", "png", "Коник", "Конек", "final");
ELEMENTS.add("Egg$Flour$", "Pasta", "png", "Макарони", "Макароны");
ELEMENTS.add("Flour$Paper$", "Recipe", "png", "Рецепт", "Рецепт", "final");
ELEMENTS.add("Flower$Wild animal$", "Bee", "png", "Бджола", "Пчела");
ELEMENTS.add("Fossil$Pressure$", "Petroleum", "png", "Нафта", "Нефть", "final");
ELEMENTS.add("Alcohol$Fruit$", "Wine", "png", "Вино", "Вино", "final");
ELEMENTS.add("Goat$Human$", "Faun", "png", "Фавн", "Фавн", "final");
ELEMENTS.add("Goat$Mountain range$", "Mountain goat", "png", "Гірський козел", "Горный козел", "final");
ELEMENTS.add("Grass$Wild animal$", "Ant", "png", "Мураха", "Муравей", "final");
ELEMENTS.add("Graveyard$Night$", "Ghost", "png", "Дух", "Дух", "final");
ELEMENTS.add("Horse$Human$", "Centaur", "png", "Кентавр", "Кентавр", "final");
ELEMENTS.add("Horse$River$", "Hippo", "png", "Гіпопотам", "Гиппопотам", "final");
ELEMENTS.add("Horse$Wood$", "Trojan horse", "png", "Троянський кінь", "Троянский конь", "final");
ELEMENTS.add("House$Knight$", "Castle", "png", "Замок", "Замок");
ELEMENTS.add("Alcohol$Human$", "Drunk", "png", "П'яний", "Пьяный", "final");
ELEMENTS.add("Boat$Human$", "Sailor", "png", "Моряк", "Моряк");
ELEMENTS.add("Broom$Human$", "Witch", "png", "Відьма", "Ведьма", "final");
ELEMENTS.add("Campfire$Human$", "Story", "png", "Історія", "История");
ELEMENTS.add("Fishing rod$Human$", "Angler", "png", "Морський рис", "Морской черт", "final");
ELEMENTS.add("Flour$Human$", "Baker", "png", "Пекар", "Пекарь");
ELEMENTS.add("Human$Meat$", "Butcher", "png", "М'ясник", "Мясник", "final");
ELEMENTS.add("Cold$Juice$", "Popsicle", "png", "Ескімо", "Эскимо", "final");
ELEMENTS.add("Juice$Sugar$", "Jam", "png", "Варення", "Варенье", "final");
ELEMENTS.add("Dragon$Knight$", "Hero", "png", "Герой", "Герой", "final");
ELEMENTS.add("Fence$Leaf$", "Hedge", "png", "Жива огорожа", "Живая изгородь", "final");
ELEMENTS.add("Livestock$Santa$", "Reindeer", "png", "Північний олень", "Северный олень", "final");
ELEMENTS.add("Dinosaur$Meat$", "Tyrannosaurus rex", "png", "Тиранозавр Рекс", "Тиранозавр Рекс", "final");
ELEMENTS.add("Meat$Salt$", "Jerky", "png", "Солонина", "Солонина", "final");
ELEMENTS.add("Meat$Smoke$", "Ham", "png", "Шинка", "Ветчина", "final");
ELEMENTS.add("Horse$Metal$", "Horseshoe", "png", "Підкова", "Подкова", "final");
ELEMENTS.add("Atmosphere$Meteoroid$", "Meteor", "png", "Метеор", "Метеор", "final");
ELEMENTS.add("Mountain$Sheep$", "Alpaca", "png", "Альпака", "Альпака", "final");
ELEMENTS.add("Oil$Vegetable$", "French fries", "png", "Картопля фрі", "Картофель фри", "final");
ELEMENTS.add("Blade$Paper$", "Confetti", "png", "Конфетті", "Конфетти", "final");
ELEMENTS.add("Computer$Paper$", "Printer", "png", "Принтер", "Принтер", "final");
ELEMENTS.add("Earth$Paper$", "Map", "png", "Карта", "Карта");
ELEMENTS.add("Gold$Paper$", "Money", "png", "Гроші", "Деньги", "final");
ELEMENTS.add("Music$Paper$", "Sheet music", "png", "Ноти", "Ноты", "final");
ELEMENTS.add("Paper$Paper$", "Newspaper", "png", "Газета", "Газета", "final");
ELEMENTS.add("Paper$Pencil$", "Letter", "png", "Лист", "Письмо");
ELEMENTS.add("Paper$Wood$", "Book", "png", "Книга", "Книга", "final");
ELEMENTS.add("Fire$Pig$", "Bacon", "png", "Бекон", "Бекон");
ELEMENTS.add("Forest$Pig$", "Wild boar", "png", "Дикий кабан", "Дикий кабан", "final");
ELEMENTS.add("Pig$Pottery$", "Piggy bank", "png", "Скарбничка", "Копилка", "final");
ELEMENTS.add("Pencil$Rainbow$", "Crayon", "png", "Пастель", "Пастель", "final");
ELEMENTS.add("Planet$Rust$", "Mars", "png", "Марс", "Марс", "final");
ELEMENTS.add("Paper$Sand$", "Sandpaper", "png", "Наждачка", "Наждачка", "final");
ELEMENTS.add("Christmas tree$Santa$", "Gift", "png", "Подарунок", "Подарок");
ELEMENTS.add("Scissors$Sheep$", "Wool", "png", "Вовна", "Шерсть");
ELEMENTS.add("Paper$Sky$", "Kite", "png", "Повітряний змій", "Воздушный змей", "final");
ELEMENTS.add("Snowboard$Wheel$", "Skateboard", "png", "Скейтборд", "Скейтборд", "final");
ELEMENTS.add("Snowman$Vegetable$", "Carrot", "png", "Морква", "Морковь", "final");
ELEMENTS.add("Iceberg$Steamboat$", "Titanic", "png", "Титанік", "Титаник", "final");
ELEMENTS.add("Campfire$Sugar$", "Marshmallows", "png", "Зефір", "Зефир", "final");
ELEMENTS.add("Christmas tree$Sugar$", "Candy cane", "png", "цукерка", "Конфета", "final");
ELEMENTS.add("Fire$Sugar$", "Caramel", "png", "Карамель", "Карамель", "final");
ELEMENTS.add("Planet$Sun$", "Solar system", "png", "Сонячна система", "Солнечная система", "final");
ELEMENTS.add("Paper$Tobacco$", "Cigarette", "png", "Сигарети", "Сигареты", "final");
ELEMENTS.add("Doctor$Tool$", "Stethoscope", "png", "Стетоскоп", "Стетоскоп", "final");
ELEMENTS.add("Tree$Wild animal$", "Monkey", "png", "Мавпа", "Обезьяна");
ELEMENTS.add("Fire$Vegetable$", "Pumpkin", "png", "Гарбуз", "Тыква");
ELEMENTS.add("Flour$Water$", "Dough", "png", "Тісто", "Тесто");
ELEMENTS.add("Pipe$Water$", "Water pipe", "png", "Водопровідна труба", "Водопроводная труба", "final");
ELEMENTS.add("Metal$Wheel$", "Car", "png", "Машина", "Машина");
ELEMENTS.add("Wheel$Wheel$", "Bicycle", "png", "Велосипед", "Велосипед");
ELEMENTS.add("Wheel$Wood$", "Cart", "png", "Візок", "Тележка");
ELEMENTS.add("Armor$Wild animal$", "Armadillo", "png", "Броненосець", "Броненосец", "final");
ELEMENTS.add("Dam$Wild animal$", "Beaver", "png", "Бобер", "Бобер");
ELEMENTS.add("Dune$Wild animal$", "Scorpion", "png", "Скорпіон", "Скорпион", "final");
ELEMENTS.add("Human$Wild animal$", "Dog", "png", "Собака", "Собака");
ELEMENTS.add("Moon$Wild animal$", "Wolf", "png", "Вовк", "Волк");
ELEMENTS.add("Pond$Wild animal$", "Frog", "png", "Жаба", "Лягушка", "final");
ELEMENTS.add("Thread$Wild animal$", "Spider", "png", "Павук", "Паук");
ELEMENTS.add("Time$Wild animal$", "Sloth", "png", "Лінивий", "Ленивец", "final");
ELEMENTS.add("Wild animal$Wire$", "Snake", "png", "Змія", "Змея");
ELEMENTS.add("Knight$Windmill$", "Don quixote", "png", "Дон Кіхот", "Дон Кихот", "final");
ELEMENTS.add("Pencil$Wood$", "Ruler", "png", "Правитель", "Правитель", "final");
ELEMENTS.add("Beaver$Duck$", "Platypus", "png", "Качконіс", "Утконос", "final");
ELEMENTS.add("Bee$Flower$", "Honey", "png", "Мед", "Мед", "final");
ELEMENTS.add("Bee$House$", "Beehive", "png", "Вулик", "Улей");
ELEMENTS.add("Bicycle$Energy$", "Motorcycle", "png", "Мотоцикл", "Мотоцикл", "final");
ELEMENTS.add("Bicycle$Human$", "Cyclist", "png", "Велосипедист", "Велосипедист", "final");
ELEMENTS.add("Blade$Pumpkin$", "Jack-o'-lantern", "png", "Гарбуз-ліхтар", "Тыква-фонарь", "final");
ELEMENTS.add("Armor$Car$", "Tank", "png", "Танк", "Танк", "final");
ELEMENTS.add("Car$Car$", "Bus", "png", "Автобус", "Автобус", "final");
ELEMENTS.add("Car$Electricity$", "Electric car", "png", "Електромобіль", "Электромобиль", "final");
ELEMENTS.add("Cart$Horse$", "Wagon", "png", "Вагон", "Вагон", "final");
ELEMENTS.add("Car$Doctor$", "Ambulance", "png", "Швидка", "Скорая", "final");
ELEMENTS.add("Dog$House$", "Doghouse", "png", "Собача будка", "Собачья будка", "final");
ELEMENTS.add("Dog$Sea$", "Seal", "png", "Печатка", "Печать", "final");
ELEMENTS.add("Dough$Fire$", "Bread", "png", "Хліб", "Хлеб");
ELEMENTS.add("Dough$Fruit$", "Pie", "png", "Пиріг", "Пирог", "final");
ELEMENTS.add("Dough$Oil$", "Donut", "png", "Пончик", "Пончик", "final");
ELEMENTS.add("Dough$Sugar$", "Cookie", "png", "Печиво", "Печенье");
ELEMENTS.add("Dragon$Story$", "Fairy tale", "png", "Казка", "Сказка", "final");
ELEMENTS.add("Energy$Milk$", "Butter", "png", "Олія", "Масло", "final");
ELEMENTS.add("Car$Farmer$", "Tractor", "png", "Трактор", "Трактор", "final");
ELEMENTS.add("Car$Fireman$", "Firetruck", "png", "Пожежна", "Пожарная", "final");
ELEMENTS.add("Fruit$Monkey$", "Banana", "png", "Банан", "Банан");
ELEMENTS.add("Gift$Paper$", "Wrapping paper", "png", "Обгортковий папір", "Оберточная бумага", "final");
ELEMENTS.add("Castle$Gunpowder$", "Cannon", "png", "Гармата", "Пушка", "final");
ELEMENTS.add("Horse$Leather$", "Saddle", "png", "Сідло", "Седло", "final");
ELEMENTS.add("Baker$House$", "Bakery", "png", "Булочна", "Булочная", "final");
ELEMENTS.add("Car$House$", "Rv", "png", "Будинок на колесах", "Дом на колесах", "final");
ELEMENTS.add("Dough$House$", "Gingerbread house", "png", "Пряниковий будиночок", "Пряничный домик", "final");
ELEMENTS.add("Human$Letter$", "Mailman", "png", "Листоноша", "Почтальон", "final");//
ELEMENTS.add("Human$Snake$", "Medusa", "png", "Медуза Горгона", "Медуза Горгона", "final");//
ELEMENTS.add("Human$Wool$", "Sweater", "png", "Светр", "Свитер", "final");//
ELEMENTS.add("Dog$Ice$", "Husky", "png", "Хаскі", "Хаски", "final");//
ELEMENTS.add("Computer$Letter$", "Email", "png", "Імейл", "Имейл", "final");//
ELEMENTS.add("Dough$Life$", "Gingerbread man", "png", "Пряниковий чоловічок", "Пряничный человечек", "final");//
ELEMENTS.add("Bacteria$Milk$", "Yogurt", "png", "Йогурт", "Йогурт", "final");//
ELEMENTS.add("Cold$Milk$", "Ice cream", "png", "Морозиво", "Мороженое");//
ELEMENTS.add("Robot$Vacuum cleaner$", "Roomba", "png", "Робот пилосос", "Робот пылесос", "final");//
ELEMENTS.add("Sailboat$Wild animal$", "Rat", "png", "Щур", "Крыса", "final");//
ELEMENTS.add("Castle$Sand$", "Sand castle", "png", "Замок з піску", "Замок из песка", "final");//
ELEMENTS.add("Car$Snow$", "Snowmobile", "png", "Снігохід", "Снегоход", "final");//
ELEMENTS.add("Cart$Snow$", "Sledge", "png", "Сани", "Сани", "final");//
ELEMENTS.add("Spider$Thread$", "Web", "png", "Мережа", "Сеть", "final");//
ELEMENTS.add("Steel$Wool$", "Steel wool", "png", "Сталева вата", "Стальная вата", "final");//
ELEMENTS.add("Sailor$Sword$", "Pirate", "png", "Пірат", "Пират");//
ELEMENTS.add("Milk$Time$", "Cheese", "png", "Сир", "Сыр");//
ELEMENTS.add("Milk$Wheat$", "Cereal", "png", "Зерно", "Зерно", "final");//
ELEMENTS.add("Milk$Wild animal$", "Cat", "png", "Кіт", "Кот");//
ELEMENTS.add("Human$Wolf$", "Werewolf", "png", "Перевертень", "Оборотень", "final");//
ELEMENTS.add("Leather$Wood$", "Drum", "png", "Барабан", "Барабан", "final");//
ELEMENTS.add("Fireplace$Wool$", "Christmas stocking", "png", "Різдвяний панчіх", "Рождественский чулок", "final");//
ELEMENTS.add("Bee$Beehive$", "Wax", "png", "Віск", "Воск");//
ELEMENTS.add("Bird$Pirate$", "Parrot", "png", "Папуга", "Попугай", "final");//
ELEMENTS.add("Boat$Pirate$", "Pirate ship", "png", "Піратський корабель", "Пиратский корабль", "final");//
ELEMENTS.add("Bacon$Bread$", "Sandwich", "png", "Сендвіч", "Сэндвич");//
ELEMENTS.add("Banana$Bread$", "Banana bread", "png", "Банановий хліб", "Банановый хлеб", "final");//
ELEMENTS.add("Bread$Fire$", "Toast", "png", "Тост", "Тост");//
ELEMENTS.add("Car$Ice cream$", "Ice cream truck", "png", "Вантажівка морозива", "Грузовик мороженого", "final");//
ELEMENTS.add("Cat$Plant$", "Catnip", "png", "М'ята для котів", "Кошачья мята", "final");//
ELEMENTS.add("Cheese$Dough$", "Pizza", "png", "Піца", "Пицца", "final");//
ELEMENTS.add("Cheese$Pasta$", "Mac and cheese", "png", "Макарони з сиром", "Макароны с сыром", "final");//
ELEMENTS.add("Cheese$Wild animal$", "Mouse", "png", "Миша", "Мышь");//
ELEMENTS.add("Bread$Meat$", "Hamburger", "png", "Гамбургер", "Гамбургер");
ELEMENTS.add("Cheese$Metal$", "Mousetrap", "png", "Мишоловка", "Мышеловка", "final");//
ELEMENTS.add("Ice cream$Milk$", "Milk shake", "png", "Молочний коктейль", "Молочный коктейль", "final");//
ELEMENTS.add("Cookie$Paper$", "Fortune cookie", "png", "Печиво з передбаченням", "Печенье с предсказанием", "final");//
ELEMENTS.add("Map$Pirate$", "Treasure map", "png", "Мапа скарбів", "Карта сокровищ");//
ELEMENTS.add("Bread$Time$", "Mold", "png", "Форма", "Форма");//
ELEMENTS.add("Cat$Wild animal$", "Lion", "png", "Лев", "Лев");//
ELEMENTS.add("Beach$Sandwich$", "Picnic", "png", "Пікнік", "Пикник", "final");//
ELEMENTS.add("Cheese$Hamburger$", "Cheeseburger", "png", "Чізбургер", "Чизбургер", "final");//
ELEMENTS.add("Cheese$Toast$", "Grilled cheese", "png", "Смажений сир", "Жареный сыр", "final");//
ELEMENTS.add("Doctor$Mold$", "Penicillin", "png", "Пеніцилін", "Пенициллин", "final");//
ELEMENTS.add("Human$Lion$", "Sphinx", "png", "Сфінкс", "Сфинкс", "final");//
ELEMENTS.add("Bird$Mouse$", "Bat", "png", "Кажан", "Летучая мышь");//
ELEMENTS.add("Computer$Mouse$", "Computer mouse", "png", "Комп'ютерна мишка", "Компьютерная мышь", "final");//
ELEMENTS.add("Mouse$Tree$", "Squirrel", "png", "Білка", "Белка");//
ELEMENTS.add("Pirate$Treasure map$", "Treasure", "png", "Скарб", "Сокровище", "final");//
ELEMENTS.add("Fire$Wax$", "Candle", "png", "Свічка", "Свеча");//
ELEMENTS.add("Mouse$Wheel$", "Hamster", "png", "Хом'як", "Хомяк", "final");//
ELEMENTS.add("Bat$Human$", "Batman", "png", "Бетмен", "Бэтмен", "final");//
ELEMENTS.add("Candle$Dough$", "Cake", "png", "Торт", "Торт", "final");//
ELEMENTS.add("Sky$Squirrel$", "Flying squirrel", "png", "Білка летяга", "Белка-летяга", "final");

export default ELEMENTS;
