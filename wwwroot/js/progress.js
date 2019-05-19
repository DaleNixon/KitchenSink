var progress = {};

progress.active = false;
progress.currentSymbol = '/';

progress.showProgress = function (targetElementName) {
    progress.active = true;
    progress.timeout(targetElementName);
    document.getElementById(targetElementName).style.display = 'inline';
}

progress.stopProgress = function (targetElementName) {
    progress.active = false;
    document.getElementById(targetElementName).innerHTML = '';
    document.getElementById(targetElementName).style.display = 'none';
}

progress.timeout = function (targetElementName) {
    setTimeout(function () {
        document.getElementById(targetElementName).innerHTML = progress.currentSymbol;
        if (progress.currentSymbol === '/') {
            progress.currentSymbol = '-';
        }
        else if (progress.currentSymbol === '-') {
            progress.currentSymbol = '\\';
        }
        else if (progress.currentSymbol === '\\') {
            progress.currentSymbol = '|';
        }
        else if (progress.currentSymbol === '|') {
            progress.currentSymbol = '/';
        }

        if (progress.active === true) {
            progress.timeout(targetElementName);
        }
        else {
            progress.currentSymbol = '/';
            clearTimeout(progress.timeout);
        }
    }, 100);
}