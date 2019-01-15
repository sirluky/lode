export default class Ship {
  /**
   * @type urcuje typ lodi: small,medium,tank
   * @pos urcuje zakladni pozici lodi, pokud je to nutne (pouzivame 1 Dimenzionalni pozice):
   * "[1][2]"
   * "[3][4]..."
   * @id urcuje o jakou konkretni lod se rovna, umozni v budoucnu vice modu

   */
  constructor(type, pos, id) {
    this.type = type;
    this.pos = pos;
    this.dshape = "small";
    this.id = id;
  }
}
