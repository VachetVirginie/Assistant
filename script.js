document.addEventListener('DOMContentLoaded', function() {

    document.getElementsByTagName('form')[0].onsubmit = function(evt) {
        evt.preventDefault(); // Preventing the form from submitting
        checkWord(); // Do your magic and check the entered word/sentence
        window.scrollTo(0, 150);
    }

    // Get the focus to the text input to enter a word right away.
    document.getElementById('terminalTextInput').focus();

    // Getting the text from the input
    var textInputValue = document.getElementById('terminalTextInput').value.trim();

    //Getting the text from the results div
    var textResultsValue = document.getElementById('terminalReslutsCont').innerHTML;

    // Clear text input
    var clearInput = function() {
        document.getElementById('terminalTextInput').value = "";
    }

    // Scrtoll to the bottom of the results div
    var scrollToBottomOfResults = function() {
        var terminalResultsDiv = document.getElementById('terminalReslutsCont');
        terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
    }

    // Scroll to the bottom of the results
    scrollToBottomOfResults();

    // Add text to the results div
    var addTextToResults = function(textToAdd) {
        document.getElementById('terminalReslutsCont').innerHTML += "<p>" + textToAdd + "</p>";
        scrollToBottomOfResults();
    }

    // Getting the list of keywords for help & posting it to the screen
    var postHelpList = function() {
        // Array of all the help keywords
        var helpKeyWords = [

            "- Google + ce que tu cherches",
            "- YouTube + ce que tu veux écouter ",
            "- Wiki + le sujet qui t'intéressr",
            "- 'Actu'  pour savoir ce qu'il se passe dans le monde",
            "- 'Heure' pour savoir qu'elle heure il est.",
            "- 'Date' pour connaitre la date.",
            "- 'foot' pour toutes les infos sur la ligue 1",
            "- 'horoscope' pour savoir ce qui va t'arriver aujourd'hui",
            "- 'meteo lyon'pour connaitre les previsions de la semaine",
            "* Il y a plein de mots cachés à toi de les découvrir."
        ].join('<br>');
        addTextToResults(helpKeyWords);
    }

    // Getting the time and date and post it depending on what you request for
    var getTimeAndDate = function(postTimeDay) {
        var timeAndDate = new Date();
        var timeHours = timeAndDate.getHours();
        var timeMinutes = timeAndDate.getMinutes();
        var dateDay = timeAndDate.getDate();
        console.log(dateDay);
        var dateMonth = timeAndDate.getMonth() + 1; // Because JS starts counting months from 0
        var dateYear = timeAndDate.getFullYear(); // Otherwise we'll get the count like 98,99,100,101...etc.

        if (timeHours < 10) { // if 1 number display 0 before it.
            timeHours = "0" + timeHours;
        }

        if (timeMinutes < 10) { // if 1 number display 0 before it.
            timeMinutes = "0" + timeMinutes;
        }

        var currentTime = timeHours + ":" + timeMinutes;
        var currentDate = dateDay + "/" + dateMonth + "/" + dateYear;

        if (postTimeDay == "time") {
            addTextToResults(currentTime);
        }
        if (postTimeDay == "date") {
            addTextToResults(currentDate);
        }
    }

    // Opening links in a new window
    var openLinkInNewWindow = function(linkToOpen) {
        window.open(linkToOpen, '_blank');
        clearInput();
    }

    // Having a specific text reply to specific strings
    var textReplies = function() {
        switch (textInputValueLowerCase) {
            // funny replies [START]
            case "vivi":
            case "virgie":
            case "virge":
                clearInput();
                addTextToResults("c'est ma creatrice</a>");
                break;

            case "solene":
            case "mon amour":
                clearInput();
                addTextToResults("❤ ❤ ❤ + [+] = 🦆🦆🦆 </a>");
                break;

            case "mia":
            case "luna":
                clearInput();
                addTextToResults("🐶</a>");
                break;

            case "tg":
            case "ta gueule":
            case "chut":
                clearInput();
                addTextToResults("🖕👊🖕</a>");
                break;

            case "axel":
                clearInput();
                addTextToResults("❤ le sang !</a>");
                openLinkInNewWindow('https://www.youtube.com/watch?v=_AKNGgSmhoY');
                break;

            case "poker":
                clearInput();
                addTextToResults("🍀 good luck</a>");
                openLinkInNewWindow('https://www.winamax.fr/');
                break;

            case "manger":
                clearInput();
                addTextToResults("🍔 bon app!</a>");
                openLinkInNewWindow('https://deliveroo.fr/fr/restaurants/lyon/hotel-de-ville?geohash=u05kq514z5bw');
                break;

            case "i love you":
            case "je t'aime":
            case "love":
                clearInput();
                addTextToResults("Ohhhh c'est trop mignon !!! 😍. Je t'envoie de l'amour aussi ... ❤ ❤ ❤ !");
                break;



            case "ligue1":
            case "foot":
            case "l1":
                clearInput();
                addTextToResults('Voici les résultats!');
                openLinkInNewWindow('https://www.google.fr/search?q=l1&ie=utf-8&oe=utf-8&client=firefox-b&gfe_rd=cr&dcr=0&ei=l0CpWtjSJPCGtgfCu7_ABw');
                break;

            case "actu":
                clearInput();
                addTextToResults("quoi de neuf dans les restes du monde ?</a>");
                openLinkInNewWindow('https://news.google.fr')
                break;

            case "meteo lyon":
                clearInput();
                addTextToResults("On fais péter le t shirt ?");
                openLinkInNewWindow('http://www.meteofrance.com/previsions-meteo-france/lyon/69000')
                break;

            case "non":
                clearInput();
                addTextToResults("Suis déçuuuuuuue!😭");
                break;

            case "bonjour":
            case "hello":
            case "salut":
            case "hola":
                clearInput();
                addTextToResults("Salut, c'est moi...ton assistant créé avec amour... 😍");
                break;

            case "cat":
            case "chat":
            case "hijo":
                clearInput();
                addTextToResults("Meow!! 🐱<br> psst: essaies cat videos");
                break;

            case "test":

                clearInput();
                addTextToResults("Ca fonctionne 😉");
                break;

            case "what the":
            case "wtf":
                clearInput();
                addTextToResults("F***.");
                break;

            case "merde":
            case "shit":
            case "poop":
            case "💩":
                clearInput();
                addTextToResults("💩");
                break;

            case "ca va ?":
                clearInput();
                addTextToResults("Au top 😃 et toi ?");
                break;

            case "ca va ":
            case "oui":
                clearInput();
                addTextToResults("ca fait plaisir ! 😃 ");
                break;

            case "cat videos":
            case "cat v":
                addTextToResults("Okay allons voir des chatons mignons.");
                openLinkInNewWindow('https://www.youtube.com/results?search_query=cat videos');
                break;

            case "lol":
            case "trololo":
                addTextToResults("Mr. Trololo!");
                openLinkInNewWindow('https://www.youtube.com/watch?v=1uTAJG3Khes');
                break;


            case "youtube":
                clearInput();
                addTextToResults("Type youtube + something to search for.");
                break;

            case "google":
                clearInput();
                addTextToResults("Type google + something to search for.");
                break;

            case "time":
            case "heure":
                clearInput();
                getTimeAndDate("time");
                break;

            case "date":
                clearInput();
                getTimeAndDate("date");
                break;

            case "help":
            case "?":
                clearInput();
                postHelpList();
                break;

            case "horoscope":
                clearInput();
                addTextToResults('Voici ton horoscope:');
                openLinkInNewWindow('http://www.sympatico.ca/horoscope/traditionnel');
                break;

            case "maison":
                clearInput();
                addTextToResults('Quoi de neuf sur se loger ?');
                openLinkInNewWindow('http://www.seloger.com/list.htm?idtt=2&naturebien=1,2,4&idtypebien=2&ci=690123&tri=a_px&nb_pieces=3&pxmax=385000&surfacemin=70');
                break;

            case "marseille":
                clearInput();
                addTextToResults('Ecaaaaaaaaaaaartes toi !!!');
                openLinkInNewWindow('https://www.youtube.com/watch?v=7OfMZyPeTZA');
                break;

            case "concert":
                clearInput();
                addTextToResults('🤘 Envoie du son !!!');
                openLinkInNewWindow('http://www.transbordeur.fr/accueil/');
                break;

            case "recette":
                clearInput();
                addTextToResults('👻 Mangeeeerrrrrr !!!');
                openLinkInNewWindow('http://www.marmiton.org');
                break;

            case "sortie":
                clearInput();
                addTextToResults('👟 On va où on fait quoi ?');
                openLinkInNewWindow('https://lyon.citycrunch.fr/');
                break;

            case "cinema":
                clearInput();
                addTextToResults('🎥On va voir quoi ma gueule?');
                openLinkInNewWindow('http://www.cinemas-lumiere.com/le-reseau/lumiere-terreaux/');
                openLinkInNewWindow('https://www.cinemasgaumontpathe.com/cinemas/cinema-lyon-pathe-bellecour/');
                break;

            case "travail":
                clearInput();
                addTextToResults('💰money money money !!!💰');
                openLinkInNewWindow('https://www.rhonealpesjob.com/emplois/recherche.html?l=Lyon+69000&l_autocomplete=http%3A%2F%2Fwww.rj.com%2Fcommun%2Flocalite%2Fcommune%2F69123&f=Marketing_com_graphisme&c=CDI');
                openLinkInNewWindow('https://emploi.alsacreations.com/?action=q&g_type=offres&typecontratcdi=1&q=webdesigner&region=22');
                openLinkInNewWindow('https://www.indeed.fr/jobs?q=webdesigner&l=Lyon+%2869%29');
                break;

            default:
                clearInput();
                addTextToResults("<p><i>The command " + "<b>" + textInputValue + "</b>" + " was not found. Type <b>Help</b> to see all commands.</i></p>");
                break;
        }
    }

    // Main function to check the entered text and assign it to the correct function
    var checkWord = function() {
        textInputValue = document.getElementById('terminalTextInput').value.trim(); //get the text from the text input to a variable
        textInputValueLowerCase = textInputValue.toLowerCase(); //get the lower case of the string

        if (textInputValue != "") { //checking if text was entered
            addTextToResults("<p class='userEnteredText'>> " + textInputValue + "</p>");
            if (textInputValueLowerCase.substr(0, 5) == "open ") { //if the first 5 characters = open + space
                openLinkInNewWindow('http://' + textInputValueLowerCase.substr(5));
                addTextToResults("<i>The URL " + "<b>" + textInputValue.substr(5) + "</b>" + " should be opened now.</i>");
            } else if (textInputValueLowerCase.substr(0, 8) == "youtube ") {
                openLinkInNewWindow('https://www.youtube.com/results?search_query=' + textInputValueLowerCase.substr(8));
                addTextToResults("<i>I've searched on YouTube for " + "<b>" + textInputValue.substr(8) + "</b>" + " it should be opened now.</i>");
            } else if (textInputValueLowerCase.substr(0, 7) == "google ") {
                openLinkInNewWindow('https://www.google.com/search?q=' + textInputValueLowerCase.substr(7));
                addTextToResults("<i>I've searched on Google for " + "<b>" + textInputValue.substr(7) + "</b>" + " it should be opened now.</i>");
            } else if (textInputValueLowerCase.substr(0, 5) == "wiki ") {
                openLinkInNewWindow('https://wikipedia.org/w/index.php?search=' + textInputValueLowerCase.substr(5));
                addTextToResults("<i>I've searched on Wikipedia for " + "<b>" + textInputValue.substr(5) + "</b>" + " it should be opened now.</i>");
            } else {
                textReplies();
            }
        }
    };

});