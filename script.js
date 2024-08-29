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
let text1 = document.createElementNS("http://www.w3.org/2000/svg", "text");
let PersonalText = document.getElementById("personalText").value;
let Price = document.getElementById("Price").value;
text.setAttribute("x", "50%");
text.setAttribute("y", "30");
text.setAttribute("text-anchor", "middle");
text.setAttribute("font-family", "Arial, sans-serif");
text.setAttribute("font-size", fontSize + "px");
text.setAttribute("fill", color);
text.setAttribute("style", "z-index: 1000;");
text.classList.add("svgText");
text.textContent = PersonalText;

text1.setAttribute("x", "80%");
text1.setAttribute("y", "92.5%");
text1.setAttribute("text1-anchor", "middle");
text1.setAttribute("font-family", "Arial, sans-serif");
text1.setAttribute("font-size", fontSize + "px");
text1.setAttribute("fill", color);
text1.setAttribute("style", "z-index: 1000;");
text1.classList.add("svgText");
text1.textContent = Price;
// console.log(text);
svg.appendChild(text);
svg.appendChild(text1);



let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

let isDragging1 = false;
let currentX1;
let currentY1;
let initialX1;
let initialY1;
let xOffset1 = 0;
let yOffset1 = 0;

text.addEventListener("mousedown", dragStart);
svg.addEventListener("mousemove", drag);
svg.addEventListener("mouseup", dragEnd);
svg.addEventListener("mouseleave", dragEnd);

text1.addEventListener("mousedown", dragStart1);
svg.addEventListener("mousemove", drag1);
svg.addEventListener("mouseup", dragEnd1);
svg.addEventListener("mouseleave", dragEnd1);


function dragStart(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    isDragging = true;
}
function dragStart1(e) {
    initialX1 = e.clientX - xOffset1;
    initialY1 = e.clientY - yOffset1;
    isDragging1 = true;
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
function drag1(e) {
    if (isDragging1) {
        e.preventDefault();
        currentX1 = e.clientX - initialX1;
        currentY1 = e.clientY - initialY1;
        xOffset1 = currentX1;
        yOffset1 = currentY1;
        setTranslate1(currentX1, currentY1, text1);
    }
}

function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    isDragging = false;
}
function dragEnd1(e) {
    initialX1 = currentX1;
    initialY1 = currentY1;
    isDragging1 = false;
}

function setTranslate(xPos, yPos, el) {
    el.setAttribute("transform", `translate(${xPos}, ${yPos})`);
}
function setTranslate1(xPos1, yPos1, el) {
    el.setAttribute("transform", `translate(${xPos1}, ${yPos1})`);
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

function updatePosition(option) {
    document.getElementById("position").value = option;
    const formattedOption = option.substring(0,1).toUpperCase() + option.substring(1).toLowerCase();
    pos = document.getElementById("position").value;
    // pos.dispatchEvent(new Event('input'));
    document.querySelectorAll('.list1 li').forEach(
        li => li.classList.remove('active')
    );
    const element = Array.from(document.querySelectorAll('.list1 li')).find(li => li.textContent.trim() === formattedOption);
    if (element){
        console.log('working.')
        element.classList.add('active');
    } else {
        console.log('not working.')
    }
    generateBarcode();
}

function textAlign(option) {
    document.getElementById('align').value = option;
    const formattedOption = option.substring(0,1).toUpperCase() + option.substring(1).toLowerCase();
    document.querySelectorAll('.list2 li').forEach(
        li => li.classList.remove('active')
    );
    const element = Array.from(document.querySelectorAll('.list2 li')).find(li => li.textContent.trim() === formattedOption)
    element.classList.add('active');
    align = document.getElementById("align").value;
    generateBarcode();
}

function printSVG() {
    var svg = document.getElementById("barcode");
    // svg.style.width="188px";
    // svg.style.height="94px";


    var width = 1000;
    var height = 676;

    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;

    var printWindow = window.open("", "_blank", "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);

    printWindow.document.write(`
        <html>
        <head>
            <title>Print Barcode</title>
            <style>
                @page {margin: 0; }
                body { margin: 0; display: flex; justify-content: center; align-items: center;}
                svg { width: 100%; height: 100%; }
            </style>
        </head>
        <body>
            ${svg.outerHTML}
        </body>
        </html>
    `);
    
    printWindow.document.close();

    // printWindow.onload = function() {
    //     printWindow.focus();
    //     printWindow.print();
    //     setTimeout(function() {
    //         printWindow.close();
    //     }, 100);
    // };
}

// function printSVG() {
//     var svg = document.getElementById("barcode");

//     // Calculate the aspect ratio of the SVG
//     var svgWidth = svg.viewBox.baseVal.width || svg.clientWidth;
//     var svgHeight = svg.viewBox.baseVal.height || svg.clientHeight;

//     // Calculate scaling factors to fit within 2x4 inches
//     var maxWidthInches = 4;
//     var maxHeightInches = 2;

//     var maxWidthPixels = maxWidthInches * 96; // 96 DPI is standard
//     var maxHeightPixels = maxHeightInches * 96;

//     var scaleX = maxWidthPixels / svgWidth;
//     var scaleY = maxHeightPixels / svgHeight;

//     var scale = Math.min(scaleX, scaleY);

//     // Apply scaling to SVG
//     svg.setAttribute("width", svgWidth * scale + "px");
//     svg.setAttribute("height", svgHeight * scale + "px");

//     // Create a new window for printing
//     var printWindow = window.open('', '', 'width=200,height=400');
    
//     // Write the SVG content into the new window with CSS for correct print size
//     printWindow.document.write(`
//         <html>
//         <head>
//             <style>
//                 @page { size: 4in 2in; margin: 0; }
//                 body { margin: 0; }
//                 svg { width: 2in; height: auto; max-height: 4in; }
//             </style>
//         </head>
//         <body>
//             ${svg.outerHTML}
//         </body>
//         </html>
//     `);
//     printWindow.document.close();
//     printWindow.onload = function() {
//         printWindow.focus();
//         printWindow.print();
//         setTimeout(function() {
//             printWindow.close();
//         }, 100);
//     };
// }




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


function download() {
    const svg = document.getElementById("barcode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], {type: "image/svg+xml;charset=utf-8"});
    const svgUrl = URL.createObjectURL(svgBlob);
    
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "barcode.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
