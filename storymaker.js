document.addEventListener("DOMContentLoaded", function () {
    /* Variables */
    const nouns1 = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
    const verbs = ["sat on", "danced with", "saw", "doesn't like", "kissed"];
    const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking"];
    const nouns2 = ["monkey", "fish", "cow", "frog", "bug"];
    const settings = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass"];

    /* Función para obtener una palabra aleatoria */
    function getRandomWord(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    /* Selección de elementos */
    const choosenNoun1 = document.getElementById("choosenNoun1");
    const choosenVerb = document.getElementById("choosenVerb");
    const choosenAdjective = document.getElementById("choosenAdjective");
    const choosenNoun2 = document.getElementById("choosenNoun2");
    const choosenSetting = document.getElementById("choosenSetting");
    const storyDisplay = document.getElementById("story");

    /* Eventos para los botones */
    document.getElementById("noun1").addEventListener("click", function () {
        choosenNoun1.textContent = getRandomWord(nouns1);
    });

    document.getElementById("verb").addEventListener("click", function () {
        choosenVerb.textContent = getRandomWord(verbs);
    });

    document.getElementById("adjective").addEventListener("click", function () {
        choosenAdjective.textContent = getRandomWord(adjectives);
    });

    document.getElementById("noun2").addEventListener("click", function () {
        choosenNoun2.textContent = getRandomWord(nouns2);
    });

    document.getElementById("setting").addEventListener("click", function () {
        choosenSetting.textContent = getRandomWord(settings);
    });

    /* Botón para generar la historia */
    document.getElementById("playback").addEventListener("click", function () {
        if ([choosenNoun1, choosenVerb, choosenAdjective, choosenNoun2, choosenSetting].some(el => el.textContent === "..." || el.textContent === "")) {
            storyDisplay.textContent = "Please select all categories to create your story!";
            return;
        }
        storyDisplay.textContent = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} ${choosenSetting.textContent}.`;
    });

    /* Botón para generar una historia aleatoria */
    document.getElementById("random").addEventListener("click", function () {
        storyDisplay.textContent = `${getRandomWord(nouns1)} ${getRandomWord(verbs)} ${getRandomWord(adjectives)} ${getRandomWord(nouns2)} ${getRandomWord(settings)}.`;
    });

    /* Botón para mostrar el ID del estudiante */
    document.getElementById("showIdButton").addEventListener("click", function () {
        document.getElementById("studentId").textContent = "Student ID: 1277165";
    });
});
