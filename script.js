// Destination data with multiple images
const destinations = [
    {
        id: 1,
        name: "Balut Store and Factory",
        images: [
            "images/Balut.jpg",
            "images/Balut2.jpg",
            "images/Balut3.jpg"
        ],
        shortDescription: "Balut is more than just a delicacy in Pateros — it's a symbol of heritage, pride, and craftsmanship passed down through generations",
        fullDescription: "Pateros, known as the Balut Capital of the Philippines, is home to a long-standing tradition of balut-making. This popular Filipino street food, a boiled fertilized duck egg eaten from the shell, is carefully crafted through a process that involves incubating the eggs in rice husks for 17 to 21 days. Locals have perfected this art, which reflects the town's dedication to craftsmanship and family-run businesses. Visitors can explore the production process, meet the makers, and taste freshly cooked balut, experiencing a unique cultural journey filled with heritage, resilience, and community.",
        
        highlights: [
            "Authentic Balut-Making Tours, See the traditional incubation process up close",
            "Family-Owned Balut Businesses, Discover the people behind the industry.",
            "Freshly Cooked Balut, Taste balut the way its meant to be enjoyed — hot, flavorful, and local.",
            "Cultural Experience, Learn the history of balut and why it remains a proud identity of Pateros.",
            "Balut-Themed Events & Souvenirs, Don't miss special festivals and fun balut-inspired merch!"
        ],
        bestTimeToVisit: "The best time to visit Pateros is during the Balut sa Puti Festival in April, when the town celebrates its balut-making heritage with parades, competitions, and cultural performances. For a more peaceful visit, November to February offers cooler weather and fewer crowds.",
        
        location: "P. Rosales, Pateros Metro Manila"
        
    },
    {
        id: 2,
        name: "Dulong Bayan Monument",
        images: [
            "images/Dulongbayan1.jpg",
            "images/Dulongbayan2.jpg",
            "images/Dulongbayan3.jpg",
        ],
        shortDescription: "The Dulong Bayan Monument in Pateros commemorates the local heroes who perished during the Philippine Revolution of 1896, notably Guillermo Manalo and Eusebio Hermosa.",
        fullDescription: "Situated in Barangay Martinez, the Dulong Bayan Monument marks the site where Pateros residents Guillermo Manalo and Eusebio Hermosa made the ultimate sacrifice defending their community during the 1896 revolution. Their courageous stand is a significant chapter in Pateros' history, symbolizing the town's unwavering commitment to freedom. ",
        highlights: [
            "Historical Significance: The monument stands as a poignant reminder of Pateros's active participation in the 1896 revolution and the sacrifice made by its residents.",
            "Annual Commemoration: Every August 29, the site become a focal point for ceremonies celebrating local heorism, fostering community prode and historical awareness.",
            "Cultural Reflection: Visiting the monument offers insight into Pateros' rich history, providing a deeper understanding of the nation's journey toward independence."
        ],
        bestTimeToVisit: "The best time to visit the Dulong Bayan Monument is on August 29, during the annual commemoration of the local heroes, Guillermo Manalo and Eusebio Hermosa, to honor their sacrifices during the Philippine Revolution.",
        location: "M. Almeda, Martirez Pateros Metro Manila"
    },
    {
        id: 3,
        name: "Bonete Store and Factory",
        images: [
            "images/Bonete.jpg",
            "images/Bonete2.jpg",
            "images/Bonete3.jpg",
        ],
        shortDescription: "Bonete is a traditional Filipino bread from Pateros, known for its sweet, soft texture and distinctive \"little bonnet\" shape. It is a popular local delicacy often enjoyed with coffee or hot chocolate.",
        fullDescription: "Bonete, meaning \"little bonnet\" in Spanish, is a beloved bread from Pateros, Metro Manila, Philippines. This sweet, soft bread is shaped like a small cap, making it instantly recognizable. It is traditionally baked fresh and is often paired with hot beverages like coffee or chocolate, making it a perfect snack or breakfast item. Bonete holds a special place in the hearts of locals and visitors alike, reflecting the rich culinary heritage of Pateros. Despite the rise of modern baked goods, this traditional bread remains a staple in local bakeries, passed down through generations.",
        highlights: [
            "Culinary Tradition: Bonete is a unique bread with a long-standing history in Pateros, known for its sweet flavor and soft texture.",
            "Local Popularity: Its widely enjoyed by locals and visitors, often paired with coffee or chocolate.",
            "Cultural Significance: Bonete represents Pateros' culinary legacy, symbolizing the community's traditional craftsmanship in baking.",
            "Where to Try: Local bakeries in Pateros, such as those on P. Herrera Street, offer authentic bonete, often freshly baked in the afternoon."
        ],
        bestTimeToVisit: "The best time to visit Pateros for bonete is in the afternoon, typically from 2:00 PM to 5:30 PM, when local bakeries freshly bake this popular bread.",
        location: "South Tuazon, Pateros Metro Manila"
    },
    {
        id: 4,
        name: "Alfombra Slippers Store and Factory",
        images: [
            "images/Alfombra.jpg",
            "images/Alfombra1.jpg",
            "images/Alfombra2.jpg",

        ],
        shortDescription: "Alfombra slippers are handcrafted footwear from Pateros, characterized by their soft, \"carpeted\" soles made from faux suede-like material. Renowned for comfort and durability, they come in various colors and designs.",
        fullDescription: "Alfombra slippers, originating from Pateros, Metro Manila, were introduced in 1935 by Honorata Tuazon Cruz to mimic the plush carpets of affluent households using materials like abaca fiber for the soles. These handcrafted slippers, known for their soft, cushioned feel, have evolved over the decades with a variety of colors and designs, making them popular for indoor wear. More than just footwear, alfombra slippers represent the cultural heritage and craftsmanship of Pateros, with local artisans continuing the tradition despite the rise of mass-produced shoes, preserving the towns ingenuity and spirit.",
        highlights: [
            "Rich Heritage: Originating in 1935, alfombra slippers are a testament to Pateros' shoemaking legacy, reflecting the community's creativity and resourcefulness. ",
            "Handcrafted Quality: Each pair is meticulously handmade by local artisans, ensuring durability and comfort, with soles crafted from materials resembling faux suede. ",
            "Variety of Designs: Available in numerous colors and styles, from classic to contemporary, alfombra slipper cater to diverse tastes, making them suitable for all ages.",
            "Cultural Design: Beyond being footwear, these slippers embody the resilience and integrity of pateros's residents, representing a blend of tradition and adaptabil.",
            "Local Experience: Visitng Pateros offers the opporutnity to explore alfombra-making firsthand, with shops like De Leon Footwear providing insights into the crafting process and a range of designs to choose from."
        ],
        bestTimeToVisit: "Alfombra slippers is during the Christmas season in December and Linggo ng Wika (National Language Week) in August, when demand is high and local shops showcase a variety of designs.",
        location: "M. Almeda St. Pateros Metro Manila (HanaKuChiChi)"
    },
    {
        id: 5,
        name: "Museo De Pateros",
        images: [
            "images/Museo.jpg",
            "images/Museo2.jpg",
            "images/Museo3.jpg"
        ],
        shortDescription: "Museo De Pateros showcases the rich cultural heritage and history of the municipality through artifacts, photographs, and interactive displays.",
        fullDescription: "Museo De Pateros serves as a cultural treasure trove, preserving and showcasing the unique heritage of this historical municipality. The museum houses a diverse collection of artifacts, photographs, and documents that tell the story of Pateros from its early days as a fishing and duck-raising community to its present status. Visitors can explore exhibits featuring traditional industries like balut-making and alfombra production, historical events, and cultural celebrations. The museum aims to educate both locals and tourists about the rich cultural identity of Pateros and to inspire pride in its traditions and history.",
        highlights: [
            "Historical Exhibits: Comprehensive displays chronicling the evolution of Pateros through the centuries.",
            "Cultural Artifacts: Collection of tools, crafts, and items representing traditional industries and daily life.",
            "Photo Gallery: Historical photographs documenting significant events and changes in the municipality.",
            "Interactive Displays: Engaging presentations that bring Pateros' history to life for visitors of all ages.",
            "Educational Programs: Regular workshops and guided tours focusing on local heritage and crafts."
        ],
        bestTimeToVisit: "The best time to visit Museo De Pateros is during weekday mornings when there are fewer visitors, allowing for a more personal experience. Special exhibits are often organized during the town fiesta in February and National Museums Month in May.",
        location: "B. Morcilla St. Pateros Metro Manila"
    },
    {
        id: 6, 
        name: "Pateros Municipal Hall",
        images: [
            "images/Municipal.jpg",
            "images/Municapal2.jpg",
            "images/Municapal3.jpg"
        ],
        shortDescription: "Pateros Municipal Hall serves as the heart of the local government, offering essential services and a glimpse into the town's civic pride and historical roots.",
        fullDescription: "The Pateros Municipal Hall stands as a symbol of civic leadership and community service in the only municipality in Metro Manila. Located in the heart of town, this government building reflects the towns commitment to progress, good governance, and cultural preservation. It’s where residents process permits, voice concerns, and participate in civic activities. Visitors can appreciate the architecture, observe daily municipal operations, and explore nearby landmarks such as the Pateros Church and the Balut heritage sites. The hall also plays a key role in organizing local festivals, town meetings, and public services that strengthen community ties.",
        highlights: [
            "Civic Heritage Landmark, Observe the central hub of governance in Pateros.",
            "Local Government in Action, See how services and community programs are implemented.",
            "Cultural Proximity, Located near historical and cultural spots like the Pateros Church and Balut-making centers.",
            "Festive Participation, Be part of town-led celebrations and events.",
            "Community Services, Learn about local initiatives, disaster response, and public programs."
        ],
        bestTimeToVisit: "The ideal time to visit is during April for the Balut sa Puti Festival, when the Municipal Hall plays an active role in festivities. The cooler months from November to February are also perfect for exploring the area without the summer heat, allowing a relaxed tour of civic buildings and nearby cultural sites.",
        location: "M. Almeda St. Pateros Metro Manila"
    },
    {
        id: 7, 
        name: "San Roque Parish Church",
        images: [
            "images/SanRoque4.jpg",
            "images/SanRoque1.jpg",
            "images/SanRoque5.jpg"
        ],
        shortDescription: "San Roque Parish Church is a historic Catholic church in Pateros, serving as both a religious center and cultural landmark for the community since the Spanish colonial era.",
        fullDescription: "San Roque Parish Church stands as the spiritual heart of Pateros, with roots dating back to the Spanish colonial period. Named after Saint Roch (San Roque), the patron saint of Pateros, this church has been a witness to the municipality's history through centuries of transformation. The current structure combines elements of Spanish colonial architecture with modern renovations while preserving its historical significance. Beyond its religious function, the church serves as a cultural landmark where important community celebrations take place, particularly the annual feast of San Roque in August, which features colorful processions and traditional festivities that showcase the deep faith and cultural pride of Pateros residents.",
        highlights: [
            "Historical Architecture: Blend of Spanish colonial influence with Filipino adaptations, featuring a distinctive bell tower and facade.",
            "Religious Artifacts: Houses antique religious statues, paintings, and liturgical objects of historical and spiritual significance.",
            "Community Center: Functions as the heart of religious and cultural celebrations in Pateros throughout the year.",
            "San Roque Festival: Site of the elaborate annual celebration honoring the town's patron saint with processions and traditional activities.",
            "Historical Significance: Has stood witness to major historical events in Pateros and served generations of community members."
        ],
        bestTimeToVisit: "The best time to visit San Roque Parish Church is during Holy Week in April when traditional religious processions take place, or during the Feast of San Roque in August when the church and surrounding areas are decorated and lively with festivities.",
        location: "G. De Borja St. Pateros Metro Manila"
    }
];

