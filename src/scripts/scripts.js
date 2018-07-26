//  const movieTab = [ //crée un tableau d'objet film 
//     {title: 'Jurassic Park', poster: 'images/jurassic.jpeg', desc: "Ne pas réveiller le chat qui dort... C'est ce que le milliardaire John Hammond aurait dû se rappeler avant de se lancer dans le clonage de dinosaures. C'est à partir d'une goutte de sang absorbée par un moustique fossilisé que John Hammond et son équipe ont réussi à faire renaître une dizaine d'espèces de dinosaures. Il s'apprête maintenant avec la complicité du docteur Alan Grant, paléontologue de renom, et de son amie Ellie, à ouvrir le plus grand parc à thème du monde. Mais c'était sans compter la cupidité et la malveillance de l'informaticien Dennis Nedry, et éventuellement des dinosaures, seuls maîtres sur l'île..."},
//     {title: 'The Matrix', poster: 'images/matrix.jpeg', desc: "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace. A cheval entre deux mondes, Neo est assailli par d'étranges songes et des messages cryptés provenant d'un certain Morpheus. Celui-ci l'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu'est-ce que la Matrice ? Nul ne le sait, et aucun homme n'est encore parvenu à en percer les defenses. Mais Morpheus est persuadé que Neo est l'Elu, le libérateur mythique de l'humanité annoncé selon la prophétie. Ensemble, ils se lancent dans une lutte sans retour contre la Matrice et ses terribles agents... "},
//     {title: 'What happened to Monday', poster: 'images/sisters.jpeg', desc:"2073. La Terre est surpeuplée. Le gouvernement décide d’instaurer une politique d’enfant unique, appliquée de main de fer par le Bureau d’Allocation des Naissances, sous l’égide de Nicolette Cayman. Confronté à la naissance de septuplées, Terrence Settman décide de garder secrète l’existence de ses 7 petites-filles. Confinées dans leur appartement, prénommées d’un jour de la semaine, elles devront chacune leur tour partager une identité unique à l’extérieur, simulant l’existence d’une seule personne : Karen Settman. Si le secret demeure intact des années durant, tout s’effondre le jour où Lundi disparait mystérieusement… "},
//     {title: 'Star Wars The Phantom Menace', poster: 'images/swars.jpeg', desc:"Avant de devenir un célèbre chevalier Jedi, et bien avant de se révéler l’âme la plus noire de la galaxie, Anakin Skywalker est un jeune esclave sur la planète Tatooine. La Force est déjà puissante en lui et il est un remarquable pilote de Podracer. Le maître Jedi Qui-Gon Jinn le découvre et entrevoit alors son immense potentiel. Pendant ce temps, l’armée de droïdes de l’insatiable Fédération du Commerce a envahi Naboo, une planète pacifique, dans le cadre d’un plan secret des Sith visant à accroître leur pouvoir. Pour défendre la reine de Naboo, Amidala, les chevaliers Jedi vont devoir affronter le redoutable Seigneur Sith, Dark Maul. "},
//     {title: 'Alien Covenant', poster: 'images/alien.jpg', desc:"Les membres d’équipage du vaisseau Covenant, à destination d’une planète située au fin fond de notre galaxie, découvrent ce qu’ils pensent être un paradis encore intouché. Il s’agit en fait d’un monde sombre et dangereux, cachant une menace terrible. Ils vont tout tenter pour s’échapper. "},
//     {title: 'Independance Day', poster: 'images/id.jpg', desc:"Une immense soucoupe volante envahit le ciel terrestre, libérant un nombre infini de plus petites soucoupes qui prennent position au-dessus des plus grandes villes du monde. Un informaticien new-yorkais décrypte les signaux émanant des étranges voyageurs. Ils ne sont pas du tout amicaux et ces extraterrestres se préparent à attaquer la Terre."},
//     {title: 'Saving Private Ryan', poster: 'images/ryan.jpg', desc:"Alors que les forces alliées débarquent à Omaha Beach, Miller doit conduire son escouade derrière les lignes ennemies pour une mission particulièrement dangereuse : trouver et ramener sain et sauf le simple soldat James Ryan, dont les trois frères sont morts au combat en l'espace de trois jours. Pendant que l'escouade progresse en territoire ennemi, les hommes de Miller se posent des questions. Faut-il risquer la vie de huit hommes pour en sauver un seul ? "},
//     {title: 'The Hangover', poster: 'images/hangover.jpg', desc:"Au réveil d'un enterrement de vie de garçon bien arrosé, les trois amis du fiancé se rendent compte qu'il a disparu 40 heures avant la cérémonie de mariage. Ils vont alors devoir faire fi de leur gueule de bois et rassembler leurs bribes de souvenirs pour comprendre ce qui s'est passé."},
//     {title: 'Fast & Furious 2', poster: 'images/fast.jpeg', desc:"Brian O'Conner a signé sa plus belle action, mais aussi sa faute la plus grave, en laissant filer le chef du gang de voleurs de voitures qu'il avait mission d'infiltrer. Radié de la police de Los Angeles, ce jeune flic rebelle, fan de vitesse et de rodéos, a gardé intact son honneur mais a gâché une belle carrière. Après deux ans de galère, Brian O'Conner se retrouve à Miami et se voit offrir une ultime chance de se racheter. Le FBI et les douanes locales surveillent depuis plusieurs mois le puissant homme d'affaires Carter Verone, qu'ils soupçonnent de se livrer à des opérations de blanchiment d'argent. Mais leurs efforts sont restés vains, le seul indice dont ils disposent pour appâter et démasquer l'énigmatique criminel étant sa passion pour les rodéos. Le temps presse, Brian semble être le seul espoir... "},
//     {title: 'Star Wars The Last Jedi', poster: 'images/swars8.jpg', desc:"Les héros du Réveil de la force rejoignent les figures légendaires de la galaxie dans une aventure épique qui révèle des secrets ancestraux sur la Force et entraîne de surprenantes révélations sur le passé… "},
//     {title: 'Back to the future', poster: 'images/back.jpg', desc:"1985. Le jeune Marty McFly mène une existence anonyme auprès de sa petite amie Jennifer, seulement troublée par sa famille en crise et un proviseur qui serait ravi de l'expulser du lycée. Ami de l'excentrique professeur Emmett Brown, il l'accompagne un soir tester sa nouvelle expérience : le voyage dans le temps via une DeLorean modifiée. La démonstration tourne mal : des trafiquants d'armes débarquent et assassinent le scientifique. Marty se réfugie dans la voiture et se retrouve transporté en 1955. Là, il empêche malgré lui la rencontre de ses parents, et doit tout faire pour les remettre ensemble, sous peine de ne pouvoir exister..."},
//     {title: 'The Artist', poster: 'images/artist.jpg', desc:"Hollywood 1927. George Valentin est une vedette du cinéma muet à qui tout sourit. L'arrivée des films parlants va le faire sombrer dans l'oubli. Peppy Miller, jeune figurante, va elle, être propulsée au firmament des stars. Ce film raconte l'histoire de leurs destins croisés, ou comment la célébrité, l'orgueil et l'argent peuvent être autant d'obstacles à leur histoire d'amour. "},
//     {title: 'Warrior', poster: 'images/warrior.jpg', desc:"Ancien Marine brisé, Tommy Conlon rentre au pays et demande à son père de le préparer pour un tournoi d’arts martiaux mixtes qui lui permettrait de gagner une fortune. Personne ne sait ce qu’il espère faire de cet argent. Le propre frère de Tommy, Brendan, décide lui aussi de s’engager dans la compétition pour essayer de sauver sa famille. Entre les deux frères, les années n’ont pas adouci les rancœurs. Immanquablement, les routes de Tommy et de Brendan vont bientôt se croiser. Au-delà de l’affrontement qui s’annonce, pour chacun, quelle que soit la cause qu’ils défendent, il n’est pas seulement question de remporter un prix, mais de mener le combat d’une vie… "},
//     {title: 'Black Hawk Down', poster: 'images/faucon.jpg', desc:"Le 3 octobre 1993, avec l'appui des Nations Unies, une centaine de marines américains de la Task Force Ranger est envoyée en mission à Mogadiscio, en Somalie, pour assurer le maintien de la paix et capturer les deux principaux lieutenants et quelques autres associés de Mohamed Farrah Aidid, un chef de guerre local. Cette opération de routine vire rapidement au cauchemar lorsque les militaires sont pris pour cibles par les factions armées rebelles et la population, résolument hostiles à toute présence étrangère sur leur territoire. "},
//     {title: 'Inception', poster: 'images/inception.jpg', desc:"Dom Cobb est un voleur expérimenté – le meilleur qui soit dans l’art périlleux de l’extraction : sa spécialité consiste à s’approprier les secrets les plus précieux d’un individu, enfouis au plus profond de son subconscient, pendant qu’il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l’univers trouble de l’espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier qui a perdu tout ce qui lui est cher. Mais une ultime mission pourrait lui permettre de retrouver sa vie d’avant – à condition qu’il puisse accomplir l’impossible : l’inception. Au lieu de subtiliser un rêve, Cobb et son équipe doivent faire l’inverse : implanter une idée dans l’esprit d’un individu. S’ils y parviennent, il pourrait s’agir du crime parfait. Et pourtant, aussi méthodiques et doués soient-ils, rien n’aurait pu préparer Cobb et ses partenaires à un ennemi redoutable qui semble avoir systématiquement un coup d’avance sur eux. Un ennemi dont seul Cobb aurait pu soupçonner l’existence. "}
// ]


