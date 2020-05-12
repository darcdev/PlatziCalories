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


const attrsToString = (obj = {}) => {
    const keys = Object.keys(obj);
    const attrs = []

    for (let i = 0; i < keys.length; i++) {
        let attr = keys[i]
        attrs.push(`${attr}="${obj[attr]}"`)
    }
    const string = attrs.join(' ');
    return string;
}
const tagAttrs = obj => (content = "") =>
    `<${obj.tag} ${obj.attrs ? ' ' : ''}${attrsToString(obj.attrs) }>${content}</${obj.tag}>`

const tag = t => {
    if (typeof t == 'string') {
        return tagAttrs({ tag: t });
    } else {
        return tagAttrs(t);
    }
}

const compose = (...functions) => data =>
    functions.reduceRight((value, func) => func(value), data)

const tableRowTag = tag('tr')
const tableRow = items => compose(tableRowTag, tableCells)(items);
// const tableRow = items => tableRowTag(tableCells(items))
const tableCell = tag('td')
const tableCells = items => items.map(tableCell).join('');


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
    clean();
    updateTotals()
    renderItems()
}
const updateTotals = () => {
    let calories = 0,
        carbs = 0,
        protein = 0

    list.map(item => {
        calories += item.calories,
            carbs += item.carbs,
            protein += item.protein
    })

    $('#totalCalories').text(calories)
    $('#totalCarbs').text(carbs)
    $('#totalProtein').text(protein)
}
const clean = () => {
    $description.val('')
    $calories.val('')
    $carbs.val('')
    $protein.val('')
}

const renderItems = () => {
    $('tbody').empty()

    list.map(item => {
        $('tbody').append(tableRow([item.description, item.calories, item.carbs, item.protein]))
    })
}