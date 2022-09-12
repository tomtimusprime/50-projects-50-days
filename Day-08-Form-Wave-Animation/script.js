const labels = document.querySelectorAll('.form-control label');

console.log(labels);

labels.forEach(label => {
    label.innerHtml = label.innerText
    .split('');
})