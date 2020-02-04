$(document).ready(function () {
    // $(".sidenav").sidenav();

    const myGallery = cloudinary.galleryWidget({ 
        container: "#my-portfolio-gallery", 
        cloudName: "integrated-information-consultants-llc", 
        displayProps: {
            mode: "expanded",
            topOffset: 70 // to account for the menu element at the top of this documentation page
        },
        mediaAssets: [{ tag: "portfolio" }]    // by default mediaType: "image"
    });

    myGallery.render();
    console.log("rendered!");
});