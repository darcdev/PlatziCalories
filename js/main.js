const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)


const $description = $("#description");
const $calories = $("#calories");
const $carbs = $("#carbs");
const $protein = $("#protein");

$description.keypress(() => {
    $description.removeClass('is-invalid');
})
$calories.keypress(() => {
    $calories.removeClass('is-invalid');
})
$carbs.keypress(() => {
    $carbs.removeClass('is-invalid');
})
$protein.keypress(() => {
    $protein.removeClass('is-invalid');
})

//Molde 
/*
 {
    description : 'Manzana',
    calories : 10,
    carbs : 10,
    protein : 10,
  }
*/
const list = [];

const validateInputs = () => {

    $description.val() ? '' : $description.addClass('is-invalid')
    $calories.val() ? '' : $calories.addClass('is-invalid')
    $carbs.val() ? '' : $carbs.addClass('is-invalid')
    $protein.val() ? '' : $protein.addClass('is-invalid')

    if ($description.val() && $calories.val() && $carbs.val() && $protein.val()) {
        add();
    }
}

const add = () => {
    const newItem = {
        description: $description.val(),
        calories: parseInt($calories.val()),
        carbs: parseInt($carbs.val()),
        protein: parseInt($protein.val())
    }

    list.push(newItem)
    console.log(list);
}