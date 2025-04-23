const seasons = {
    Default: {
        color: "#f4f4f4",
        logo: "four-seasons.gif",
        wear: "300x400.png",
        message: "Outfitter for All Seasons!",
        desc: "Browse our seasonal collections for the perfect outfit, no matter the time of year. From sunshine to snowfall, we’ve got you covered."
    },
    Spring: {
        color: "#2B7129",
        logo: "spring.gif",
        wear: "spring-wear.jpg",
        message: "Fresh looks for Spring!",
        desc: "Embrace the bloom with lightweight jackets, floral tones, and outdoor-ready essentials."
    },
    Summer: {
        color: "#EBA52B",
        logo: "summer.gif",
        wear: "summer-wear.jpg",
        message: "Stay cool this Summer!",
        desc: "Beat the heat with breathable fabrics, shorts, and sun-friendly wear for your next adventure."
    },
    Fall: {
        color: "#A81124",
        logo: "fall.gif",
        wear: "fall-wear.jpg",
        message: "Leap into our Fall Wear!",
        desc: "Layer up in cozy knits, rich tones, and transitional pieces perfect for crisp evenings."
    },
    Winter: {
        color: "#005393",
        logo: "winter.gif",
        wear: "winter-wear.jpg",
        message: "Bundle up with Winter Gear!",
        desc: "From insulated parkas to thermal essentials, stay warm and stylish all season long."
    }
};

function setSeason(season) {
    const s = seasons[season] || seasons.Default;

    $("body").css("background-color", s.color);
    $("#logo").attr("src", `images/${s.logo}`);
    $("#wear").attr("src", `images/${s.wear}`);
    $(".wrapper h3").text(s.message);
    $("#description").text(s.desc);
}

$(document).ready(() => {
    $(".seasons a").click(e => {
        e.preventDefault();
        const season = $(e.target).attr("href");
        setSeason(season);
    });

    $("#html-checker").attr("href", "https://validator.w3.org/nu/?doc=" + location.href);
    $("#css-checker").attr("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);

    // Load Default on page load
    setSeason("Default");
});
