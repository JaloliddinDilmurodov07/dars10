let display = document.getElementById("display")
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
    button.addEventListener('click', (a) => {

        switch (a.target.innerText) {

            case 'C': display.innerText = '';
                break;
            case 'X': if (display.innerText) {
                display.innerText = display.innerText.slice(0, -1);
            }
                break;
            case '=':
                if (!display.innerText) {
                    
                    

                return;
                    
                }
                try {

                    display.style.backgroundColor = 'white'
                    display.innerText = eval(display.innerText)
                } catch {
                    display.style.backgroundColor = 'rgb(236, 66, 23)'
                }
                break;
            case ' ': display.innerText = 'vv'
            default: display.innerText += a.target.innerText;
        }
    });
});