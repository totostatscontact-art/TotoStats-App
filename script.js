/*
 * TotoStats — quatre concours autonomes avec le même fonctionnement.
 * Les matchs, cotes, probabilités, dates et heures ci-dessous sont des
 * données fictives de démonstration à modifier manuellement.
 */

const programmes = {
    "special": {
        titre: "Totofoot Spécial",
        type: "Concours TOTOFOOT 14",
        description: "Date limite de validation - 10/11/2026 | 19:00 h",
        descriptionInfos: "أضف هنا فقرتك باللغة العربية الخاصة بمسابقة توتو فوت الخاصة.",
        matchs: [
            { equipes: ["Real Madrid", "FC Barcelone"], cotes: ["2.10", "3.40", "2.90"], probabilites: ["45%", "28%", "32%"], date: "13/10/2026", heure: "20:00" },
            { equipes: ["Liverpool", "Manchester City"], cotes: ["2.45", "3.20", "2.55"], probabilites: ["38%", "29%", "36%"], date: "14/10/2026", heure: "18:30" },
            { equipes: ["Bayern Munich", "Borussia Dortmund"], cotes: ["1.65", "4.10", "4.20"], probabilites: ["58%", "23%", "23%"], date: "14/10/2026", heure: "20:00" },
            { equipes: ["PSG", "Olympique de Marseille"], cotes: ["1.75", "3.80", "4.00"], probabilites: ["55%", "25%", "24%"], date: "15/10/2026", heure: "21:00" },
            { equipes: ["Arsenal", "Chelsea"], cotes: ["1.90", "3.50", "3.60"], probabilites: ["50%", "27%", "26%"], date: "16/10/2026", heure: "17:30" },
            { equipes: ["Inter Milan", "Juventus"], cotes: ["2.05", "3.00", "3.70"], probabilites: ["46%", "31%", "25%"], date: "16/10/2026", heure: "20:45" },
            { equipes: ["Atlético Madrid", "Séville"], cotes: ["1.70", "3.60", "4.80"], probabilites: ["56%", "26%", "20%"], date: "17/10/2026", heure: "18:00" },
            { equipes: ["AC Milan", "Napoli"], cotes: ["2.50", "3.10", "2.70"], probabilites: ["36%", "29%", "34%"], date: "17/10/2026", heure: "20:45" },
            { equipes: ["Benfica", "Porto"], cotes: ["2.20", "3.20", "3.00"], probabilites: ["42%", "29%", "31%"], date: "18/10/2026", heure: "19:00" },
            { equipes: ["Ajax", "PSV Eindhoven"], cotes: ["2.80", "3.60", "2.20"], probabilites: ["32%", "25%", "41%"], date: "18/10/2026", heure: "20:00" },
            { equipes: ["Sporting CP", "SC Braga"], cotes: ["1.80", "3.50", "4.00"], probabilites: ["53%", "27%", "24%"], date: "19/10/2026", heure: "20:15" },
            { equipes: ["AS Roma", "Lazio"], cotes: ["2.30", "3.00", "3.10"], probabilites: ["40%", "31%", "30%"], date: "20/10/2026", heure: "20:45" },
            { equipes: ["Tottenham", "Manchester United"], cotes: ["2.15", "3.50", "2.90"], probabilites: ["44%", "27%", "33%"], date: "21/10/2026", heure: "19:30" },
            { equipes: ["Valence", "Villarreal"], cotes: ["2.60", "3.00", "2.70"], probabilites: ["35%", "30%", "34%"], date: "21/10/2026", heure: "21:00" }
        ]
    },

    "espagnol": {
        titre: "Totofoot Espagnol",
        type: "Concours TOTOFOOT 14 — Espagne",
        description: "Date limite de validation - 10/11/2026 | 19:00 h",
        descriptionInfos: "أضف هنا فقرتك باللغة العربية حول مباريات الدوري الإسباني المختارة في هذه المسابقة.",
        matchs: [
            { equipes: ["Real Madrid", "FC Barcelone"], cotes: ["2.10", "3.40", "2.90"], probabilites: ["45%", "28%", "32%"], date: "17/10/2026", heure: "20:00" },
            { equipes: ["Atlético Madrid", "Séville"], cotes: ["1.70", "3.60", "4.80"], probabilites: ["56%", "26%", "20%"], date: "17/10/2026", heure: "18:00" },
            { equipes: ["Valence", "Villarreal"], cotes: ["2.60", "3.00", "2.70"], probabilites: ["35%", "30%", "34%"], date: "18/10/2026", heure: "16:15" },
            { equipes: ["Real Sociedad", "Athletic Bilbao"], cotes: ["2.35", "3.10", "3.00"], probabilites: ["40%", "30%", "31%"], date: "18/10/2026", heure: "18:30" },
            { equipes: ["Real Betis", "Getafe"], cotes: ["1.95", "3.20", "4.10"], probabilites: ["49%", "29%", "24%"], date: "18/10/2026", heure: "20:00" },
            { equipes: ["Girona", "Osasuna"], cotes: ["2.00", "3.30", "3.70"], probabilites: ["47%", "29%", "26%"], date: "19/10/2026", heure: "19:00" },
            { equipes: ["Celta Vigo", "Mallorca"], cotes: ["2.15", "3.10", "3.50"], probabilites: ["43%", "30%", "27%"], date: "19/10/2026", heure: "21:00" },
            { equipes: ["Espanyol", "Alavés"], cotes: ["2.25", "3.00", "3.30"], probabilites: ["41%", "31%", "28%"], date: "20/10/2026", heure: "18:00" },
            { equipes: ["Las Palmas", "Rayo Vallecano"], cotes: ["2.45", "3.00", "2.95"], probabilites: ["38%", "31%", "32%"], date: "20/10/2026", heure: "20:00" },
            { equipes: ["Leganés", "Valladolid"], cotes: ["2.20", "3.10", "3.25"], probabilites: ["42%", "30%", "29%"], date: "21/10/2026", heure: "18:30" },
            { equipes: ["Granada", "Levante"], cotes: ["2.05", "3.25", "3.50"], probabilites: ["46%", "29%", "27%"], date: "21/10/2026", heure: "20:00" },
            { equipes: ["Málaga", "Eibar"], cotes: ["2.40", "3.00", "3.00"], probabilites: ["39%", "31%", "31%"], date: "22/10/2026", heure: "18:00" },
            { equipes: ["Deportivo", "Zaragoza"], cotes: ["2.15", "3.10", "3.40"], probabilites: ["43%", "30%", "28%"], date: "22/10/2026", heure: "20:00" },
            { equipes: ["Tenerife", "Sporting Gijón"], cotes: ["2.30", "3.00", "3.10"], probabilites: ["40%", "31%", "30%"], date: "22/10/2026", heure: "21:00" }
        ]
    },

    "mi-semaine": {
        titre: "Totofoot Mi-semaine",
        type: "Concours TOTOFOOT 12 — Mi-semaine",
        description: "Date limite de validation - 10/11/2026 | 19:00 h",
        descriptionInfos: "أضف هنا فقرتك باللغة العربية حول مباريات منتصف الأسبوع المختارة في هذه المسابقة.",
        matchs: [
            { equipes: ["Manchester City", "Inter Milan"], cotes: ["1.85", "3.50", "4.20"], probabilites: ["52%", "27%", "23%"], date: "13/10/2026", heure: "20:00" },
            { equipes: ["PSG", "Arsenal"], cotes: ["2.25", "3.30", "2.95"], probabilites: ["41%", "28%", "32%"], date: "13/10/2026", heure: "20:00" },
            { equipes: ["Bayern Munich", "Benfica"], cotes: ["1.60", "4.00", "5.00"], probabilites: ["60%", "24%", "20%"], date: "13/10/2026", heure: "20:00" },
            { equipes: ["Juventus", "Liverpool"], cotes: ["2.80", "3.20", "2.35"], probabilites: ["32%", "29%", "38%"], date: "14/10/2026", heure: "18:45" },
            { equipes: ["Ajax", "Roma"], cotes: ["2.40", "3.30", "2.75"], probabilites: ["38%", "28%", "34%"], date: "14/10/2026", heure: "18:45" },
            { equipes: ["Porto", "Dortmund"], cotes: ["2.50", "3.20", "2.60"], probabilites: ["36%", "29%", "35%"], date: "14/10/2026", heure: "20:00" },
            { equipes: ["Chelsea", "Sporting CP"], cotes: ["1.75", "3.70", "4.30"], probabilites: ["55%", "26%", "22%"], date: "14/10/2026", heure: "20:00" },
            { equipes: ["Napoli", "Tottenham"], cotes: ["2.15", "3.40", "3.10"], probabilites: ["44%", "28%", "30%"], date: "15/10/2026", heure: "18:45" },
            { equipes: ["Sevilla", "Lyon"], cotes: ["2.20", "3.10", "3.20"], probabilites: ["42%", "30%", "29%"], date: "15/10/2026", heure: "18:45" },
            { equipes: ["Feyenoord", "Atalanta"], cotes: ["2.45", "3.40", "2.60"], probabilites: ["37%", "27%", "35%"], date: "15/10/2026", heure: "20:00" },
            { equipes: ["Leverkusen", "Marseille"], cotes: ["1.90", "3.60", "3.70"], probabilites: ["50%", "26%", "26%"], date: "15/10/2026", heure: "20:00" },
            { equipes: ["Celtic", "Atlético Madrid"], cotes: ["3.10", "3.30", "2.10"], probabilites: ["29%", "27%", "45%"], date: "15/10/2026", heure: "20:00" }
        ]
    },

    "fin-semaine": {
        titre: "Totofoot Fin-semaine",
        type: "Concours TOTOFOOT 12 — Week-end",
        description: "Date limite de validation - 10/11/2026 | 19:00 h",
        descriptionInfos: "أضف هنا فقرتك باللغة العربية حول مباريات نهاية الأسبوع المختارة في هذه المسابقة.",
        matchs: [
            { equipes: ["Liverpool", "Chelsea"], cotes: ["1.95", "3.50", "3.50"], probabilites: ["49%", "27%", "27%"], date: "17/10/2026", heure: "13:30" },
            { equipes: ["Arsenal", "Manchester United"], cotes: ["1.80", "3.70", "4.10"], probabilites: ["53%", "26%", "24%"], date: "17/10/2026", heure: "16:00" },
            { equipes: ["Real Madrid", "Atlético Madrid"], cotes: ["1.95", "3.40", "3.60"], probabilites: ["49%", "28%", "27%"], date: "17/10/2026", heure: "18:30" },
            { equipes: ["FC Barcelone", "Valence"], cotes: ["1.45", "4.50", "6.50"], probabilites: ["66%", "21%", "15%"], date: "17/10/2026", heure: "21:00" },
            { equipes: ["Bayern Munich", "RB Leipzig"], cotes: ["1.70", "3.90", "4.50"], probabilites: ["56%", "25%", "22%"], date: "18/10/2026", heure: "15:30" },
            { equipes: ["Dortmund", "Leverkusen"], cotes: ["2.20", "3.50", "2.85"], probabilites: ["42%", "27%", "33%"], date: "18/10/2026", heure: "17:30" },
            { equipes: ["Inter Milan", "AC Milan"], cotes: ["2.00", "3.20", "3.60"], probabilites: ["47%", "29%", "26%"], date: "18/10/2026", heure: "18:00" },
            { equipes: ["Juventus", "Napoli"], cotes: ["2.35", "3.00", "3.10"], probabilites: ["40%", "31%", "30%"], date: "18/10/2026", heure: "20:45" },
            { equipes: ["Marseille", "Lyon"], cotes: ["2.10", "3.40", "3.20"], probabilites: ["45%", "28%", "30%"], date: "18/10/2026", heure: "20:45" },
            { equipes: ["Monaco", "Lille"], cotes: ["2.00", "3.30", "3.60"], probabilites: ["47%", "29%", "26%"], date: "19/10/2026", heure: "15:00" },
            { equipes: ["Benfica", "Sporting CP"], cotes: ["2.15", "3.20", "3.10"], probabilites: ["44%", "30%", "30%"], date: "19/10/2026", heure: "18:00" },
            { equipes: ["Ajax", "Feyenoord"], cotes: ["2.05", "3.70", "3.10"], probabilites: ["46%", "26%", "30%"], date: "19/10/2026", heure: "14:30" }
        ]
    },

    "prediction-jour": {
        titre: "Prédiction du jour",
        type: "Sélection proposée par TotoStats",
        description: "Prédictions proposée !",
        descriptionInfos: "هذه توقعات مقترحة من طرف TotoStats لأغراض تحليلية فقط. النتائج المتوقعة ليست نتائج رسمية ولا تضمن الفوز.",
        modeScores: false,
        matchs: [
            { equipes: ["PSG", "Marseille"], score: "3 - 1", date: "13/10/2026", heure: "—" },
            { equipes: ["Lyon", "Monaco"], score: "2 - 2", date: "13/10/2026", heure: "—" },
            { equipes: ["Real Madrid", "Barcelone"], score: "4 - 0", date: "13/10/2026", heure: "—" },
            { equipes: ["Manchester City", "Liverpool"], score: "1 - 1", date: "13/10/2026", heure: "—" },
            { equipes: ["Bayern Munich", "Dortmund"], score: "5 - 2", date: "13/10/2026", heure: "—" },
            { equipes: ["Juventus", "Inter Milan"], score: "0 - 3", date: "13/10/2026", heure: "—" },
            { equipes: ["Arsenal", "Chelsea"], score: "2 - 1", date: "13/10/2026", heure: "—" }
        ]
    }
};

