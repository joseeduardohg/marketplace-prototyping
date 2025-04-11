const productContainer = document.querySelector(
  '.container__products',
) as HTMLDivElement;

const productCard = document.createElement('template');

const productCardTemplate = `
          <div class="card">
            <div class="card__header">
              <img
                class="card__image"
                src="/src/assets/images/placeholder-image.webp"
                alt="Producto 1"
              />
            </div>

            <div class="card__content">
              <h2 class="card__heading">
                Producto
              </h2>

              <div>
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="card__icon lucide lucide-heart-icon lucide-heart"
                  >
                    <path
                      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                    />
                  </svg>
                </i>
                <span class="card__price">$10.00</span>
              </div>
            </div>
          </div>
`;

productCard.innerHTML = productCardTemplate;
for (let i = 0; i < 7 * 2; i++) {
  const clone = productCard.content.cloneNode(true) as DocumentFragment;
  productContainer.appendChild(clone);
}
