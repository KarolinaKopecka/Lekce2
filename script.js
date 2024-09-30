/*Jeden lístek do divadla Pěst na oko stojí 12 euro. 
Spočítejte měsíční příjem divadla ze vstupného, 
přichází-li průměrně 174 návštěvníků na jedno představení 
a divadlo hraje 15 představení měsíčně. Uložte výsledek do proměnné prijem. 
Hodnotu proměnné prijem vypište do stránky. Divadlo se rozhodlo prodávat
 studentské vstupné ve výši 65 % plného vstupného. 
 Jak se změní měsíční příjem divadla pokud víme, že 40 % návštěvníků jsou studenti? 
 Vypište do stránky i příjem divadla se započítanou slevou pro studenty.
let cena = 12 */

const cena = 12
const pocetdenne = 174
const pocetpredstaveni = 15
let prijem = cena * pocetdenne * pocetpredstaveni

let prijemStudenti = prijem * 0.4 * 0.65 
let prijemDospeli = prijem * 0.6
let prijemposleve = prijemDospeli + prijemStudenti

document.body.innerHTML += "<p> Měsíční příjem divadla je " +  prijem + " Kč</p> "
document.body.innerHTML += "<p> Měsíční příjem divadla je se slevami " +  prijemposleve + " Kč</p> "
