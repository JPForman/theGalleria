export class ChuckString {
  constructor (chuckSponse) {
    this.chuckSponse1 = this.chuckString(chuckSponse.value[0].joke),
    this.chuckSponse2 = this.chuckString(chuckSponse.value[1].joke),
    this.chuckSponse3 = this.chuckString(chuckSponse.value[2].joke)
  }

  chuckString(fixedString) {
    while (fixedString.includes("&quot;")) {
      fixedString = fixedString.replace("&quot;", `"`);
    }
    return fixedString;
  }
}