// Current slide index for gallery
let currentSlideIndex = 0;
let currentDestinationId = null;
let slideInterval;

// Function to populate destination cards
function populateDestinations() {
    const destinationsContainer = document.querySelector('.destinations');
    
    if (!destinationsContainer) {
        console.error('Destinations container not found!');
        return;
    }
    
    destinationsContainer.innerHTML = '';
    
    destinations.forEach(destination => {
        if (!destination.shortDescription) return; // Skip incomplete entries
        
        const card = document.createElement('div');
        card.className = 'destination-card';
        
        // Use the first image from the images array for the card
        const cardImage = destination.images && destination.images.length > 0 
            ? destination.images[0] 
            : '/api/placeholder/400/300?text=No+Image';
        
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${cardImage}');"></div>
            <div class="card-content">
                <h3>${destination.name}</h3>
                <p>${destination.shortDescription}</p>
                <button class="details-button" onclick="openModal(${destination.id})">Learn More</button>
            </div>
        `;
        destinationsContainer.appendChild(card);
    });
}

// Function to create gallery slides
function createGallerySlides(destinationId) {
    const destination = destinations.find(dest => dest.id === destinationId);
    if (!destination || !destination.images || destination.images.length === 0) return;
    
    const galleryContainer = document.querySelector('.gallery-container');
    
    // Clear existing slides
    const existingSlides = galleryContainer.querySelectorAll('.gallery-slide');
    existingSlides.forEach(slide => slide.remove());
    
    // Create new slides
    destination.images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = `gallery-slide ${index === 0 ? 'active' : ''}`;
        slide.style.backgroundImage = `url('${image}')`;
        galleryContainer.insertBefore(slide, galleryContainer.querySelector('.gallery-prev'));
    });
    
    // Create gallery navigation dots
    const galleryNav = document.querySelector('.gallery-nav');
    galleryNav.innerHTML = '';
    
    destination.images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `gallery-dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => showSlide(index);
        galleryNav.appendChild(dot);
    });
    
    // Reset current slide index
    currentSlideIndex = 0;
}

