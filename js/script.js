// TESTING API WITH MY PHONE #
// const promise = $.ajax({
//     url:'https://phonevalidation.abstractapi.com/v1/?api_key=ddc43a2fb74b444492d3d4b0da841e8d&phone=15712252970'
// })

// promise.then(
//     (data)=>{
//         console.log(data);
//     },
//     (error) => {
//         console.log('bad request: ', error)
//     }
// )

//VARIABLES
const URL = 'https://phonevalidation.abstractapi.com/v1/?api_key=ddc43a2fb74b444492d3d4b0da841e8d&phone=1'
//Note that &phone=1

//CACHED ELEMENTS
const $int = $('#format-int')
const $loc = $('#format-loc')
const $country = $('#country')
const $state = $('#state')
const $carrier = $('#carrier')
const $type = $('#type')
const $valid = $('#valid')
const $form = $('form')
const $input =$('input[type="number"]')

//EVENT LISTENERS
$form.on('submit', handleGetData)

//FUNCTIONS

function handleGetData(event) {
    event.preventDefault()
    userInput = $input.val()
    if (userInput === '') return 
    $input.val('')
    $.ajax(URL+userInput).then((data) => {
        console.log(data)
        $int.append(' ' + data.format.international)
        $loc.append(' ' + data.format.local)
        $country.append(' ' + data.country.name)
        $state.append(' ' + data.location)
        $carrier.append(' ' + data.carrier)
        $type.append(' ' + data.type)
        $valid.append(' ' + data.valid)
    }, (error) => {
        console.log('Bad Request: ', error) 
    } )
}

handleGetData()