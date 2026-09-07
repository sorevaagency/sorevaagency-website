document.addEventListener("DOMContentLoaded", () => {

    /* Dynamic year */
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* Request form */
    const form = document.getElementById("contactForm");

    if (!form) {
        return;
    }


    /* Preselect budget based on package link */
    const params = new URLSearchParams(window.location.search);
    const packageChoice = params.get("paket");
    const budget = document.getElementById("budget");

    if (packageChoice && budget) {

        if (packageChoice === "Essential") {
            budget.value = "ab 500 €";
        }

        if (packageChoice === "Growth") {
            budget.value = "ab 950 €";
        }

        if (packageChoice === "Premium") {
            budget.value = "bis 1.500 €";
        }
    }


    form.addEventListener("submit", (event) => {

        event.preventDefault();

        const data = new FormData(form);

        const name = data.get("name") || "";
        const email = data.get("email") || "";
        const firma = data.get("firma") || "";
        const social = data.get("social") || "";
        const budgetValue = data.get("budget") || "";
        const ziel = data.get("ziel") || "";
        const message = data.get("message") || "";


        const subject =
            `Projektanfrage von ${name}`;


        const body =
`Hallo SOREVA Agency,

ich interessiere mich für eine Zusammenarbeit.

Vor- und Nachname:
${name}

E-Mail:
${email}

Unternehmen / Brand:
${firma}

Instagram / TikTok / Website:
${social}

Budgetrahmen:
${budgetValue}

Was möchte ich erreichen?
${ziel}

Projektbeschreibung:
${message}

Viele Grüße
${name}`;


        const mailto =
            "mailto:soreva.agency@gmx.de" +
            "?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(body);


        const messageBox =
            document.getElementById("formMessage");


        if (messageBox) {

            messageBox.textContent =
                "Deine Anfrage wird jetzt in deinem E-Mail-Programm vorbereitet.";

            messageBox.classList.add("show");
        }


        window.location.href =
            mailto;

    });

});