let concoursActif = null;

function ouvrirConcours(type) {
    const programme = programmes[type];
    if (!programme) return;

    concoursActif = type;
    document.getElementById("titre-concours").textContent = programme.titre;
    document.getElementById("type-concours").textContent = programme.type;
    document.getElementById("description-concours").textContent = programme.description;
    document.getElementById("description-grille").textContent = `Vos choix pour les ${programme.matchs.length} matchs`;

    afficherMatchs();
    mettreAJourResume();
    document.getElementById("resume-concours").style.display = programme.modeScores ? "none" : "block";

    const fenetre = document.getElementById("fenetre-concours");
    fenetre.style.display = "block";
    fenetre.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-ouvert");
}

function afficherMatchs() {
    if (!concoursActif) return;
    const programme = programmes[concoursActif];
    const liste = document.getElementById("liste-matchs");
    liste.innerHTML = "";

    programme.matchs.forEach((match, index) => {
        const carte = document.createElement("div");
        carte.className = "match-carte";
        if (programme.modeScores) {
            carte.classList.add("carte-score-propose");
            carte.innerHTML = `
                <div class="equipes-score">
                    <span class="equipe-score equipe-gauche"></span>
                    <strong class="score-propose"></strong>
                    <span class="equipe-score equipe-droite"></span>
                </div>
            `;
            carte.querySelector(".equipe-gauche").textContent = match.equipes[0];
            carte.querySelector(".score-propose").textContent = match.score;
            carte.querySelector(".equipe-droite").textContent = match.equipes[1];
        } else {
            carte.innerHTML = `
                <div class="numero-match">
                    <span>Match ${index + 1}</span>
                    <span class="date-heure">${match.date} • ${match.heure}</span>
                </div>
                <div class="equipes">
                    <span></span><span class="separateur">-</span><span></span>
                </div>
                <div class="choix">
                    <button type="button" data-choix="1" aria-pressed="false">
                        <span>1</span><small>Cote ${match.cotes[0]}</small>
                        <small class="probabilite">${match.probabilites[0]}</small>
                    </button>
                    <button type="button" data-choix="X" aria-pressed="false">
                        <span>X</span><small>Cote ${match.cotes[1]}</small>
                        <small class="probabilite">${match.probabilites[1]}</small>
                    </button>
                    <button type="button" data-choix="2" aria-pressed="false">
                        <span>2</span><small>Cote ${match.cotes[2]}</small>
                        <small class="probabilite">${match.probabilites[2]}</small>
                    </button>
                </div>
            `;
            const spans = carte.querySelectorAll(".equipes span");
            spans[0].textContent = match.equipes[0];
            spans[2].textContent = match.equipes[1];
        }
        liste.appendChild(carte);
    });

    if (programme.modeScores) return;

    liste.querySelectorAll(".choix button").forEach(bouton => {
        bouton.addEventListener("click", function () {
            const selectionne = this.classList.toggle("selectionne");
            this.setAttribute("aria-pressed", String(selectionne));
            mettreAJourResume();
        });
    });
}

