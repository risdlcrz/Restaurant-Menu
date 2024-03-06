
function updateSmallImages() {
    var mainImageSrc = document.getElementById('main-image').src;
    var smallImages = document.querySelectorAll('.small-image');
    smallImages.forEach(function(smallImage) {
        if (smallImage.src === mainImageSrc) {
            smallImage.style.filter = 'brightness(100%)';
        } else {
            smallImage.style.filter = 'brightness(50%)';
        }
    });
}

function showDishDetails(name, mainImage, description, images) {
    var imagesHTML = images.map(image => `<img class="small-image" src="${image}" onclick="document.getElementById('main-image').src='${image}'; updateSmallImages();">`).join('');

    document.body.innerHTML = `
        <div class="dish-details" style="background-color: white; border-radius: 10px; display: flex; padding: 20px; position: absolute; bottom: 0; width: 90%; left: 5%; box-shadow: 0px 0px 10px rgba(0,0,0,0.15);">
            <button onclick="location.reload();" style="position: absolute; top: 20px; right: 20px;">Home</button>
            <div style="flex: 1;">
                <img id="main-image" src="${mainImage}" alt="${name}" style="max-width: 100%;">
            </div>
            <div style="flex: 1;">
                <h2>${name}</h2>
                <div class="small-images">${imagesHTML}</div>
                <p>${description}</p>
            </div>
        </div>
    `;

    updateSmallImages();
}

var dishes = [
    { id: 'order-spaghetti', name: 'Pasta', mainImage: './ASSETS/spag plate.png', description: '\nIndulge your taste buds in a symphony of flavors at our exquisite restaurant, where pasta takes center stage in a culinary masterpiece. Savor the timeless elegance of our Spaghetti, a classic dish that embodies the art of simplicity, perfectly al dente and adorned with a rich tomato-based sauce that tantalizes the palate. For a burst of freshness and aromatic bliss, our Pesto Pasta is a vibrant green delight, boasting a harmonious blend of basil, pine nuts, Parmesan, and olive oil. Elevate your dining experience with our Carbonara, a heavenly fusion of silky egg yolk, crispy pancetta, and Parmesan, creating a luscious, creamy coating that envelops each strand of perfectly cooked pasta. Immerse yourself in the allure of Italian cuisine with our pasta offerings, where tradition meets innovation for an unforgettable dining experience.', images: ['./ASSETS/spag plate.png', './ASSETS/carb.png', './ASSETS/pesto.png'] },
    { id: 'order-pizza', name: 'Pizza', mainImage: './ASSETS/pep.png', description: '\nEmbark on a culinary journey at our restaurant, where pasta claims the spotlight. Revel in the timeless simplicity of our perfectly al dente Spaghetti with a rich tomato sauce, or relish the vibrant freshness of our Pesto Pasta. Indulge in a creamy delight with our Carbonara, showcasing silky egg yolk, crispy pancetta, and Parmesan that envelops each strand of impeccably cooked pasta. Immerse yourself in the essence of Italian cuisine through our pasta offerings, where tradition meets innovation for an unforgettable dining experience.', images: ['./ASSETS/pep.png', './ASSETS/meaty.png', './ASSETS/hawaiiann.png'] },
    { id: 'order-salad', name: 'Salad', mainImage: './ASSETS/salad.png', description: '\nEmbark on a crisp and refreshing culinary journey at our restaurant, where salads take center stage in a symphony of freshness. Our Vegetable Salad is a vibrant medley of seasonal produce, offering a burst of flavors and textures in every bite. Dive into indulgence with our Caesar Salad, featuring crisp romaine lettuce, parmesan cheese, and croutons, all coated in our signature Caesar dressing for a classic taste of elegance. For a satisfying protein-packed option, our Chicken Salad combines succulent grilled chicken with a variety of crisp vegetables, creating a wholesome and fulfilling ensemble. Join us in celebrating the harmony of ingredients and the artistry of salads that promise a delightful and wholesome dining experience.', images: ['./ASSETS/salad bowl.png', './ASSETS/caesae.png', './ASSETS/chimken.png'] }
];

dishes.forEach(dish => {
    document.getElementById(dish.id).addEventListener('click', function() {
        showDishDetails(dish.name, dish.mainImage, dish.description, dish.images);
    });
});