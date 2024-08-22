let defaultWidth = 2;
let defaultHeight = 55;
let DisplayValue = true;
let color = '#000000';
let fontSize = 20;
let scale = 1;
let Format = document.getElementById("format").value;
let pos = document.getElementById("position").value;
let align = document.getElementById("align").value;


let barcodeInput = document.getElementById("value").value;


function generateBarcode() {
    barcodeInput = document.getElementById("value").value;
    defaultWidth = parseInt(document.getElementById("widthSlider").value);
    defaultHeight = parseInt(document.getElementById("heightSlider").value);
    fontSize = parseInt(document.getElementById("fontSlider").value);
    JsBarcode("#barcode", barcodeInput, {
        format: Format,
        width: defaultWidth,
        height: defaultHeight,
        displayValue: DisplayValue,
        lineColor: color,
        fontSize: fontSize,
        textPosition: pos,
        textAlign: align,
        text: barcodeInput,
        margin: 10,
        marginTop: 40,
        marginBottom: 10
    });
    updateSize();
    // console.log("Barcode generated");

    document.getElementById("width").innerHTML = defaultWidth;
    document.getElementById("height").innerHTML = defaultHeight;
    document.getElementById("fontSize").innerHTML = fontSize;

    document.getElementById("barcode").style.transform = `scale(${scale})`;
    

const svg = document.getElementById("barcode");
svg.setAttribute("height", parseInt(svg.getAttribute("height")) + 30);
let text = document.createElementNS("http://www.w3.org/2000/svg", "text");
let PersonalText = document.getElementById("personalText").value;
text.setAttribute("x", "50%");
text.setAttribute("y", "30");
text.setAttribute("text-anchor", "middle");
text.setAttribute("font-family", "Arial, sans-serif");
text.setAttribute("font-size", fontSize + "px");
text.setAttribute("fill", color);
text.setAttribute("style", "z-index: 1000;");
text.classList.add("svgText");
text.textContent = PersonalText;
// console.log(text);
svg.appendChild(text);


let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

text.addEventListener("mousedown", dragStart);
svg.addEventListener("mousemove", drag);
svg.addEventListener("mouseup", dragEnd);
svg.addEventListener("mouseleave", dragEnd);

function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    isDragging = true;
}

function drag(e) {
    if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;
        xOffset = currentX;
        yOffset = currentY;
        setTranslate(currentX, currentY, text);
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}

function setTranslate(xPos, yPos, el) {
    el.setAttribute("transform", `translate(${xPos}, ${yPos})`);
}
}

function updateSize() {
let widthInput = document.getElementById("widthInput").value;
let heightInput = document.getElementById("heightInput").value;

if (widthInput != "" && heightInput != "") {
document.getElementById("barcode").setAttribute("width", widthInput + "px");
document.getElementById("barcode").setAttribute("height", heightInput + "px");
} else if (widthInput != "" && heightInput == "") {
document.getElementById("barcode").setAttribute("width", widthInput + "px");
} else if (heightInput != "" && widthInput == "") {
document.getElementById("barcode").setAttribute("height", heightInput + "px");
}
// console.log("Size updated");
// console.log(document.getElementById("barcode"))
}

