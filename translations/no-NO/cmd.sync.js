module.exports = {
    sync: {
        title: '**✨ Synkroniser**',
        desc: 'Koble deg til din YouTube-konto. Dette lar deg få følgende fordeler:\n> - **Roller**. Hvis dette har blitt oppsatt av en server adminstrator, vil du kunne få en egendefinert rolle som abonnent.\n\n**Kom i gang**\n> Trykk på "Link"-knappen nedenfor og følg instruksjonene.\n> Når du har fått tilgang til koden, klikker du på "Skriv inn koden"-knappen nedenfor og lim den inn. Etter du har gjort dette, så klikker du på "Send inn"-knappen.',
        submit: {
            title: 'Synkroniser',
            code: 'Autorisasjonskode',
        },
        success: {
            title: '**✨ Synkronisering vellykket**',
            desc: 'Gratulerer, nå er du tilkoblet Disping!',
        },
        failed: {
            title: '**😓 Synkroniser mislykket**',
            desc: 'Disping mislyktes i å synkronisere kontoen din. Vennlig prøv å kjøre kommandoen på nytt og angi en ny autorisajonskode.\n\n✨ **Hjelpsom tip**: Autorisasjonskoden utløper etter 15 minutter.',
            noroles:
                '**Beklager...**\nDet virker som om denne guilden ikke har noen roller du kan kreve for å bli abonnert. Sjekk tilbake senere eller spør en server administrator.',
            nologin:
                '**Beklager...**\nDu kan ikke kjøre denne kommandoen før du har logget inn. Vennligst kjør /sync account.',
        },
    },
    stats: {
        title: '**✨ Spor statistikker**',
        failed: 'Beklager, det ser ut til at **@{username}** ikke finnes. Det er en liten sjanse for at dette kan være et API-problem, vennligst sjekk stavemåten og prøv igjen senere.',
    },
    buttons: {
        link: 'Nettadresse',
        submit: 'Send inn',
    },
};