function fermerConcours() {
    document.getElementById("fenetre-concours").style.display = "none";
    document.getElementById("fenetre-concours").setAttribute("aria-hidden", "true");
    fermerGrille();
    fermerInfosMatchs();
    document.body.classList.remove("modal-ouvert");
    if (concoursActif && programmes[concoursActif]) {
        document.getElementById("resume-concours").style.display =
            programmes[concoursActif].modeScores ? "none" : "block";
    }
}

function mettreAJourResume() {
    if (!concoursActif) return;

    let simples = 0;
    let doubles = 0;
    let triples = 0;
    let matchsSelectionnes = 0;
    let combinaisons = 1;

    document.querySelectorAll("#liste-matchs .match-carte").forEach(match => {
        const nombreChoix = match.querySelectorAll(".choix button.selectionne").length;
        if (nombreChoix > 0) {
            matchsSelectionnes++;
            combinaisons *= nombreChoix;
        }
        if (nombreChoix === 1) simples++;
        if (nombreChoix === 2) doubles++;
        if (nombreChoix === 3) triples++;
    });

    const totalMatchs = programmes[concoursActif].matchs.length;
    document.getElementById("total-selectionnes").textContent = `${matchsSelectionnes} / ${totalMatchs}`;
    document.getElementById("total-simples").textContent = simples;
    document.getElementById("total-doubles").textContent = doubles;
    document.getElementById("total-triples").textContent = triples;
    document.getElementById("total-combinaisons").textContent = combinaisons.toLocaleString("fr-FR");
}

