
const targetcount = {
    customer: 100,
    product: 15,
    shop: 25
};

let started = false;

function updatecount() {

    const section = document.querySelector(".container-fluid.py-4");
    
    if (!section || started) return;

    if (section.getBoundingClientRect().top < window.innerHeight) {

        started = true;

        const interval = setInterval(() => {

            let finished = true;

            Object.keys(targetcount).forEach(category => {

                const countElement = document.getElementById(category + "-count");
                const currentCount = Number(countElement.innerText);
                const target = targetcount[category];

                if (currentCount < target) {
                    countElement.innerText = currentCount + 1;
                    finished = false;
                }

            });

            if (finished) {
                clearInterval(interval);
            }

        }, 60);
    }
}

window.addEventListener("scroll", updatecount);
window.addEventListener("load", updatecount);


//cart

    let cartCount = 0;

    function addToCart(product) {
        cartCount++;

        document.getElementById("cart-count").innerText = cartCount;

        alert(product + " added to cart!");
    }



// LOGIN

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Successfully Login!");

        window.location.href = "main.html";
    });
}