function area() {
    var l = parseInt(document.getElementById("length").value);
    var w = parseInt(document.getElementById("width").value);

    var area = l * w;
    var perimeter = 2 * (l + w);

    var answer_area = "Area is " + area + " sq. mt";
    var answer_peri = "perimeter is " + perimeter + " sq. mt";

    document.getElementById("result_area").innerHTML = answer_area;
    document.getElementById("result_peri").innerHTML = answer_peri;
}