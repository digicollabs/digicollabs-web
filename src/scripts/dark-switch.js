/* Dark Mode Script */

var checkBox = document.getElementById('darkSwitch');
var theme = localStorage.getItem('theme');
var switchLabel = document.getElementById('darkSwitchLabel');
var imgDigicollabsLogo = document.getElementById('logoDigicollabs');

/*
Check if you've applied a theme before
If theme exist, applied a theme and applied logo
*/
if (theme == 'dark') {
    document.body.setAttribute('id', 'darkmode');
    imgDigicollabsLogo.src = './src/assets/digicollabs_logo_dark.svg';
}
checkBox.checked = theme == 'dark' ? true : false;

checkBox.addEventListener('change', function () {
    if (this.checked) {
        document.body.setAttribute('id', 'darkmode');
        localStorage.setItem('theme', 'dark');
        switchLabel.innerHTML = 'Light Mode';
        imgDigicollabsLogo.src = './src/assets/digicollabs_logo_dark.svg';
    } else {
        document.body.setAttribute('id', '');
        localStorage.removeItem('theme');
        switchLabel.innerHTML = 'Dark Mode';
        imgDigicollabsLogo.src = './src/assets/digicollabs_logo_light.svg';
    }
});