// Function to show a specific slide
function showSlide(index) {
    const slides = document.querySelectorAll('.gallery-slide');
    const dots = document.querySelectorAll('.gallery-dot');
    
    if (slides.length === 0) return;
    
    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show the selected slide
    currentSlideIndex = (index + slides.length) % slides.length;
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

// Function to change slide
function changeSlide(direction) {
    const slides = document.querySelectorAll('.gallery-slide');
    if (slides.length === 0) return;
    
    showSlide(currentSlideIndex + direction);
}

// Function to open modal with destination details
function openModal(id) {
    const destination = destinations.find(dest => dest.id === id);
    if (!destination) return;
    
    currentDestinationId = id;
    
    // Create gallery slides
    createGallerySlides(id);
    
    // Populate modal content
    document.getElementById('modalTitle').textContent = destination.name;
    document.getElementById('modalDescription').textContent = destination.fullDescription;
    document.getElementById('modalLocation').textContent = destination.location;
    
    const highlightsList = document.getElementById('modalHighlights');
    highlightsList.innerHTML = '';
    
    if (destination.highlights && destination.highlights.length > 0) {
        destination.highlights.forEach(highlight => {
            const li = document.createElement('li');
            li.textContent = highlight;
            highlightsList.appendChild(li);
        });
    }
    
    document.getElementById('modalBestTime').textContent = destination.bestTimeToVisit || 'Any time of year is a good time to visit.';
    
    // Show modal
    document.getElementById('destinationModal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    
}

// Function to close modal
function closeModal() {
    document.getElementById('destinationModal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
    currentDestinationId = null;
}

// Function to scroll to destinations section
function scrollToDestinations() {
    document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
}


// Close modal if user clicks outside of modal content
window.onclick = function(event) {
    const modal = document.getElementById('destinationModal');
    if (event.target === modal) {
        closeModal();
    }
};

// Add keyboard navigation for the gallery
document.addEventListener('keydown', function(event) {
    if (currentDestinationId !== null) {
        if (event.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (event.key === 'ArrowRight') {
            changeSlide(1);
        } else if (event.key === 'Escape') {
            closeModal();
        }
    }
});

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate destinations
    populateDestinations();
    
 
        });
