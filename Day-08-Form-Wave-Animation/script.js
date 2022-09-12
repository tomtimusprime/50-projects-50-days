const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHtml = label.innerText
        .split('')
        .map((letter, idx) => `<span>${letter}</span>`)
        .join('');
})

console.log('Day 08 script running.')