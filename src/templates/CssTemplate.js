export function CssTemplateGenerator(obj) {
    return `
cron-expression-input[id=${obj.id}] .btn-custom {
    background-color: ${obj.colorMain};
    border-color: ${obj.colorSecond};
}

cron-expression-input[id=${obj.id}] .btn-custom:hover {
    background-color: ${obj.colorSecond};
    border-color: ${obj.colorMain};
}

cron-expression-input[id=${obj.id}] input[type="radio"]:checked:after {
    background-color: ${obj.colorMain};
}

cron-expression-input[id=${obj.id}] input[type="radio"] {
    border: 0.1em solid ${obj.colorSecond};
}

cron-expression-input[id=${obj.id}] .container input:checked ~ .checkmark {
    background-color: ${obj.colorMain};
}

cron-expression-input[id=${obj.id}] .container:hover input ~ .checkmark {
    background-color: ${obj.colorSecond};
}
    `;
}
