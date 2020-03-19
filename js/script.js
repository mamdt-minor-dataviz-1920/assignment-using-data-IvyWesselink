// this is your custom javascript code
let xmlns = "http://www.w3.org/2000/svg";
let svg = document.createElementNS(xmlns, "svg");
svg.setAttribute("width", 1000);
svg.setAttribute("height", 1000);
svg.setAttribute("viewbox", '0 0 1000 1000');

console.log(cities);

for(let i=0;i<cities.length;i++){
    let latitude = cities[i].latitude;
    let longitude = cities[i].longitude;
    let positieX = (~~longitude + 180)*2;
    let positieY = (90-~~latitude)*2;


    let circle = document.createElementNS(xmlns, "circle");
    circle.setAttribute("cx", positieX);
    circle.setAttribute("cy", positieY);
    circle.setAttribute("r", 2);
    circle.setAttribute("fill", "lightblue");

    svg.appendChild(circle);
}

document.body.appendChild(svg);