//on place le main dans une constante
const mainEl = document.getElementsByTagName('main')[0]

let sectionParent = null

createMovieList()

async function createMovieList(){
    try{
        let response = await fetch("data/movies.json")
        const movies = await response.json()
        movieList(movies)
    } catch (error){
        console.error(error);
    }
}

//fonction qui crée la liste des films avec titre, affiche et gestion de la popup avec la description lors du clic sur l'affiche
function movieList(movies){
    movies.forEach(function(movie, i){
        //pour la premiere et toutes les 5 iterations ont crée une section
        if (i%5 ==0){
            sectionParent = document.createElement('section')
            mainEl.appendChild(sectionParent)
        }
        //on crée une div
        const madiv = document.createElement('div')
        //on crée l'image et on recupère sa source
        var img = document.createElement('img');
        img.src = movie.poster
        //on place l'image dans la div
        madiv.appendChild(img)
        //on crée un paragraphe et on récupère le contenu du texte
        const monTxt = document.createElement('p')
        monTxt.innerHTML = movie.title
        //on place le texte dans la div
        madiv.appendChild(monTxt)
        //on place la div dans la section
        sectionParent.appendChild(madiv)
        //on crée un event qui ouvre une popup lorsque l'on clique sur une affiche
        img.addEventListener("click", createPopup)
    })
}

