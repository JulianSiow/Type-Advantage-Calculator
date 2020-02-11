class Pokemon {
  constructor(name, typing, moveTypes){
    this.name = name;
    this.typing = typing;
    this.moveTypes = moveTypes;
  }
}

class Type {
  constructor(weakness, resistance, noEffect){
    this.weakness = weakness,
    this.resistance = resistance,
    this.noEffect = noEffect
  }
}

//SECTION  Types

const bug = new Type(
  [],
  [fighting],
  [ghost]
);

const fighting = new Type(
  [flying, psychic, fairy],
  [rock, bug, dark],
  []
);

const flying = new Type(
  [rock, electric, ice],
  [fighting, bug, grass],
  [ground]
);

const poison = new Type(
  [ground, psychic],
  [fighting, poison, bug, grass, fairy],
  []
);

const ground = new Type(
  [water, grass, ice],
  [poison, rock],
  [electric]
);

const rock = new Type(
  [fighting, ground, steel, water, grass],
  [normal, flying, poison, fire],
  []
);

const bug = new Type(
  [flying, rock, fire],
  [fighting, ground, grass],
  []
);

const ghost = new Type(
  [ghost, dark],
  [poison, bug],
  [normal, fighting]
);

const steel = new Type(
  [fighting, ground, fire],
  [normal, flying, rock, bug, steel, grass, psychic, ice, dragon, fairy],
  [poison]
);

const fire = new Type(
  [ground, rock, water],
  [bug, steel, fire, grass, ice, fairy],
  []
);

const water = new Type(
  [grass, electric],
  [steel, fire, water, ice],
  []
);

const grass = new Type(
  [flying, poison, bug, fire, ice],
  [ground, water, grass, electric],
  []
);

const electric = new Type(
  [ground],
  [flying, steel, electric],
  []
);

const psychic = new Type(
  [bug, ghost, dark],
  [fighting, psychic],
  []
);

const ice = new Type(
  [fighting, rock, steel, fire],
  [ice],
  []
);

const dragon = new Type(
  [ice, dragon, fairy],
  [fire, water, grass, electric],
  []
);

const dark = new Type(
  [fighting, bug, fairy],
  [ghost, dark],
  [psychic]
);

const fairy = new Type(
  [poison, steel],
  [fighting, bug, dark],
  [dragon]
);

//SECTION Pokemon Creation

