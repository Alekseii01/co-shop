export function initializeQuantity() {
  const incrementQuantity = () => {
      const quantityElement = document.querySelector('.quantity h3');
      if (quantityElement) {
          let currentQuantity = parseInt(quantityElement.textContent || '0', 10);
          currentQuantity++;
          quantityElement.textContent = currentQuantity.toString();
      }
  };

  const decrementQuantity = () => {
      const quantityElement = document.querySelector('.quantity h3');
      if (quantityElement) {
          let currentQuantity = parseInt(quantityElement.textContent || '0', 10);
          if (currentQuantity > 1) {
              currentQuantity--;
              quantityElement.textContent = currentQuantity.toString();
          }
      }
  };
  
  document.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as Element;
    if (target.matches('.fa-plus')) {
      incrementQuantity();
    } else if (target.matches('.fa-minus')) {
      decrementQuantity();
    }
  });
}
