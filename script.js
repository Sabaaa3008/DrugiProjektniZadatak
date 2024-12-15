window.onload = function() {
    fixFooter();
};

window.onresize = function() {
    fixFooter();
};

function fixFooter() {
    var body = document.body;
    var html = document.documentElement;
    var footer = document.querySelector('footer');
    
    if (body.scrollHeight <= html.clientHeight) {
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
        footer.style.width = '100%';
    } else {
        footer.style.position = 'relative';
    }
}

function validateForm(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    let errorMessage = '';

    if (!name || !email || !message) {
        errorMessage += 'Sva polja su obavezna. Molimo vas da popunite sva polja.\n';
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email && !emailRegex.test(email)) {
        errorMessage += 'Molimo vas da unesete validnu email adresu.\n';
    }

    if (errorMessage) {
        alert(errorMessage); 
    } else {
        alert('Poruka je uspešno poslana!');
    }
}

document.querySelector('form').addEventListener('submit', validateForm);

document.getElementById('featuredDestinations').addEventListener('click', function() {
    const destinations = [
        {
            name: 'Pariz',
            description: 'Grad svjetlosti i romantike.',
            img: 'images/destination1.jpg'
        },
        {
            name: 'Dubai',
            description: 'Savršena kombinacija luksuza i avanture.',
            img: 'images/destination2.jpg'
        },
        {
            name: 'Maldivi',
            description: 'Tropski raj za savršeno opuštanje.',
            img: 'images/destination3.jpg'
        }
    ];
    document.getElementById('featuredDestinations').addEventListener('click', function() {
        // Simulacija podataka destinacija
        const destinations = [
            {
                "name": "Pariz",
                "description": "Grad svjetlosti i romantike.",
                "img": "images/destination1.jpg"
            },
            {
                "name": "Dubai",
                "description": "Savršena kombinacija luksuza i avanture.",
                "img": "images/destination2.jpg"
            },
            {
                "name": "Maldivi",
                "description": "Tropski raj za savršeno opuštanje.",
                "img": "images/destination3.jpg"
            }
        ];
    
        const destinationsContainer = document.getElementById('destinationsContainer');
        destinationsContainer.innerHTML = ''; 
    
        
        destinations.forEach(destination => {
            const card = `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${destination.img}" class="card-img-top" alt="${destination.name}">
                        <div class="card-body">
                            <h5 class="card-title">${destination.name}</h5>
                            <p class="card-text">${destination.description}</p>
                        </div>
                    </div>
                </div>
            `;
            destinationsContainer.innerHTML += card;
        });
    });
    

    const destinationsContainer = document.getElementById('destinationsContainer');
    destinationsContainer.innerHTML = ''; 
    destinations.forEach(destination => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${destination.img}" class="card-img-top" alt="${destination.name}">
                    <div class="card-body">
                        <h5 class="card-title">${destination.name}</h5>
                        <p class="card-text">${destination.description}</p>
                    </div>
                </div>
            </div>
        `;
        destinationsContainer.innerHTML += card; 
    });
});
