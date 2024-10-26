document.getElementById("menu-icon").addEventListener("click", function() {
    const navLinks = document.getElementById("nav-links");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});


document.getElementById("quadratic-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const discriminant = b * b - 4 * a * c;

    let result;
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        result = `Roots are real and different: ${root1}, ${root2}`;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        result = `Root is real and repeated: ${root}`;
    } else {
        result = 'No real roots.';
    }
    document.getElementById("quadratic-result").innerText = result;
});

document.getElementById("convert-fc").addEventListener("click", function() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById("celsius-result").innerText = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
});

document.getElementById("convert-pk").addEventListener("click", function() {
    const pounds = parseFloat(document.getElementById("pounds").value);
    const kg = pounds * 0.453592;
    document.getElementById("kg-result").innerText = `${pounds} lbs = ${kg.toFixed(2)} kg`;
});

