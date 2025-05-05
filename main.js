document.addEventListener('DOMContentLoaded', function() {
    // Przepisy - nazwa opiektu musi sie zgadzac z nazwa data-recipe w index.html
    const recipes = {
        cezar: {
            title: "Sałatka Cezar",
            ingredients: [
                "1 główka sałaty rzymskiej (lub lodowej)",
                "1 pierś z kurczaka (ok. 200 g)",
                "1 łyżka oliwy z oliwek",
                "sól, pieprz, zioła prowansalskie lub papryka – do przyprawienia kurczaka",
                "2 kromki chleba (najlepiej czerstwego) – na grzanki",
                "1 łyżeczka oliwy + szczypta czosnku w proszku (do grzanek)",
                "2–3 łyżki startego parmezanu"
            ],
            preparation: [
                "Kurczaka pokrój w paski, przypraw i usmaż na łyżce oliwy – aż będzie złocisty i soczysty.",
                "Grzanki: pokrój chleb w kostkę, wymieszaj z oliwą i czosnkiem, podsmaż na suchej patelni lub podpiecz w piekarniku (ok. 10 min w 180°C).",
                "Sos: wymieszaj wszystkie składniki w miseczce – powinien być kremowy i wyraźny w smaku.",
                "Sałatę umyj i porwij na kawałki. Nałóż na talerz.",
                "Dodaj kurczaka, grzanki, posyp parmezanem i polej sosem tuż przed podaniem."
            ],
            products: [
                "sałata rzymska", "sałata lodowa", "pierś z kurczaka", "oliwa z oliwek", 
                "sól", "pieprz", "zioła prowansalskie", "papryka", "chleb", 
                "czosnek w proszku", "parmezan"
            ]
        },
        carbonara: {
            title: "Spaghetti Carbonara",
            ingredients: [
                "200 g makaronu (najlepiej spaghetti)",
                "100 g boczku wędzonego",
                "2 żółtka + 1 całe jajko",
                "40–50 g sera parmezanu",
                "świeżo mielony czarny pieprz",
                "sól (do gotowania makaronu)"
            ],
            preparation: [
                "Makaron ugotuj al dente w osolonej wodzie (zachowaj ok. ½ szklanki wody z gotowania).",
                "Guanciale pokrój w drobną kostkę lub paski i podsmaż na suchej patelni, aż będzie złocisty i chrupiący. Zdejmij z ognia.",
                "W miseczce wymieszaj żółtka + jajko z startym serem i dużą szczyptą świeżo mielonego pieprzu.",
                "Gdy makaron się ugotuje, wrzuć go na patelnię z guanciale i wymieszaj z tłuszczem (na wyłączonym palniku!).",
                "Dodaj masę jajeczno-serową, energicznie mieszaj, dolewając odrobinę wody z makaronu, aż powstanie kremowy sos.",
                "Podawaj od razu, posypując jeszcze odrobiną sera i pieprzu."
            ],
            products: [
                "makaron", "boczek wędzony", "jajka",
                "ser parmezan", "pieprz czarny", "sól"
            ]
        },
        bowl: {
            title: "Keto bowl z łososiem",
            ingredients: [
                "120–150 g filetu z łososia",
                "1 łyżeczka oliwy z oliwek",
                "1/2 awokado",
                "1/2 ogórka",
                "kilka pomidorków koktajlowych",
                "garść rukoli lub mix sałat",
                "1 łyżka pestek słonecznika lub siemienia lnianego (opcjonalnie)",
                "1 łyżka majonezu (lub jogurtu greckiego)",
                "sok z 1/4 cytryny",
                "szczypta czosnku w proszku",
                "sól, pieprz"
            ],
            preparation: [
                "Łososia oprósz solą i pieprzem, usmaż na łyżeczce tłuszczu – skórką do dołu, aż będzie chrupiący i miękki w środku (ok. 3–4 min z każdej strony).",
                "Warzywa pokrój: ogórek w plasterki, awokado w półksiężyce, pomidorki na połówki.",
                "Ułóż na talerzu rukolę, warzywa, kiszonkę i usmażonego łososia.",
                "Wymieszaj składniki sosu i polej nim miseczkę.",
                "Na koniec posyp pestkami dla chrupkości."
            ],
            products: [
                "filet z łososia", "oliwa z oliwek", "awokado", "ogórek", "pomidorki koktajlowe",
                "rukola", "mix sałat", "pestki słonecznika", "siemię lniane", "majonez",
                "jogurt grecki", "cytryna", "czosnek w proszku", "sól", "pieprz"
            ]
        },
        wrap: {
            title: "Wrap z kurczakiem i warzywami",
            ingredients: [
                "2 tortille pełnoziarniste (lub pszenne)",
                "1 pierś z kurczaka (ok. 200 g)",
                "1 łyżeczka oliwy",
                "przyprawy: sól, pieprz, papryka słodka, czosnek granulowany",
                "1/2 czerwonej papryki",
                "1/2 ogórka",
                "kilka liści sałaty lub garść rukoli",
                "2 łyżki jogurtu greckiego lub hummusu (jako sos)",
                "sok z cytryny (opcjonalnie)",
                "świeże zioła (np. natka pietruszki – opcjonalnie)"
            ],
            preparation: [
                "Kurczaka pokrój w paski, przypraw i usmaż na łyżeczce oliwy na złocisty kolor.",
                "Warzywa pokrój: paprykę i ogórka w paski, sałatę porwij.",
                "Tortille lekko podgrzej na suchej patelni lub w mikrofalówce (łatwiej się zawijają).",
                "Na środku każdej tortilli rozsmaruj jogurt/hummus, ułóż sałatę, kurczaka i warzywa.",
                "Skrop sokiem z cytryny, dodaj zioła, zawiń boki i złóż w rulon."
            ],
            products: [
                "tortilla pełnoziarnista", "tortilla pszenna", "pierś z kurczaka", "oliwa", 
                "sól", "pieprz", "papryka słodka", "czosnek granulowany", "papryka czerwona",
                "ogórek", "sałata", "rukola", "jogurt grecki", "hummus", "cytryna",
                "natka pietruszki", "świeże zioła"
            ]
        },
        placuszki: {
            title: "Białkowe placuszki śniadaniowe",
            ingredients: [
                "2 jajka",
                "2 łyżki jogurtu greckiego (naturalnego, bez cukru)",
                "1 miarka odżywki białkowej (waniliowa lub naturalna, ok. 30 g)",
                "1 łyżka mąki kokosowej lub migdałowej",
                "szczypta proszku do pieczenia lub sody",
                "opcjonalnie: cynamon, ekstrakt waniliowy",
                "odrobina oleju kokosowego lub masła klarowanego do smażenia",
                "do podania: jogurt, owoce, masło orzechowe bez cukru, cynamon"
            ],
            preparation: [
                "Wszystkie składniki wymieszaj w misce lub zmiksuj na gładką masę.",
                "Rozgrzej patelnię z odrobiną tłuszczu.",
                "Nakładaj małe porcje ciasta i smaż na średnim ogniu z obu stron, aż będą złociste.",
                "Podawaj z ulubionymi dodatkami – np. jogurtem i owocami bez dodatku cukru."
            ],
            products: [
                "jajka", "jogurt grecki", "odżywka białkowa", "mąka kokosowa", "mąka migdałowa",
                "proszek do pieczenia", "soda", "cynamon", "ekstrakt waniliowy", "olej kokosowy",
                "masło klarowane", "jogurt", "masło orzechowe"
            ]
        },
        placuszki2: {
            title: "Proteinowe placuszki czekoladowe",
            ingredients: [
                "1 jajko",
                "1 dojrzały banan (lub ½ szklanki musu jabłkowego)",
                "1 miarka odżywki białkowej o smaku czekoladowym (ok. 30 g)",
                "1 łyżka kakao (niesłodzonego)",
                "2–3 łyżki mąki owsianej lub migdałowej (lub płatki zmielone)",
                "1/4 łyżeczki proszku do pieczenia",
                "odrobina mleka (roślinnego lub krowiego), jeśli masa będzie zbyt gęsta",
                "olej kokosowy/masło klarowane do smażenia",
                "opcjonalnie: szczypta cynamonu, kilka kropli ekstraktu waniliowego"
            ],
            preparation: [
                "Zblenduj wszystkie składniki na gładką masę (można też rozgnieść banana widelcem i wymieszać ręcznie).",
                "Rozgrzej patelnię z odrobiną tłuszczu.",
                "Nakładaj małe porcje ciasta i smaż na średnim ogniu po ok. 2 minuty z każdej strony.",
                "Podawaj z jogurtem naturalnym, masłem orzechowym (jeśli możesz), świeżymi owocami lub bez dodatków."
            ],
            products: [
                "jajko", "banan", "mus jabłkowy", "odżywka białkowa czekoladowa", "kakao",
                "mąka owsiana", "mąka migdałowa", "płatki owsiane", "proszek do pieczenia",
                "mleko", "mleko roślinne", "olej kokosowy", "masło klarowane", "cynamon",
                "ekstrakt waniliowy", "jogurt naturalny", "masło orzechowe", "owoce"
            ]
        },
        zapiekanka: {
            title: "Ekspresowa zapiekanka makaronowa",
            ingredients: [
                "150 g suchego makaronu (np. penne, świderki, kokardki)",
                "1/2 cebuli",
                "1 ząbek czosnku",
                "150 g dowolnego mięsa mielonego (np. z indyka, kurczaka lub wołowego)",
                "100 ml passaty pomidorowej lub pomidorów z puszki",
                "1 łyżeczka oliwy",
                "przyprawy: sól, pieprz, zioła prowansalskie, bazylia, papryka słodka",
                "garść startego sera (np. mozzarella, cheddar, parmezan)",
                "opcjonalnie: kukurydza, szpinak, papryka"
            ],
            preparation: [
                "Makaron ugotuj al dente według instrukcji na opakowaniu.",
                "Na patelni podsmaż cebulę i czosnek na oliwie, dodaj mięso lub zamiennik i smaż, aż się zarumieni.",
                "Dodaj passatę pomidorową i przyprawy, duś 2–3 minuty.",
                "Wymieszaj sos z ugotowanym makaronem i ewentualnymi warzywami.",
                "Przełóż do naczynia żaroodpornego, posyp serem.",
                "Zapiekaj w 180°C (góra-dół) przez ok. 10–15 minut – tylko tyle, żeby ser się rozpuścił i lekko przypiekł."
            ],
            products: [
                "makaron", "cebula", "czosnek", 
                "mięso mielone", "passata pomidorowa", 
                "pomidory z puszki", "oliwa", "sól", "pieprz", "zioła prowansalskie", 
                "bazylia", "papryka słodka", "ser mozzarella", "ser cheddar", "parmezan", 
                "kukurydza", "szpinak", "papryka"
            ]
        },
        makaron: {
            title: "Orientalny makaron udon z warzywami i kurczakiem",
            ingredients: [
                "200 g makaronu udon (świeżego lub suchego)",
                "1 pierś z kurczaka (ok. 200 g)",
                "1/2 czerwonej papryki",
                "1/2 marchewki",
                "1/2 małej cukinii lub garść kapusty pekińskiej",
                "1 łyżeczka oleju sezamowego (lub rzepakowego)",
                "1 ząbek czosnku",
                "kawałek świeżego imbiru (ok. 1 cm) lub 1/2 łyżeczki imbiru w proszku",
                "2–3 łyżki sosu sojowego (niskosodowego)",
                "1 łyżeczka octu ryżowego lub soku z limonki (opcjonalnie)",
                "sezam i szczypiorek do posypania (opcjonalnie)"
            ],
            preparation: [
                "Makaron ugotuj zgodnie z instrukcją (jeśli używasz suchego), świeży wystarczy tylko przelać gorącą wodą.",
                "Kurczaka pokrój w cienkie paski, dopraw solą, pieprzem i odrobiną sosu sojowego. Podsmaż na 1/2 łyżeczki oleju, odstaw.",
                "Na tej samej patelni dodaj resztę oleju, wrzuć czosnek i imbir, chwilę podsmaż. Dodaj pokrojone warzywa i smaż 3–4 minuty, aż lekko zmiękną, ale będą chrupiące.",
                "Dorzuć z powrotem kurczaka i ugotowany makaron. Wlej sos sojowy i ocet ryżowy/sok z limonki. Wymieszaj wszystko i podsmaż jeszcze 2 minuty.",
                "Podawaj posypane sezamem i posiekanym szczypiorkiem."
            ],
            products: [
                "makaron udon", "pierś z kurczaka", "papryka czerwona", "marchewka", "cukinia", 
                "kapusta pekińska", "olej sezamowy", "olej rzepakowy", "czosnek", "imbir świeży", 
                "imbir w proszku", "sos sojowy", "ocet ryżowy", "limonka", "sezam", "szczypiorek",
                "sól", "pieprz"
            ]
        },
        ommlet: {
            title: "Omlet z serkiem, rzodkiewką, ogórkiem i szczypiorkiem",
            ingredients: [
                "2 jajka",
                "1 łyżka mleka lub wody (opcjonalnie — omlet będzie delikatniejszy)",
                "sól, pieprz",
                "odrobina oliwy lub masła klarowanego do smażenia",
                "1–2 łyżki serka kanapkowego (np. śmietankowego, ziołowego, wegańskiego)",
                "2–3 rzodkiewki",
                "3–4 plasterki ogórka (świeżego lub małosolnego)",
                "posiekany szczypiorek",
                "opcjonalnie: kiełki, kilka listków rukoli"
            ],
            preparation: [
                "Roztrzep jajka z mlekiem, solą i pieprzem.",
                "Rozgrzej patelnię, dodaj odrobinę tłuszczu i wylej masę jajeczną.",
                "Smaż na małym ogniu pod przykryciem ok. 3–4 minuty, aż się zetnie.",
                "Delikatnie przełóż omlet na talerz lub zsuń go z patelni.",
                "Posmaruj serkiem, ułóż plasterki rzodkiewki i ogórka, posyp szczypiorkiem.",
                "Możesz złożyć omlet na pół lub zostawić otwarty — jak \"kanapkę\"."
            ],
            products: [
                "jajka", "mleko", "woda", "sól", "pieprz", "oliwa", "masło klarowane",
                "serek kanapkowy", "serek śmietankowy", "serek ziołowy", "rzodkiewka", 
                "ogórek", "ogórek małosolny", "szczypiorek", "kiełki", "rukola"
            ]
        }
    };

    // Funkcja do filtrowania przepisów
    let activeFilters = [];
    
    const productFilterInput = document.getElementById('productFilter');
    const addFilterBtn = document.getElementById('addFilterBtn');
    const activeFiltersContainer = document.getElementById('activeFilters');
    const recipeCards = document.querySelectorAll('.recipe-card');
    
    // Dodawanie filtra
    function addFilter() {
        const filterText = productFilterInput.value.trim().toLowerCase();
        if (filterText && !activeFilters.includes(filterText)) {
            activeFilters.push(filterText);
            updateActiveFiltersDisplay();
            filterRecipes();
            productFilterInput.value = '';
        }
    }
    
    // Wyświetlenie aktywnych filtrów
    function updateActiveFiltersDisplay() {
        activeFiltersContainer.innerHTML = '';
        activeFilters.forEach((filter, index) => {
            const filterTag = document.createElement('div');
            filterTag.className = 'filter-tag';
            filterTag.innerHTML = `
                ${filter}
                <button class="remove-filter" data-index="${index}">&times;</button>
            `;
            activeFiltersContainer.appendChild(filterTag);
        });
        
        // Dodanie obsługi usuwania filtrów
        document.querySelectorAll('.remove-filter').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                activeFilters.splice(index, 1);
                updateActiveFiltersDisplay();
                filterRecipes();
            });
        });
    }
    
    // Filtrowanie przepisów
    function filterRecipes() {
        if (activeFilters.length === 0) {
            // Jeśli nie ma filtrów, pokaż wszystkie przepisy
            recipeCards.forEach(card => {
                card.classList.remove('hidden');
            });
            return;
        }
        
        recipeCards.forEach(card => {
            const recipeId = card.getAttribute('data-recipe');
            const recipe = recipes[recipeId];
            
            // Sprawdź czy przepis zawiera którykolwiek z wybranych produktów
            const hasMatchingProduct = activeFilters.some(filter => 
                recipe.products.some(product => 
                    product.toLowerCase().includes(filter)
                )
            );
            
            if (hasMatchingProduct) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }
    
    // Obsługa zdarzeń
    addFilterBtn.addEventListener('click', addFilter);
    
    productFilterInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addFilter();
        }
    });

    // Obsługa modalu
    const modal = document.getElementById('recipeModal');
    const closeBtn = document.querySelector('.close');
    const recipeDetails = document.getElementById('recipeDetails');

    recipeCards.forEach(card => {
        card.addEventListener('click', function() {
            const recipeId = this.getAttribute('data-recipe');
            const recipe = recipes[recipeId];
            
            let recipeContent = `
                <h2>${recipe.title}</h2>
                <h3>Składniki:</h3>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
                <h3>Przygotowanie:</h3>
                <ol>
                    ${recipe.preparation.map(step => `<li>${step}</li>`).join('')}
                </ol>
            `;
            
            recipeDetails.innerHTML = recipeContent;
            modal.style.display = 'block';
        });
    });

    // Obsługa zamknięcia modalu
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Obsługa kliknięcia poza modalem
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Obsługa scrollowania do odpowiednich sekcji
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });
    
    // Obsługa formularza kontaktowego
    function getUrlParams() {
        let params = {};
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        
        for (const [key, value] of urlParams.entries()) {
            params[key] = value;
        }
        
        return params;
    }
    
    const params = getUrlParams();
    
    // Obsługa komunikatu
    if (params.status) {
        let message = '';
        let messageClass = '';
        
        switch (params.status) {
            case 'success':
                message = 'Dziękujemy! Twój przepis został wysłany pomyślnie.';
                messageClass = 'success';
                break;
            case 'error':
                message = 'Wystąpił błąd podczas wysyłania przepisu. Spróbuj ponownie później.';
                messageClass = 'error';
                break;
            case 'validation_error':
                message = 'Proszę poprawić błędy w formularzu.';
                if (params.errors) {
                    message += ' ' + decodeURIComponent(params.errors).replace(/,/g, ', ');
                }
                messageClass = 'error';
                break;
        }
        
        // Wyświetlanie komunikatu
        if (message) {
            const messageElement = document.createElement('div');
            messageElement.className = `form-message ${messageClass}`;
            messageElement.textContent = message;
            
            const form = document.querySelector('#kontakt form');
            form.parentNode.insertBefore(messageElement, form);
            
            if (params.status === 'success' || params.status === 'error') {
                window.location.hash = 'kontakt';
            }
        }
    }
}); 