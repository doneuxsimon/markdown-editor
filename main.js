const textEditor = document.querySelector('.text-editor');

const preview = document.querySelector('.preview');

let pattern = [{
        regex: /^\>(.*?)$/mgi,
        replace: "<blockquote>$1</blockquote>"

    }, {
        regex: /\n\+(.*)/gi,
        replace: "<li>$1</li>"

    }, {
        regex: /^(#{3})(.*)$/mgi,
        replace: "<h3>$2</h3>"
    }, {
        regex: /^(#{2})(.*)$/mgi,
        replace: "<h2>$2</h2>"
    },
    {
        regex: /^(#{1})(.*)$/mgi,
        replace: "<h1>$2</h1>"
    },
    {
        regex: /(\n)/mgi,
        replace: '<br>'
    },

    {
        regex: /(\*\*|__)(.*?)\1/gi,
        replace: '<strong>$2</strong>'
    },

    {
        regex: /(\(c\))/gi,
        replace: "©"

    },
    {
        regex: /(\(r\))/gi,
        replace: "®"

    },
    {
        regex: /(\(tm\))/gi,
        replace: "™"

    },
    {
        regex: /(\(p\))/gi,
        replace: "§"

    },
    {
        regex: /(\(\+\-\))/gi,
        replace: "±"

    },
    {
        regex: /(\*|_)(.*?)\1/mgi,
        replace: "<em>$2</em>"

    },
    {
        regex: /\~\~(.*?)\~\~/mgi,
        replace: "<del>$1</del>"

    },
    {
        regex: /(\^(.*)\^)/mgi,
        replace: "<sup>$2</sup>"

    },
    {
        regex: /(\~(.*)\~)/mgi,
        replace: "<sub>$2</sub>"

    },
    {
        regex: /(\+{2}(.*)\+{2})/mgi,
        replace: "<ins>$2</ins>"

    },
    {
        regex: /(\={2}(.*)\={2})/mgi,
        replace: "<mark>$2</mark>"

    },
]

textEditor.addEventListener('keyup', evt => {
    let { value } = evt.target;

    for (let elem of pattern) {
        value = value.replace(elem.regex,elem.replace)
    }

    preview.innerHTML = value;
})