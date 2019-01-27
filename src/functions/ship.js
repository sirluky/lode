import { ShipTypes } from "../assets/index";
import { rotateGrid, placeShip } from "../functions/functions";

/**
   * @type urcuje typ lodi: small,medium,tank
   * @pos urcuje zakladni pozici lodi, pokud je to nutne (pouzivame 1 Dimenzionalni pozice):
   * "[1][2]"
   * "[3][4]..."
   * @id urcuje o jakou konkretni lod se rovna, umozni v budoucnu vice modu

   */
export default class Ship {
  constructor(type, pos, id) {
    this.type = type;
    this.pos = pos;
    this.touchedPos = pos + 11;
    this.dmodel = ShipTypes[type].model;
    this.cmodel = this.dmodel;
    this.id = id;
    this.hp = ShipTypes.hp;
    this.rotation = 1;
    this.prev = { rotation: 1, pos: pos + 11 };
  }
  setRotation(r) {
    this.rotation = r;
    this.cmodel = rotateGrid(this.dmodel, this.rotation);
  }
  rotateBy(r) {
    this.rotation = (this.rotation + r) % 5;
    if (this.rotation <= 0) {
      this.rotation = 4;
    }
    this.cmodel = rotateGrid(this.dmodel, this.rotation);
  }
  setPos(pos, arr) {
    this.prev.pos = this["pos"];
    this.pos = pos;
    if (arr !== undefined) {
      return placeShip(arr, 10, this);
    }
  }
}