function value() {
    if(document.getElementById("check").checked) {
        DisplayValue = true;
    } else {
        DisplayValue = false;
    }
    generateBarcode();
}
function dWidth() {
    if (defaultWidth > 1) {
        let widthSlider = document.getElementById("widthSlider");
        widthSlider.value = parseInt(widthSlider.value) - 1;
        widthSlider.dispatchEvent(new Event('input'));
    }
    generateBarcode();
}
function iWidth() {
    let widthSlider = document.getElementById("widthSlider");
    widthSlider.value = parseInt(widthSlider.value) + 1;
    widthSlider.dispatchEvent(new Event('input'));
    generateBarcode();
}
function dHeight() {
    if(defaultHeight > 1) {
        let heightSlider = document.getElementById("heightSlider");
        heightSlider.value = parseInt(heightSlider.value) - 1;
        heightSlider.dispatchEvent(new Event('input'));
    }
    generateBarcode();
}
function iHeight() {
    let heightSlider = document.getElementById('heightSlider');
    heightSlider.value = parseInt(heightSlider.value) + 1;
    heightSlider.dispatchEvent(new Event('input'));
    generateBarcode();
}
function updateColor() {
    let value = document.getElementById("color").value;
    color = value;
    generateBarcode();
}
function dFont() {
    if(fontSize > 1) {
        let fontSlider = document.getElementById("fontSlider");
        fontSlider.value = parseInt(fontSlider.value) - 1;
        fontSlider.dispatchEvent(new Event('input'));
    }
    generateBarcode();
}
function iFont() {
    let fontSlider = document.getElementById('fontSlider');
    fontSlider.value = parseInt(fontSlider.value) + 1;
    fontSlider.dispatchEvent(new Event('input'));
    generateBarcode();
}
function updateFormat() {
    Format = document.getElementById("format").value;
    generateBarcode();
}
function info() {
    var modal = document.getElementById('myModal');
        var modalText = document.getElementById('modalText');
        modalText.innerHTML = `
        <ul>
            <li><strong>CODE128</strong>: High-density, alphanumeric barcode. Ex: <code>1234567890AB</code></li>
<li><strong>CODE39</strong>: Alphanumeric barcode with a limited character set. Ex: <code>BOOK1234</code></li>
<li><strong>ITF-14</strong>: Used for packaging and logistics, numeric-only. Ex: <code>01234567890123</code></li>
<li><strong>EAN-13</strong>: Standard 13-digit barcode for retail products. Ex: <code>9781234567890</code></li>
<li><strong>EAN-8</strong>: Shortened 8-digit version of EAN-13. Ex: <code>12345678</code></li>
<li><strong>EAN-5</strong>: Used as an add-on to EAN-13 for additional information. Ex: <code>9781234567890-12</code></li>
<li><strong>EAN-2</strong>: Used as an add-on to EAN-13 for supplementary information. Ex: <code>9781234567890-01</code></li>
<li><strong>UPC-A</strong>: 12-digit barcode used in retail, similar to EAN-13. Ex: <code>012345678912</code></li>
<li><strong>MSI</strong>: Numeric-only barcode, used in industrial and retail environments. Ex: <code>123456789</code></li>
<li><strong>MSI10</strong>: Variant of MSI with a 10-digit length. Ex: <code>1234567890</code></li>
<li><strong>MSI11</strong>: Variant of MSI with an 11-digit length. Ex: <code>12345678901</code></li>
<li><strong>MSI1010</strong>: MSI with a 10-digit length and check digit. Ex: <code>1234567890-1</code></li>
<li><strong>MSI1110</strong>: MSI with an 11-digit length and check digit. Ex: <code>12345678901-2</code></li>
<li><strong>Pharmacode</strong>: Used in pharmaceuticals for product identification. Ex: <code>12345</code></li>
        </ul>
        `;

        modal.style.display = "block";
}
function closeModal() {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

function changeSize() {
const svg = document.getElementById("barcode");
const slider = document.getElementById("size");
scale = 1 + (slider.value / 100);
svg.style.transform = `scale(${scale})`;
}

function updatePosition() {
    pos = document.getElementById("position").value;
    generateBarcode();
}

function textAlign() {
    align = document.getElementById("align").value;
    generateBarcode();
}

function printSVG() {
var svg = document.getElementById("barcode");

var printWindow = window.open("", "_blank","width=1000,height=1000");

printWindow.document.write(svg.outerHTML);
printWindow.document.close();
printWindow.print();
}


function advance() {
    document.getElementById("advanceButton").style.display="none";
    document.getElementById("b").style.display="block";
    document.getElementById("c").style.display="block";
    const childElements = document.querySelectorAll('#simple > *');
    childElements.forEach(element => {
        element.style.margin = "0";
    });
    document.getElementById("barcodeData").style.display="block";

}
function simple() {
    document.getElementById("advanceButton").style.display="flex";
    document.getElementById("b").style.display="none";
    document.getElementById("c").style.display="none";
    const childElements = document.querySelectorAll('#simple > *');
    childElements.forEach(element => {
        element.style.margin = "0 20px";
    });
    document.getElementById("barcodeData").style.display="none";
}

document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll(".sliderInput");
    sliders.forEach(element => {
        element.addEventListener("input", () => {
            console.log(element.value);
            generateBarcode();
        });
    });
});