function reinitialiserConcours() {
    document.querySelectorAll("#liste-matchs .choix button.selectionne").forEach(bouton => {
        bouton.classList.remove("selectionne");
        bouton.setAttribute("aria-pressed", "false");
    });
    mettreAJourResume();
}

function ouvrirGrille() {
    const resultat = document.getElementById("resultat-grille");
    resultat.innerHTML = "";

    document.querySelectorAll("#liste-matchs .match-carte").forEach((match, index) => {
        const boutons = match.querySelectorAll(".choix button");
        const choix = Array.from(boutons)
            .filter(bouton => bouton.classList.contains("selectionne"))
            .map(bouton => bouton.dataset.choix)
            .join("");

        const ligne = document.createElement("div");
        ligne.className = "ligne-grille";
        const numero = document.createElement("span");
        numero.className = "numero-grille";
        numero.textContent = `Match ${index + 1}`;
        const selection = document.createElement("span");
        selection.className = "choix-grille";
        selection.textContent = choix || "—";
        ligne.append(numero, selection);
        resultat.appendChild(ligne);
    });

    const fenetre = document.getElementById("fenetre-grille");
    fenetre.style.display = "flex";
    fenetre.setAttribute("aria-hidden", "false");
}

function fermerGrille() {
    const fenetre = document.getElementById("fenetre-grille");
    fenetre.style.display = "none";
    fenetre.setAttribute("aria-hidden", "true");
}

