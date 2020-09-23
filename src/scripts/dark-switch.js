/* Dark Mode Script */

var checkBox = document.getElementById('darkSwitch');
var theme = localStorage.getItem('theme');
var switchLabel = document.getElementById('darkSwitchLabel');
var imgDigicollabsLogo = document.getElementById('logoDigicollabs');

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