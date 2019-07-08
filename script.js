var x = +prompt('Введите первое число:');

function get_symbol(){
    var znak = prompt('Введите матиматическое действие: "+, -, *, /, %');
    if (znak == '+' || znak == '-' || znak == '*' || znak == '/' || znak == '%') {
    return znak;
    } else {
        get_symbol();
    }
}

var symbol = get_symbol();
var y = +prompt('Введите второе число:');

function doMath(k, l, m) {
    switch (l) {
        case '+':
            alert(k + m);
            break;
        case '-':
            alert(k - m);
            break;
        case '*':
            alert(k * m);
            break;
        case '/':
            alert(k / m);
            break;
        case '%':
            alert(k % m);
            break;
    }
}

doMath(x, symbol, y);