function ouvrirInfosMatchs() {
    if (!concoursActif) return;
    const programme = programmes[concoursActif];
    const equipes = new Set();
    const dates = programme.matchs.map(match => {
        match.equipes.forEach(equipe => equipes.add(equipe));
        const morceaux = match.date.split("/");
        return morceaux.length === 3 ? `${morceaux[2]}-${morceaux[1]}-${morceaux[0]}` : match.date;
    }).sort();

    const bilan = document.getElementById("bilan-infos");
    bilan.innerHTML = `
        <p dir="rtl" style="text-align:right; line-height:2;">
            ${programme.descriptionInfos || ""}
        </p>
        <p><strong>Concours :</strong> ${programme.titre}</p>
        <p><strong>Nombre de matchs :</strong> ${programme.matchs.length}</p>
        <p><strong>Équipes distinctes :</strong> ${equipes.size}</p>
       `;

    const fenetre = document.getElementById("fenetre-infos");
    fenetre.style.display = "flex";
    fenetre.setAttribute("aria-hidden", "false");
}

function fermerInfosMatchs() {
    const fenetre = document.getElementById("fenetre-infos");
    fenetre.style.display = "none";
    fenetre.setAttribute("aria-hidden", "true");
}

/* Fermer les fenêtres secondaires en touchant leur arrière-plan */
document.getElementById("fenetre-grille").addEventListener("click", function (event) {
    if (event.target === this) fermerGrille();
});
document.getElementById("fenetre-infos").addEventListener("click", function (event) {
    if (event.target === this) fermerInfosMatchs();
});
