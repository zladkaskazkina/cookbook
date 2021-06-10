import React, { useEffect, useState } from "react";

import Layout from "../components/layout";
import Recipe from "../models/recipe";
import RecipeList from "../components/recipeList";

export const initialRecipesList = [
  {
    id: 1616017111148,
    author: "admin",
    category: "starter",
    temperature: "cold",
    name: "Jemný domácí hummus",
    portions: 8,
    ingredients: [
      { name: "cizrna vařená", quantity: { measure: "g", amount: 500 } },
      { name: "bílá pasta tahini", quantity: { measure: "lžíce", amount: 2 } },
      { name: "voda", quantity: { measure: "ml", amount: 70 } },
      { name: "olivový olej", quantity: { measure: "ml", amount: 120 } },
      { name: "mletý římský kmín", quantity: { measure: "lžíčka", amount: 1 } },
      { name: "červená paprika", quantity: { measure: "lžíčka", amount: 1 } },
      { name: "sůl", quantity: { measure: "lžíčka", amount: 1 } },
      { name: "česnek", quantity: { measure: "stroužky", amount: 2 } },
      { name: "citronová štáva", quantity: { measure: "ml", amount: 60 } },
      {
        name: "pražená piniová semínka",
        quantity: { measure: "hrst", amount: 1 },
      },
      { name: "pepř mletý", quantity: { measure: "", amount: "" } },
    ],
    method:
      "Cizrnu přidejte do mixéru, přilijte veškeré tekutiny (ale jen 100 ml oleje), přidejte tahini, kmín, červenou papriku a česnek.\n" +
      "\n" +
      "Dohladka rozmixujte (vody bude třeba dát tolik, jak už jsme si psali, ona každá uvařená cizrna totiž trošičku jinak nabyde)\n" +
      "\n" +
      "Hladkou pomazánku dejte do mísy, zalijte ji ještě kapkou oleje a zasypte piniovými semínky.\n",
    preparationTime: 20,
    photoSrc: "/assets/hummus.jpg",
  },
  {
    id: 1616017111149,
    author: "admin",
    category: "starter",
    temperature: "hot",
    name: "Ratatouille",
    portions: 4,
    ingredients: [
      { name: "lilek", quantity: { measure: "ks", amount: 1 } },
      { name: "cuketa", quantity: { measure: "ks", amount: 2 } },
      { name: "rajčata", quantity: { measure: "ks", amount: 5 } },
      { name: "paprika červená", quantity: { measure: "ks", amount: 1 } },
      { name: "paprika žlutá", quantity: { measure: "ks", amount: 1 } },
      { name: "cibule", quantity: { measure: "ks", amount: 1 } },
      { name: "sůl", quantity: { measure: "", amount: "" } },
      { name: "česnek", quantity: { measure: "stroužky", amount: 3 } },
      { name: "pepř mletý", quantity: { measure: "", amount: "" } },
      { name: "čerstvé oregano", quantity: { measure: "hrst", amount: 1 } },
      { name: "olej rostlinný", quantity: { measure: "", amount: "" } },
    ],
    method:
      "Pokud máte čas a náladu, tak dáme papriky na plech a strčíme na 15 minut do trouby, po 15 minutách přidáme cibuli na čtvrtky a česnek. Vrátíme do trouby na dalších 15 minut. Poté vyndáme, oloupeme papriky, cibuli i česnek a hodíme do mixéru. Ale já tento krok přeskočila a na chuti to neubralo.\n" +
      "\n" +
      "Připravíme si dvě misky, do jedné nalijeme ledovou vodu a přidáme led, do druhé vložíme rajčata, které na špičce hlavy nařízneme do kříže. Rajčata zalijeme vroucí vodou, necháme cca 30 sekund a pak přendáme do studené vody. Tímto postupem nám půjdou rajčata jednoduše sloupnout a krájet.\n" +
      "\n" +
      "Nakrájíme na tenké plátky jak rajčata, tak lilek i cukety.\n" +
      "\n" +
      "Velikostně by měly kolečka odpovídat, aby pak šly lépe skládat.\n" +
      "\n" +
      "Jestli nebudeme papriky péct, stačí nám je nakrájet společně s cibulkou na kostičky a osmahnout na másle či oleji. Jelikož se snažím minimalizovat odpad, tak i ořezky od cuket, lilku a rajčat (jako patičky) přihodíme na pánev, k tomu ještě nakrájíme česnek, podlijeme trochou vody, osolíme, opepříme a necháme změknout.\n" +
      "\n" +
      "Vše přendáme do mixéru a rozmixujeme dohladka. Je dobré přidat i trochu vody, aby ze směsi byl krém, ne kaše.\n" +
      "\n" +
      "Krém naliji na dno pekáče, ale ne všechen, jen tenkou vrstvu (ze zbytku krému bude recept k večeři )\n" +
      "\n" +
      "A pak už jen pokládáme plátky. Lilek, rajče, zelená a žlutá cuketa, pořád dokola.\n" +
      "\n" +
      "Na závěr už jen pokapeme olivovým oleje a posypeme čerstvým oregánem (může být i sušené) a zakryjeme pečícím papírem. Je dobré do středu papíru udělat malý otvor.\n" +
      "\n" +
      "Pečeme na 180°C asi 40 minut.\n" +
      "\n" +
      "Než podáváme, určitě posypeme dalším čerstvým oregánem.\n",
    preparationTime: 75,
    photoSrc: "/assets/ratatouille.jpg",
  },
  {
    id: 1616017111150,
    author: "admin",
    category: "starter",
    temperature: "cold",
    name: "Guacamole",
    portions: 4,
    ingredients: [
      { name: "zralé avokádo", quantity: { measure: "ks", amount: 1 } },
      { name: "citronová štáva", quantity: { measure: "ml", amount: 50 } },
      { name: "cherry rajče", quantity: { measure: "ks", amount: 4 } },
      {
        name: "jarní cibulka",
        quantity: { measure: "podle chuti", amount: "" },
      },
      { name: "chilli paprička", quantity: { measure: "ks", amount: 1 } },
      {
        name: "panenský olivový olej",
        quantity: { measure: "lžíce", amount: 1 },
      },
      { name: "sůl", quantity: { measure: "", amount: "" } },
      { name: "pepř mletý", quantity: { measure: "", amount: "" } },
    ],
    method:
      "Avokádo rozpulte, vyjměte pecku (nejlépe to jde tak, že do pecky zaseknete nůž a krouživým pohybem pecku vyndáte) a lžící vyberte dužinu. Dejte jí do misky nebo hmoždíře, přilijte trochu vylisované limetové nebo citronové šťávy a rozmačkejte na kaši. Pokud chcete, můžete přidat i lžíci olivového oleje.\n" +
      "\n" +
      "Jarní cibulku, cherry rajčata a chilli papriku nasekejte nadrobno a přidejte k rozmačkanému avokádu. Ochuťte špetkou soli a pepře a vše důkladně promíchejte.\n" +
      "\n" +
      "Hotovou salsu ochutnejte a podle vlastních preferencí případně dolaďte citronem/limetou, solí nebo pepřem.\n",
    preparationTime: 15,
    photoSrc: "/assets/guacamole.jpg",
  },
  {
    id: 1616017111151,
    author: "admin",
    category: "soup",
    name: "Dýňová polévka",
    portions: 4,
    ingredients: [
      { name: "dýně hokkaido", quantity: { measure: "g", amount: 800 } },
      { name: "mrkev", quantity: { measure: "g", amount: 200 } },
      { name: "petržel", quantity: { measure: "ks", amount: 2 } },
      { name: "velká cibule", quantity: { measure: "ks", amount: 1 } },
      { name: "máslo", quantity: { measure: "lžíce", amount: 1 } },
      { name: "česnek", quantity: { measure: "stroužky", amount: 3 } },
      { name: "kari koření", quantity: { measure: "", amount: "" } },
      { name: "dýňová semínka", quantity: { measure: "", amount: "" } },
      { name: "sůl", quantity: { measure: "", amount: "" } },
      { name: "pepř mletý", quantity: { measure: "", amount: "" } },
    ],
    method:
      "Dýni překrojíme na polovinu a pečeme ji 15-20 minut při 200 stupních doměkka.Po dopečení ji necháme vychladnout a následně ji oloupeme a vydlabeme z ní semínka.\nVe větším hrnci na rozpáleném oleji (nebo na másle) osmahneme nadrobno nakrájenou cibuli a prolisovaný česnek.Přidáme nakrájenou mrkev a petržel.\nLehce je osmahneme a poté přidáme i upečenou dýni nařezanou na menší kousky.\nZeleninu osolíme a opepříme podle chuti.Zeleninu zalijeme vodou tak, aby voda pokrývala obsah hrnce a polévku vaříme zhruba 15 minut, dokud zelenina nezměkne.\nNásledně polévku rozmixujeme tyčovým mixérem a v případě potřeby ještě dochutíme kořením.\nPolévku můžeme podávat posypanou nasucho opraženými dýňovými či jinými semínky.",
    preparationTime: 60,
    photoSrc: "/assets/hokkaidoSoup.jpg",
  },
  {
    id: 1616017111152,
    author: "admin",
    category: "soup",
    temperature: "hot",
    name: "Hrášková polévka",
    portions: 4,
    ingredients: [
      { name: "mražený hrášek", quantity: { measure: "g", amount: 450 } },
      { name: "zeleninový vývar", quantity: { measure: "ml", amount: 500 } },
      { name: "olivový olej", quantity: { measure: "lžička", amount: 1 } },
      { name: "sůl", quantity: { measure: "lžíčka", amount: 0.5 } },
      { name: "cibule", quantity: { measure: "ks", amount: 1 } },
    ],
    method:
      "Hrášek vyndáme z mrazáku alespoň 10 minut před přípravou polévky. V hrnci na rozpáleném oleji osmahneme nadrobno nasekanou cibuli dosklovata.\n" +
      "Cibuli zalijeme zeleninovým vývarem, případně vodou.\n" +
      "\n" +
      "Když začne vývar (nebo voda) vřít, přidáme do něj hrášek, lístky máty, osolíme, případně dokořeníme podle chuti.Polévku vaříme 3-4 minuty, hrášek se uvaří velmi rychle.\n" +
      "\n" +
      "Následně polévku na chvíli odstavíme z plotýnky, rozmixujeme ji mixérem (tyčovým nebo velkým) dohladka a pak ji ještě 1 minutu necháme přejít varem.\n" +
      "Polévku můžeme podávat ozdobenou bílým jogurtem.\n",
    preparationTime: 20,
    photoSrc: "/assets/peaSoup.jpg",
  },
  {
    id: 1616017111153,
    author: "admin",
    category: "soup",
    temperature: "hot",
    name: "Krémová česneková polévka",
    portions: 4,
    ingredients: [
      { name: "brambor", quantity: { measure: "ks", amount: 4 } },
      { name: "zeleninový vývar", quantity: { measure: "ml", amount: 800 } },
      { name: "mléko", quantity: { measure: "ml", amount: 200 } },
      { name: "máslo", quantity: { measure: "lžíce", amount: 2 } },
      { name: "cibule", quantity: { measure: "ks", amount: 1 } },
      { name: "pórek", quantity: { measure: "ks", amount: 1 } },
      { name: "sůl", quantity: { measure: "lžíčka", amount: 1 } },
      { name: "česnek", quantity: { measure: "hlavy", amount: 2 } },
      { name: "pepř mletý", quantity: { measure: "", amount: "" } },
    ],
    method:
      "V hrnci na rozpáleném oleji či másle orestujeme nadrobno nasekanou cibuli dosklovata.\n" +
      "Přidáme prolisované stroužky česneku a minutu je smažíme společně s cibulí.\n" +
      "\n" +
      "Následně přidáme koření, sůl a směs zalijeme zeleninovým vývarem a mlékem.\n" +
      "Do polévky vzápětí přihodíme i očištěné a nadrobno nakrájené brambory a necháme ji vařit kolem 15 minut, dokud brambory nezměknou.\n" +
      "\n" +
      "Nakonec polévku rozmixujeme tyčovým mixérem, případně můžeme použít i stojací mixér.\n" +
      "Polévku ještě necháme přejít varem.Česnečku můžeme podávat spolu s nasekaným pórkem a doplnit ji nasucho opečeným chlebíčkem.\n",
    preparationTime: 30,
    photoSrc: "/assets/garlicSoup.jpg",
  },
  {
    id: 1616017111154,
    author: "admin",
    category: "mainCourse",
    temperature: "hot",
    name: "Spaghetti aglio olio e peperoncino",
    portions: 4,
    ingredients: [
      { name: "sušené špagety", quantity: { measure: "g", amount: 500 } },
      { name: "olivový olej", quantity: { measure: "ml", amount: 60 } },
      { name: "chilli paprička", quantity: { measure: "ks", amount: 1 } },
      { name: "česnek", quantity: { measure: "stroužky", amount: 6 } },
      { name: "citronová štáva", quantity: { measure: "ml", amount: 60 } },
      { name: "petržel plocholistá", quantity: { measure: "hrst", amount: 1 } },
      { name: "parmazám strouhaný", quantity: { measure: "", amount: "" } },
    ],
    method:
      "Ve velkém hrnci vroucí osolené vody uvařte těstoviny al dente, trvá to přibližně 5–6 minut.\n" +
      "Mezitím ve velké pánvi ohřejte olej a jemně v něm osmažte chilli a česnek. Pozor, nesmí se připálit! Omáčka bude hotová za necelých 5 minut.\n" +
      "\n" +
      "Uvařené těstoviny vyndejte z vody pomocí kleštiček, vložte do omáčky a promíchejte. Není nutné přidávat sýr ani bylinky, ale pokud jinak nedáte, klidně použijte strouhaný parmazán a nasekanou hladkolistou petržel.\n",
    preparationTime: 25,
    photoSrc: "/assets/aglioOlio.jpg",
  },
  {
    id: 1616017111155,
    author: "admin",
    category: "mainCourse",
    temperature: "hot",
    name: "Pasta al pomodoro",
    portions: 2,
    ingredients: [
      {
        name: "kvalitní italské těstoviny",
        quantity: { measure: "g", amount: 200 },
      },
      {
        name: "extra panenský olivový olej",
        quantity: { measure: "lžíce", amount: 2 },
      },
      { name: "máslo", quantity: { measure: "lžíce", amount: 1 } },
      { name: "rajčata San Marzano", quantity: { measure: "g", amount: 300 } },
      { name: "česnek", quantity: { measure: "stroužky", amount: 2 } },
      {
        name: "hodně zralá cherry rajčata",
        quantity: { measure: "ks", amount: 10 },
      },
      { name: "bazalka", quantity: { measure: "hrst", amount: 1 } },
      { name: "parmazán", quantity: { measure: "lžíce", amount: "2" } },
    ],
    method:
      "Cherry rajčátka překrojte na polovinu. Parmazán nastrouhejte najemno. Bazalku nasekejte také najemno. Česnek oloupejte a trochu rozmáčkněte plochou stranou nože (pustí tak více chuti).Do velkého hrnce dejte vařit studenou vodu. Při vaření těstovin dodržujte 2 zásady – velké množství vody a soli.Pokud budete vařit pastu v malém množstvím vody, těstoviny se rozvaří. Zároveň je potřeba vodu osolit tak, aby byla slaná jako mořská voda.\n" +
      "\n" +
      "Těstoviny vložte do vroucí vody a vařte na skus. Zda jsou těstoviny al dente, poznáte tak, že mají uprostřed světlou tečku. Takto uvařené těstoviny mají mnohem nižší glykemický index a jsou tak pro tělo mnohem lépe stravitelné.\n" +
      "\n" +
      "Zatímco se vaří těstoviny, rozpalte pánev na vyšší stupeň, vlijte na ni olej a za okamžik přidejte česnek. Dejte pozor, aby se česnek nespálil, jeho úkolem je pouze ovonět olej.\n" +
      "Přidejte čerstvá rajčata a nechte asi 2 minutky restovat. Česnek vyndejte a vyhoďte, svou funkci již splnil. Přidejte omáčku/rajčata v konzervě, bazalku nasekanou najemno, osolte, opepřete a nechte ještě asi 5 minut probublávat, aby omáčka získala na síle.\n" +
      "\n" +
      "Sundejte z plotny. Nakonec přidejte máslo a zamíchejte, aby se vytvořila emulze. Vezměte kleště či pinzetu a přímo z hrnce i s trochou vody vhoďte těstoviny do pánve k omáčce.\n" +
      "Promíchejte a podávejte. Na talíři ozdobte bazalkou a čerstvě strouhaným parmazánem.\n",
    preparationTime: 30,
    photoSrc: "/assets/pomodoro.jpg",
  },
  {
    id: 1616017111156,
    author: "admin",
    category: "mainCourse",
    temperature: "hot",
    name: "Houbové rizoto",
    portions: 4,
    ingredients: [
      { name: "rýže carnarolli", quantity: { measure: "g", amount: 320 } },
      { name: "máslo", quantity: { measure: "g", amount: 150 } },
      { name: "olivový olej", quantity: { measure: "ml", amount: 50 } },
      { name: "cibule", quantity: { measure: "ks", amount: 1 } },
      { name: "sušené hříbky", quantity: { measure: "g", amount: 60 } },
      { name: "suché bílé víno", quantity: { measure: "ml", amount: 200 } },
      { name: "zeleninový vývar", quantity: { measure: "ml", amount: 1500 } },
      { name: "petržel plocholistá", quantity: { measure: "hrst", amount: 1 } },
      { name: "sůl", quantity: { measure: "", amount: "" } },
      { name: "parmazán", quantity: { measure: "lžíce", amount: "2" } },
    ],
    method:
      "Sušené houby nechte trochu nasát ve sklenici s horkou vodou. Na másle a oleji (ten přidávejte, aby máslo sneslo vyšší teplotu) lehce osmažte cibulku. Přidejte rýži carnarolli (na jednu porci postačí hrst rýže), promíchejte a podlijte sběračkou horkého zeleninového vývaru.\n" +
      "\n" +
      "Dále na řadu přijdou změklé houby. Vhoďte je do hrnce a vše zalijte suchým vínem. Opět za stálého míchání ustavičně vařte. Postupně přilévejte další vývar a nechte odpařit až do změknutí rýže „al dente“.\n" +
      "\n" +
      "Do rizota přidejte plátek másla, nastrouhaný parmazán a znovu míchejte až do okamžiku, kdy se rizoto promění v lahodný krém. Zdobte jej sekanou petrželkou a ihned podávejte.\n",
    preparationTime: 45,
    photoSrc: "/assets/risotto.jpg",
  },
  {
    id: 1616017111157,
    author: "admin",
    category: "salad",
    temperature: "cold",
    name: "Řecký salát",
    portions: 4,
    ingredients: [
      { name: "okurka", quantity: { measure: "ks", amount: 2 } },
      { name: "rajčata", quantity: { measure: "g", amount: 1000 } },
      { name: "cibule", quantity: { measure: "ks", amount: 2 } },
      { name: "olivový olej", quantity: { measure: "lžíce", amount: 4 } },
      { name: "sýr feta", quantity: { measure: "g", amount: 250 } },
      { name: "červená paprika", quantity: { measure: "ks", amount: 2 } },
      { name: "dobromysl sušená", quantity: { measure: "lžíčka", amount: 1 } },
    ],
    method:
      "Okurky nakrájejte na větší špalíčky, rajčata na čtvrtky nebo osminky, cibule rozkrojte na čtvrtky a poté ještě rozdělte na jednotlivé plátky. Papriky očistěte, ­odstraňte jádřince i bílé žebroví a nakrájejte je na větší kousky.\n" +
      "\n" +
      "Všechno dejte rovnou do té nádoby, v níž salát ponesete na piknik. Směs můžete mírně osolit – záleží na tom, jak slaný je sýr, který jste si vybrali.\n" +
      "\n" +
      "Zeleninu posypte rozemnutou dobromyslí. Sýr nakrájejte na plátky a naklaďte ho na zeleninu. Ještě ho také posypte dobromyslí, a pak už jen všechno vydatně zakapejte olivovým olejem.\n",
    preparationTime: 20,
    photoSrc: "/assets/greekSalad.jpg",
  },
  {
    id: 1616017111158,
    author: "admin",
    category: "salad",
    temperature: "cold",
    name: "Salát Caprese",
    portions: 2,
    ingredients: [
      { name: "mozzarella di bufala", quantity: { measure: "ks", amount: 1 } },
      { name: "rajčata", quantity: { measure: "ks", amount: 2 } },
      {
        name: "extra virgin olivový olej",
        quantity: { measure: "ml", amount: 30 },
      },
      { name: "bazalkové lístky", quantity: { measure: "hrst", amount: 1 } },
      { name: "pepř mletý", quantity: { measure: "", amount: "" } },
      { name: "sůl", quantity: { measure: "", amount: "" } },
    ],
    method:
      "Mozzarellu nechte okapat. Rajčata omyjte, osušte a nakrájejte na plátky, nebo měsíćky.\n" +
      "Na talíři rozložte kousky rajčat, mozzarellu natrhejte na větší kusy a položte na rajčata. Ozdobte natrhanými lístky bazalky. Nakonec salát osolte, zakápněte olivovým olejem a opepřete. Podávejte s čerstvou bagetou.\n",
    preparationTime: 15,
    photoSrc: "/assets/caprese.jpg",
  },
  {
    id: 1616017111159,
    author: "admin",
    category: "salad",
    temperature: "cold",
    name: "Lehký bramborový salát s ředkvičkami",
    portions: 4,
    ingredients: [
      { name: "brambory", quantity: { measure: "g", amount: 500 } },
      { name: "ředkvičky", quantity: { measure: "svazek", amount: 1 } },
      { name: "červená cibule", quantity: { measure: "ks", amount: 1 } },
      { name: "pažitka", quantity: { measure: "svazek", amount: 0.5 } },
      { name: "sterilovaná okurka", quantity: { measure: "ks", amount: 3 } },
      { name: "lák z okurek", quantity: { measure: "lžíce", amount: 3 } },
      { name: "bílý vinný ocet", quantity: { measure: "lžíce", amount: 1 } },
      { name: "hořčice", quantity: { measure: "lžíce", amount: 2 } },
      { name: "mletý římský kmín", quantity: { measure: "lžíčka", amount: 1 } },
      { name: "pepř mletý", quantity: { measure: "", amount: "" } },
      { name: "sůl", quantity: { measure: "", amount: "" } },
    ],
    method:
      "Brambory ve slupce uvaříme v osolené vodě s kmínem doměkka. Scedíme je a ještě teplé je oloupeme. Necháme je vychladnout. Rozčtvrtíme, nakrájíme na plátky a vložíme do mísy.\n" +
      "\n" +
      "Přidáme na kousky nakrájené ředkvičky, najemno nasekanou cibuli, pažitku, nadrobno pokrájené okurky, hořčici, lžíci oleje, lák z okurek, ocet, sůl, pepř a vše zlehka promícháme.\n" +
      "Hotový salát necháme odležet alespoň 60 minut v chladu.\n",
    preparationTime: 60,
    photoSrc: "/assets/potatoeSalad.jpg",
  },
];

const Main = () => {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [recipesList, setRecipesList] = useState(initialRecipesList);

  useEffect(() => {
    setRecipesList(initialRecipesList.map((recipe) => new Recipe(recipe)));
  }, [initialRecipesList]);

  const handleChange = (event) => {
    setSearchRecipe(event.target.value);
  };

  const resultRecipeList = searchRecipe
    ? recipesList.filter((recipe) =>
        recipe.name
          .toLocaleLowerCase()
          .includes(searchRecipe.toLocaleLowerCase())
      )
    : recipesList;

  return (
    <Layout>
      <input
        className="text-center d-flex justify-center"
        type="text"
        placeholder="vyhledávání"
        value={searchRecipe}
        onChange={handleChange}
      />
      <RecipeList recipes={resultRecipeList} />
    </Layout>
  );
};

export default Main;
