

export let printOutput = (text, control) => {
    control.innerHTML = text;
}

export let printDateDiff = ({ years, months, days }, control) => {
    printOutput(`
    Годы: ${years}, 
    Масяцы: ${months}, 
    Дни: ${days}, 
    `,control
    )

}