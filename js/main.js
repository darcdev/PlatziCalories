const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)


const $calories = $("#calories").val();
const $carbs = $("#carbs").val();
const $protein = $("#protein").val();
const $description = $("#description").val();