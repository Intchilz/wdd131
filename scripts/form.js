document.addEventListener("DOMContentLoaded", function () {
    const productArray = [
      { id: 1, name: "flux Capacitor" },
      { id: 2, name: "power Laces" },
      { id: 3, name: "low voltage reactor" },
      { id: 4, name: "time circuits" },
      { id: 5, name: "warp equalizer" },
    ];
  
    const productSelect = document.getElementById("productName");
  
    productArray.forEach((product) => {
      let option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  });

      // Update the review count using localStorage
      let reviewCount = localStorage.getItem('reviewCount') || 0;
      reviewCount++;
      localStorage.setItem('reviewCount', reviewCount);
      document.getElementById('reviewCount').textContent = reviewCount;