//fonction qui gère la fermeture de la popup par pression sur la touche Esc
function escFermer(event){
    //variable qui recupère la touche pressé par l'utilisateur
    var x = event.which || event.keyCode;
    //si l'utilisateur appuie sur Esc x sera égale à 27
    if(x == 27){
        //on gère la fermeture de la popup
        var fenetre = document.getElementsByClassName('backPop')[0]
        mainEl.removeChild(fenetre)
        //on retire l'event listener pour eviter les erreurs en console 
        document.removeEventListener("keydown", escFermer) 
    }
}

//fonction qui gère la fermeture de la popup par clic sur la touche "fermer"
function clicFermer(){
    //on gère la fermeture de la popup
    var fenetre = document.getElementsByClassName('backPop')[0]
    mainEl.removeChild(fenetre)
    //on retire l'event listener pour eviter les erreurs en console 
    close.removeEventListener("clic", clicFermer)
}

function createPopup(movies){
    //fonction de création de la popup
    var backPop = document.createElement('div')
    backPop.className = 'backPop'
    var popup = document.createElement('div')
    popup.className = 'popup'
    const monTxt = document.createElement('h3')
    monTxt.innerHTML = movies.title
    popup.appendChild(monTxt)
    const img = document.createElement('img');
    img.src = movies.poster
    popup.appendChild(img)
    const desc = document.createElement('p')
    desc.innerText = movies.desc
    popup.appendChild(desc)
    const close = document.createElement('button')
    close.innerText = 'Fermer'
    popup.appendChild(close)
    backPop.appendChild(popup)
    mainEl.appendChild(backPop)
    //evenement qui ferme la popup lors du clic sur fermer
    close.addEventListener("click", clicFermer)
    document.addEventListener("keydown", escFermer) 
     
}